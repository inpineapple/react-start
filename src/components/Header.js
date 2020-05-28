import React, {Component}from 'react';

 class Header extends Component {
  render() {
    return (
      <header>
        
    <h1><a href='index.html'>{this.props.title}</a></h1>
       
      </header>
    );
  }
}

export default Header;
