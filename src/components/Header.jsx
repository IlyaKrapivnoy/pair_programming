import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const Header = ({ title }) => {
    const isLoggedIn = true;

    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6'>{title}</Typography>
                    {isLoggedIn ? (
                        <Button color='inherit'>Log Out</Button>
                    ) : (
                        <Button color='inherit'>Log In</Button>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
