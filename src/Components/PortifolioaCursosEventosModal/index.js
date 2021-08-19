import React from "react";
import * as S from './styles';




function PortifolioaCursosEventosModal({text_h3, text_p}) {

  return( 
    <S.Container>
      <div className="item-content">
        <h3>{text_h3}</h3>
        <p>{text_p}</p>
      </div>
    </S.Container>
  );
}
export default PortifolioaCursosEventosModal;