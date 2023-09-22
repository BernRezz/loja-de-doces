import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ArrowBtn = styled.i`

position: absolute;
border: solid #ffffff;
filter: drop-shadow(0px 0px 3px #2e2e2e);
border-radius: 5px;
border-width: 0 5px 5px 0;
padding: 8px;
transition: 0.1s;
z-index: 3;

&:hover {
    cursor: pointer;
    padding: 10px;
    border: solid cyan;
    border-width: 0 5px 5px 0;
}


    ${props =>
        props.direction === "right" &&
        css`  
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        right: 1rem;
    `}

    ${props =>
        props.direction === "up" &&
        css`
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
    `}

    ${props =>
        props.direction === "down" &&
        css`
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    `}

    ${props =>
        props.direction === "left" &&
        css`
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
        left: 1rem;
    `}
`;
