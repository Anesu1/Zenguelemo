import React from 'react'
import styled from 'styled-components'
import Heading from './styled/Heading';

function About() {
    return (
        <AboutSec>
            <div className="about-inner">
                <div className="about-text">
                    <Heading>It is simply a perfect place to get lost.</Heading>
                    <p>You’ve arrived at the Zenguelemo lodge, an eco-friendly campsite built by the World Bank and  Mozambican Government. The eco-tourism lodge employs a full local staff, and has a profit  sharing agreement with the inhabitants of the island.  </p>
                    <p>In addition to the 5 star restaurant where bare feet and frozen cocktails are encouraged the  lodge boasts self-catered tented campsites (“glamping”) and a fully catered beach Villa.  
                    </p>
                    </div>
                <img src="./imgs/sec2left.png" alt="" />
            </div>
            <div className="about-inner">
                <img src="./imgs/sec2right.png" alt="" />
            </div>
        </AboutSec>

        
    )
}

const AboutSec = styled.section`
    padding:10% 5% 0;
    @media(min-width:768px){
        display:flex;
        justify-content:space-between;
        align-items:start;
    }
    @media(min-width:1200px){
        padding:10% 10% 0%;
    }
    .about-inner{
        &:first-child{
            display:flex;
            flex-direction:column-reverse;
            @media(min-width:768px){
                display:unset;
            }
        }
        &:last-child{
            margin-top:40px;
            @media(min-width:768px){
                margin-top:0;
            }
        }
        @media(min-width:768px){
            width:47%;
        }
        img{width:100%;
        
        }
        .about-text{
            margin:40px 0 0px;
            @media(min-width:992px){
                margin:180px 0 80px;
            }
            p{
                color:${props => props.theme.color.dark};
                font-family:${props => props.theme.fam.rock};
                font-size:15px;
                font-weight:100;
                margin-bottom:25px;
                line-height:23px;
                @media(min-width:1200px){
                    font-size:12px;
                }
            }
        }
    }
`;

export default About
