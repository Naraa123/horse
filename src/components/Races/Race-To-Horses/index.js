import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class RaceToHorses extends Component {
  state = { races: [], error: null };

  componentDidMount = () => {
    axios
      .get("http://localhost:5000/race")
      .then((result) => this.setState({ races: result.data.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div class="bg-gray-200 w-80 text-center p-4 pt-6">
        <p class="mb-1 text-2xl">Уралдаан</p>
        <div class="w-full h-1 mb-5 bg-gray-800" />
        {this.state.races.map((el) => (
          <div class="pb-3">
            <Link to={`/race/ID-${el.id}`}>
              <a>{el.race_name}</a>
              <img src={`http://localhost:5000/profile/${el.photo}`} />
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
