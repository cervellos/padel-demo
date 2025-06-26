// Datos de ejemplo para jugadores individuales
const individualPlayers = [
    { id: 1, name: "Carlos Mendoza", age: 28, gender: "masculino", level: "profesional", score: 2450, rank: 1 },
    { id: 2, name: "Ana García", age: 25, gender: "femenino", level: "profesional", score: 2380, rank: 2 },
    { id: 3, name: "Miguel Rodríguez", age: 32, gender: "masculino", level: "avanzado", score: 2350, rank: 3 },
    { id: 4, name: "Sofia López", age: 29, gender: "femenino", level: "profesional", score: 2320, rank: 4 },
    { id: 5, name: "Diego Fernández", age: 26, gender: "masculino", level: "avanzado", score: 2290, rank: 5 },
    { id: 6, name: "Carmen Jiménez", age: 31, gender: "femenino", level: "avanzado", score: 2260, rank: 6 },
    { id: 7, name: "Pablo Martín", age: 34, gender: "masculino", level: "intermedio", score: 2240, rank: 7 },
    { id: 8, name: "Elena Ruiz", age: 27, gender: "femenino", level: "avanzado", score: 2220, rank: 8 },
    { id: 9, name: "Javier Santos", age: 30, gender: "masculino", level: "intermedio", score: 2200, rank: 9 },
    { id: 10, name: "Laura Morales", age: 24, gender: "femenino", level: "intermedio", score: 2180, rank: 10 },
    { id: 11, name: "Antonio Vega", age: 35, gender: "masculino", level: "intermedio", score: 2160, rank: 11 },
    { id: 12, name: "María Torres", age: 28, gender: "femenino", level: "avanzado", score: 2140, rank: 12 },
    { id: 13, name: "Roberto Silva", age: 33, gender: "masculino", level: "principiante", score: 2120, rank: 13 },
    { id: 14, name: "Isabel Herrera", age: 26, gender: "femenino", level: "intermedio", score: 2100, rank: 14 },
    { id: 15, name: "Fernando Gómez", age: 29, gender: "masculino", level: "principiante", score: 2080, rank: 15 },
    { id: 16, name: "Cristina Díaz", age: 31, gender: "femenino", level: "principiante", score: 2060, rank: 16 },
    { id: 17, name: "Alejandro Cruz", age: 27, gender: "masculino", level: "intermedio", score: 2040, rank: 17 },
    { id: 18, name: "Patricia Ramos", age: 30, gender: "femenino", level: "principiante", score: 2020, rank: 18 },
    { id: 19, name: "Sergio Ortega", age: 32, gender: "masculino", level: "principiante", score: 2000, rank: 19 },
    { id: 20, name: "Raquel Castillo", age: 25, gender: "femenino", level: "intermedio", score: 1980, rank: 20 }
];

// Datos de ejemplo para parejas
const doublesTeams = [
    { 
        id: 1, 
        player1: "Carlos Mendoza", 
        player2: "Miguel Rodríguez", 
        gender: "masculino", 
        level: "profesional", 
        score: 4800, 
        rank: 1,
        ages: [28, 32]
    },
    { 
        id: 2, 
        player1: "Ana García", 
        player2: "Sofia López", 
        gender: "femenino", 
        level: "profesional", 
        score: 4700, 
        rank: 2,
        ages: [25, 29]
    },
    { 
        id: 3, 
        player1: "Diego Fernández", 
        player2: "Pablo Martín", 
        gender: "masculino", 
        level: "avanzado", 
        score: 4530, 
        rank: 3,
        ages: [26, 34]
    },
    { 
        id: 4, 
        player1: "Carmen Jiménez", 
        player2: "Elena Ruiz", 
        gender: "femenino", 
        level: "avanzado", 
        score: 4480, 
        rank: 4,
        ages: [31, 27]
    },
    { 
        id: 5, 
        player1: "Javier Santos", 
        player2: "Antonio Vega", 
        gender: "masculino", 
        level: "intermedio", 
        score: 4360, 
        rank: 5,
        ages: [30, 35]
    },
    { 
        id: 6, 
        player1: "Laura Morales", 
        player2: "María Torres", 
        gender: "femenino", 
        level: "intermedio", 
        score: 4320, 
        rank: 6,
        ages: [24, 28]
    },
    { 
        id: 7, 
        player1: "Roberto Silva", 
        player2: "Fernando Gómez", 
        gender: "masculino", 
        level: "principiante", 
        score: 4200, 
        rank: 7,
        ages: [33, 29]
    },
    { 
        id: 8, 
        player1: "Isabel Herrera", 
        player2: "Cristina Díaz", 
        gender: "femenino", 
        level: "intermedio", 
        score: 4160, 
        rank: 8,
        ages: [26, 31]
    },
    { 
        id: 9, 
        player1: "Alejandro Cruz", 
        player2: "Sergio Ortega", 
        gender: "masculino", 
        level: "intermedio", 
        score: 4040, 
        rank: 9,
        ages: [27, 32]
    },
    { 
        id: 10, 
        player1: "Patricia Ramos", 
        player2: "Raquel Castillo", 
        gender: "femenino", 
        level: "principiante", 
        score: 4000, 
        rank: 10,
        ages: [30, 25]
    }
];

