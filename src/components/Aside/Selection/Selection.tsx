
import Button from "../../Button/button"
import "./Selection.css"
import { useState } from "react"
export default function Selection(props: any) {
    const [selected, setSelected] = useState(props.selected);
    const sessao = document.querySelector("sessao")
    if (selected) {
        sessao?.classList.add("selected")
    }
    return (
        <div className="sessao">
            <img src={props.symbol} alt="simbolo" />
            <Button>{props.children}</Button>
        </div>
    )
}
