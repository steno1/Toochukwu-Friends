
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
    searchFields: state.search.searchFielder,
    robots: state.request.requestRobots,
    isPending:state.request.isPending,
    error:state.request.error
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


  render() {
    const { Robots } = this.state;
    const { searchFields, onSearchChange } = this.props;

    const filterRobots = Robots.filter((robot) => {
      return (
        robot.name.toLowerCase().includes(searchFields.toLowerCase()) ||
        robot.email.toLowerCase().includes(searchFields.toLowerCase())
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