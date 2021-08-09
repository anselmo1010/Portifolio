import styled from 'styled-components';

export const Container = styled.div`
border:0.5px solid;
border-top:transparent;
border-bottom:transparent;


#border-styled{
    border:0.5px solid;
    border-top:transparent;
    border-bottom:transparent;
}
@media(max-width:575px){
    #border-styled{
        border:none;
    }
}

.border-meusServicos{
    padding-top:50px;
    padding-bottom:50px;
    border:0.5px solid ;
    border-top:transparent;
    border-bottom:transparent;
}
.titlle-meusServicos{
    padding-top:70px;
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
`