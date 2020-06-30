import { Typography, Card, CardHeader, CardContent, TextField, Button, IconButton, Box } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from '../../redux/store';

import useStyles from './useStyles';

const UserDetails: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const user = useSelector((state: AppStateType) => state.user.user);

  console.log(user);

  return (
    <>
      <Card className={classes.wrapper}>
        <CardHeader title={'User information'} className={classes.header} style={{ backgroundColor: '#77a0a9' }} />
        <CardContent className={classes.content}>
          <Box className={classes.textContainer}>
            <Typography className={classes.text}>321</Typography>
          </Box>

          <Typography className={classes.desc}>
            {user.name.title} {user.name.first} {user.name.last}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default UserDetails;
