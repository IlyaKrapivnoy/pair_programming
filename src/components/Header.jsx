import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { useState } from 'react';

const Header = ({ title, description }) => {
    // const isLogged = true;
    const [isLogged, setIsLogged] = useState(false);

    return (
        <div>
            <AppBar position='static'>
                <Toolbar
                    className='flex justify-between h-20'
                    style={{ backgroundColor: '#009be5' }}
                >
                    <div className=''>
                        <Typography variant='h6'>{title}</Typography>
                        <Typography
                            variant='caption'
                            display='block'
                            className='text-gray-200'
                        >
                            {description}
                        </Typography>
                    </div>

                    {isLogged ? (
                        <Button
                            variant='outlined'
                            color='inherit'
                            onClick={() => setIsLogged(!isLogged)}
                        >
                            Log Out
                        </Button>
                    ) : (
                        <Button
                            variant='contained'
                            onClick={() => setIsLogged(!isLogged)}
                        >
                            Log In
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
