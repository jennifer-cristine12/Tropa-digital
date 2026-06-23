import "./inicio.css";
import Aside from '../components/Aside/Aside'
import Selection from "../components/Aside/Selection/Selection";
import Inicio from "../assets/symbols/inicio.svg"
import File from "../assets/symbols/file.svg"
import ArrowUp from "../assets/symbols/arrowup.svg"
import Title from "../components/Title/Title";
export default function inicio() {
    return (
        <>
            <div className="index">


                <Aside >
                    <Selection symbol={Inicio} selected>Inicio</Selection>
                    <Selection symbol={File}>Contatos</Selection>
                    <Selection symbol={ArrowUp}>Relatorios</Selection>
                </Aside>
                <div className="row">
                    <Title main="Olá "
                        strong="Usuario" />

                </div>

            </div>
        </>
    )
}
