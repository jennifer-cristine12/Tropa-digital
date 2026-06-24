import "./Card.css"
import Calendar from "../../assets/symbols/calendar.svg"

export default function card(props: any) {
    return (
        <>
            <div className='card'>
                <div className="image">
                    <div className="time">
                        <img src={Calendar} alt="quando foi postado" />
                        <p>{props.time}</p>
                    </div>
                </div>


                <div className="col text">
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </div>
            </div>

        </>
    )
}
