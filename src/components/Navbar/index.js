import React from "react";
import './index.css';
import NavElement from '../NavElement';  
import navLinks from '../../constants';

class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar">
                {navLinks.map((a,b)=><NavElement key={b} element={a}/>)}
            </div>
        )
    }
}

export default Navbar;