const StudentsList = ({ students }) => {
    return (
        <div>
            {students.map((student) => (
                <div key={student.id}>
                    <h2>{student.name}</h2>
                    <p>Written by {student.id}</p>
                </div>
            ))}
        </div>
    );
};

export default StudentsList;
