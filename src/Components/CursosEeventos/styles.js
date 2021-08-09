import styled from 'styled-components';

import post1 from '../../assets/post_1.jpg'
import post2 from '../../assets/post_2.jpg'
import post3 from '../../assets/post_3.jpg'
import post4 from '../../assets/post_4.jpg'
import post5 from '../../assets/post_5.jpg'

export const Container = styled.div`
width:100%;

border:1px solid;
border-top:transparent;
border-bottom:transparent;


.titlle-cursos{
    padding-top:100px;
    padding-bottom:50px;

    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;

    border:0.5px solid ;
    border-top:transparent;
    border-bottom:transparent;

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

.bg-width{
    width:100%;
    height:350px;
}
.bg-position{
    background-position: center ;
    background-repeat: no-repeat;
    background-size: cover;
}


.text-style{
    padding-left:10px;
    
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
     transition: .3s all ease;
     opacity:0.6;

    .portfolio-item-content{
        display:block;
        h3{
            color:#ff8b00;
            font-size: 18px;
            font-weight: 900;
        }
        p{  
            color: rgba(255,255,255,.8);
            font-size: 12px;
            font-family: 'Arimo', sans-serif;
        }
    } 
}
}

.border-post1{
    border:0.5px solid ;
    border-top:transparent;
    border-left:transparent;
    border-bottom:transparent;

    .bg-post1{
        background-image: url(${post1});
    
    }
}

.border-post2{
    
    .bg-post2{
        background-image: url(${post2});
    
    }
}



.border-post3{
    padding-top:10px;

    .bg-post3{
        background-image: url(${post3});
    
    }
}

.border-post4{
    padding-top:10px;

    border:0.5px solid ;
    border-top:transparent;
    border-bottom:transparent;

    .bg-post4{
        background-image: url(${post4});
    
    }
}

.border-post5{
    padding-top:10px;

    .bg-post5{
        background-image: url(${post5});
    
    }
}

`