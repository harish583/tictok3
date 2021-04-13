import React, { Component } from 'react'
import TicTocRow from './TicTocRow'
import {TrueCase} from '../../constants';
import './index.css';
class TicToc extends Component {
    constructor(){
        super();
        this.state={
            isGreen:true,
            isGameCompleted:false,
            isGreenwin:false
        }
    }
    setColor=()=>{
        if(!this.state.isGameCompleted){
        //this.checkCompleted();
        if(this.state.isGreen){
            this.setState({isGreen:false});
            return true;
        }else{
            this.setState({isGreen:true});
            return false;
        }
    }
        
    };
    isSubset=(arr1, arr2, m, n)=>
    {
        let i = 0;
        let j = 0;
        for (i = 0; i < n; i++) {
            for (j = 0; j < m; j++)
                if (arr2[i] == arr1[j])
                    break;
            if (j == m)
                return false;
        }
        return true;
    }
    checkCompleted=()=>{
        var green=[],red=[];
        var y = document.getElementsByClassName("TicTocElement symbol");
        for(let s =0 ;s<y.length;s++){
            //debugger;
            if(y[s].classList.contains("green")){
                green.push(s);
            }
            if(y[s].classList.contains("red")){
                red.push(s);
            }
        }
        var trues = [];
        if(red.length>2 || green.length > 2){
        for(let yy =0 ;yy<TrueCase.length;yy++){
            // if(TrueCase[yy].length === red.length && TrueCase[yy].every((value, index) => value === red[index])){
            //     this.setState({isGameCompleted:true,isGreenwin:false});
            //     console.log("red win");
            // }else if(TrueCase[yy].length === green.length && TrueCase[yy].every((value, index) => value === green[index])){
            //     console.log("Green win");
            //     this.setState({isGameCompleted:true,isGreenwin:true});
            // }
            if(red.length > 2 && this.isSubset(red,TrueCase[yy],red.length,TrueCase[yy].length,)){
                this.setState({isGameCompleted:true,isGreenwin:false});
                     console.log("red win");
            } else if(green.length>2 && this.isSubset(green,TrueCase[yy],green.length,TrueCase[yy].length)){
                this.setState({isGameCompleted:true,isGreenwin:true});
                     console.log("red win");
            }
        }
    }
    };
    render() {
        return (
            <>
                <TicTocRow row={1} eve={this.setColor} isCompleted={this.checkCompleted} isGameOver={this.state.isGameCompleted}/>
                <TicTocRow row={2} eve={this.setColor} isCompleted={this.checkCompleted} isGameOver={this.state.isGameCompleted}/>
                <TicTocRow row={3} eve={this.setColor} isCompleted={this.checkCompleted} isGameOver={this.state.isGameCompleted}/>
                {this.state.isGameCompleted && this.state.isGreenwin ? <div class='green win'>Green Win</div> : this.state.isGameCompleted && !this.state.isGreenwin ? <div class='red win'>Red Win</div> : ""}
            </>
        )
    }
}
export default  TicToc;
