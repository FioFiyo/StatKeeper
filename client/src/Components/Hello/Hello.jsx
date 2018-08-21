import React, {Component} from 'react';
import style from './Hello.css';

class Hello extends Component{
  render(){
    return(
      <h1 className={style.hello}>Hello</h1>
    )
  }
}

export default Hello;
