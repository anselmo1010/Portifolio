import styled from 'styled-components';

export const Container = styled.div`
width:100%;
border:0.5px solid;
border-top:transparent;
border-bottom:transparent;


display:flex;
justify-content:center;
flex-wrap: wrap;

.title-style{
    border:0.5px solid ;
    border-top:transparent;
    border-bottom:transparent;

    .titlle-sobrenos{
        padding-top:100px;
        padding-bottom:70px;

        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
       
        h1{
            font-family: 'Raleway', sans-serif;
            font-weight: 900;
            font-size:30px;
            color:#FFF; 
        }
        p{
            width:30%;
            border:1px solid #fff;
        }    
           
    }
}    

`

export const SobreNosleftSide = styled.div`
width:66.66%;
display:flex;

.border-style{
    width:100%;

    img{
        width:100%;
        margin-right:10px;
        height: 450px;
        padding-top:10px;

        border:0.5px solid;
        border-left:transparent;
        
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
        border: 2px solid rgba(255,255,255,.5);
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