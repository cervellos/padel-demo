"use client";

import { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Header({ activeSection, onSectionChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSectionClick = (section: string) => {
    onSectionChange(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 h-18">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-full py-4">
        {/* Logo */}
        <div className="logo">
          <h1 className="text-blue-400 text-2xl font-bold m-0">🎾 VLF Sports</h1>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex flex-1 justify-center">
          <div className="flex gap-2">
            <button
              onClick={() => handleSectionClick('dashboard')}
              className={`nav-pill ${activeSection === 'dashboard' ? 'active' : ''}`}
            >
              📊 Dashboard
            </button>
            <button
              onClick={() => handleSectionClick('torneos')}
              className={`nav-pill ${activeSection === 'torneos' ? 'active' : ''}`}
            >
              🏆 Torneos
            </button>
            <button
              onClick={() => handleSectionClick('clubes')}
              className={`nav-pill ${activeSection === 'clubes' ? 'active' : ''}`}
            >
              🏢 Clubes
            </button>
            <button
              onClick={() => handleSectionClick('login')}
              className={`nav-pill ${activeSection === 'login' ? 'active' : ''}`}
            >
              👤 Login
            </button>
          </div>
        </nav>

        {/* Auth Section Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button className="btn-secondary">
            🔍
          </button>
          <button 
            onClick={() => handleSectionClick('login')}
            className="btn-primary"
          >
            Iniciar Sesión
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-xl">{isMenuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleSectionClick('dashboard')}
              className={`nav-pill text-left ${activeSection === 'dashboard' ? 'active' : ''}`}
            >
              📊 Dashboard
            </button>
            <button
              onClick={() => handleSectionClick('torneos')}
              className={`nav-pill text-left ${activeSection === 'torneos' ? 'active' : ''}`}
            >
              🏆 Torneos
            </button>
            <button
              onClick={() => handleSectionClick('clubes')}
              className={`nav-pill text-left ${activeSection === 'clubes' ? 'active' : ''}`}
            >
              🏢 Clubes
            </button>
            <button
              onClick={() => handleSectionClick('login')}
              className={`nav-pill text-left ${activeSection === 'login' ? 'active' : ''}`}
            >
              👤 Login
            </button>
            <div className="flex gap-2 mt-2">
              <button className="btn-secondary">
                🔍
              </button>
              <button 
                onClick={() => handleSectionClick('login')}
                className="btn-primary"
              >
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 