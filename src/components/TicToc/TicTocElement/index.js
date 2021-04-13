import React, { Component } from 'react'
import './index.css';

class TicTocElement extends Component {
    constructor(){
        super();
        this.state={}
    }
    boxClicked=(e)=>{
        //debugger;
        if(e.target.classList.length == 2 && !this.props.isGameOver)
        {
            if(this.props.ev()){
                e.target.classList.add("green");
            }else{
                e.target.classList.add("red");
            }
            this.props.isCompleted();
        }
    }
    render() {
        var {row, col}=this.props;
        
        return (
            <div className="TicTocElement symbol" onClick={this.boxClicked}>
                {/* {row} {col} */}
                {/* <div className="symbol"></div> */}
            </div>
        )
    }
}
export default  TicTocElement;
