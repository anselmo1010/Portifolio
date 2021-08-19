import React from "react";
import * as S from './styles';


  
function MeusServCards({logo,title_firstWord,title_secondtWord,content}){


    return( 
      <S.Container >
         <div className="imgcontainer">
            <img src={logo} alt="" />
          </div>
          <h3>{title_firstWord}
                <br/>
              {title_secondtWord} 
          </h3>
          <p>{content}</p>
      </S.Container>
    )
  }
  
  export default MeusServCards;