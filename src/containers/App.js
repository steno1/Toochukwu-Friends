import CardList from "../components/cardList";
import Error from "../components/ErrorBoundary";
import SearchBox from "../components/SearchBox/SearchBar";
import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import Scroll from "../components/scroll/Scroll";
import { setSearchField, requestRobots } from "../action";

const mapStateToProps = (state) => {
  return {
    searchFielder: state.search.searchField,
    robots: state.request.robots,
    isPending: state.request.isPending,
    error: state.request.error
  };
};
/* The mapStateToProps function is a Redux pattern used
 to map the Redux store's state to component props. 
 It returns an object with properties that will be accessible 
 within the component. In this case, it maps the searchField, 
 robots, isPending,and error from the Redux store to
  the component's props.*/

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
});
/* onSearchChange function,which is action creator,  passed an 
event object with a target.value property. In typical React
 event handling, the target.value usually
 represents the value of an input field, such as a search field.*/

 /* the onRequestRobots function in the App.js file is
  an action creator. It is a function that returns an action, 
  which is an object that describes an intention to change the
   state in Redux.*/


/* The mapDispatchToProps function is another Redux pattern used
 to map dispatch actions to component props. It returns an object 
 with functions that will be accessible within the component.
  In this case, it maps the
 onSearchChange and onRequestRobots actions to the component's props.*/

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

/* The componentDidMount lifecycle method is 
called after the component is mounted in the DOM.
 It triggers the onRequestRobots action to fetch the robot data.*/


  render() {
    const { searchFielder, onSearchChange, robots, isPending } = this.props;

    const filteredRobots = robots.filter((robot) => {
      return (
        robot.name.toLowerCase().includes(searchFielder.toLowerCase()) ||
        robot.email.toLowerCase().includes(searchFielder.toLowerCase())
      );
    });

    return isPending ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1>Princeley-Friends</h1>
        <SearchBox searching={onSearchChange} />
        <Scroll>
          <Error>
            <CardList RobotArrays={filteredRobots} />
          </Error>
        </Scroll>
      </div>
    );
  }
}
/* The render method renders the component's JSX code. 
It first filters the robots array based on the searchField value. Then, it conditionally renders either a loading message or the main content of the application, which includes a heading, a SearchBox component,
 a Scroll component, an Error component, and a CardList component.*/

export default connect(mapStateToProps, mapDispatchToProps)(App);