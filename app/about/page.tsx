"use client"; // Importante: necesitamos interactividad en el cliente

import { useState } from "react";

interface Game {
  id: number;
  name: string;
  category: string;
}

const games: Game[] = [
  { id: 1, name: "Doom", category: "Arena shooter" },
  { id: 2, name: "Quake", category: "Arena shooter" },
  { id: 3, name: "Cyberpunk 2077", category: "FPS" },
  { id: 4, name: "Elden Ring", category: "Action RPG" },
];

export default function AboutPage() {
  // Estado para guardar el ID del juego seleccionado
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-[1300px] min-h-screen mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Juegos</h1>
        
        <div className="grid gap-3">
          {games.map((game) => (
            <button
              key={game.id}
              onClick={() => setSelectedId(game.id)}
              className={`
                flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200
                ${
                  selectedId === game.id
                    ? "border-blue-500 bg-blue-50 text-blue-700 shadow-md"
                    : "border-gray-200 bg-white hover:border-gray-300 text-gray-700"
                }
              `}
            >
              <div className="flex flex-col items-start">
                <span className="font-semibold text-lg">{game.name}</span>
                <span className={`text-sm ${selectedId === game.id ? "text-blue-500" : "text-gray-500"}`}>
                  {game.category}
                </span>
              </div>
              
              {/* Radio button visual */}
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                ${selectedId === game.id ? "border-blue-500" : "border-gray-300"}`}>
                {selectedId === game.id && <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />}
              </div>
            </button>
          ))}
        </div>

        {selectedId && (
          <p className="mt-6 text-sm text-gray-500 italic">
            ID seleccionado: {selectedId}
          </p>
        )}
      </main>
    </div>
  );
}