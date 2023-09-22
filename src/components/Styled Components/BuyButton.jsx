import styled from "@emotion/styled";

export const BuyButton = styled.button`

background: radial-gradient(circle, #2fe57b 0%, #2ed157 100%);
font-size: 15px; 
color: #2d5138;
user-select: none;
border: transparent;

&:hover {
    background: #1fd100 ;
    color: #ccfccc;
    border-top: #2d5138;
}

@media (max-width: 2681px) {
    
    font-size: 1.5em;
}

@media (max-width: 1650px) {

    font-size: 1em;
}

@media (max-width: 900px) {
    
    font-size: 0.8em;
}
`
