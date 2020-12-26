import React from 'react';
import '../assests/aside.css';
import AsideListItem from './AsideListItem';

function Aside() {
    return (
        <aside className="side-bar">
            <ul className="list">
                <AsideListItem icon='fa-lightbulb' title='Notes'  active={true}/>
                <AsideListItem icon='fa-bell' title='Reminder'/>
                <AsideListItem icon='fa-pen' title='Edit labels  '/>
                <AsideListItem icon='fa-archive' title='Archive'/>
                <AsideListItem icon='fa-trash-alt' title='Trash'/>
            </ul>
        </aside>
    )
}

export default Aside
