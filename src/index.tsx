import React from 'react'
import {createRoot} from 'react-dom/client';
import Core from "./modules/core/Core";


const container = document.getElementById('root');

const root = createRoot(container!);
root.render(<Core/>);
