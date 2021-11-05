import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { SupervisorAccount, Storage } from '@material-ui/icons';

const Sidebar = ({ isLogged, setIsLogged }) => {
    return (
        <div className='w-2/12 h-screen bg-gray-800'>
            <div className='p-4 border-opacity-50 border-b bg-gray-700'>
                <Typography variant='h5' className='text-gray-50'>
                    IT School
                </Typography>
            </div>
            {isLogged ? (
                <div className='p-4 border-opacity-50 border-b'>
                    <Typography
                        variant='subtitle1'
                        gutterBottom
                        className='text-gray-50'
                    >
                        Teaching
                    </Typography>
                    <ul className='text-gray-400 text-sm'>
                        <li className='flex items-center'>
                            <SupervisorAccount className='mr-2 my-1' />
                            <Link to='/'>Students</Link>
                        </li>
                        <li className='flex items-center'>
                            <Storage className='mr-2 my-1' />
                            <Link to='/add_students'>Add Students</Link>
                        </li>
                        <li className='flex items-center'>
                            <Storage className='mr-2 my-1' />
                            <Link to='/random_topic'>Random Topic</Link>
                        </li>
                    </ul>
                </div>
            ) : (
                <div className='p-4 border-opacity-50 border-b text-red-500 flex flex-col items-center'>
                    <Typography variant='h6' gutterBottom>
                        Black Friday!
                    </Typography>
                    <Typography variant='h4' gutterBottom>
                        50% Off
                    </Typography>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
