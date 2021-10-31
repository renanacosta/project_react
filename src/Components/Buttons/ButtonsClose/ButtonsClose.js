import React from 'react'
import '../Buttons.css'
import {XCircle } from 'react-feather';

const ButtonsClose = () => {
    return (
        <>
            <button className="btn" type="button">
                Close
                <XCircle />
            </button>
        </>
    )
}

export default ButtonsClose


