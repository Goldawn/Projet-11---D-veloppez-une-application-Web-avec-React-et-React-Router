import React, {useState} from 'react';
import arrowUp from "../../assets/icons/arrow-up.svg"
import './Dropdown.css'

export default function Dropdown(params) {

    const [isOpen, setIsOpen] = useState(params.isOpen ? params.isOpen : false);

    const toggleDropdown = () => {
        isOpen === true ? setIsOpen(false) : setIsOpen(true);
    }
     
    return (
        <div id="dropdown" className={isOpen ? 'opened' : 'closed'}>
            <div id="dropdown-heading">
                <p>{params.name}</p>
                <img src={arrowUp} className="arrow" alt="arrow-down" onClick={toggleDropdown}/>
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