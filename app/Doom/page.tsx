"use client";
// 1. Importamos la página de About como si fuera un componente
import AboutPage from "../about/page";

export default function DoomPage() {
  return (
    // 2. Usamos el import y le "enviamos" el contenido de Doom
    <AboutPage title="Doom">
      <section>
        <h2 className="text-2xl font-semibold mt-4">Reseña</h2>
        <p className="mt-2 text-gray-600">
          Doom es el padre de los shooters modernos. Frenético, sangriento y revolucionario.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Mecánicas</h2>
        <p className="mt-2 text-gray-600">
          Uso de llaves de colores, búsqueda de secretos y un arsenal icónico.
        </p>
      </section>
    </AboutPage>
  );
}

/*"use client";

import { link } from 'fs';
import Link from 'next/link'; // 1. Importamos el componente Link

export default function DoomPage() {
  

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="flex max-w-[1300px] min-h-screen mx-auto bg-white shadow-lg rounded-lg overflow-hidden">

        <div className='w-full max-w-[350px] min-h-screen mx-0 bg-gray-50 border-gray-300 h-screen overflow-y-auto sticky top-0'>

          <h1 className='text-4xl font-bold text-gray-800 p-5 sticky top-0 bg-gray-50 z-10'>Juegos</h1>

         {games.map((game) => (
          <Link 
          key={game.id}
          href={`/about/${game.name}`}
          className='flex h-16 items-center justify-between p-2 border-2 transition-all duration-200 border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50 text-gray-700 hover:text-blue-600'  
          >

          <div className='flex flex-col items-start'>
            <span className='font-semibold text-lg'>{game.name}</span>
            <span className='text-sm opacity-70'>{game.category}</span>
          </div>

          </Link>))}
         
         

        </div>

        <div className='flex-1 p-10'>

         <h1>Titulo</h1>
         
        <div className='mt-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, praesentium saepe? Eius expedita sapiente itaque, quos voluptatibus saepe voluptates obcaecati debitis iusto consequuntur quaerat? Perspiciatis molestias ea ut adipisci voluptatibus.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi dolores iure rerum consequatur veniam hic dolore cumque omnis nostrum aliquam voluptatibus, rem ullam delectus, eius quisquam ipsum quo illum.</div>
       
        <h2 className='mt-10'>Reseña</h2>

        <div className='mt-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem eligendi quaerat iure accusamus, modi molestiae accusantium. Ullam, minima suscipit laudantium voluptatum tempore obcaecati commodi perspiciatis fugiat nisi voluptates repellat labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptate inventore repudiandae. Necessitatibus exercitationem voluptatibus quasi accusamus velit distinctio magni, voluptatem omnis dolore, aliquam incidunt dolor tempore. Pariatur, ipsam incidunt.</div>
        
        <h2 className='mt-10'>Mecanicas y jugabilidad</h2>

        <div className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At impedit ad harum, eos expedita molestias odit minima praesentium debitis maiores magni, tempore laboriosam iure cupiditate dolore nostrum quidem? Ab, repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. A unde quod provident ex sequi assumenda, sed ab, tenetur non, totam tempora facere quia. Placeat accusantium repellat natus incidunt maiores sequi!</div>

        </div>


      </main>

    </div>
  );
}*/