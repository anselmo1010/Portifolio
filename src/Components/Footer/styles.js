import styled from 'styled-components';


export const Container = styled.div`
width:100%;
background:#191919;

display:flex;
justify-content: center; 
flex-direction: column;




`

export const LogoFooter = styled.div`
padding-top:20px;
padding-bottom:10px;
display:flex;
justify-content: center; 

img{
    width:150px;
}

`
export const SocialMediaFooter = styled.div`
padding-bottom:10px;
display:flex;

justify-content: center;


a{
    margin: 0 15px;
    text-decoration:none;
    font-weight: bold;
    color:rgba(255, 255, 255, 0.6);

    &:hover{
        color:#ff8b00;
    }
}    


`

export const InfoFooter = styled.div`
display:flex;
justify-content: center; 
padding-bottom:30px;

p{
    color:rgba(255, 255, 255, 0.6);
}

`