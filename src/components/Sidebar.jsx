import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div>
            {' '}
            <ul>
                <li>
                    <Link to='/'>Students</Link>
                </li>
                <li>
                    <Link to='/add_students'>Add Students</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
