import React from "react";
import { ReactDOM } from "react-dom/client";
import './app.css'
import MainContainer from './Containers/MainContainer'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MainContainer/>)
const App = () => {
    return(
    <>
    <h1 id='klusterbud'>KlusterBud!</h1>
    <div>
    <MainContainer/>
    </div>
    </>)
}
export default App;