import styled from 'styled-components';

export const Container = styled.div`
width:100%;
border:0.5px solid;
border-top:transparent;
border-bottom:transparent;

display:flex;
justify-content:center;
flex-wrap: wrap;


// @media(max-width:575px){
    

// }

`
export const SobreNostitle = styled.div`
width:100%;
padding-top:60px;
padding-bottom:60px;


display:flex;
flex-direction: column;
justify-content:center;
align-items: center;

h1{
    padding-top:10px;
    padding-bottom:20px;
    color:#FFF;
    

}
p{
    border:1px solid #fff;
    width:10%;
}


`

export const SobreNosleftSide = styled.div`
width:50%;


display:flex;




background:black;
background-position: center ;
background-size: cover;
background-repeat: no-repeat;


img{
    width:60%;
    height: 450px;
    margin-left:20%;

    border:0.5px solid;
    border-right:none;
    border-left:none;
    
}

`
export const SobreNosRightSide = styled.div`
width:50%;

display:flex;
justify-content: center; 
flex-wrap:wrap;


h3,p{
    padding:10px 10px 10px 10px;
    color:#fff;
}

.button-Cv{
    display:flex; 
    padding-left:10px;
    
    Button{
        font-size: 11px;

        background:transparent;
        border:2px solid #191919;
        border-radius: 30px;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 30px;
        padding-right: 30px;
        letter-spacing: .1rem;
        text-transform: uppercase;
        font-weight: 900;

        &:hover{
            transition:0.6s;
             border:2px solid #FFB;
        }
        
    }
}
`