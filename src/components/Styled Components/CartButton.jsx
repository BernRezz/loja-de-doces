import styled from "@emotion/styled";

export const CartButton = styled.button`

background: radial-gradient(circle, #2f81e5 0%, #2e7dd1 100%);
font-size: 15px; 
color: #352f5b;
user-select: none;
border: transparent;

&:hover {
    background: #0035e1 ;
    color: #ccfccc;
    border-bottom: #263e8e solid 1px;
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
