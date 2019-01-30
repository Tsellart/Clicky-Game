import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Bean from "./beans.json";
import "./App.css";

class App extends Component {
  state = {
    Bean,
    clickedBean: [],
    score: 0
  };

  imageClick = event => {
    var currentBean = event.target.alt;
    var BeanAlreadyClicked =
      this.state.clickedBean.indexOf(currentBean) > -1;


    if (BeanAlreadyClicked) {
      this.setState({
        Bean: this.state.Bean.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedBean: [],
        score: 0
      });
        alert("A bean lost is never forgotten. Play again?");


    } else {
      this.setState(
        {
          Bean: this.state.Bean.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedBean: this.state.clickedBean.concat(
            currentBean
          ),
          score: this.state.score + 1
        },
        
        () => {
          if (this.state.score === 10) {
            alert("Beantastic! You Win!");
            this.setState({
              Bean: this.state.Bean.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedBean: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.Bean.map(Bean => (
            <FriendCard
              imageClick={this.imageClick}
              id={Bean.id}
              key={Bean.id}
              image={Bean.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;