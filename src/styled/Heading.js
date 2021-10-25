import React from 'react';
import styled, {css} from 'styled-components';

function Heading({children}) {
    return (
        <>
          <Headingh2>
              {children}
              </Headingh2>  
        </>
    )
}

const Headingh2 = styled.h2`
    font-size:23px;
    font-family:${props => props.theme.fam.rock};
    color:${props => props.theme.color.dark};
    font-weight:300;
    margin-bottom:25px;
    ${maxContent =>
        maxContent && css`
        @media(min-width:992px){
            width:max-content;
        }
        `
    }
    ${footertext =>
        footertext && css`
        font-weight:900;
        font-size:18px;
        letter-spacing:1.5px;
        `
    }
`;

export default Heading
