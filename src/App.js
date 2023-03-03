import React from 'react';
import './App.css';
import axios from 'axios';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { advice: " " };
  }

  componentDidMount() {
    this.fetchAdvice();


  }
  fetchAdvice() {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const {advice} = response.data.slip;
        this.setState({
          advice
        });
      
      }).catch((error) => {
        return error.message;
      })
  }
 handleClick=()=>{
  const {advice}=this.fetchAdvice();
  this.setState({
    advice

  })
 }
  render() {
    const {advice}=this.state;
    return (
               
      <div className="App">
        <div className="card">
        <h1 className='heading'>{advice}</h1>
        <button onClick={this.handleClick}>
        !motivating--don't stop
        </button>
        </div>
      </div>
    );

  }
}
export default App;
