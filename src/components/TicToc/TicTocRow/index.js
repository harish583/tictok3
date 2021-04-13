import React, { Component } from 'react'
import TicTocElement from '../TicTocElement'

class TicTocRow extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div>
                <TicTocElement row={this.props.row} col={1}  ev={this.props.eve}  isCompleted={this.props.isCompleted}  isGameOver={this.props.isGameOver}/>
                <TicTocElement  row={this.props.row} col={2} ev={this.props.eve} isCompleted={this.props.isCompleted} isGameOver={this.props.isGameOver} />
                <TicTocElement  row={this.props.row} col={3} ev={this.props.eve} isCompleted={this.props.isCompleted} isGameOver={this.props.isGameOver}/>
            </div>
        )
    }
}
export default  TicTocRow;