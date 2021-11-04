import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const Header = ({ title, description }) => {
    const isLoggedIn = true;

    return (
        <div>
            <AppBar position='static'>
                <Toolbar
                    className='flex justify-between h-20'
                    style={{ backgroundColor: '#009be5' }}
                >
                    <div className=''>
                        <Typography variant='h6'>{title}</Typography>
                        <Typography variant='caption' display='block'>
                            {description}
                        </Typography>
                    </div>

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
