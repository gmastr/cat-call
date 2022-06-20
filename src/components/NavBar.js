import { AppBar, Toolbar, Box } from '@mui/material';
import { Link } from "react-router-dom"
import SettingsIcon from '@mui/icons-material/Settings';
import ForumIcon from '@mui/icons-material/Forum';

export function NavBar(props) {
    return (
        <div className="centered">
            <AppBar position="relative" className="body" style={{ justifyContent: 'space-between' }}>
                <Toolbar style={{ justifyContent: 'space-between' }}>
                    <Box component={Link} to="/cat-call/settings">
                        <SettingsIcon style={{ fontSize: '30px' }} />
                    </Box>
                    <Box component={Link} to="/cat-call/" style={{textDecoration: 'none'}}>
                        <h1> CAT CALL </h1>
                    </Box>
                    <Box component={Link} to="/cat-call/chat">
                        <ForumIcon style={{ fontSize: '30px' }} />
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}