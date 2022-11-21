import React, {useState} from 'react';
import arrowDown from "../../assets/icons/arrow-down.svg"
import './Dropdown.css'

export default function Dropdown(params) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        isOpen === true ? setIsOpen(false) : setIsOpen(true);
    }
     
    return (
        <div id="dropdown" className={isOpen ? 'opened' : 'closed'}>
            <div id="dropdown-heading">
                <p>{params.name}</p>
                <img src={arrowDown} className="arrow" alt="arrow-down" onClick={toggleDropdown}/>
            </div>
            <div id="dropdown-content">
                {!Array.isArray(params.content) && <p>{params.content}</p>}
                {Array.isArray(params.content) && 
                    <ul>
                        {params.content.map((tag, id) => <li key={id}>{tag}</li>)}
                    </ul>
                }
            </div>
        </div>
    )
}