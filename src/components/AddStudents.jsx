import Header from './Header';

const AddStudents = ({ isLogged, setIsLogged }) => {
    return (
        <div className='w-10/12 bg-gray-100'>
            <Header
                title='Add Students'
                description='You can add your students here'
                isLogged={isLogged}
                setIsLogged={setIsLogged}
            />
        </div>
    );
};

export default AddStudents;
