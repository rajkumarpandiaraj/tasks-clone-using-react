import React from 'react';
import {listItemEnter,listItemLeave, makeActive} from '../func/asideFunc'

function AsideListItem(props) {
    const { icon, title, active } = props;
    return (
        <li className={active ? 'list-item active' : 'list-item'} onClick={makeActive} onMouseEnter={listItemEnter} onMouseLeave={listItemLeave}>
            <div className="icon">
                <i className={`fas ${icon}`}></i>
            </div>
    <span className="list-title">{title}</span>
        </li>
    )
}

export default AsideListItem
