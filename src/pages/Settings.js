import { Paper } from '@mui/material';

export function Settings(props) {
    return (
        <div className="centered">
            <Paper sx={{ height: '100vh', width: '100%', maxWidth: '800px' }}>
                <p>Settings</p>
            </Paper>
        </div>
    );
}