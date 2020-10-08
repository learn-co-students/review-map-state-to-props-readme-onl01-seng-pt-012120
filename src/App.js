import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  handleOnClickItems() {
    // this.props.store.dispatch({
    this.props.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    // this.props.store.dispatch({
    this.props.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }

  render() {
    // debugger;
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <p>items count {this.props.items.length}</p>
          {/*<p>users count {this.props.users.length}</p>*/}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // debugger;
  return { items: state.items, users: state.users }
  // return { orangePeel: ['a', 'b', 'c'] }
}

export default connect(mapStateToProps)(App);
// connects to our store that's set up in our shoppingListItemReducer
// passes the state as an argument into mapStateToProps so that an object
// can be returned that's formatted correctly with the data we want to 
// expose to the App component 

// const vanilla = milkshake => {
//   debugger;
//   return { items: milkshake.items }
// }

// export default connect(vanilla)(App)