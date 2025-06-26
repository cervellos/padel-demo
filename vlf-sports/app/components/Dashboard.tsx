"use client";

import { useState } from 'react';

// Datos de ejemplo para jugadores individuales (del script.js original)
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
    player2: "Laura Morales", 
    gender: "mixto", 
    level: "intermedio", 
    score: 4380, 
    rank: 5,
    ages: [30, 24]
  },
];

interface Filters {
  age: string;
  gender: string;
  level: string;
}

export default function Dashboard() {
  const [filters, setFilters] = useState<Filters>({
    age: '',
    gender: '',
    level: ''
  });

  // Función para obtener las iniciales de un nombre
  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  // Función para determinar el rango de edad
  const getAgeRange = (age: number) => {
    if (age >= 18 && age <= 25) return '18-25';
    if (age >= 26 && age <= 35) return '26-35';
    if (age >= 36 && age <= 45) return '36-45';
    return '46+';
  };

  // Función para filtrar jugadores individuales
  const filterIndividualPlayers = () => {
    return individualPlayers.filter(player => {
      const ageMatch = !filters.age || getAgeRange(player.age) === filters.age;
      const genderMatch = !filters.gender || player.gender === filters.gender;
      const levelMatch = !filters.level || player.level === filters.level;
      
      return ageMatch && genderMatch && levelMatch;
    });
  };

  // Función para filtrar parejas
  const filterDoublesTeams = () => {
    return doublesTeams.filter(team => {
      const ageMatch = !filters.age || 
        team.ages.some(age => getAgeRange(age) === filters.age);
      const genderMatch = !filters.gender || team.gender === filters.gender;
      const levelMatch = !filters.level || team.level === filters.level;
      
      return ageMatch && genderMatch && levelMatch;
    });
  };

  const resetFilters = () => {
    setFilters({ age: '', gender: '', level: '' });
  };

  const filteredIndividual = filterIndividualPlayers();
  const filteredDoubles = filterDoublesTeams();

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-700 mb-4">🏆 Ranking de Jugadores de Pádel</h1>
          <p className="text-lg text-gray-500">Top 10 jugadores por puntuación individual y parejas</p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="card p-6">
            <div className="flex flex-wrap gap-6 items-end">
              <div className="flex flex-col gap-2 min-w-40">
                <label className="text-sm font-medium text-gray-700">Edad:</label>
                <select
                  value={filters.age}
                  onChange={(e) => setFilters({...filters, age: e.target.value})}
                  className="p-3 border border-gray-200 rounded-lg bg-white text-gray-700 text-sm cursor-pointer transition-all duration-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">Todas las edades</option>
                  <option value="18-25">18-25 años</option>
                  <option value="26-35">26-35 años</option>
                  <option value="36-45">36-45 años</option>
                  <option value="46+">46+ años</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 min-w-40">
                <label className="text-sm font-medium text-gray-700">Género:</label>
                <select
                  value={filters.gender}
                  onChange={(e) => setFilters({...filters, gender: e.target.value})}
                  className="p-3 border border-gray-200 rounded-lg bg-white text-gray-700 text-sm cursor-pointer transition-all duration-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">Todos</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                  <option value="mixto">Mixto</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 min-w-40">
                <label className="text-sm font-medium text-gray-700">Nivel:</label>
                <select
                  value={filters.level}
                  onChange={(e) => setFilters({...filters, level: e.target.value})}
                  className="p-3 border border-gray-200 rounded-lg bg-white text-gray-700 text-sm cursor-pointer transition-all duration-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">Todos los niveles</option>
                  <option value="profesional">Profesional</option>
                  <option value="avanzado">Avanzado</option>
                  <option value="intermedio">Intermedio</option>
                  <option value="principiante">Principiante</option>
                </select>
              </div>
              <button onClick={resetFilters} className="btn-ghost">
                🔄 Limpiar
              </button>
            </div>
          </div>
        </div>

        {/* Rankings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Individual Ranking */}
          <div className="card">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-700 m-0">👤 Ranking Individual</h2>
              <div className="text-center">
                <span className="block text-2xl font-bold text-blue-400 leading-none">
                  {filteredIndividual.length}
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">Jugadores</span>
              </div>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {filteredIndividual.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  No se encontraron jugadores con los filtros seleccionados
                </div>
              ) : (
                filteredIndividual.map((player) => (
                  <div key={player.id} className="ranking-item">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-gray-600 w-8 text-center">
                          #{player.rank}
                        </span>
                        <div className="player-avatar">
                          {getInitials(player.name)}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-700 m-0">{player.name}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-sm text-gray-500">{player.age} años</span>
                          <span className="text-sm text-gray-400">•</span>
                          <span className="text-sm text-gray-500 capitalize">{player.gender}</span>
                          <span className={`status-badge status-${player.level}`}>
                            {player.level}
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <span className="text-lg font-bold text-blue-400">{player.score}</span>
                        <span className="block text-xs text-gray-500">puntos</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Doubles Ranking */}
          <div className="card">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-700 m-0">👫 Ranking Parejas</h2>
              <div className="text-center">
                <span className="block text-2xl font-bold text-blue-400 leading-none">
                  {filteredDoubles.length}
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">Parejas</span>
              </div>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {filteredDoubles.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  No se encontraron parejas con los filtros seleccionados
                </div>
              ) : (
                filteredDoubles.map((team) => (
                  <div key={team.id} className="ranking-item">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-gray-600 w-8 text-center">
                          #{team.rank}
                        </span>
                        <div className="flex -space-x-2">
                          <div className="player-avatar w-8 h-8 text-xs">
                            {getInitials(team.player1)}
                          </div>
                          <div className="player-avatar w-8 h-8 text-xs">
                            {getInitials(team.player2)}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-700 m-0">
                          {team.player1} & {team.player2}
                        </h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-sm text-gray-500">
                            {team.ages[0]} y {team.ages[1]} años
                          </span>
                          <span className="text-sm text-gray-400">•</span>
                          <span className="text-sm text-gray-500 capitalize">{team.gender}</span>
                          <span className={`status-badge status-${team.level}`}>
                            {team.level}
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <span className="text-lg font-bold text-blue-400">{team.score}</span>
                        <span className="block text-xs text-gray-500">puntos</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 text-center">
            <div className="text-3xl mb-2">📊</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">Total Jugadores</h3>
            <p className="text-2xl font-bold text-blue-400">{individualPlayers.length}</p>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl mb-2">🤝</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">Parejas Activas</h3>
            <p className="text-2xl font-bold text-blue-400">{doublesTeams.length}</p>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl mb-2">⭐</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">Nivel Promedio</h3>
            <p className="text-2xl font-bold text-blue-400">Avanzado</p>
          </div>
        </div>
      </div>
    </div>
  );
} 