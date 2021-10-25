import React from 'react'
import styled from 'styled-components'
import Heading from './styled/Heading'

function Story() {
    return (
        <StorySec>
            <div className="story-inner">
                <img src="./imgs/map (2).png" alt="" />
                <h3>map</h3>
            </div>
            <div className="story-inner">
                <Heading>Our Story</Heading>
                <p>Zenguelemo Lodge is founded in a sustainable eco-community mindset. We 
                    pride ourselves in being the first of our kind in Mozambique. Our ideals and
                    development have been made possible from the hard and passionate work of
                    the Bazaruto Archipelago National Park, Anac and Moz Bio and Private operators.</p>
                <a href="#">Learn more</a>
             </div>
        </StorySec>
    )
}

const StorySec = styled.section`
    padding:10% 5% 0;
    @media(min-width:768px){
        display:flex;
        justify-content:space-between;
    }
    @media(min-width:1200px){
        padding:10% 10% 0%;
    }
    .story-inner{
        position:relative;
        margin:auto;
        @media(min-width:768px){
            width:50%;
        }
        h3{
            position:absolute;
            left:50%;
            top:50%;
            font-family:${props => props.theme.fam.proximab};
            transform:translate(-50%,-50%);
            color:white;
            text-transform:uppercase;
            font-size:30px;
        }
        img{
            width:90%;
        }
        p{
            font-family:${props => props.theme.fam.rock};
            font-size:12px;
            font-weight:100;
            color:${props => props.theme.color.dark};
            line-height:23px;
            margin-bottom:40px;
        }
        a{
            color:${props => props.theme.color.dark};
            font-family:${props => props.theme.fam.rockb};
            font-size:12px;
        }
    }
`;

export default Story
