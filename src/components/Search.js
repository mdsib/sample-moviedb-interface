import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';

const backToTop = (listName) => {
  if (listName !== 'top') {
    return <Link to='/'>back to popular movies</Link>
  }
}
export default class extends Component {
  handleSubmit(e) {
    e.preventDefault();
    browserHistory.push(`/?query=${this.refs.search.value}`);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input ref="search" />
          <button type="submit">Search</button>
        </form>
        {backToTop(this.props.listName)}
      </div>
    )
  }
}
