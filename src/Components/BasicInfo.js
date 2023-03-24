
import { Component } from 'react';

class BasicInfo extends Component {
constructor(props){
    super (props)
}

render(){
    return(
        <div>
        <ul>
            <li>{this.props.person.name}</li>
            <li>{this.props.person.age}</li>
            <li>{this.props.person.dob}</li>
        </ul>
        </div>

    )
}

}

export default BasicInfo