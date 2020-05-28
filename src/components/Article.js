import React, {Component}from 'react';

 class Article extends Component {
  render() {
    return (
      <article>

       <h2>{this.props.subtitle}</h2>
        <p>{this.props.contents}</p>

      </article>
    );
  }
}

export default Article;
