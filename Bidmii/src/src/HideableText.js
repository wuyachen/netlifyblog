import React from 'react';
import {Button} from '@material-ui/core'

class HideableText extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isHidden: false,
        }
    }

    render(){
        return (
            <div>
        <Button onClick={this.submit} disabled={!this.search} type = "submit" variant="contained" color="primary">
        Submit
        </Button>
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

export default HideableText