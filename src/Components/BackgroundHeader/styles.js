import styled from 'styled-components';
import img from '../../assets/744527.jpg';

export const BackgroundHeader = styled.div`
width: 100%;
height: 700px;

background-image: url(${img});
background-position: center ;
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;

display:flex;
align-items: center;
justify-content: center; 

img{
    width:500px;
    filter: drop-shadow(0px 0px 30px #fff);
}

p{
    display:flex;
    align-items: center;
    justify-content: center; 
    align-items: center;
    line-height: 1.5;
    font-size:33px;
    color:#fff;
}



`