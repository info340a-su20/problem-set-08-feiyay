import React from 'react';
import ReactDOM from 'react-dom';

//render the App component here!
import {App} from './App';
import senators from "./senators";

ReactDOM.render(<App senators={senators}/>,document.getElementById("roots"));