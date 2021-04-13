import React from "react";
import './index.css';
import {Link } from "react-router-dom";

class NavElement extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        return (
            <div className="navelement">
                {/* {this.props.element} */}
                <Link to={this.props.element} >{this.props.element} </Link>
        {/* <a href={this.props.element}>{this.props.element}</a> */}
            </div>
        )
    }
}
export default NavElement;