"use client"; // 1. Indica que este componente tiene interactividad

import { useState } from 'react';
import Link from 'next/link';

const Footer = () => {

return (

<footer className="bg-blue-200 border-t border-blue-100 mt-auto">
  <div className="max-w-[1300px] mx-auto px-6 py-8">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
      
      {/* Sección Logo/Nombre */}
      <div className="flex flex-col text-sm font-medium text-gray-600">
        <span className="text-base font-bold text-gray-800">WikiDQuad</span>
        <a href="#" className="hover:text-blue-600 transition-colors">Inicio</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Categorías</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Contacto</a>
      </div>

      {/* Enlaces Rápidos */}
      <div className="flex flex-col text-sm font-medium text-gray-600">
        <span className="text-base font-bold text-gray-800">Redes</span>
        <a href="#" className="hover:text-blue-600 transition-colors">Inicio</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Categorías</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Contacto</a>
      </div>

      {/* Redes Sociales / Copyright */}
      <div className="flex flex-col text-sm font-medium text-gray-600">
        <span className="text-base font-bold text-gray-800">Comunidad</span>
        <a href="#" className="hover:text-blue-600 transition-colors">Inicio</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Categorías</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Contacto</a>
      </div>

      <div className="text-sm text-gray-400">
        © {new Date().getFullYear()} - Todos los derechos reservados.
      </div>
      
    </div>
  </div>
</footer>

);

};

export default Footer;