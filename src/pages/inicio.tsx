import "./inicio.css";
import Inicio from "../assets/symbols/inicio.svg"
import File from "../assets/symbols/file.svg"
import ArrowUp from "../assets/symbols/arrowup.svg"
import Fundo from "../assets/fundoEstrelas.png"

import Aside from '../components/Aside/Aside'
import Selection from "../components/Aside/Selection/Selection";
import Title from "../components/Title/Title";
import Card from "../components/Card/Card";
import Hero from "../components/Hero/Hero"

export default function inicio() {
    return (
        <>
            <div className="index">


                <Aside >
                    <Selection symbol={Inicio} selected>Inicio</Selection>
                    <Selection symbol={File}>Contatos</Selection>
                    <Selection symbol={ArrowUp}>Relatorios</Selection>
                </Aside>
                <div className="col">
                    <Title main="Olá "
                        strong="Usuario" />
                    <Hero>
                        <Card img={Fundo} time="2min atrás" title="Lorem ispum is simply dummy text of the printing and typesetting" text="Lorem ispum is simply dummy text of the printing and typesetting" />
                        <Card img={Fundo} time="2min atrás" title="Lorem ispum is simply dummy text of the printing and typesetting" text="Lorem ispum is simply dummy text of the printing and typesetting" />
                        <Card img={Fundo} time="2min atrás" title="Lorem ispum is simply dummy text of the printing and typesetting" text="Lorem ispum is simply dummy text of the printing and typesetting" />
                        <Card img={Fundo} time="2min atrás" title="Lorem ispum is simply dummy text of the printing and typesetting" text="Lorem ispum is simply dummy text of the printing and typesetting" />
                        <Card img={Fundo} time="2min atrás" title="Lorem ispum is simply dummy text of the printing and typesetting" text="Lorem ispum is simply dummy text of the printing and typesetting" />
                        <Card img={Fundo} time="2min atrás" title="Lorem ispum is simply dummy text of the printing and typesetting" text="Lorem ispum is simply dummy text of the printing and typesetting" />

                    </Hero>




                </div>



            </div>
        </>
    )
}
