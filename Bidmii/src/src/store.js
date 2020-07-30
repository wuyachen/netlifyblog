import React from 'react';
import {Button} from '@material-ui/core'

function findAndReplace(string, target, replacement) {
  var i = 0, length = string.length;
  for (i; i < length; i++) {
    string = string.replace(target, replacement);
  }
  return string;
 }

class App extends React.Component {
  
  state = {
    query:'',
    suggestion:[],
    questions:[]
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
    const URL = `http://search-dev1.bidmii.com:8080/search?q=fix+my+lawn`;
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data)
    //this.setState({questions: , loading: false});
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
  }


  submit = (event) =>{
    let obj = findAndReplace(this.search.value, " ", "+");
    event.preventDefault();
    console.log(this.search.value);
    console.log(obj);
    this.fectchUrl();
  }

  render(){

    return( 
      <div  className = "App">
      <form>
        <input type="text"
                onChange={this.searchHandler}
                placeholder = "Type here.."
                ref={input => this.search = input}
          />
        <Button onClick={this.submit} disabled={!this.search} type = "submit" variant="contained" color="primary">
        Submit
        </Button>

        </form>
        <ul>
            <li>
              {this.state.suggestion}
              {this.state.questions}
            </li>
            </ul>
      </div>
    )
  }
}

export default App;


