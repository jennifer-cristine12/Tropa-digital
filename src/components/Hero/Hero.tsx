
import "./Hero.css"
export default function Hero(props: any) {
    return (
        <div className='hero row '>
            {props.children}
        </div>
    )
}
