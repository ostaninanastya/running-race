import React from 'react'
import {connect} from 'react-redux'
import {addRunner} from '../actions'
import 'react-input-calendar/style/index.css'
import 'react-phone-number-input/style.css'
import RunRequestForm from "../components/RunRequestForm";
import {reset} from 'redux-form';
import moment from 'moment'

const AddRunner = ({dispatch}) => {
    const generate = (newRunner) => {
        newRunner.date = newRunner.date.toLocaleString().substring(0, 10);
        newRunner.distance = Number(newRunner.distance);
        newRunner.registerDate = moment().format('YYYY/MM/DD');
        return newRunner;
    };
    return (
        <div>
            <RunRequestForm onSubmit={newRunner => {
                dispatch(addRunner(generate(newRunner)));
                dispatch(reset('addRunnerForm'));
            }}/>
        </div>
    )
}

export default connect()(AddRunner)