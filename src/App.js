import React, {Component}from 'react';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Article from './components/Article'

 class App extends Component {
   constructor(props){
     super(props)
     this.state={}
   }
  render() {
    return (
      <div>
       <Header title="WEB"></Header>
       <Nav></Nav>
       <Article subtitle="Welcome" contents="World wide web"></Article>
      </div>
    );
  }
}

export default App;
