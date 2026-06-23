
import Button from '../../Button/button'
import "./Section.css"
import { useState } from 'react'
export default function Section(props: any) {
    const [selected, setSelected] = useState(false);
    setSelected(!selected);
    /*
        const section = document.querySelector("section");
        selected ?//muda a aparecia de acordo com a seleção
            section?.classList.add("selected")
            :
            section?.classList.remove("selected");
    */
    return (
        <>
            <div >

                <Button>{props.children}</Button>
            </div>

        </>
    )
}
