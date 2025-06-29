import React from 'react';
import bg from '../assets/orion-theme.png';

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-black bg-opacity-60 backdrop-blur-sm min-h-screen px-6 py-12 flex flex-col items-center justify-center text-center space-y-16">
        <div>
          <h1 className="text-5xl font-extrabold tracking-wide text-nebula drop-shadow-lg">
            AstroOrion
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
            Exploring the cosmos through deep space imaging and artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full px-4 text-left">
          <div>
            <h2 className="text-xl font-bold mb-2">🌌 Orion Nebula</h2>
            <p className="text-gray-300">
              A massive stellar nursery approximately 1,344 light-years away, the Orion Nebula
              is a hub of new star formation and glowing gas clouds.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">🌀 North America Nebula</h2>
            <p className="text-gray-300">
              Shaped like the continent, this emission nebula lies in Cygnus and shines due
              to nearby young stars ionizing the gas.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">🔥 California Nebula</h2>
            <p className="text-gray-300">
              Resembling the west coast of the USA, this nebula glows in hydrogen-alpha and
              is a favorite narrowband target for astrophotographers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">🌌 Milky Way Core</h2>
            <p className="text-gray-300">
              The galactic center is rich in dust lanes, star clusters, and cosmic energy —
              best captured during summer nights under dark skies.
            </p>
          </div>
        </div>

        <footer className="text-sm text-gray-400 pt-12">
          Captured by Anup · AstroOrion © {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}
