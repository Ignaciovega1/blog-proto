"use client"; // 1. Indica que este componente tiene interactividad

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  // 2. Estado para abrir/cerrar el menú
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-white-300 to-gray-400 z-50 shadow-lg backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              WikiDQuad
            </Link>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              Servicios
            </Link>
            <Link href="/api/hello" className="text-gray-600 hover:text-blue-600 transition-colors">
              Proyectos
            </Link>
            <Link href="/contacto" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Botón de Acción */}
          <div className="hidden md:flex items-center">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all">
              Empezar
            </button>
          </div>

          {/* Botón Menú Móvil (Hamburguesa) */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;