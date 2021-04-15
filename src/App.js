import React from "react";
import "./App.css";
//import Card from "./component/card.component.jsx"
import "tachyons";
import CardList from "./component/Cardlist/cardlist.component";
import { Searchbox } from "./component/searchbox/searchbox.component";
import Scroll from "./component/Scroll/scroll.component";
import { connect } from "react-redux";
import { setSearchfield, requestRobots } from "./redux/actions";
class App extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
      <h1>Loading...</h1>
    ) : (
      <div className="App tc">
        <h1 className="f1">RobotFriend</h1>
        <Searchbox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //gets state from the redux store
  //it can only read the state and then it passes down the value recieved from the
  //redux to the component as a prop.
  return {
    searchField: state.searchRobots.searchField,
    isPending: state.robotsFetch.isPending,
    robots: state.robotsFetch.robots,
    error: state.robotsFetch.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  //gets state from the redux store
  //it can modify the state and then it passes down the value recieved from the redux
  //to the component as a prop.
  return {
    onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
