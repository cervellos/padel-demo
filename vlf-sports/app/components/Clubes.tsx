"use client";

export default function Clubes() {
  const clubes = [
    {
      id: 1,
      name: "Club de Pádel Madrid Premium",
      location: "Madrid, España",
      courts: 12,
      rating: 4.8,
      members: 850,
      facilities: ["Vestuarios", "Cafetería", "Tienda", "Parking"],
      type: "Premium",
      image: "🏟️"
    },
    {
      id: 2,
      name: "Barcelona Padel Center",
      location: "Barcelona, España",
      courts: 8,
      rating: 4.6,
      members: 620,
      facilities: ["Vestuarios", "Cafetería", "Parking"],
      type: "Estándar",
      image: "🎾"
    },
    {
      id: 3,
      name: "Valencia Sports Complex",
      location: "Valencia, España",
      courts: 16,
      rating: 4.9,
      members: 1200,
      facilities: ["Vestuarios", "Cafetería", "Tienda", "Parking", "Gimnasio", "Spa"],
      type: "Premium",
      image: "🏆"
    },
    {
      id: 4,
      name: "Club Sevilla Pádel",
      location: "Sevilla, España",
      courts: 6,
      rating: 4.4,
      members: 480,
      facilities: ["Vestuarios", "Cafetería"],
      type: "Básico",
      image: "⚡"
    },
    {
      id: 5,
      name: "Bilbao Padel Academy",
      location: "Bilbao, España",
      courts: 10,
      rating: 4.7,
      members: 720,
      facilities: ["Vestuarios", "Cafetería", "Tienda", "Parking", "Academia"],
      type: "Estándar",
      image: "🎯"
    },
    {
      id: 6,
      name: "Málaga Beach Padel",
      location: "Málaga, España",
      courts: 14,
      rating: 4.8,
      members: 950,
      facilities: ["Vestuarios", "Cafetería", "Tienda", "Parking", "Terraza"],
      type: "Premium",
      image: "🌊"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Premium": return "status-profesional";
      case "Estándar": return "status-avanzado";
      case "Básico": return "status-intermedio";
      default: return "status-principiante";
    }
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star text-yellow-400"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt text-yellow-400"></i>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star text-gray-300"></i>);
    }

    return stars;
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-700 mb-4">Clubes de Pádel</h1>
          <p className="text-lg text-gray-500">Encuentra el mejor club para jugar y entrenar</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="card p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative">
                  <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input 
                    type="text" 
                    placeholder="Buscar clubes por nombre o ubicación..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-700 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <select className="p-3 border border-gray-200 rounded-lg bg-white text-gray-700 text-sm cursor-pointer transition-all duration-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100">
                  <option value="">Todos los tipos</option>
                  <option value="premium">Premium</option>
                  <option value="estandar">Estándar</option>
                  <option value="basico">Básico</option>
                </select>
                <select className="p-3 border border-gray-200 rounded-lg bg-white text-gray-700 text-sm cursor-pointer transition-all duration-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100">
                  <option value="">Ordenar por</option>
                  <option value="rating">Valoración</option>
                  <option value="members">Miembros</option>
                  <option value="courts">Pistas</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Clubes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {clubes.map((club) => (
            <div key={club.id} className="card hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Club Header */}
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-3xl">{club.image}</div>
                  <span className={`status-badge ${getTypeColor(club.type)} bg-white/20 text-white border-white/30`}>
                    {club.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{club.name}</h3>
                <div className="flex items-center gap-2 text-blue-100">
                  <i className="fas fa-map-marker-alt text-sm"></i>
                  <span className="text-sm">{club.location}</span>
                </div>
              </div>

              {/* Club Details */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {renderStars(club.rating)}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{club.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">{club.members} miembros</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{club.courts}</div>
                    <div className="text-xs text-gray-600">Pistas</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{club.facilities.length}</div>
                    <div className="text-xs text-gray-600">Servicios</div>
                  </div>
                </div>

                {/* Facilities */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Servicios disponibles:</h4>
                  <div className="flex flex-wrap gap-2">
                    {club.facilities.map((facility, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 btn-primary text-sm py-2">
                    Ver Detalles
                  </button>
                  <button className="btn-ghost text-sm px-4 py-2">
                    <i className="fas fa-heart"></i>
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
              ¿Tienes un club de pádel?
            </h3>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              Únete a nuestra plataforma y conecta con miles de jugadores en tu área
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                <i className="fas fa-plus-circle"></i>
                Registrar Club
              </button>
              <button className="btn-ghost text-lg px-8 py-4">
                <i className="fas fa-phone"></i>
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 