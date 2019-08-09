import React from 'react'
import {Field, reduxForm} from 'redux-form'
import "react-datepicker/dist/react-datepicker.css";
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Button from '@material-ui/core/Button';
import {
    DatePicker,
    SelectField,
    TextField,
} from 'redux-form-material-ui';
import './../index.css';

const required = value => (value == null ? 'Required' : undefined);
const phoneNumber = value =>
    value && !/^\+7(0|[1-9][0-9]{9})$/i.test(value)
        ? 'Invalid. Format: +7**********'
        : undefined
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined
const number = value =>
    value && isNaN(Number(value)) ? 'Must be a number' : undefined


const SyncValidationForm = (props) => {
    const {handleSubmit, submitting, invalid, pristine} = props
    return (
        <MuiThemeProvider>
            <form className="newRunner" onSubmit={handleSubmit}>
                <div className="formField">
                    <Field
                        name="name"
                        component={TextField}
                        className="formField"
                        floatingLabelText="ФИО"
                        validate={required}
                    />
                </div>
                <div className="formField">
                    <Field
                        name="date"
                        component={DatePicker}
                        hintText="Дата рождения"
                        floatingLabelText="Дата рождения"
                        format={(value, name) => value === '' ? null : value}
                        validate={required}
                    />
                </div>
                <div className="formField">
                    <Field
                        name="email"
                        component={TextField}
                        floatingLabelText="Email"
                        validate={[required, email]}
                    />
                </div>
                <div className="formField">
                    <Field
                        name="phone"
                        component={TextField}
                        floatingLabelText="Телефон"
                        validate={[required, phoneNumber]}
                    />
                </div>
                <div className="formField">
                    <Field
                        name="distance"
                        component={SelectField}
                        floatingLabelText="Дистанция"
                        validate={required}
                    >
                        <MenuItem value="3" primaryText="3 км"/>
                        <MenuItem value="5" primaryText="5 км"/>
                        <MenuItem value="10" primaryText="10 км"/>
                    </Field>
                </div>
                <div className="formField">
                    <Field
                        name="payment"
                        component={TextField}
                        floatingLabelText="Сумма взноса, руб"
                        validate={[required, number]}
                    />
                </div>
                <div className="newRequestButton">
                    <Button style={{width: '256px'}} variant="outlined" type="submit"
                            disabled={submitting || invalid || pristine}>
                        Отправить заявку
                    </Button>
                </div>
            </form>
        </MuiThemeProvider>
    )
};

export default reduxForm({
    form: 'addRunnerForm'
})(SyncValidationForm)
