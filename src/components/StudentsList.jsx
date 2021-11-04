import {
    Card,
    CardActions,
    CardContent,
    IconButton,
    Typography,
    Button,
} from '@material-ui/core';
import { Close, RemoveCircleOutline } from '@material-ui/icons';

const StudentsList = ({ students }) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                margin: 40,
                flexWrap: 'wrap',
            }}
        >
            {students.map((student) => (
                <Card
                    key={student.id}
                    style={{
                        width: 250,
                        height: 160,
                        margin: '20px 0',
                        textAlign: 'right',
                    }}
                >
                    <CardActions className='flex justify-between'>
                        <IconButton aria-label='share'>
                            <RemoveCircleOutline />
                        </IconButton>
                        <Button variant='outlined'>Info</Button>
                    </CardActions>
                    <CardContent>
                        <Typography
                            variant='body2'
                            color='textSecondary'
                            component='p'
                        >
                            Number: {student.id}
                        </Typography>
                        <Typography
                            variant='body2'
                            color='textSecondary'
                            component='p'
                        >
                            Name: {student.name}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default StudentsList;
