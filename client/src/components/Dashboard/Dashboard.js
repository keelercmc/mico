import React, {Component} from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Fab onClick={() => console.log('test')}color='secondary' aria-label='add'><AddIcon/></Fab>
                <Fab color='dark' aria-label='edit'><EditIcon /></Fab>
            </div>
            
        );
    }
}

export default Dashboard;