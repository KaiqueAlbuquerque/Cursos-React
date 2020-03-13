import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './Pages/Home/Home';
import Sobre from './Pages/Sobre/Sobre';
import Livros from './Pages/Livros/Livros';
import NotFound from './Pages/NotFound/NotFound';
import Autores from './Pages/Autores/Autores';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={Home} />   
            <Route path='/autores' component={Autores} />    
            <Route path='/sobre' component={Sobre} />    
            <Route path='/livros' component={Livros} />    
            <Route component={NotFound} />    
        </Switch> 
    </BrowserRouter>
    , document.getElementById('root'));