import Header from './Header';

const AddStudents = ({ isLogged, setIsLogged }) => {
    return (
        <div className='w-10/12 bg-gray-100'>
            <Header
                title={isLogged ? 'Add Students' : 'Try it now'}
                description={
                    isLogged
                        ? 'You can add your students here'
                        : 'The best portal for the best teachers'
                }
                isLogged={isLogged}
                setIsLogged={setIsLogged}
            />
        </div>
    );
};

export default AddStudents;
