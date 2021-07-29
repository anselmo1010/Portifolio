import styled from 'styled-components';
import img from '../../assets/logotipo-nike-em-fundo-branco-logótipo-da-ilustração-editorial-empresa-168841205.jpg';

export const Container = styled.div`
width:100%;
border:1px solid ;
border-top:transparent;
border-bottom:transparent;

#border-styled{
    border:0.5px solid;
    border-top:transparent;
    border-bottom:transparent;
}

.text-style{
    display:flex;
    align-items: flex-end;

    .portfolio-item-content{
        display:block;
        line-height: 0.5;  
    }
    
    .portfolio-item-content{
        display:none;
    }

}

.hover-effect{
    cursor:pointer;

    :hover{
    opacity:0.7;
    transition: .3s all ease;
    
    .portfolio-item-content{
        display:block;
        h3{
            color:#FFB90F;
            font-size: 18px;
        }
        p{
           
            font-size: 12px;
        }
    } 
}
}

.port-work-title{
    width:100%;
    padding-left:0;
    margin-top:50px;
    margin-bottom:30px;
    font-size:30px;
}








.port-work-A{
    width:100%;
    height:230px;
    margin-bottom:30px; 


    background-image: url(${img});
    background-position: bottom ;
    background-repeat: no-repeat;
    background-size: cover;

}

.port-work-B{
    width:100%;
    height:230px;    
    margin-bottom:30px; 

    background-image: url(${img});
    background-position: center ;
    background-repeat: no-repeat;
    background-size: cover;
        
}

.port-work-C{
    width:100%;
    height:465px;   
    margin-bottom:30px; 

    background-image: url(${img});
    background-position: center ;
    background-repeat: no-repeat;
    background-size: cover;
        
}
.port-work-D{
    width:100%;
    height:350px;   
    margin-bottom:30px; 
    margin-top:130px;

    background-image: url(${img});
    background-position: center ;
    background-repeat: no-repeat;
    background-size: cover;
        
}
.port-work-E{
    width:100%;
    height:460px;  
    margin-bottom:30px; 

    background-image: url(${img});
    background-position: center ;
    background-repeat: no-repeat;
    background-size: cover;
        
}
.port-work-F{
    width:100%;
    height:230px;  
    margin-bottom:30px;   

    background-image: url(${img});
    background-position: center ;
    background-repeat: no-repeat;
    background-size: cover;
        
}
.port-work-G{
    width:100%;
    height:265px;
    margin-top:130px;   
    margin-bottom:30px; 

    background-image: url(${img});
    background-position: center ;
    background-repeat: no-repeat;
    background-size: cover;
        
}
.port-work-H{
    width:100%;
    height:265px;   
    margin-bottom:30px; 

    background-image: url(${img});
    background-position: center ;
    background-repeat: no-repeat;
    background-size: cover;
        
}
.port-work-I{
    width:100%;
    height:265px;    
    margin-bottom:30px; 

    background-image: url(${img});
    background-position: center ;
    background-repeat: no-repeat;
    background-size: cover;
        
}

@media(max-width:575px){
    .port-work-title{
        color:#fff;
    }
    .port-work-D {
        margin-top:0;
    }
    .port-work-G {
        margin-top:0;
    }

    #border-styled {
        border:transparent;
    }
}
`
