import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import '../css/Detalhes.css'
import { BuyButton } from '../../components/Styled Components/BuyButton';
import { CartButton } from '../../components/Styled Components/CartButton';

function Detalhes(props) {

  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams()
  const idPosition = parseInt(id - 1);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tipo = queryParams.get('tipo');

  useEffect(() => {
    fetch(`https://64cc5a7a2eafdcdc8519c5ec.mockapi.io/loja/1`)
      .then((response) => response.json())
      .then((dados) => {
        console.log("dados:", dados);
        setProdutos(dados.produtos);
        setLoading(false);
      });
  }, []);


  if (loading) {
    return (

      <main>
        <div className="loader"></div>
      </main>

    )
  }

  return (
    <main className='mainDetalhes'>
      {
        produtos.length > idPosition ? (




          <div key={produtos[idPosition].id} className='cardDetalhes'>

            <img src={produtos[idPosition].imagem} alt="" className='produtoImg' style={{ userSelect: "none" }} />


            <div className='detalhesRightSection'>

              <div className='direitaDetalhes'>
                <h1 className='produtoTitle' >{tipo}</h1>
                <p className='produtoInfo'>{produtos[idPosition].descrição}</p>
                <p className='produtoValor'>R${produtos[idPosition].valor}</p>
              </div>

              <div className='btnDetalhesFlex'>
                <BuyButton className='detalhesBtns'><i className="fa-solid fa-dollar-sign"></i><br />Comprar</BuyButton>
                <CartButton className='detalhesBtns'><i className="fa-solid fa-cart-shopping"></i><br />Adicionar ao carrinho</CartButton>
              </div>
            </div>



          </div>




        ) : (
          <p>Product not found.</p>
        )
      }

    </main>
  )
}

export default Detalhes
