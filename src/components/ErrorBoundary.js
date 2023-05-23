import  { Component } from "react";

class Error extends Component{
constructor (props){
    super(props);
    this.state={
        hasError:false,

    }
}
componentDidCatch(error, errorInfo){
    this.setState({hasError:true})
}
render(){
    return this.state.hasError?
    <h1>oophs Something went wrong...</h1>:
     this.props.children
}
}
export default Error; 



