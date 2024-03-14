import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
const username = "Shreya" //evaluation part here
const ReactElement = React.createElement(
  'a',
  { href: "https://google.com", target: "_blank" },
  `Visit Google  `,
  username //evaluated expression only..(no evaluation)
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App/>
  ReactElement
);


