import { ArrowForward } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Card from './styled/Card';
import Heading from './styled/Heading';



function Activities() {
    const cards = [{
        src:"./imgs/pop1.png",
        text:"Scuba Diving"
    },
    {
        src:"./imgs/pop2.png",
        text:"Hiking",
    },
    {
        src:"./imgs/pop3.png",
        text:"Boat Cruise",
    },
    {
        src:"./imgs/pop4.png",
        text:"Beach Sports",
    },
    {
        src:"./imgs/pop5.png",
        text:"Spa Center",
    },
    ]
    return (
        <ActiveSec>
            <div className="active-text">
                <Heading>Your Adventurous Spirit our Island Activities</Heading>
                <p>The islands and ocean have an array of activities to absorb all enthusiastic adventurers from 
                    snorkeling the many reefs and hiking the dunes to relaxing by the pool there is truly 
                    something for everyone. </p>
            </div>
            <div className="cards">
                {cards.map(function(item, i){
                   return  <Card img={item.src} text={item.text} key={i} />
                })}
            </div>
        </ActiveSec>
    )
}

const ActiveSec = styled.section`
    overflow:hidden;
    .active-text{
        width:100%;
        padding:8% 5% 6% 5%;
        @media(min-width:1200px){
            padding-left:10%;
        }
        p{
            width:90%;
            font-family:${props => props.theme.fam.rock};
            font-size:15px;
            font-weight:100;
            color:${props => props.theme.color.dark};
            line-height:23px;
            @media(min-width:992px){
                width:50%;
                font-size:12px;
            }
        }
    }
    .cards{
        display:-webkit-box;
        justify-content:space-between;
        overflow-x:scroll;
        &::-webkit-scrollbar{
            background:white;
            height:2px;
        }
        &::-webkit-scrollbar-thumb{
          background:${props => props.theme.color.dark};
        }
        @media(min-width:768px){
            display:flex;
        }
    }
`;

export default Activities
