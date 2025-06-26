"use client";
import { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación
    console.log(isLogin ? "Iniciando sesión..." : "Registrando usuario...", formData);
  };

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Welcome Section */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-5xl font-bold text-gray-800 mb-6">
                Bienvenido a <span className="text-blue-600">VLF Sports</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                La plataforma líder para el seguimiento y análisis del pádel profesional y amateur
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white/70 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-chart-line text-blue-600 text-lg"></i>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-800">Rankings Actualizados</h3>
                  <p className="text-sm text-gray-600">Sigue el rendimiento de jugadores en tiempo real</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/70 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-trophy text-green-600 text-lg"></i>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-800">Torneos y Competiciones</h3>
                  <p className="text-sm text-gray-600">Participa en torneos oficiales y locales</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/70 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-users text-purple-600 text-lg"></i>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-800">Comunidad de Clubes</h3>
                  <p className="text-sm text-gray-600">Conecta con clubes y jugadores cerca de ti</p>
                </div>
              </div>
            </div>
          </div>

          {/* Login/Register Form */}
          <div className="w-full max-w-md mx-auto">
            <div className="card p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
                </h2>
                <p className="text-gray-600">
                  {isLogin 
                    ? "Accede a tu cuenta para continuar" 
                    : "Únete a la comunidad VLF Sports"
                  }
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                      placeholder="Tu nombre completo"
                      required={!isLogin}
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    placeholder="••••••••"
                    required
                  />
                </div>

                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirmar contraseña
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                      placeholder="••••••••"
                      required={!isLogin}
                    />
                  </div>
                )}

                {isLogin && (
                  <div className="flex justify-between items-center">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-gray-600">Recordarme</span>
                    </label>
                    <button type="button" className="text-sm text-blue-600 hover:text-blue-800">
                      ¿Olvidaste tu contraseña?
                    </button>
                  </div>
                )}

                <button type="submit" className="w-full btn-primary text-lg py-3">
                  {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
                </button>
              </form>

              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">O continúa con</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button className="btn-ghost w-full py-3">
                    <i className="fab fa-google text-red-500 mr-2"></i>
                    Google
                  </button>
                  <button className="btn-ghost w-full py-3">
                    <i className="fab fa-facebook text-blue-600 mr-2"></i>
                    Facebook
                  </button>
                </div>
              </div>

              <div className="mt-8 text-center">
                <span className="text-gray-600">
                  {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
                </span>
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                  {isLogin ? "Regístrate aquí" : "Inicia sesión"}
                </button>
              </div>
            </div>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="text-sm font-medium text-yellow-800 mb-2">🔒 Credenciales de Demo:</h4>
              <div className="text-xs text-yellow-700 space-y-1">
                <div><strong>Email:</strong> demo@vlfsports.com</div>
                <div><strong>Contraseña:</strong> demo123</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 