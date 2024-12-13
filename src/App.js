import React from 'react';
import './App.css'; 
function App() {
  return (
    <div className="app-container">
      <h1>Datos Personales</h1>
      <ul>
        <li><strong>Nombre:</strong> Adrian Caiza</li>
        <li><strong>Dirección:</strong> Av. Libertadores</li>
        <li><strong>Teléfono:</strong> 0989634464</li>
        <li><strong>Correo:</strong> adrian.caiza@epn.edu.ec</li>
      </ul>

      <h2>Estudios Realizados</h2>
      <ol>
        <li>Escuela: Basico</li>
        <li>Coleguio: Bachillerato general Unificado</li>
        <li>Universidad: Tecnologia en Desarrollo de Software</li>
      </ol>

      <h2>Herramientas Utilizadas</h2>
      <ul>
        <li>Visual Studio Code</li>
        <li>Git</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>

      <h2>Deportes Favoritos</h2>
      <div className="gallery">
        <div className="gallery-item">
          <img src="boxeo.jpg" alt="Fútbol" />
          <p>Boxeo</p>
        </div>
        <div className="gallery-item">
          <img src="atletismo.jpg" alt="Baloncesto" />
          <p>Atletismo</p>
        </div>
        <div className="gallery-item">
          <img src="natacion.jpg" alt="Natación" />
          <p>Natación</p>
        </div>
      </div>
    </div>
  );
}

export default App;
