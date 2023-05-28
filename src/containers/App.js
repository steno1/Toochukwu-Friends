
import CardList from "../components/cardList";
import Error from "../components/ErrorBoundary";
import SearchBox from "../components/SearchBox/SearchBar";
import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import Scroll from "../components/scroll/Scroll";
import { setSearchField } from "../action";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      Robots: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        response.json().then((users) =>
          this.setState({
            Robots: users,
          })
        );
      });
  }

  searchFunction = (event) => {
    this.props.onSearchChange(event); // Call the dispatched action to update the search field in the Redux store
  };

  render() {
    const { Robots } = this.state;
    const { searchField, onSearchChange } = this.props;

    const filterRobots = Robots.filter((robot) => {
      return (
        robot.name.toLowerCase().includes(searchField.toLowerCase()) ||
        robot.email.toLowerCase().includes(searchField.toLowerCase())
      );
    });

    return !Robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1>Princeley-Friends</h1>
        <SearchBox searching={onSearchChange} />
        <Scroll>
          <Error>
            <CardList RobotArrays={filterRobots} />
          </Error>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);