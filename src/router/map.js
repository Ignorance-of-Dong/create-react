import React from "react"
import {Route,Switch,Redirect} from "react-router-dom"

class RouterMap extends React.Component{
    render(){
        const {route}=this.props;
        const defaultRouter=<Route path="/" component={()=>{
            return <Redirect to="/index" key={22}/>
        }} key={22}/>
        return <Switch>
            {
                route.map((item,index)=>{
                    const Comp=item.component
                    return <Route path={item.path} component={()=>{
                        return <Comp route={item.children}></Comp>
                    }} key={index}/>
                }).concat(defaultRouter)
            }

        </Switch>
   
    }
}

export default RouterMap