// Variables globales para filtros
let currentFilters = {
    age: '',
    gender: '',
    level: ''
};

// Función para obtener las iniciales de un nombre
function getInitials(name) {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
}

// Función para determinar el rango de edad
function getAgeRange(age) {
    if (age >= 18 && age <= 25) return '18-25';
    if (age >= 26 && age <= 35) return '26-35';
    if (age >= 36 && age <= 45) return '36-45';
    return '46+';
}

// Función para filtrar jugadores individuales
function filterIndividualPlayers() {
    return individualPlayers.filter(player => {
        const ageMatch = !currentFilters.age || getAgeRange(player.age) === currentFilters.age;
        const genderMatch = !currentFilters.gender || player.gender === currentFilters.gender;
        const levelMatch = !currentFilters.level || player.level === currentFilters.level;
        
        return ageMatch && genderMatch && levelMatch;
    });
}

// Función para filtrar parejas
function filterDoublesTeams() {
    return doublesTeams.filter(team => {
        const ageMatch = !currentFilters.age || 
            team.ages.some(age => getAgeRange(age) === currentFilters.age);
        const genderMatch = !currentFilters.gender || team.gender === currentFilters.gender;
        const levelMatch = !currentFilters.level || team.level === currentFilters.level;
        
        return ageMatch && genderMatch && levelMatch;
    });
}

// Función para renderizar jugadores individuales
function renderIndividualPlayers() {
    const container = document.getElementById('individualRanking');
    const filteredPlayers = filterIndividualPlayers();
    
    if (filteredPlayers.length === 0) {
        container.innerHTML = '<div class="no-results">No se encontraron jugadores con los filtros seleccionados</div>';
        return;
    }

    container.innerHTML = filteredPlayers.map(player => `
        <div class="ranking-item">
            <div class="rank-number">${player.rank}</div>
            <div class="player-avatar">${getInitials(player.name)}</div>
            <div class="player-info">
                <div class="player-name">${player.name}</div>
                <div class="player-details">
                    <span>${player.age} años</span>
                    <span class="status-badge status-${player.level}">${player.level}</span>
                </div>
            </div>
            <div class="player-score">
                <span class="score-value">${player.score}</span>
                <span class="score-label">Puntos</span>
            </div>
        </div>
    `).join('');
}

// Función para renderizar parejas
function renderDoublesTeams() {
    const container = document.getElementById('doublesRanking');
    const filteredTeams = filterDoublesTeams();
    
    if (filteredTeams.length === 0) {
        container.innerHTML = '<div class="no-results">No se encontraron parejas con los filtros seleccionados</div>';
        return;
    }

    container.innerHTML = filteredTeams.map(team => `
        <div class="doubles-item">
            <div class="rank-number">${team.rank}</div>
            <div class="pair-avatars">
                <div class="pair-avatar">${getInitials(team.player1)}</div>
                <div class="pair-avatar">${getInitials(team.player2)}</div>
            </div>
            <div class="doubles-players">
                <div class="pair-names">${team.player1} & ${team.player2}</div>
                <div class="player-details">
                    <span>${team.ages.join(', ')} años</span>
                    <span class="status-badge status-${team.level}">${team.level}</span>
                </div>
            </div>
            <div class="player-score">
                <span class="score-value">${team.score}</span>
                <span class="score-label">Puntos</span>
            </div>
        </div>
    `).join('');
}

