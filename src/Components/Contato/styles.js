import styled from 'styled-components';

export const Container = styled.div`

border:0.5px solid ;
border-top:transparent;
border-bottom:transparent;

.title-style{
    border:1px solid;
    border-top:transparent;
    border-bottom:transparent;

    .titlle-contato{
        margin:0;
        padding-top:100px;
        padding-bottom:50px;
    
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
    
        h1{
            font-family: "Raleway",sans-serif;
            font-weight: 900;
            font-size:30px;
            color:#FFF; 
        }
        p{
            width:20%;
            border:1px solid #fff;
        }  
     
    }
}

.left-form{
    padding-bottom:100px;
    border:1px solid;
    border-left:transparent;
    border-bottom:transparent;
    
        Button{
            margin-top:20px;
            padding-top: 15px;
            padding-bottom: 15px;
            padding-left: 30px;
            padding-right: 30px;
            background:transparent;
            border: 2px solid rgba(255,255,255,.5);
            border-radius: 30px;
            letter-spacing: .1rem;
            text-transform: uppercase;
            font-size: 11px;
            font-weight: 900;
    
            &:hover{
                transition:0.6s;
                 border:2px solid #FFB;
            }
            
        }

}

.right-form{
    padding-top:30px;

h3{
    font-size: 12px;
    letter-spacing: .1rem;
    font-weight: 900;
    text-transform: uppercase;
    color: rgba(255,255,255,.5);
}
p{
    font-size: 20px;
    color: #fff;
}

.line-style-city{
    line-height: 0.5em;
}
}

`