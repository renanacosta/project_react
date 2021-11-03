import React from 'react'
import '../Buttons.css'
import { Plus } from 'react-feather';
import { ChevronRight } from 'react-feather';


const ButtonsMore = ({ id, onClick, ...props }) => {
    return (
        <>
            <button
                className="btn button-prevent button-more"
                type="button"
                id={id}
                onClick={onClick}
                {...props}
            >
                <Plus />
                More
                <ChevronRight />
            </button>
        </>
    )
}

export default ButtonsMore


