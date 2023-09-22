import styled from "@emotion/styled";

export const Logo = styled.h1`

    font-family: 'Lobster', cursive;
    color: #42edf0;
    text-transform: uppercase;
    text-shadow: #F53F43 1px 5px;
    user-select: none;
    font-size: 6rem;
    text-align: center;
    width: fit-content;

&::first-letter {
    color: #fffb92;
    font-size: 150%;
    margin-right: 4px;
}

@media (max-width: 730px) {

    font-size: 4rem;

}

@media (max-width: 480px) {
   
    font-size: 3rem;
}

@media (max-width: 400px) {
   font-size: 2.3rem;
}


`
