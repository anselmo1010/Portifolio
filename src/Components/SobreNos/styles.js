import styled from 'styled-components';

export const Container = styled.div`
width:100%;
border:0.5px solid;
border-top:transparent;
border-bottom:transparent;


display:flex;
justify-content:center;
flex-wrap: wrap;



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
width:66.66%;

display:flex;


// background:black;
// background-position: center ;
// background-size: cover;
// background-repeat: no-repeat;

.border-style{
    width:100%;

    
    img{
        width:100%;
        margin-right:10px;
        height: 450px;
        padding-top:10px;

        border:0.5px solid;
        border-left:transparent;
        border-top:transparent;
    
        
    }
}

@media(max-width:575px){
    width:100%;
}

`
export const SobreNosRightSide = styled.div`
width:33.33%;
padding:10px 10px 10px 10px;
display:flex;
justify-content: center; 
flex-wrap:wrap;



h3,p{
    color:#fff;
}

.button-Cv{
    display:flex; 
    
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


@media(max-width:575px){
    width:100%;
}
`