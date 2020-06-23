import React, { Component } from 'react';

class Article extends Component {
  render() {
    let props_mode = this.props.mode
    let props_welcom = this.props.welcome
    let props_read = this.props.read

    let content
    if (props_mode === "welcome") {
      content = <> <h2>{props_welcom.title}</h2><p>{props_welcom.desc}</p></>
    }
    else if (props_mode === "read") {
      let i = this.props.selected_content
      content = <> <h2>{props_read[i].title}</h2><p>{props_read[i].desc}</p></>
    }
    else if (props_mode === "create") {
      content = <><h2>create</h2><form method="post"><p><input type="text" name="title" placeholder="title" /></p>
        <p><textarea placeholder="description" name="desc"></textarea></p>
        <input type="submit" value="submit" /></form></>
    }
    return (
      <article>

        {content}

      </article>
    );
  }
}

export default Article;
