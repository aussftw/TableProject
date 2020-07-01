import { Typography, Card, CardHeader, CardContent, Box, IconButton } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Router from 'next/router';

import useStyles from './useStyles';

const UserDetails: React.FC = () => {
  const user = useSelector((state: AppStateType) => state.user.user);
  const classes = useStyles();
  const router = Router;

  return (
    <>
      <Card className={classes.wrapper}>
        <CardHeader
          title={'User information'}
          className={classes.header}
          action={
            <IconButton aria-label="back" onClick={() => router.back()}>
              <ArrowBackIcon />
            </IconButton>
          }
        />
        <CardContent className={classes.content}>
          <Box className={classes.textContainer}>
            <Typography className={classes.text}>
              {user.name.title} {user.name.first} {user.name.last}
            </Typography>
          </Box>

          <Typography className={classes.desc}>Age {user.age}</Typography>
          <Typography className={classes.desc}>Gender {user.gender}</Typography>
          <Typography className={classes.desc}>Email {user.email}</Typography>
          <Typography className={classes.desc}>Country {user.location.country}</Typography>
          <Typography className={classes.desc}>City {user.location.city}</Typography>
          <Typography className={classes.desc}>Phone {user.phone}</Typography>
          <Typography className={classes.desc}>Cell {user.cell}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default UserDetails;
