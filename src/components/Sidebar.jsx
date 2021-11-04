import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { SupervisorAccount, Storage } from '@material-ui/icons';

const Sidebar = () => {
    return (
        <div className='w-2/12 h-screen bg-gray-800'>
            <div className='p-4 border-opacity-50 border-b bg-gray-700'>
                <Typography variant='h5' className='text-gray-50'>
                    IT School
                </Typography>
            </div>
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
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
