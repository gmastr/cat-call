import { Paper } from '@mui/material';

export function ChatList(props) {
    return (
        <div className="centered">
            <Paper sx={{ height: '100vh', width: '100%', maxWidth: '800px' }}>
                <p>Chats</p>
            </Paper>
        </div>
    );
}