import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));
// const element = React.createElement('p', null, <h1>Hello World!</h1>)
// root.render(element);
root.render(<App />)