//TODO: writing test
//TODO: Validation
//TODO: Add toastify to alert user for error
//TODO: Add date picker instead of text in form
//TODO: Add Environment variable for API BASE URL(now it's hard coded)

import React, { Component } from "react";
import SearchForm from "../../components/searchForm/SearchForm.js";
import HotelResult from "../../components/hotelResult/HotelResult.js";
import Spinner from "../../components/spinner/Spinner.js";
import getHotels from "../../services/hotelSearchService";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchData: false,
      data: []
    };

    this.handleRequest = this.handleRequest.bind(this);
  }

  async handleRequest(code, checkIn, checkOut) {
    this.setState({ fetchData: true });
    try {
      const result = await getHotels(code, checkIn, checkOut);
      if (result.data.body.length) {
        this.setState({ data: [...result.data.body] });
      }
    } catch {
      this.setState({ data: [] });
    } finally {
      this.setState({ fetchData: false });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div />
        <SearchForm onRequest={this.handleRequest} />
        {this.state.fetchData && <Spinner />}
        {this.state.data.length && <HotelResult hotels={this.state.data} />}
      </React.Fragment>
    );
  }
}

export default App;
