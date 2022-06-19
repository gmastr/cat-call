import React from 'react';
import { Paper } from '@mui/material';

export function Home(props) {

    return (
        <div className="centered">
            <Paper className="centered" sx={{ height: '100vh', width: '100%', maxWidth: '800px', overflowY: 'auto' }}>
                <p> Home </p>
            </Paper>
        </div>
    );
}