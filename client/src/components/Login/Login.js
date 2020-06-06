import React, {Component} from 'react';

import classes from './Login.module.css';

import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class Login extends Component {
    render() {
        return(
            <Formik
                initialValues={{username: '', password: ''}}
                onSubmit={values => {console.log(values)}}
                validationSchema={Yup.object().shape({
                    username: Yup.string().min(8).required('Required'),
                    password: Yup.string().min(8).required('Required')
                })}
            >
                {props => {
                    const {
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    } = props;
                    return (
                        <form onSubmit={handleSubmit}>
                            <div className={classes.Inputs}>
                                <input
                                    id='username'
                                    placeholder='Enter username'
                                    type='text'
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.username && touched.username ? `${classes.Input} ${classes.Error}` : classes.Input}
                                />
                                {errors.username && touched.username && (<div className={classes.Feedback}>{errors.username}</div>)}

                                <input
                                    id='password'
                                    placeholder='Enter password'
                                    type='text'
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.password && touched.password ? `${classes.Input} ${classes.Error}` : classes.Input}
                                />
                                {errors.password && touched.password && (<div className={classes.Feedback}>{errors.password}</div>)}
                            </div>
                            <ButtonGroup variant='contained' color='secondary' >
                                <Button type='submit'>Log in</Button>
                                <Button type='submit'>Sign up</Button>
                            </ButtonGroup>
                        </form>
                    );
                }}
            </Formik>
        );
    }
}

export default Login;