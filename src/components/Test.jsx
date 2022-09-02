import React, { Component } from 'react';
import testService from '../services/testService';
import logo from '../logo.svg';
import { Button } from 'react-bootstrap';




class Test extends Component {
    state = {
        test: "",
        test2: "",
        activeUsersCount: 0,
        dailyActiveUsersCount: 0,
    };


    componentDidMount = () => {
        //this.testPostAPI();
        //this.testGetAPI();
        this.testFreeGet();
    };

    testFreeGet = () => {
        testService.testFreeEndpoint()
            .then(this.onGetFreeSuccess)
    };

    testPostAPI = () => {
        testService.testPostEndpoint("tEst")
            .then(this.onTestSuccess)
    };

    testGetAPI = () => {
        testService.testEndpoint()
            .then(this.onGetTestSuccess)
    };

    onGetTestSuccess = (response) => {
        this.setState({
            test2: response.data
        });
        //console.log(response.data.ip)
    };

    onGetFreeSuccess = (response) => {
        this.setState({
            test: response.data.fact
        });
        console.log(response.data)
    };

    onTestSuccess = (response) => {
        console.log(response)
        this.setState({
            test: response.item
        });
    };



    render() {
        console.log(this.state.test2)
        return (
            <header className="">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <div className='ButtontTest'>
                    <Button variant="outline-primary">Primary</Button>
                </div>
                <div className='test'>
                    <div>

                        TEST : {this.state.test}
                    </div>

                    <div>
                        Test2 : {this.state.test2}

                    </div>
                </div>
            </header>

        )
    }

};

export default Test