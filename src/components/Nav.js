import React, {Component}from 'react';

 class Nav extends Component {

  
  render() {
    let props_data=this.props.data
    let data=props_data.map((value,index)=>(
        (<li key={props_data[index].id}>
          <a href={props_data[index].id}
          onClick={(e)=>{
            e.preventDefault();
            this.props.onChangeMode(index)
          }}
          >{props_data[index].title}</a>
          
        </li>)
    ))
    return (
      <nav>
       
       <ul>
         {data}
       </ul>
       
      </nav>
    );
  }
}

export default Nav;
