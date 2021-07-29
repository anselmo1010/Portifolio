import React, {useEffect, useState} from "react";
import * as S from './styles';



//Components
import Header from '../../Components/Header';
import BackgroundHeader from "../../Components/BackgroundHeader";
import Portifolio from "../../Components/Portifolio";
import Footer from "../../Components/Footer";
import SobreNos from "../../Components/SobreNos";
import MeusServicos from "../../Components/MeusServicos";

//Import img function "posicaoScroll"
import logo2 from '../../assets/LOGO_2021.png'
import logo from '../../assets/LOGO_2021 WHITE.png'

function Home() {
  const [ativaCor,setAtivaCor] = useState(false);

  useEffect(function(){

    function posicaoScroll(){
      if(window.scrollY>20){
        setAtivaCor(true);
        document.getElementById("myImg").src = logo2;
      }else{
        setAtivaCor(false);
        document.getElementById("myImg").src = logo;
      }
    }

    window.addEventListener('scroll',posicaoScroll);
  },[]);


  return(
        <S.Container>
          <Header acao={ativaCor}/>
          <BackgroundHeader/>
          <Portifolio/>
          <SobreNos/>
          <MeusServicos/>
          

          <Footer/>
        </S.Container>
  )
}

export default Home;
