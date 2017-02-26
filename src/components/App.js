import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        // this.addReminder = this.addReminder.bind(this);
        this.addCheckActive = this.addCheckActive.bind(this);
    }

    componentWillMount () {
        // console.log('App componentWillMount');
    }
    componentDidMount () {
        // console.log('App componentDidMount');
        this.taskInput.focus();
    }

    addReminder () {
        // const newValue = this.taskInput.value;
        // console.log('this.taskInput.value = ', newValue);
        console.log('this', this);
        this.props.addReminder(this.taskInput.value);
        // if (e.type === 'submit') e.preventDefault();
    }

    addCheckActive() {
        const newValue = this.taskInput.value;
        if (newValue > '' && this.state.disabled)
            this.setState({disabled: false});
        else if (!newValue && !this.state.disabled)
            this.setState({disabled: true});
    }

    render() {
        // console.log('Form render!');
        return (
            <div className="App">
                <div className="App-title">
                    <h2>Reminder Pro</h2>
                </div>
                <div className="form-inline">
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="I have to…"
                            ref={(c) => { this.taskInput = c; }}
                            onChange={this.addCheckActive}
                            // onChange={(event) => this.setState({text: event.target.value})}
                        />
                        <button
                            className="btn btn-success"
                            type="button"
                            onClick={() => this.addReminder()}
                            // disabled={!this.state.text}
                        >
                            Add this
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { addReminder })(App);
