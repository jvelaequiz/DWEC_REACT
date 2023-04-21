import React from 'react'

const List = (props) => {
	const { jugadores } = props
	return jugadores.map((person) => {
		const { dorsal, nombre, edad, posicion,imagen } = person
		return (
			<article key={dorsal} className="person">
				<img src={imagen} alt={nombre} />
				<div>
					<h4>{nombre}</h4>
					<span>{posicion}</span>
					<p>{edad} años</p>
					
				</div>
			</article>
		)
	})
}

export default List
