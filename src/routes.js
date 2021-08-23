import React from "react";
import { Switch, Route,Redirect } from 'react-router-dom';
import AppContent2 from "./components/AppContent2";
import AppContent3 from "./components/AppContent3";
import NotFound from "./components/NotFound";
import Tictoc from "./components/TicToc";
class NavRoutes extends React.Component{
    render(){
        return(
            <Switch>
                <Route default exact path='/Tictoc' component={Tictoc}/>
                <Route exact path='/Link2' component={AppContent2} />
                <Route exact path='/link3' component={AppContent3}/>
                <Route exact path="/"> <Redirect to="/Tictoc" /></Route>
                <Route component={NotFound}/>
            </Switch>
        )
    }
}
export default  NavRoutes;