import React, {Component}from 'react';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Article from './components/Article'

 class App extends Component {
   constructor(props){
     super(props)
     this.state={
       mode:'welcome',
       welcome:{title:"Hellow world", desc:"hello react"},
       subject:{title:"WEB", sub:"world wide web"},
       contents:[
         {id:1, title:"HTML", desc:"HTML is HyperText Markup Language"},
         {id:2, title: "CSS", desc:"CSS is Cascading Style Sheets"},
         {id:3, title:"JavaScript", desc:"JavaScript is ..."}
       ]
     }
   }
  render() {
    return (
      <div>
       <Header title={this.state.subject.title} sub={this.state.subject.sub}></Header>
       <Nav data={this.state.contents}></Nav>
       <Article mode={this.state.mode} welcome={this.state.welcome} read={this.state.contents}></Article>
      </div>
    );
  }
}

export default App;
