import "./App.scss";
import { Experience } from "./Components/Experience";
import { Header } from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: false,
    };
    this.toggleMode = this.toggleMode.bind(this);
  }
  toggleMode() {
    this.setState({
      preview: !this.state.preview,
    });
  }
  render() {
    return (
      <div
        className={`App ${
          this.state.preview ? "resume--preview" : "resume--edit"
        }`}
      >
        <div className="App__title">Resume Builder</div>
        <Header />
        <Sidebar />
        <Experience />
        <button className="button--mode" onClick={this.toggleMode}>
          {this.state.preview ? "Edit Mode" : "Preview Mode"}
        </button>
      </div>
    );
  }
}

export default App;
