import { Component } from 'react';
import './App.css';
import BasicInfo from './Components/BasicInfo';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      person: {
              name: "Deborah Case",
              age: 24,
              dob: "03/12/1999"    
    },
    people: [
      {
        name: "Megan Pete",
        age: 28,
        dob: "02/15/1995"
        
      },
      {
        name: "Ari Lennox",
        age: 31,
        dob: "03/26/1991"
      },
      {
        name: "Beyonce Knowles-Carter",
        age: 41,
        dob: "09/04/1981"
      }
    ]
  }
}

  render(){
    const favArtists = this.state.people.map((people, index) => (
      <div key={index}>
        <BasicInfo person = {people}/>
      </div>
    ))

  return (
    <div>
      {/* <ul>
        <li>Deborah Case</li>
        <li>24</li>
        <li>555-555-5555</li>
      </ul> */}
      <BasicInfo person = {this.state.person}/>  
      {favArtists}    
    </div>
  )
}
}
export default App;
