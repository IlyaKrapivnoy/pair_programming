import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const Header = ({ title, description, isLogged, setIsLogged }) => {
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
                    <div className='flex items-center'>
                        {isLogged ? (
                            <div className=''>
                                <Typography
                                    variant='subtitle1'
                                    className='text-gray-50'
                                >
                                    Tomas Edison
                                </Typography>
                                <Typography
                                    variant='caption'
                                    className='text-gray-200'
                                >
                                    React JS
                                </Typography>
                            </div>
                        ) : (
                            <div className=''>
                                <Typography
                                    variant='subtitle1'
                                    className='text-gray-50'
                                >
                                    Teacher Name
                                </Typography>
                                <Typography
                                    variant='caption'
                                    className='text-gray-200'
                                >
                                    Subject
                                </Typography>
                            </div>
                        )}

                        {isLogged ? (
                            <Button
                                variant='outlined'
                                color='inherit'
                                onClick={() => setIsLogged(!isLogged)}
                                style={{ marginLeft: 30, width: 100 }}
                            >
                                Log Out
                            </Button>
                        ) : (
                            <Button
                                variant='contained'
                                onClick={() => setIsLogged(!isLogged)}
                                style={{ marginLeft: 30, width: 100 }}
                            >
                                Log In
                            </Button>
                        )}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
