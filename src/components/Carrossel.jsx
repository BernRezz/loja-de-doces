import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { CarroselBody } from './Styled Components/CarrosselStyle'
import { ArrowBtn } from './Styled Components/ArrowBtn';
import { Link } from 'react-router-dom';

const Carrossel = () => {

    

    const [slider, setSlider] = useState(0)

    const [produtos, setProdutos] = useState([])
    useEffect(() => {

        const getSet = async () => {

            const response = await axios.get(`https://64cc5a7a2eafdcdc8519c5ec.mockapi.io/loja/1`);

            setProdutos(response.data.produtos)
        }
        getSet().catch(console.error());
    }, [])

    const slideHandle = (action) => {

        if (action === false) {
            setSlider(slider === produtos.length - 1 ? 0 : slider + 1);
        } else {
            setSlider(slider === 0 ? produtos.length - 1 : slider - 1);
        }

    }

    useEffect(() => {
        const interval = setInterval(() => {
            slideHandle(false); 
        }, 10000); 

        return () => clearInterval(interval);
    }, [slider]); 

    if (produtos.length === 0) {
        return (
            <>
                <main>
                    <div className="loader"></div>
                </main>
            </>
        )
    }
    
    return (
        <>
            <CarroselBody>

                {produtos.map((produto, index) => {
                    const sliderTranslate = (index - slider) * 410 /* x 410 é pra definir a distancia em pixels de cada slide */ ;

                    return (
                        <Link
                            key={index}
                            style={{ transform: `translateX(${sliderTranslate}px)`, }}
                            className={`${index === slider ? 'slideAtual' : 'slideCard'}`}
                            to={`/vitrine/${produto.id}?tipo=${produto.tipo}&id=${produto.id}`}
                        >

                            <h1>{produto.tipo}</h1>
                            <img src={produto.imagem} alt={produto.tipo} />
                        </Link>

                    )
                })}

                <ArrowBtn direction="left" onClick={() => slideHandle(true)} />
                <ArrowBtn direction="right" onClick={() => slideHandle(false)} />

                <span className='indicators'>
                    {produtos.map((_, index) => {
                        return <button key={index} onClick={() => setSlider(index)} className={slider === index ? "indicatorOn" : "indicatorOff"}></button>
                    })}
                </span>
            </CarroselBody >
        </>
    )
}

export default Carrossel
