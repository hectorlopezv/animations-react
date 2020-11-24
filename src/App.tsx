import React, { Component } from 'react';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { Transition } from 'react-transition-group';


interface Props {
  
}
interface State {
  
}

 class App extends Component<Props, State> {
  state = {
    modalIsOpen: false,
    showBlock: false
  }
  
  showModal = () =>{
    this.setState({modalIsOpen: true});
  }

  closeModal = () =>{
    this.setState({modalIsOpen: false});
  }


  render() {
    const duration = 300;//change beetween transition
    //in Determines if component should be visible
    return (
      <div className="App">
      <h1>React Animations</h1>
      
      <button className="Button" onClick={() => {
        this.setState((prevState:any) => {
          return {showBlock: !prevState.showBlock}
        });
      }}>Toogle</button>

      <Transition in={this.state.showBlock} timeout={duration}>
        {state => (

        <div style={{
          backgroundColor: "red",
          width: 100,
          height: 100,
          margin: 'auto',
          opacity: state === 'exited' ? 0 : 1
        }}></div> 
        )}

      </Transition>

      
      {this.state.modalIsOpen ?<Modal  show={this.state.modalIsOpen} closed={this.closeModal}/> :null}
      {this.state.modalIsOpen? <Backdrop show={this.state.modalIsOpen}/> : null}
      <button className="Button" onClick={this.showModal}>Open Modal</button>
      <h3>Animating Lists</h3>
      <List />
      </div>
    );
  
  }
}


export default App;
