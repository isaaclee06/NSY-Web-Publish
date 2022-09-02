import React, { Component } from 'react';
import testService from '../services/testService';



class Landing extends Component {
  state = {
    catFact: ""
  };


  componentDidMount = () => {
    //this.testPostAPI();
    //this.testGetAPI();
    this.testFreeGet();
  };

  testFreeGet = () => {
    testService.testFreeEndpoint()
            .then(this.onGetTestSuccess)
      //.catch(this.onGetTestError)
  };

  onGetTestSuccess = (response) => {
    
    this.setState({
      catFact: response.data.fact
    });

   
  };

  onGetTestError = (response) => {
    this.setState({
      catFact: "No Cat Facts for now :("
    });
  };

render() {
  return (
    <div>
      Welcome to NSY
      <div>
        Fact: {this.state.catFact}
      </div>
    </div>
  )
}
    };


export default Landing