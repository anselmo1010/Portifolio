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
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
   
    h1{
        color:#fff;
    }
    p{
        width:40%;
        border:1px solid #fff;
    }    
       
}
`