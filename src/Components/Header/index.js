import React from "react";
import * as S from './styles';


import logo from '../../assets/LOGO_2021 WHITE.png'


function Header({acao}) {
  
  return( 
	  
	<S.Container >
		<S.LeftSide className={acao ? 'ativaCor' : ''}>
			<a href="#">Home</a>
			<a href="#portifolio">Portifolio</a>
			<a href="#sobre">Sobre</a>
		</S.LeftSide>
		<S.CenterSide className={acao ? 'ativaCor' : ''}>
			<img id="myImg" src={logo} alt="logo" />
		</S.CenterSide>
		<S.RightSide className={acao ? 'ativaCor' : ''}>
			<a href="#cursosEventos">Cursos & Eventos</a>
			<a href="#meusServicos">Meus Serviços</a>
			<a href="#">Contato</a>
		</S.RightSide>
	</S.Container>
  )
}

export default Header;