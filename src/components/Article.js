import React, {Component}from 'react';

 class Article extends Component {
  render() {
    let props_mode=this.props.mode
    let props_welcom=this.props.welcome
    let props_read=this.props.read

    let title,desc
    if(props_mode==="welcome"){
      title=props_welcom.title
      desc=props_welcom.desc
    }
    else{
      title=props_read[0].title
      desc=props_read[0].desc
    }
    return (
      <article>

       <h2>{title}</h2>
        <p>{desc}</p>

      </article>
    );
  }
}

export default Article;
