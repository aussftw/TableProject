import { useSelector } from 'react-redux';
import { AppStateType } from '../../redux/store';
import UserDetails from '../../components/UserDetails/UserDetails';
import { LoaderWrapper } from '../index';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const User: React.FC = () => {
  const isLoggined = useSelector((state: AppStateType) => state.login.isLogin);

  return (
    <>
      {isLoggined ? (
        <Wrapper>
          <UserDetails />
        </Wrapper>
      ) : (
        <LoaderWrapper>
          <Typography style={{ fontSize: 24, fontWeight: 'bold' }}>You need to login</Typography>
        </LoaderWrapper>
      )}
    </>
  );
};

export default User;

const Wrapper = styled.div`
  margin: 7rem auto;
  @media (min-width: 998px) {
    margin: 10rem auto;
  }
`;
