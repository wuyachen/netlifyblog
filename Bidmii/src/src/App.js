import React from 'react';
import {Button} from '@material-ui/core'
import './App.css'

class App extends React.Component {
  state = {
    query:'',
    suggestion:[],
    questionLst:[],
    obj:'',
    isHidden:false,
    text:'',
  }

  onChange = selectedSug =>{
    this.setState({
      selectedSug: selectedSug || []
    })
  }
  async componentDidMount(){
    const url = `http://search-dev1.bidmii.com:8080/autocomplete?q=${this.state.query}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({suggestion: data.suggestions, loading: false});
  }

  async fectchUrl(){
    var x = []
    var i = 0
    const URL = `http://search-dev1.bidmii.com:8080/search?q=${this.obj}`;
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    for (i = 0; i < data.questions.length; i++){
      x[i] = data.questions[i].question;
    }
    this.setState({questionLst: x});
    
  }
  
  searchHandler = () => {
    this.setState({
      query: this.search.value
    },() => {
      if (this.state.query && this.state.query.length > 1) {
          this.componentDidMount()
      } else if (!this.state.query) {
      }
    })
    this.setState({ text:this.search.value})
  }


  submit = (event) =>{
    this.setState((currentState) => ({
      isHidden: !currentState.isHidden,
    }))
    event.preventDefault();
    this.obj = this.search.value;
    this.fectchUrl();
  }

  suggestionSelected(value){
    this.setState(() => ({
      text: value,
      suggestion:[],
    }))
  }

  render(){
    const {text} = this.state; 
    return( 
      <div  className = "App">
      <form>
        <input type="text"
                onChange={this.searchHandler}
                placeholder = "Type here.."
                ref={input => this.search = input}
                value = {text}
          />
        </form>
        <Button onClick={this.submit} disabled={!this.search} type = "submit" variant="contained" color="primary">
        Submit
        </Button>
        <div className = "App-component">
        <ul>
              {!this.state.isHidden && this.state.suggestion && 
              this.state.suggestion.map((i) => <li onClick={() => this.suggestionSelected(i)}>{i}</li>)}
              
            </ul>
            </div>
            <div className = "App-questions">
            {this.state.questionLst && this.state.questionLst.map((i) => <li>{i}</li>) }
            </div>
      </div>
    )
  }
}

export default App;


