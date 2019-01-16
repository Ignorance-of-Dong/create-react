import React from "react"
import RouterMap from "./map"
import Route from "./routes"
class RouterView extends React.Component{
    render(){
        const {route}=this.props
        return  <RouterMap route={route===undefined?Route:route}></RouterMap>
        
    }
}
export default RouterView