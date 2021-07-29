import React from "react";
import * as S from './styles';


import logo from '../../assets/LOGO_2021 WHITE.png'


function Header({acao}) {
  
  return( 
	  
	<S.Container>
		<S.LeftSide className={acao ? 'ativaCor' : ''}>
			<a href="#">Home</a>
			<a href="#">Portifolio</a>
			<a href="#">Sobre</a>
		</S.LeftSide>
		<S.CenterSide className={acao ? 'ativaCor' : ''}>
			<img id="myImg" src={logo} alt="logo" />
		</S.CenterSide>
		<S.RightSide className={acao ? 'ativaCor' : ''}>
			<a href="#">Contato</a>
			<a href="#">Skills</a>
			<a href="#">Contato</a>
		</S.RightSide>
	</S.Container>
  )
}

export default Header;