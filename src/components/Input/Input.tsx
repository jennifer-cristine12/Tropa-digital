import "./Input.css";

export default function Input(props: any) {
    return (
        <>
            <div className="customInput">
                <input
                    placeholder={props.placeholder}
                    type={props.type}

                />
                {props.children}
            </div>

        </>
    )
}
