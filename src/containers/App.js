import CardList from "../components/cardList";
import Error from "../components/ErrorBoundary";
import SearchBox from "../components/SearchBox/SearchBar";
import React,{ Component} from "react";
import "../App.css"
import Scroll from "../components/scroll/Scroll";

class App extends Component{
    constructor() {
        super()// calls the constructor of the components
        /*state is a piece of data that describe our App */
        this.state = {
            RobotsArray:[],//our Robots arrays
            SearchField:'', //an empty strings which is a variable
        }
    }
   
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then(response=>{
          response.json().then(users=>this.setState({  RobotsArray:users,}) 
            ) })
        }
    searchFunction=(event)=>{
        console.log(event.target.value)
        this.setState({SearchField:event.target.value})

//this passes the value of an object

    }
    render(){
        const {RobotsArray, SearchField}=this.state;//destructure for a cleaner code
        const filterRobot=RobotsArray.filter(Robots => {
            return Robots.name.toLowerCase().includes(SearchField.toLowerCase())
            || Robots.email.toLowerCase().includes(SearchField.toLowerCase())
       
        })
        return !RobotsArray.length ?//means if no RobotArray, we are loading
<h1>loading...</h1>: 
                <div className="tc"> 
                <h1 >Princeley-Friends</h1>
                <SearchBox searching={this.searchFunction}/>
                <Scroll>
                <Error>
                <CardList RobotArray={filterRobot}/>
                </Error>
                  
                </Scroll>
                
                </div>
             }
              }

export default App;