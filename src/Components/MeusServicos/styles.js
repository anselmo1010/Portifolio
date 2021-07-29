import styled from 'styled-components';

export const Container = styled.div`
border:0.5px solid;
border-top:transparent;


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

.meusServ-title{
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


}
`