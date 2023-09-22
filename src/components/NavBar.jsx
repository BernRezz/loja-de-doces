import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import FormMain from "./Form/FormMain"
import { Navbar } from "./Styled Components/NavStyle"

function NavBar() {

    const location = useLocation();
    const navItemOn = {
        transition: '200ms',
        backgroundColor: "#ffffffda",
        color: "#ff72f9",
        height: "50px",
        boxShadow: "rgba(0, 0, 0, 0.086) 1px 4px",
    }
    const navItemOff = {
        transition: '200ms',
        textAlign: "center",
        fontWeight: "600",
        fontSize: "100%",
        userSelect: "none"
    }

    const [formBtn, setFormBtn] = useState(false)
    const popUpHandle = () => {

        switch (formBtn) {
            case true:
                setFormBtn(false);
                break;
            case false:
                setFormBtn(true);
                break;
        }
    }
    
    const [burgerBtn, setBurgerBtn] = useState(false)
    const [burgerClass, setBurgerClass] = useState("burgerNavSection")
    const burgerNavPopup = () => {

        if (burgerBtn === false) {

            setBurgerBtn(true);
            setBurgerClass("burgerNavSection on");
        }

        if (burgerBtn === true) {
            
            setBurgerBtn(false);
            setBurgerClass("burgerNavSection");
        }

    }

    return (
        <>
            <Navbar>


                <div className={burgerClass}>

                    <div className="burgerNav" onClick={burgerNavPopup}>
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>

                    <div >

                    </div>

                    <div className="burgerNavItems">
                        <Link to="/">
                            <h1 className={location.pathname === '/' ? "burgerNavItem on" : "burgerNavItem"}>Início</h1>
                        </Link>

                        <Link to="/vitrine">
                            <h1 className={location.pathname === '/vitrine' ? "burgerNavItem on" : "burgerNavItem"}>Vitrine</h1>
                        </Link>

                        <Link to="/sobre-o-projeto">
                            <h1 className={location.pathname === '/sobre-o-projeto' ? "burgerNavItem on" : "burgerNavItem"}>Sobre o projeto</h1>
                        </Link>
                    </div>
                </div>

                <div className="navItems">
                    <Link to="/">
                        <h3
                            className="navItem"
                            style={location.pathname === '/' ? navItemOn : navItemOff}>Inicio</h3>
                    </Link>

                    <Link to="/vitrine">
                        <h3
                            className="navItem"
                            style={location.pathname === '/vitrine' ? navItemOn : navItemOff}>Vitrine</h3>
                    </Link>

                    <Link to="/sobre-o-projeto">
                        <h3
                            className="navItem"
                            style={location.pathname === '/sobre-o-projeto' ? navItemOn : navItemOff}>Sobre o projeto</h3>
                    </Link>
                </div>




                <button id="login" onClick={popUpHandle}>
                    Log-in
                </button>

                <FormMain formBtn={formBtn} popUpHandle={popUpHandle} />

            </Navbar>
        </>

    )
}

export default NavBar