import React from "react";
import "./App.css";
//import Card from "./component/card.component.jsx"
import "tachyons";
import CardList from "./component/Cardlist/cardlist.component";
import { Searchbox } from "./component/searchbox/searchbox.component";
import Scroll from "./component/Scroll/scroll.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchbox: "",
    };
  }
  Onsearchchange = (event) => {
    this.setState({ searchbox: event.target.value });
  };
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((people) => {
        this.setState({ robots: people });
      });
  }

  render() {
    const { robots, searchbox } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchbox.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="App tc">
        <h1 className="f1">Robot Friend</h1>
        <Searchbox searchChange={this.Onsearchchange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
