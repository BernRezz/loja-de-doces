import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../css/App.css'

import Letreiro from '../../components/Letreiro';
import NavBar from '../../components/NavBar.jsx'
import Cards from '../../components/Cards';


function Vitrine() {

    const location = useLocation();
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {

        const getSet = async () => {

            const response = await axios.get(`https://64cc5a7a2eafdcdc8519c5ec.mockapi.io/loja/1`);
            setProdutos(response.data.produtos)
        }
        getSet().catch(console.error());
    }, [])

    if (produtos.length === 0) {
        return (
            <>
                <Letreiro />
                <NavBar />

                <main>
                    <div className="loader"></div>
                </main>
            </>
        )
    }

    return (
        <>
            <Letreiro />
            <NavBar />

            {location.pathname === '/vitrine' ? <Cards produtos={produtos} teste={false} /> : <Cards produtos={produtos} teste={true} />}

        </>
    )
}

export default Vitrine
