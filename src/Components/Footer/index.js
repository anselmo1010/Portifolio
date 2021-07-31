import React from "react";
import * as S from './styles';

//assets
import logo from '../../assets/LOGO_2021 WHITE.png'


function Footer() {
  
  return( 
	<S.Container>
    
    <S.LogoFooter>
      <img src={logo} alt="" />
    </S.LogoFooter>

    <S.SocialMediaFooter > 
      <ul>
        <a href="#">FACEBOOK</a>
        <a href="#">INSTAGRAM</a>
        <a href="#">TWITTER</a>
        <a href="#">DEEBOM.TV</a>
      </ul>
    </S.SocialMediaFooter>
    
    <S.InfoFooter>
      <p >
      Copyright © 2021 All rights reserved 
      </p>
    </S.InfoFooter>
      
	</S.Container>
  
  )
}

export default Footer;