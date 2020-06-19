import React from 'react';

import Button from '@material-ui/core/Button';

import classes from './Toolbar.module.css';

const toolbar = () => {
    return (
        <div>
            <header className={classes.Toolbar + ' ' + classes.Home}>
                <Button href='/' variant='contained' color='secondary'>Home</Button>
            </header>
            <header className={classes.Toolbar + ' ' + classes.Login}>
                <Button href='/login' variant='contained' color='secondary'>Login</Button>
            </header>
        </div>
        
    )
}

export default toolbar;