import React from 'react'
import '../Buttons.css'
import { ChevronDown } from 'react-feather';

const ButtonsCertificates = ({...props}) => {
    return (
        <>
            <button className="btn" type="button" {...props}>
                My Certificates
                <ChevronDown />
            </button>
        </>
    )
}

export default ButtonsCertificates
