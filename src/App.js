import React, { useState } from 'react'
import data from './data'
import List from './List'
import logo from './logo-osasuna.png';
import './App.css';

function App() {
	const [jugadores, borrarJugadores] = useState(data)
	const fecha = new Date().toLocaleDateString("es-ES"); // Formato "dd/mm/aaaa"

	function limpiarLista() {
		borrarJugadores([])
	}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logotipo Osasuna" />
      </header>
      <main>
			  <section className="container">
				  <h1>Lista de Cumpleaños</h1>
				  <h3>{data.length} Cumpleaños hoy dia {fecha}</h3>
				  <List jugadores={jugadores} />
				  <button onClick={limpiarLista}>Borrar lista</button>
			  </section>
		  </main>
    </div>
  );
}

export default App;
