import React from "react";
import "./searchForm.css";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      checkIn: "",
      checkOut: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const { code, checkIn, checkOut } = this.state;
    this.props.onRequest(code, checkIn, checkOut);
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <img
          className="img-fluid"
          src="bedroom.jpg"
          alt="background"
          style={{ position: "absolute", zIndex: 1 }}
        />
        <form onSubmit={this.handleSubmit} className="mcontainer">
          <label htmlFor="Code">
            <b>Code</b>
          </label>
          <input
            type="text"
            placeholder="City or Airport Code"
            name="code"
            value={this.state.code}
            onChange={this.handleChange}
            required
          />

          <label htmlFor="Check-In">
            <b>Check-In Date</b>
          </label>
          <input
            type="text"
            placeholder="YYYY-MM-DD"
            name="checkIn"
            value={this.state.checkIn}
            onChange={this.handleChange}
            required
          />

          <label htmlFor="Check-Out">
            <b>Check-Out Date</b>
          </label>
          <input
            type="text"
            placeholder="YYYY-MM-DD"
            name="checkOut"
            value={this.state.checkOut}
            onChange={this.handleChange}
            required
          />

          <button type="submit" value="submit" className="mbtn">
            Search
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default SearchForm;
