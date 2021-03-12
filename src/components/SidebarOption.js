import React from 'react'
import './SidebarOption.css';

function SidebarOption({ Icon, title, number }) {
    return (
        <div className="sidebarOption">
            <img src={Icon} alt={title} />
            <h1>{title}</h1>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOption
