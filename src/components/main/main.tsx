
import Form from "../Form/Form"
import Title from '../Title/Title';
import Logo from "../../assets/Logo.png"
import Computador from "../../assets/computador.png"
import "./main.css"
export default function Main() {
    return (
        <>
            <main className="row">
                <div className="col">
                    <img src={Logo} id="logo" alt="logo" />

                    <Title
                        main="Bem Vindo ao "
                        strong="painel"
                    />
                    <Form />
                </div>
                <div className="fundo col w-100">
                    <img src={Computador} alt="fundo" id="fundo2" />
                </div>
            </main>
        </>
    )
}
