import React, {Component}from 'react';

class Control extends Component {
  
    render() {
      return (
        <section>
            <ul>
                <li>
                    <button onClick={()=>{this.props.onChangeMode("create")}}>create</button>
                </li>
                <li>
                <button onClick={()=>{this.props.onChangeMode("update")}}>update</button>
                </li>
                <li><button onClick={()=>{this.props.onChangeMode("delete")}}>delete</button></li>
            </ul>
        </section>
      );
    }
  }
  
  export default Control;
  