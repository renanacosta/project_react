import React from 'react'
import '../Buttons.css'
import { Check } from 'react-feather';

const ButtonsFinish = () => {
    return (
        <>
            <button className="btn" type="button">
                Finish
                <Check />
            </button>
        </>
    )
}

export default ButtonsFinish

