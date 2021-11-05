import Header from './Header';

const Topics = ({ isLogged, setIsLogged }) => {
    return (
        <div className='w-10/12 bg-gray-100'>
            <Header
                title={isLogged ? 'Random Topic' : 'Try it now'}
                description={
                    isLogged
                        ? 'You can choose a random topic for your lesson here'
                        : 'The easiest way to master your work routine'
                }
                isLogged={isLogged}
                setIsLogged={setIsLogged}
            />
        </div>
    );
};

export default Topics;