// Función para aplicar filtros
function applyFilters() {
    const ageFilter = document.getElementById('ageFilter').value;
    const genderFilter = document.getElementById('genderFilter').value;
    const levelFilter = document.getElementById('levelFilter').value;
    
    currentFilters = {
        age: ageFilter,
        gender: genderFilter,
        level: levelFilter
    };
    
    renderIndividualPlayers();
    renderDoublesTeams();
    
    // Actualizar contadores
    updateCounters();
}

// Función para actualizar contadores
function updateCounters() {
    const filteredIndividual = filterIndividualPlayers();
    const filteredDoubles = filterDoublesTeams();
    
    const individualCounter = document.querySelector('.ranking-card:first-child .metric-number');
    const doublesCounter = document.querySelector('.ranking-card:last-child .metric-number');
    
    if (individualCounter) individualCounter.textContent = filteredIndividual.length;
    if (doublesCounter) doublesCounter.textContent = filteredDoubles.length;
}

// Función para resetear filtros
function resetFilters() {
    document.getElementById('ageFilter').value = '';
    document.getElementById('genderFilter').value = '';
    document.getElementById('levelFilter').value = '';
    
    currentFilters = {
        age: '',
        gender: '',
        level: ''
    };
    
    renderIndividualPlayers();
    renderDoublesTeams();
    updateCounters();
}

// Función para manejar el modal de login
function showLoginModal() {
    alert('Funcionalidad de login en desarrollo. ¡Próximamente disponible!');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar datos iniciales
    renderIndividualPlayers();
    renderDoublesTeams();
    
    // Agregar event listeners a los filtros
    document.getElementById('ageFilter').addEventListener('change', applyFilters);
    document.getElementById('genderFilter').addEventListener('change', applyFilters);
    document.getElementById('levelFilter').addEventListener('change', applyFilters);
    
    // Event listeners para botones de login
    const loginButtons = document.querySelectorAll('.login-btn, .login-prompt-card .btn-primary');
    loginButtons.forEach(button => {
        button.addEventListener('click', showLoginModal);
    });
    
    // Smooth scroll para navegación
    const navLinks = document.querySelectorAll('.nav-pill');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover clase active de todos los links
            navLinks.forEach(l => l.classList.remove('active'));
            // Agregar clase active al link clickeado
            this.classList.add('active');
        });
    });
    
    // Animación de hover para las tarjetas de ranking
    const rankingItems = document.querySelectorAll('.ranking-item, .doubles-item');
    rankingItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Función para simular actualizaciones en tiempo real
function simulateRealTimeUpdates() {
    setInterval(() => {
        // Simular pequeños cambios en las puntuaciones
        individualPlayers.forEach(player => {
            const change = Math.floor(Math.random() * 10) - 5; // -5 a +4
            player.score = Math.max(0, player.score + change);
        });
        
        doublesTeams.forEach(team => {
            const change = Math.floor(Math.random() * 20) - 10; // -10 a +9
            team.score = Math.max(0, team.score + change);
        });
        
        // Re-renderizar solo si no hay filtros activos para evitar confusión
        if (!currentFilters.age && !currentFilters.gender && !currentFilters.level) {
            renderIndividualPlayers();
            renderDoublesTeams();
        }
    }, 30000); // Actualizar cada 30 segundos
}

// Iniciar simulación de actualizaciones (opcional)
// simulateRealTimeUpdates();

// Función para mostrar información adicional al hacer click en un jugador
function showPlayerDetails(playerId, isDoubles = false) {
    const player = isDoubles ? 
        doublesTeams.find(t => t.id === playerId) : 
        individualPlayers.find(p => p.id === playerId);
        
    if (player) {
        const message = isDoubles ? 
            `Pareja: ${player.player1} & ${player.player2}\nPuntuación: ${player.score}\nNivel: ${player.level}` :
            `Jugador: ${player.name}\nEdad: ${player.age} años\nPuntuación: ${player.score}\nNivel: ${player.level}`;
            
        alert(message);
    }
}

// Exportar funciones para uso global
window.resetFilters = resetFilters;
window.showPlayerDetails = showPlayerDetails; 