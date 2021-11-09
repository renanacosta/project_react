import React from 'react';
import './SucessTab.css';
import ButtonClose from '../../Components/Buttons/ButtonsClose/ButtonsClose';
import '../../Components/Buttons/Buttons.css';

const SuccessTab = () => {
    return (
        <div className="SuccessTab">
            <h3 className="SuccessTab__Title">Your registration was successfully.</h3>
            {localStorage.getItem('Github') && (<>
                <p>Full Name: {localStorage.getItem('FullName')}</p>
                <p>Nickname: {localStorage.getItem('Nickname')}</p>
                <p>Email: {localStorage.getItem('Email')}</p>
                <p>Phone: {localStorage.getItem('Phone')}</p>
                <p>Birthday: {localStorage.getItem('day')}/{localStorage.getItem('month')}/{localStorage.getItem('year')}</p>
                <p>Age: {localStorage.getItem('age')}</p>
                <p>Linkedin: {localStorage.getItem('Linkedin')}</p>
                <p>Github: {localStorage.getItem('Github')}</p>
                <p>Certificates: {localStorage.getItem('certificatesList').split(',').map(certificate=>{
return (<p> {certificate}</p>) 
                })}</p>
                <p>Team Name: {localStorage.getItem('teamname')}</p>
                <p>Institution: {localStorage.getItem('institution')}</p>
                <p>Graduation: {localStorage.getItem('graduation')}</p> 

            </>)}

            <div className="SuccessTab__Buttons btn-to-right">
                <ButtonClose />
            </div>
        </div>
    )
}


export default SuccessTab;

