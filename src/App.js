import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Header from './components/Header/Header.js';
import Content from './components/Content/Content.js';
import Footer from './components/Footer/Footer.js';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      notification: "Click any image to begin",
      score: 0,
      topScore: 0
    }

    this.updateState= this.updateState.bind(this);

  }

  updateState(result){
    this.setState({
      notification: (result === 0) ? "Guessed incorrectly :(": "Guessed correctly :)",
      score: result,
      topScore: this.state.topScore < result ? result : this.state.topScore
    });
  }

  render() {
    return (
      <div>
        <Navigation notification={this.state.notification} score={this.state.score} topScore={this.state.topScore}/>
        <Header/>
        <Content updateResults={this.updateState}/>
        <Footer/>
      </div>
    )
  }
}

export default App;
