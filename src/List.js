import React from 'react'

const List = (props) => {
	const { jugadores } = props
	return jugadores.map((person) => {
		const { dorsal, nombre, edad, posicion,imagen,fechanacimiento } = person
		return (
			<article key={dorsal} className="person">
				
				<div >
					<table class="table-container">
						<tr>
							<th span='4' class="imagenn"> 
								<img src={imagen} alt={nombre} />
							</th>
							<td>
								<tr>
									<td span='2'><span class="nombre">{nombre}</span> <span class="dorsal">{dorsal}</span></td>			
								</tr>
								<tr>
									<th>Posicion:</th>
									<td> {posicion}</td>
								</tr>
								<tr>
									<th>Edad: </th>
									<td>{edad} años</td>
								</tr>
								<tr>
									<th>Fecha de Nacimiento:</th>
									<td>{fechanacimiento}</td>
								</tr>
							</td>
						</tr>				
					</table>			
				</div>
			</article>
		)
	})
}

export default List
