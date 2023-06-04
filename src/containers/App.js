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

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
});

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

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

export default connect(mapStateToProps, mapDispatchToProps)(App);