import React from 'react';
import './style.scss'
import ActionButton from "./components/ActionButton";
const Core = () => {
    return (
        <div className='Core'>
        <ActionButton size={30}/>
        </div>
    );
};

export default React.memo(Core);
