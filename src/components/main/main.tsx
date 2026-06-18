
import Form from "../../components/Form/Form"
import Title from '../../components/Title/Title';
import FundoEstrelas from "../../assets/fundoEstrelas.png"
import Computador from "../../assets/computador.png"
import "./main.css"
export default function Main() {
    return (
        <>
            <main className="row">
                <div>
                    <Title
                        main="Bem Vindo ao "
                        strong="painel"
                    />
                    <Form />
                </div>
                <div>

                    <img src={FundoEstrelas} alt="fundo" id="fundo1" />
                    <img src={Computador} alt="fundo" id="fundo2" />
                </div>
            </main>
        </>
    )
}
