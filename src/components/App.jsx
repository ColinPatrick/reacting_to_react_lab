import React, { Component, Fragment } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Don't delete me.",
            placeholder: "eCorp or fSociety?",
            faction: '',
            message: "I don't know you. I don't trust you.",
            hasLoaded: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
    }

    handleClick(e) {
        this.setState(
            {
                hasLoaded: true
            }
        )
        
    }

    handleClick2(e) {
        if (this.state.faction === "eCorp" || this.state.faction === "fSociety") {
            this.setState(
                {
                    message: "You have chosen " + this.state.faction + ". I hope you can live with your choice."
                }
            )
        } else {
            this.setState(
                {
                    message: "You didn't choose either? What are you playing at?"
                }
            )
        }
    }

    handleChange(value) {
        this.setState(
            { 
                faction: value                
            }
        );
    };

    // I added the 'componentDidMount' method since it was in the instructions, but I commented it out because I customized the code to work differently - namely the way the button listeners work

    // componentDidMount() {
    //     this.setState(
    //         {
    //             hasLoaded: true
    //         }
    //     );
    // };

    render() {
        if (this.state.hasLoaded === true) {
            return (
                <Fragment>
                    <h1>Hello, {this.props.name}</h1>
                    <p>{this.state.text}</p>
                    <input 
                    placeholder={this.state.placeholder}
                    value={this.state.faction}
                    onChange={ (event) => this.handleChange(event.target.value)} 
                    />
                    <br />
                    <br />
                    <button onClick={this.handleClick2}>Choose</button>
                    <br />
                    <p>{this.state.message}</p>
                </Fragment>
                );
        } else {
            return (
                <Fragment>
                    <h1>LOADING...</h1>
                    <button onClick={this.handleClick}>LOAD!</button>
                </Fragment>
            )
        }
    };
};

export default App;