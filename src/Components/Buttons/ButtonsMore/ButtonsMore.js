import React from 'react'
import '../Buttons.css'
import { Plus } from 'react-feather';
import { ChevronRight } from 'react-feather';


const ButtonsMore = (props) => {
    return (
        <>
            <button onClick={() => props.OnClick()}  className="btn" type="button">
                <Plus />
                More
                <ChevronRight />
            </button>
        </>
    )
}

export default ButtonsMore


