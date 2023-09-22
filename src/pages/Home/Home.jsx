import React from "react"
import NavBar from "../../components/NavBar"
import { Logo } from "../../components/Styled Components/Logo";
import Carrossel from "../../components/Carrossel";
import '../css/Home.css'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { opacity: "0" }
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ opacity: "100" }) }, 1000)


  }


  render() {

    return (
      <>
        <NavBar />

          <main className="homeMain">
            <Logo className="logoHome">Loja de doces!</Logo>
            <h1 style={{ transition: "2s", opacity: `${this.state.opacity}` }}>Seja bem vindo!</h1>

            <Carrossel />
            <h2 style={{ transition: "2s", opacity: `${this.state.opacity}`}}>Veja alguns de nossos produtos!</h2>

          </main >

      </>
    )
  }

}

export default Home
