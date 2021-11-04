import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const Header = ({ title }) => {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6'>{title}</Typography>
                    <Button color='inherit'>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
