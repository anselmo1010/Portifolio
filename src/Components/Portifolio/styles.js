import styled from 'styled-components';
import xwork_1 from '../../assets/xwork_1_md.jpg';
import xwork_2 from '../../assets/xwork_2_md.jpg';
import xwork_3 from '../../assets/xwork_3_md.jpg';
import xwork_4 from '../../assets/xwork_4_full.jpg';
import xwork_5 from '../../assets/xwork_5_md.jpg';
import xwork_6 from '../../assets/xwork_6_md.jpg';
import xwork_7 from '../../assets/xwork_7_md.jpg';
import xwork_8 from '../../assets/xwork_8_md.jpg';
import xwork_9 from '../../assets/xwork_9_a_md.jpg';

export const Container = styled.div`
width:100%;
border:1px solid ;
border-top:transparent;
border-bottom:transparent;



#border-styled{
    border:0.5px solid;
    border-top:transparent;
    // border-bottom:transparent;
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
            color:#ff8b00;
            font-size: 18px;
        }
        p{  
           color:black;
            font-size: 12px;
        }
    } 
}
}

a{
    text-decoration: none;
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
   
    background-image: url(${xwork_1});
    background-position: bottom ;
    background-repeat: no-repeat;
    background-size: cover;

}

.port-work-B{
    width:100%;
    height:230px;    
    margin-bottom:30px; 

    background-image: url(${xwork_2});
    background-position: center ;
    background-repeat: no-repeat;
    background-size: cover;
        
}

.port-work-C{
    width:100%;
    height:465px;   
    margin-bottom:30px; 

    background-image: url(${xwork_3});
    background-position: center ;
    background-repeat: no-repeat;
    background-size: cover;
        
}
.port-work-D{
    width:100%;
    height:350px;   
    margin-bottom:30px; 
    margin-top:130px;

    background-image: url(${xwork_4});
    background-position: center ;
    background-repeat: no-repeat;
    background-size: cover;
        
}
.port-work-E{
    width:100%;
    height:460px;  
    margin-bottom:30px; 

    background-image: url(${xwork_5});
    background-position: center ;
    background-repeat: no-repeat;
    background-size: cover;
        
}
.port-work-F{
    width:100%;
    height:230px;  
    margin-bottom:30px;   

    background-image: url(${xwork_6});
    background-position: center ;
    background-repeat: no-repeat;
    background-size: cover;
        
}
.port-work-G{
    width:100%;
    height:265px;
    margin-top:130px;   
    margin-bottom:30px; 

    background-image: url(${xwork_7});
    background-position: center ;
    background-repeat: no-repeat;
    background-size: cover;
        
}
.port-work-H{
    width:100%;
    height:265px;   
    margin-bottom:30px; 

    background-image: url(${xwork_8});
    background-position: center ;
    background-repeat: no-repeat;
    background-size: cover;
        
}
.port-work-I{
    width:100%;
    height:265px;    
    margin-bottom:30px; 

    background-image: url(${xwork_9});
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
