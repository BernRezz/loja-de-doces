import { Link, Outlet } from "react-router-dom";

function Cards(props) {

    const produtos = props.produtos
    const teste = props.teste

    if (teste === true) {

        return <Outlet />
    } else {

        return (
            <main>

                <div className="columns is-multiline">
                    {produtos.map((produto) => {
                        const { id, tipo, imagem, resumo, valor } = produto;
                        return (
                            <div key={id} className="coluna">
                                <Link to={`/vitrine/${id}?tipo=${tipo}&id=${id}`} >

                                    <div className="card">

                                        <div className="card-body">
                                            <div className="card-image">
                                                <figure className="image is-1by1">
                                                    <img src={imagem} alt={tipo} />
                                                </figure>

                                            </div>

                                            <div className="card-content">
                                                <div className="media-content">
                                                    <h1>
                                                        {tipo}
                                                    </h1>
                                                </div>

                                                <h1 className="title is-4 has-text-success is-flex is-justify-content-center">
                                                    R${valor}
                                                </h1>
                                                <p className="content has-text-grey">{resumo}</p>

                                            </div>
                                        </div>

                                    </div>

                                </Link>
                            </div>
                        );
                    })}
                </div>
            </main>
        );
    }


}

export default Cards