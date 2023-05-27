import CardList from "../components/cardList";
import Error from "../components/ErrorBoundary";
import SearchBox from "../components/SearchBox/SearchBar";
import React,{ Component} from "react";
import { connect } from 'react-redux';
import "../App.css"
import Scroll from "../components/scroll/Scroll";

class App extends Component{
    constructor() {
        super()// calls the constructor of the components
        /*state is a piece of data that describe our App */
        this.state = {
            Robots:[],//our Robots arrays
            SearchField:'', //an empty strings which is a variable
        }
    }
   
    componentDidMount(){
       
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
          response.json().then(users=>this.setState({  Robots:users,}) 
            ) })
        }
        /* 
   The componentDidMount method is a lifecycle method in React
    that is called after the component is rendered for the first time.
     In this code, it makes an HTTP request to the given URL
      and fetches a list of users. Once the response is received,
       it converts the response to JSON and updates the
    Robots state with the received user data.     
        
        */
    searchFunction=(event)=>{
        console.log(event.target.value)
        this.setState({SearchField:event.target.value})

/* 
searchFunction is an arrow function assigned to the class instance.
 It is an event handler that gets called whenever the value in the 
 search input field changes. It logs the value of the input field 
 to the console and updates the SearchField state with the new value.
*/

    }
    render(){
        const {Robots, SearchField}=this.state;//destructure for a cleaner code
    /* 
    This line uses object destructuring to extract the Robots
     and SearchField properties from the component's state. 
     It allows us to use these properties directly without having 
     to write this.state.Robots and this.state.SearchField every time.
    
    
    */    
        
        
        const filterRobot=Robots.filter(Robots => {
 return Robots.name.toLowerCase().includes(SearchField.toLowerCase())
 || Robots.email.toLowerCase().includes(SearchField.toLowerCase())
       
        })
        /* 
 This code creates a new variable called filterRobot 
 which is assigned the result of filtering the Robots
  array based on the SearchField value. The filter() function
   is an array method that creates a new array with all elements
    that pass a certain test.

In this case, a callback function is provided to the filter() method.
 The callback function takes a Robots parameter (which represents each
 individual robot object in the Robots array) and performs a check.
  It checks if either the name or email property of each Robots object
   includes the value in the SearchField (case-insensitive comparison).
    If the check returns true, the Robots object is included in the
     filtered array.

The toLowerCase() method is used to convert both the Robots property
 values and the SearchField value to lowercase. This ensures that the
  search is case-insensitive, allowing for a more flexible search.

Finally, the filterRobot array contains the filtered robot objects 
that match the search criteria  
        */
        return !Robots.length ?//means if no RobotArray, we are loading
<h1>loading...</h1>: 
                <div className="tc"> 
                <h1 >Princeley-Friends</h1>
                <SearchBox searching={this.searchFunction}
               />
                <Scroll>
                <Error>
                <CardList RobotArrays={filterRobot}
                 />
                </Error>
                  
                </Scroll>
                
                </div>
             }
              }

              const mapStateToProps = (state) => ({
                store: state,
              });

              export default connect(mapStateToProps)(App);