import React from "react";
import * as S from './styles';


import logo from '../../assets/LOGO_2021 WHITE.png'



function BackgroundHeader() {
  
  return( 
      <S.BackgroundHeader >
        <div>
        <img id="myImg" src={logo} alt="logo" />
        <p>I’m Glenn Chapman Hoyer A Product <br /> Designer Based In San Francisco</p>
        </div>
      </S.BackgroundHeader>

  ) 
}

export default BackgroundHeader;