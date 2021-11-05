import Header from './Header';
import { useEffect, useState } from 'react';

const Topics = ({ isLogged, setIsLogged }) => {
    const [topic, setTopic] = useState('');

    useEffect(() => {
        fetch('http://localhost:8000/students')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setTopic(data);
                // console.log('data', data);
            });
    }, []);

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
            {topic.map((topic) => (
                <div key={topic.id}>{topic.next_topic}</div>
            ))}
        </div>
    );
};

export default Topics;
