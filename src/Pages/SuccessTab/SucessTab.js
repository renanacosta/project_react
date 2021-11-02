import React from 'react';
import './SucessTab.css';
import ButtonClose from '../../Components/Buttons/ButtonsClose/ButtonsClose';

const SuccessTab = () => {
    return (
        <div className="SuccessTab">
            <h3 className="SuccessTab__Title">Success!</h3>
            <p className="SuccessTab__Text">Your registration was successfully.</p>
            {localStorage.getItem('Github') && (<>
                <p>Full Name: {localStorage.getItem('FullName')}</p>
                <p>Nickname: {localStorage.getItem('Nickname')}</p>
                <p>Email: {localStorage.getItem('Email')}</p>
                <p>Phone: {localStorage.getItem('Phone')}</p>
                <p>Birthday: {localStorage.getItem('day')}/{localStorage.getItem('month')}/{localStorage.getItem('year')}</p>
                <p>Age: {localStorage.getItem('age')}</p>
                <p>Github: {localStorage.getItem('Github')}</p>
                <p>Linkedin: {localStorage.getItem('Linkedin')}</p>

                
            </>
            )
            }

            <ButtonClose />
        </div>
    );
}



export default SuccessTab;
