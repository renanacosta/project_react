import React from 'react'
import '../Buttons.css'
import {XCircle } from 'react-feather';

const ButtonsClose = () => {
    return (
        <>
            <button onClick={
                () => {
                    localStorage.clear();
                    window.location.reload();
                }
            } className="btn">
                Close
                <XCircle />
            </button>
        </>
    )
}

export default ButtonsClose


