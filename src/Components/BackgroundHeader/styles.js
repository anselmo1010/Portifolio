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
justify-content: center; 
align-items: center;    

.text-content{
    padding-top:100px;
    
    img{
        width:450px;
        filter: drop-shadow(0px 0px 30px #fff);
    }
 
    h3,p{  
        text-align:center;
        line-height: 1;
        font-size:30px;
        font-weight: 600;
        color:#fff;
    }

}



`