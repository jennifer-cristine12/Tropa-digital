import { useState } from 'react'
import Button from "../Button/button";
import Input from "../Input/Input"
import eye001 from "../../assets/symbols/eye001.svg"
import eye000 from "../../assets/symbols/eye000.svg"
import "./Form.css"
function Form() {
    const [show, setShow] = useState(false)

    const handleshow = () => {
        setShow(!show)
    }
    return (
        <>
            <form action="" method="post">
                <Input placeholder={"Digite seu email"} type={"email"} />
                <Input placeholder={"Digite sua senha"} type={show ? "text" : "password"} ><img id="eye" onClick={handleshow} src={show ? eye001 : eye000} alt="show" /></Input>
                <Button>Acessar</Button>
            </form>
        </>
    )
}

export default Form