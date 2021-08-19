import styled from 'styled-components';


export const Container = styled.div`

width:100%;
height: 60px;
background:transparent;
position:fixed;

display:flex;
justify-content: center; 
z-index:10;


.ativaCor{
    transition:all ease 0.3s;
    background: #fff;
    a{
        color:black; 
    }
}

a{
    text-decoration:none;
    font-size:15px;
    color:#fff;
    margin: 0 15px;

    &:hover{
        color:#ff8b00;
       
    }
}




`
export const LeftSide = styled.div`
width:40%;
display: flex;
align-items: center;
justify-content: flex-end; 

`
export const CenterSide = styled.div`
width:20%;
display: flex;
align-items: center;
justify-content: center;



img{
    width:150px;
    filter: drop-shadow(0px 0px 30px #fff);
}




`
export const RightSide = styled.div`
width:40%;
display: flex;
align-items: center;
justify-content: flex-start;

`
