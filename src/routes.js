import React from "react";
import { Switch, Route,Redirect } from 'react-router-dom';
import AppContent2 from "./components/AppContent2";
import AppContent3 from "./components/AppContent3";
import Tictoc from "./components/TicToc";
class NavRoutes extends React.Component{
    render(){
        return(
            <Switch>
                <Route default path='/Tictoc' component={Tictoc}/>
                <Route path='/link2' component={AppContent2} />
                <Route path='/link3' component={AppContent3}/>
                <Route exact path="/"> <Redirect to="/Tictoc" /></Route>
            </Switch>
        )
    }
}
export default  NavRoutes;