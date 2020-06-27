import { useState } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Typography, Box, Button, Modal, Backdrop, Fade, Container, IconButton } from '@material-ui/core';
import { LoginUserType } from '../../interfaces/index';
import styled from 'styled-components';
import useStyles from './useStyles';
import Router from 'next/router';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/actions/loginActions';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState<LoginUserType>({ login: '', password: '' });
  const [open, setOpen] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const classes = useStyles();

  const onSubmit = async () => {
    dispatch(logIn(true));
    setUserData({ login: '', password: '' });
    setOpen(false);
    await Router.push('/');
  };

  const handleClickShowPassword = () => {
    setShowPassword(() => !showPassword);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.container}>
        <ValidatorForm autoComplete="off" onSubmit={onSubmit} noValidate={true}>
          <Typography variant="h5" className={classes.title}>
            Login
          </Typography>
          <TextValidator
            value={userData.login}
            name="login"
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            onChange={(e: React.ChangeEvent) => handleChange(e)}
            variant="outlined"
            placeholder="Name"
            validators={['required', 'matchRegexp:[^\\s]{3}(.){0,117}']}
            errorMessages={['This field is required', 'Login must be between 3 and 120 characters']}
            className={classes.textField}
          />
          <TextValidator
            value={userData.password}
            name="password"
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            onChange={(e: React.ChangeEvent) => handleChange(e)}
            variant="outlined"
            // label="Password"
            placeholder="Password"
            autoComplete="true"
            validators={['required', 'matchRegexp:^[a-zA-Z0-9]{3,16}$']}
            errorMessages={[
              'this field is required',
              'Your password must be 3-16 characters, including only latin letters and numbers',
            ]}
            className={classes.textField}
            InputProps={{
              type: showPassword ? 'text' : 'password',
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" className={classes.btn} onClick={() => setOpen(true)}>
            Login
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={() => setOpen(false)}
            closeAfterTransition
            disablePortal
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Container className={classes.paper}>
                <Typography className={classes.modalText}>Are you sure that you want to create this user?</Typography>
                <ButtonsContainer>
                  <Button type="submit" className={classes.modalBtn} onSubmit={onSubmit}>
                    Yes
                  </Button>
                  <Button className={classes.modalBtn} onClick={() => setOpen(false)}>
                    No
                  </Button>
                </ButtonsContainer>
              </Container>
            </Fade>
          </Modal>
        </ValidatorForm>
      </Box>
    </Box>
  );
};

export default Login;

const ButtonsContainer = styled.div`
  display: flex;
  margin: 2rem 0;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 992px) {
    width: 50%;
  }
`;
