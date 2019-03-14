import React, { Component } from 'react';
import '../styles/header.style.css';
import caracol from '../img/caracol.jpg';

/*COMPONENTE DE PRUEBA QUE SE ENCARGARA DE VER LAS LIMITACIONES DE LOS COMPONENTES
1-Tiene que haber un div/section/header/aside/footer para colocar mas de un elemento (h1/h2/ul/ol ...etc).
2-Declarar clases en un componente para crear stilos se hacen con ' className="" '.
3-Se tiene que importar a cada componente la hoja de estilos correspondiente.
*/
class HeaderComponent extends Component{
	render(){
		return(
			<header className="index-header">
				<img src={caracol} alt={'caracol'}/>
				<h1>Este es mi primer test con React.</h1>
				<nav>
					<ul>
						<li><a href="http://google.com">Elemento index 1</a></li>
						<li><a href="http://google.com">Elemento index 2</a></li>
						<li><a href="http://google.com">Elemento index 3</a></li>
					</ul>
				</nav>
			</header>
		); //Fin return
	}//Fin render()
}//Fin class

export default HeaderComponent;