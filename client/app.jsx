import React from "react";
import { ReactDOM } from "react-dom/client";
import './app.css'
import MainContainer from './Containers/MainContainer';
import { Container } from "react-bootstrap";
import logo from './images/Logo.png';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MainContainer/>)
const App = () => {
    return(
    <>
    <Container id="TitleContainer">
        <div id='title'>
            <img src={logo} alt="" width={100} height={100}/>
            <h1 id='klusterbud'>KlusterBud</h1>
        </div>
    </Container>
    <div>
    <MainContainer/>
    </div>
    </>)
}
export default App;