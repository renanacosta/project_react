import React from 'react'
import '../Buttons.css'
import { ChevronDown } from 'react-feather';

const ButtonsCertificates = () => {
    return (
        <>
            <button className="btn" type="button">
                My Certificates
                <ChevronDown />
            </button>
        </>
    )
}

export default ButtonsCertificates
