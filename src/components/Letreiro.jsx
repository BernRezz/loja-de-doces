import { Link } from "react-router-dom"
import { Logo } from "./Styled Components/Logo"

function Letreiro() {

    return (
        <div id="letreiro">
            <Link to="/" >
                <Logo style={{fontSize: "3em", marginBottom: "20px"}}>Loja de doces!</Logo>
            </Link>
        </div>

    )
}

export default Letreiro