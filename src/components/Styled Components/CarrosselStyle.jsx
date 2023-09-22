import styled from "@emotion/styled";

export const CarroselBody = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 700px;
    min-height: 440px;
    overflow: hidden;

    .slideCard {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
        height: 80%;
        position: absolute; /* Alterado para 'absolute' para sobreposição */
        border-radius: 0.5rem;
        box-shadow: 0px 0px 7px black;
        user-select: none;
        transition: 0.5s, transform 0.4s, opacity 1s;

        h1 {
        position: absolute;
        top: 75%;
        z-index: 3;
        color: white;
        text-shadow: 0px 0px 10px black;
        }

        :hover {
            border: cyan solid;
            box-shadow: 3px 3px 1px rgba(255, 78, 214, 0.747) ;

            h1 {
                text-shadow: rgb(255, 78, 214) 2px 2px 2px;
                color: #42edf0;
                transition: 0.2s;
            }
        }
    }

    .slideAtual {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 90%;
        z-index: 2;
        width: 400px;
        position: relative;
        border-radius: 0.5rem;
        box-shadow: 0px 0px 7px black;
        user-select: none;
        transition: 1s,  0.4s, opacity 1s;

        h1 {
        position: absolute;
        top: 75%;
        z-index: 999;
        color: white;
        text-shadow: 0px 0px 10px black;
        }

        :hover {
            border: cyan solid;
            box-shadow: 3px 3px 1px rgba(255, 78, 214, 0.747) ;

            h1 {
                text-shadow: rgb(255, 78, 214) 2px 2px 2px;
                color: #42edf0;
                transition: 0.2s;
            }
        }
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
        object-fit: cover;
        }

    .slideFade {
        animation: fade 0.5s ease-in-out forwards;
    }

    .indicators {
        display: flex;
        position: absolute;
        bottom: 2rem;
        z-index: 4;
    }

    .indicatorOff {
        background-color: white;
        width: 5px;
        height: 12px;
        border-radius: 100%;
        border: none;
        margin: 0 8px;
        box-shadow: 0px 0px 5px black;
        outline: none;
        cursor: pointer;
    
        &:hover{
            background-color:  cyan;
        }
    }

    .indicatorOn {
        background-color: cyan;
        width: 5px;
        height: 12px;
        border-radius: 100%;
        border: none;
        margin: 0 8px;
        box-shadow: 0px 0px 5px black;
        outline: none;
        cursor: pointer;
    }

@media (max-width: 730px) {

    width: 550px;

    .slideAtual h1 {
        font-size: x-large;
    }

    .slideCard h1 {
        font-size: x-large;
    }
}

@media (max-width: 550px) {

    width: 450px;

    
}

@media (max-width: 450px) {

    width: 380px;

    .slideCard, .slideAtual {
        width: 350px;
        height: 350px;
    }

    .indicators {
        bottom: 4rem;
    }

    .indicatorOff, .indicatorOn{
        width: 3px;
        height: 12px;
    }
}

@media (max-width: 400px) {

width: 300px;

.slideCard, .slideAtual {
    width: 280px;
    height: 280px;
}

.indicators {
    bottom: 3rem;
}

.indicatorOff, .indicatorOn{
    width: 3px;
    height: 10px;
}
}
    
`
