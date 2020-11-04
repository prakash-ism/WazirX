import React from 'react';
import "./EnablePopUpComp.css";
import Popup from './Popup';
export default function EnablePopupComp(){
    return (
        <>
        {/* <button onClick={() => { document.getElementById("myModal").style.display = "block" }}>
            PopUp
        </button>
        <div id="myModal" className="modal">
            <div className="modal-content">
                Hello
            </div>
        </div> */}
        <button onClick={enablePopup}></button>
        <Popup isOpen={} closePopup={}/>
        
        </>
    )
}