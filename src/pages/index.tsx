import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserType } from '../interfaces/index';
import { AppStateType } from '../redux/store';

import { getUsers } from '../redux/actions/usersAction';

import { Typography } from '@material-ui/core';
import TableDynamicContainer from '../components/TableContainer/TableContainer';
import styled from 'styled-components';

const IndexPage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    console.log(localStorage.getItem('loggined'), 'storage');
  }, []);

  const users: Array<UserType> = useSelector((state: AppStateType) => state.users.users);
  const usersLoading: boolean = useSelector((state: AppStateType) => state.users.usersLoading);
  const isLoggined = useSelector((state: AppStateType) => state.login.isLogin);

  // pagination

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);

  const handleClick = (event: React.MouseEvent) => {
    setCurrentPage(event.target.name);
  };

  // pagination logic

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  // navigation buttons logic

  // const pageNumbers = [];
  // for (let i = 1; i <= Math.ceil(users.length / itemsPerPage); i++) {
  //   pageNumbers.push(i.toString());
  // }

  console.log(isLoggined, 'redux');
  return (
    <>
      {isLoggined ? (
        usersLoading ? (
          <LoaderWrapper>
            <Typography style={{ fontSize: 24, fontWeight: 'bold' }}>Loading...</Typography>
          </LoaderWrapper>
        ) : (
          // <LoaderWrapper>
          <TableDynamicContainer users={users} />

          // </LoaderWrapper>
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

const User = styled.div`
  padding-right: 1rem;
  width: 32.7%;
  margin-bottom: 2rem;
  display: flex;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
  @media (max-width: 992px) {
    width: 50%;
    padding-right: 10px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0;
  }
`;

const UsersWrapper = styled.div`
  display: flex;
  flex-flow: row wrap !important;
  justify-content: flex-start;
  margin: 5rem 1rem;
`;

const NavigationButtonsWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 2rem auto;
  }
`;

const NavButton = styled.button`
  cursor: pointer;
  margin: 0 5px;
  border-radius: 10px;
  padding: 8px 24px;
  font-size: 14px;
  background-color: #77a0a9;
  color: #fff;
  font-weight: 600;
  line-height: 1.75;
  outline: none;
  border: none;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  & :hover {
    background-color: #6f7d8c;
  }
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
