import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
    state = { 
        text: '',
     }

     handleText = e => {
         this.setState({
             text: e.target.value
         })
     }

     handleClick = () => {
         const { text } = this.state
         if(text.length > 0) {
             const add = this.props.add(text) // moment dodania nowego zadania
             if(add === true) {   
                 this.setState({
                     text: ''
                 })
             }
         } else {
            alert('Wpisz coś!')
         }
     }


    render() { 
        return ( 
            <div className="add">
                <input type="text" placeholder="Wpisz treść zadania" value={this.state.text} onChange={this.handleText}/>
                <button className="btnAdd" onClick={this.handleClick}>Dodaj</button>
            </div>
         );
    }
}
 
export default AddTask;