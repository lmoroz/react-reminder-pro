import React, { Component } from 'react';
import moment from 'moment-timezone';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true
        };
        // this.addReminder = this.addReminder.bind(this);
        this.addCheckActive = this.addCheckActive.bind(this);
    }

    componentWillMount () {
        moment.tz.setDefault('Asia/Irkutsk');
        // console.log('App componentWillMount');
    }
    componentDidMount () {
        // console.log('App componentDidMount');
        this.taskInput.focus();
    }

    addReminder (e) {
        this.props.addReminder(
            this.taskInput.value,
            moment(this.timeInput.value).toDate()
        );
        console.log('addReminder!', this.props.addReminder);
        if (e.type === 'submit') e.preventDefault();
        this.taskInput.value = '';
    }

    deleteReminder (id) {
        console.log('deleting in application', id);
        this.props.deleteReminder(id);
    }

    addCheckActive() {
        const newValue = this.taskInput.value;
        if (newValue > '' && this.state.disabled)
            this.setState({disabled: false});
        else if (!newValue && !this.state.disabled)
            this.setState({disabled: true});
    }

    renderReminders() {
        const { reminders } = this.props;
        // console.log('renderReminders!', this);
        return (
            <ul className="list-group">
                {
                    reminders.map((reminder) => (
                        <li key={reminder.id} className="list-group-item clearfix">
                            <span className="list-item">{reminder.text}</span>
                            <button
                                className="list-item btn btn-danger btn-xs pull-right"
                                onClick={() => this.deleteReminder(reminder.id)}
                            >
                                &#x2715;
                            </button>
                            <div className="list-item time">
                                {
                                    moment(new Date(reminder.dueDate))
                                    .locale('ru')
                                    .fromNow()
                                }
                            </div>
                        </li>))
                }
            </ul>
        );
    }

    render() {
        console.log('Form render!', this.props);
        return (
            <div className="App">
                <div className="App-title">
                    <h2>Reminder Pro</h2>
                </div>
                <div className="form-inline reminder-form">
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="I have to…"
                            ref={(c) => { this.taskInput = c; }}
                            onChange={this.addCheckActive}
                        />
                        <input
                            className="form-control"
                            type="datetime-local"
                            defaultValue={moment(Date.now()).format('YYYY-MM-DDTHH:mm')}
                            ref={(c) => { this.timeInput = c; }}
                        />
                        <button
                            className="btn btn-success"
                            type="button"
                            onClick={(e) => this.addReminder(e)}
                            disabled={this.state.disabled}
                        >
                            Add this
                        </button>
                    </div>
                    { this.renderReminders() }
                    <button
                        className="btn btn-danger"
                        type="button"
                        onClick={() => this.props.clearReminders()}
                    >
                        Clear all
                    </button>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    addReminder: React.PropTypes.func.isRequired,
    deleteReminder: React.PropTypes.func.isRequired,
    clearReminders: React.PropTypes.func.isRequired,
    reminders: React.PropTypes.array.isRequired,
};


export default connect((state) => ({
    reminders: state
}), { addReminder, deleteReminder, clearReminders })(App);
