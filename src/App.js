import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Article from './components/Article'
import Control from './components/Control'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'welcome',
      selected_content: 0,
      welcome: { title: "Hellow world", desc: "hello react" },
      subject: { title: "WEB", sub: "world wide web" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is HyperText Markup Language" },
        { id: 2, title: "CSS", desc: "CSS is Cascading Style Sheets" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" }
      ]
    }
  }
  render() {

    return (
      <div>
        <Header title={this.state.subject.title} sub={this.state.subject.sub}
          onChangeMode={() => {
            this.setState({
              mode: 'welcome'
            })
          }}
        ></Header>
        <Nav data={this.state.contents}
          onChangeMode={(index) => {
            this.setState({
              mode: 'read',
              selected_content: index
            })
          }}
        ></Nav>
        <Control
          onChangeMode={(mode) => {
            this.setState({
              mode: mode
            })
          }}
        ></Control>
        <Article mode={this.state.mode}
          welcome={this.state.welcome}
          read={this.state.contents}
          selected_content={this.state.selected_content}>
        </Article>
      </div>
    );
  }
}

export default App;
