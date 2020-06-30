import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from '../redux/store';
import { getUsers } from '../redux/actions/usersAction';
import { Typography } from '@material-ui/core';
import TableDynamicContainer from '../components/TableContainer/TableContainer';
import styled from 'styled-components';

const IndexPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const usersLoading: boolean = useSelector((state: AppStateType) => state.users.usersLoading);
  const isLoggined = useSelector((state: AppStateType) => state.login.isLogin);

  return (
    <>
      {isLoggined ? (
        usersLoading ? (
          <LoaderWrapper>
            <Typography style={{ fontSize: 24, fontWeight: 'bold' }}>Loading...</Typography>
          </LoaderWrapper>
        ) : (
          <TableDynamicContainer />
        )
      ) : (
        <LoaderWrapper>
          <Typography style={{ fontSize: 24, fontWeight: 'bold' }}>You need to login</Typography>
        </LoaderWrapper>
      )}
    </>
  );
};

export default IndexPage;

export const LoaderWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
