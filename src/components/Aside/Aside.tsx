import "./Aside.css"
import Logo from "../../assets/Logo.png"
export default function Aside(props: any) {
    return (
        <>
            <aside >
                <img src={Logo} className="col" id="logoAside" alt="logo" />
                <div className="paginas col">
                    {props.children}
                </div>
            </aside>
        </>
    )
}
