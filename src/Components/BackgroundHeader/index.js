import React from "react";
import * as S from './styles';


import logo from '../../assets/LOGO_2021.png'



function BackgroundHeader() {
  
  return( 
      <S.BackgroundHeader >
        <div className="text-content">
        {/* <img id="myImg" src={logo} alt="logo" /> */}
        <h3>I’m Glenn Chapman Hoyer A </h3>
         <p> <span>Product Designer</span> Based In San Francisco</p>
        </div>
      </S.BackgroundHeader>

  ) 
}

export default BackgroundHeader;