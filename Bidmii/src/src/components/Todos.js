import React from 'react';
import { render } from '@testing-library/react';
import { Component } from 'react';
import ReactDOM from 'react-dom';

let profiles = [{"name":"John"}, {"name":"Kitty"}, {"name":"Ji"}, {"name":"Mattis"}]

class Todos extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 1,
      disabledNext: false,
      disabledPrev: false
    }
  }

  togglePrev(e) {
    let index = this.state.index - 1;
    let disabledPrev = (index === 0);

    this.setState({ index: index, disabledPrev: disabledPrev, disabledNext: false })
  }

   toggleNext(e) {
     let index = this.state.index + 1;
     let disabledNext = index === (this.props.profiles.length - 1);

     this.setState({ index: index, disabledNext: disabledNext, disabledPrev: false })
   }

   render() {
     const { index, disabledNext, disabledPrev } = this.state
     const profile = this.props.profiles ? this.props.profiles[index] : null

       return (
         <div className='profile'>
           <div>
             <Prev toggle={(e) => this.togglePrev(e)} active={disabledPrev} />
             <Next toggle={(e) => this.toggleNext(e)} active={disabledNext} />
           </div>
           <Profile {...profile} />
         </div>
       )
     }
  }

function Prev(props) {
  return (
    <button onClick={props.toggle} disabled={props.active}>Previous</button>
  );
}

function Next(props) {
  return (
    <button onClick={props.toggle} disabled={props.active}>Next</button>
  );
}

function Profile(props) {
  return (
    <div>
       <h1>{props.name}</h1>
    </div>
  );
}

const Apps = () => (
  <div>
    <Todos profiles={profiles} />
  </div>
)

ReactDOM.render(
  <Apps />,
  document.getElementById('root')
)

export default Todos;


