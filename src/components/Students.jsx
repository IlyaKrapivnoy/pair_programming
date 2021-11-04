import { useEffect, useState } from 'react';
import Header from './Header';
import StudentsList from './StudentsList';

const Students = () => {
    const [students, setStudents] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/students')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setStudents(data);
            });
    }, []);

    return (
        <div className='w-10/12 bg-gray-100'>
            <Header
                title='Students'
                description='You can see the list of your students here'
            />

            {students && <StudentsList students={students} />}
        </div>
    );
};

export default Students;
