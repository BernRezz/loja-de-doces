import React, { Component } from 'react'
import '../../assets/eu.jfif'
import '../css/Sobre.css'
import { Logo } from '../../components/Styled Components/Logo'
import NavBar from '../../components/NavBar'


function Sobre() {

    return (

        <>
            <NavBar />
            <div className='container'>

                <div className='minhaFoto'>
                    <img src="../../src/assets/eu.jfif" alt="" />
                </div>

                <div className='sobreContent'>

                    <div className='logoSobre'>
                        <Logo>Loja de doces!</Logo>
                    </div>

                    <div className="texto">
                        <div>
                            <h1 >Sobre o projeto</h1>
                        </div>

                        <div>

                            <p>
                                Meu nome é Bernardo Rezende, tenho 21 anos e sou natural de Teresópolis, no Rio de Janeiro. Este foi o meu projeto final apresentado no término do meu curso de front-end na Tech4Me. Nele, tive que demonstrar todo o conhecimento que adquiri ao longo do curso, focando em tudo que foi apresentado nos módulos de HTML, CSS, Javascript e React. Tudo isso foi aplicado neste E-Commerce com a temática de uma loja de doces.
                                <br /><br />

                                Alguns aspectos e funcionalidades presentes no meu projeto de formatura incluem o uso e consumo de API (via mockapi) tanto para os produtos quanto para o sistema de login e cadastro. Também utilizei campos controlados para cada item do formulário, validação via yup, estilização com o framework Bulma e componentes estilizados através da biblioteca Emotion. Além disso, implementei componentes funcionais e de classes, entre outras funcionalidades.
                                <br /><br />

                                Ainda sou um iniciante no mundo da programação e continuo aprendendo mais a cada dia. Sei que tenho um longo caminho a percorrer, porém estou sempre disposto a me desafiar e aperfeiçoar meu conhecimento, absorvendo o máximo do que me é apresentado nesta jornada.
                            </p>
                        </div>
                    </div>

                    <div className='linguagensPNG'>

                        <img src="https://logodownload.org/wp-content/uploads/2016/10/html5-logo.png" alt="" />
                        <img src="https://logodownload.org/wp-content/uploads/2017/04/css-3-logo-1.png" alt="" />
                        <img src="https://logospng.org/download/javascript/logo-javascript-1024.png" alt="" />
                        <img src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" alt="" />

                    </div>
                </div>



            </div>

        </>
    )

}

export default Sobre
