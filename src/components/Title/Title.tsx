import React from 'react'
import "./Title.css"
export default function Title(props: any) {
    return (
        <>
            <h1>{props.main}<strong>{props.strong}</strong></h1>
        </>
    )
}
