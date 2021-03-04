import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchField from "./components/SearchField";
import { robots } from "./robots";
import "./app.css";

class App extends Component {
  componentDidMount() {}
  // state init
  state = { searchTerm: "", robotha: robots };
  // event handler
  onSearchChange = e => {
    this.setState({ searchTerm: e.target.value });
  };
  render() {
    // const robotha = this.state.robotha;
    // const searchTerm = this.state.searchTerm;
    const { robotha, searchTerm } = this.state; //deconstructing
    const filterRobots = robotha.filter(robot => {
      return robot.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return (
      <div className="app">
        <h1>ROBOTs</h1>
        <SearchField onSearchChanged={this.onSearchChange} />
        <CardList robots={filterRobots} />
      </div>
    );
  }
}

export default App;
