import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./reduxstore";
import PresentComponent from "./components/presentComponent/present.component";

import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from "./components/headerComponent/header.component";
import AutoCompleteLocal from "./components/autoCompleteComponent/autoCompleteLocal.component";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <HeaderComponent/>
                <AutoCompleteLocal/>
                <br/>
                <PresentComponent/>
            </div>
        </Provider>
    );
}

export default App;
