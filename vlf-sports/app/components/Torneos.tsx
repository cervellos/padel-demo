"use client";

export default function Torneos() {
  const torneos = [
    {
      id: 1,
      name: "Campeonato Nacional de Pádel 2024",
      date: "15-20 Marzo 2024",
      location: "Madrid, España",
      participants: 128,
      prize: "€50,000",
      status: "Inscripciones Abiertas",
      type: "Profesional"
    },
    {
      id: 2,
      name: "Copa VLF Sports Amateur",
      date: "5-7 Abril 2024",
      location: "Barcelona, España",
      participants: 64,
      prize: "€10,000",
      status: "Próximamente",
      type: "Amateur"
    },
    {
      id: 3,
      name: "Master Series Valencia",
      date: "22-25 Abril 2024",
      location: "Valencia, España",
      participants: 96,
      prize: "€30,000",
      status: "En Progreso",
      type: "Profesional"
    },
    {
      id: 4,
      name: "Torneo Juvenil Nacional",
      date: "10-12 Mayo 2024",
      location: "Sevilla, España",
      participants: 48,
      prize: "€5,000",
      status: "Inscripciones Abiertas",
      type: "Juvenil"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Inscripciones Abiertas": return "status-profesional";
      case "En Progreso": return "status-avanzado";
      case "Próximamente": return "status-intermedio";
      default: return "status-principiante";
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-700 mb-4">Torneos de Pádel</h1>
          <p className="text-lg text-gray-500">Descubre y participa en los mejores torneos de pádel</p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="card p-6">
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex flex-col gap-2 min-w-40">
                <label className="text-sm font-medium text-gray-700">Categoría:</label>
                <select className="p-3 border border-gray-200 rounded-lg bg-white text-gray-700 text-sm cursor-pointer transition-all duration-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100">
                  <option value="">Todas las categorías</option>
                  <option value="profesional">Profesional</option>
                  <option value="amateur">Amateur</option>
                  <option value="juvenil">Juvenil</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 min-w-40">
                <label className="text-sm font-medium text-gray-700">Estado:</label>
                <select className="p-3 border border-gray-200 rounded-lg bg-white text-gray-700 text-sm cursor-pointer transition-all duration-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100">
                  <option value="">Todos los estados</option>
                  <option value="abierto">Inscripciones Abiertas</option>
                  <option value="progreso">En Progreso</option>
                  <option value="proximo">Próximamente</option>
                </select>
              </div>
              <button className="btn-primary">
                <i className="fas fa-plus"></i>
                Crear Torneo
              </button>
            </div>
          </div>
        </div>

        {/* Torneos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {torneos.map((torneo) => (
            <div key={torneo.id} className="card hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-700 leading-tight">
                    {torneo.name}
                  </h3>
                  <span className={`status-badge ${getStatusColor(torneo.status)}`}>
                    {torneo.type}
                  </span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <i className="fas fa-calendar text-blue-400 w-4"></i>
                    <span>{torneo.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <i className="fas fa-map-marker-alt text-blue-400 w-4"></i>
                    <span>{torneo.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <i className="fas fa-users text-blue-400 w-4"></i>
                    <span>{torneo.participants} participantes</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <i className="fas fa-trophy text-blue-400 w-4"></i>
                    <span>Premio: {torneo.prize}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className={`status-badge ${getStatusColor(torneo.status)}`}>
                    {torneo.status}
                  </span>
                  <button className="btn-primary text-sm px-4 py-2">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="card mb-8">
          <div className="p-12 text-center">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              ¿Organizas un torneo?
            </h3>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              Utiliza nuestra plataforma para gestionar inscripciones, brackets y resultados de tu torneo de pádel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                <i className="fas fa-plus-circle"></i>
                Crear Torneo
              </button>
              <button className="btn-ghost text-lg px-8 py-4">
                <i className="fas fa-info-circle"></i>
                Más Información
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 