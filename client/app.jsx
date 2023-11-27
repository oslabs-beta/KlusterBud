import React from "react";
import { ReactDOM } from "react-dom/client";
import './app.css'
import MainContainer from './Containers/MainContainer'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MainContainer/>)
const App = () => {
    return(
    <>
    <h1>Hello World</h1>
    <div>
    <MainContainer/>
    </div>
    </>)
}
export default App;