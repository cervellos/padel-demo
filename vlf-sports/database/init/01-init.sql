-- Crear extensiones necesarias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabla de usuarios
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    age INTEGER,
    gender VARCHAR(20),
    level VARCHAR(50),
    phone VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de clubes
CREATE TABLE clubs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    address TEXT,
    city VARCHAR(100),
    phone VARCHAR(50),
    email VARCHAR(255),
    website VARCHAR(255),
    rating DECIMAL(2,1) DEFAULT 0,
    courts_count INTEGER DEFAULT 0,
    has_parking BOOLEAN DEFAULT false,
    has_restaurant BOOLEAN DEFAULT false,
    has_shop BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de torneos
CREATE TABLE tournaments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    club_id UUID REFERENCES clubs(id),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    registration_deadline DATE,
    max_participants INTEGER,
    current_participants INTEGER DEFAULT 0,
    category VARCHAR(100),
    level VARCHAR(50),
    price DECIMAL(10,2),
    status VARCHAR(50) DEFAULT 'open',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de rankings individuales
CREATE TABLE player_rankings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    position INTEGER NOT NULL,
    points INTEGER DEFAULT 0,
    matches_played INTEGER DEFAULT 0,
    matches_won INTEGER DEFAULT 0,
    matches_lost INTEGER DEFAULT 0,
    ranking_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de parejas
CREATE TABLE pairs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    player1_id UUID REFERENCES users(id),
    player2_id UUID REFERENCES users(id),
    name VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(player1_id, player2_id)
);

-- Tabla de rankings de parejas
CREATE TABLE pair_rankings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    pair_id UUID REFERENCES pairs(id),
    position INTEGER NOT NULL,
    points INTEGER DEFAULT 0,
    matches_played INTEGER DEFAULT 0,
    matches_won INTEGER DEFAULT 0,
    matches_lost INTEGER DEFAULT 0,
    ranking_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de partidos
CREATE TABLE matches (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tournament_id UUID REFERENCES tournaments(id),
    player1_id UUID REFERENCES users(id),
    player2_id UUID REFERENCES users(id),
    player3_id UUID REFERENCES users(id), -- Para dobles
    player4_id UUID REFERENCES users(id), -- Para dobles
    club_id UUID REFERENCES clubs(id),
    match_date TIMESTAMP,
    score VARCHAR(100),
    winner_team INTEGER, -- 1 o 2
    status VARCHAR(50) DEFAULT 'scheduled',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar datos de ejemplo
INSERT INTO users (name, email, password_hash, age, gender, level, phone) VALUES
('Carlos Mendoza', 'carlos@email.com', '$2b$10$example', 28, 'Masculino', 'Avanzado', '+34 600 123 456'),
('Ana García', 'ana@email.com', '$2b$10$example', 25, 'Femenino', 'Intermedio', '+34 600 234 567'),
('Miguel Torres', 'miguel@email.com', '$2b$10$example', 32, 'Masculino', 'Profesional', '+34 600 345 678'),
('Laura Vega', 'laura@email.com', '$2b$10$example', 29, 'Femenino', 'Avanzado', '+34 600 456 789'),
('David Ruiz', 'david@email.com', '$2b$10$example', 26, 'Masculino', 'Intermedio', '+34 600 567 890');

INSERT INTO clubs (name, address, city, phone, rating, courts_count, has_parking, has_restaurant, has_shop) VALUES
('Club Deportivo Racket', 'Calle del Deporte 123', 'Madrid', '+34 91 123 4567', 4.5, 8, true, true, true),
('Pádel Center Valencia', 'Avda. Valencia 456', 'Valencia', '+34 96 234 5678', 4.2, 6, true, false, true),
('Sports Club Barcelona', 'Passeig Barcelona 789', 'Barcelona', '+34 93 345 6789', 4.7, 10, true, true, true);

INSERT INTO tournaments (name, description, club_id, start_date, end_date, category, level, price) VALUES
('Torneo Primavera 2024', 'Torneo de pádel para todas las categorías', 
 (SELECT id FROM clubs WHERE name = 'Club Deportivo Racket'), 
 '2024-04-15', '2024-04-17', 'Mixto', 'Todos', 45.00),
('Copa Valencia Pádel', 'Competición profesional de pádel', 
 (SELECT id FROM clubs WHERE name = 'Pádel Center Valencia'), 
 '2024-05-20', '2024-05-22', 'Masculino', 'Avanzado', 75.00);

-- Crear índices para mejorar rendimiento
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_player_rankings_position ON player_rankings(position);
CREATE INDEX idx_pair_rankings_position ON pair_rankings(position);
CREATE INDEX idx_tournaments_dates ON tournaments(start_date, end_date);
CREATE INDEX idx_matches_date ON matches(match_date); 