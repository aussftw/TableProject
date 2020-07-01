import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import {
  Paper,
  Button,
  TextField,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  TableRow,
  IconButton,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import { UserType } from '../../interfaces/index';
import { AppStateType } from '../../redux/store';
import { sortUsers, searchUser } from '../../redux/actions/usersAction';
import { setSingleUser } from '../../redux/actions/userAction';
import styled from 'styled-components';
import useStyles from './useStyles';

const TableDynamicContainer: React.FC = () => {
  const dispatch = useDispatch();

  const users: Array<UserType> = useSelector((state: AppStateType) => state.users.users);
  const sortField: string = useSelector((state: AppStateType) => state.users.sortField);
  const searchResults: Array<UserType> = useSelector((state: AppStateType) => state.users.searchResult);
  const [searchField, setSearcField] = useState<string>('');
  const [direction, setDirection] = useState<boolean>(false);

  const classes = useStyles();

  const directionNavigator = (direction: boolean) => {
    setDirection(!direction);
  };

  const inputSubmit = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      dispatch(searchUser(searchField, users));
    }
  };

  return (
    <TableWarapper>
      <SearchWrapper>
        <ContnentContainer>
          <p>Users</p>
          <div>
            <TextField
              onChange={(e) => setSearcField(e.target.value)}
              onKeyPress={(e) => inputSubmit(e)}
              placeholder="search"
              className={classes.textField}
            />

            <IconButton onClick={() => dispatch(searchUser(searchField, users))}>
              <SearchIcon />
            </IconButton>
          </div>
        </ContnentContainer>
      </SearchWrapper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                onClick={() => {
                  directionNavigator(direction), dispatch(sortUsers('userName', direction, users));
                }}
              >
                <CellWrapper>
                  Last name
                  <IconWrapper>
                    {sortField === 'userName' ? direction === true ? <ArrowDownwardIcon /> : <ArrowUpwardIcon /> : null}
                  </IconWrapper>
                </CellWrapper>
              </TableCell>
              <TableCell
                //TODO: add searchResults here
                onClick={() => {
                  directionNavigator(direction), dispatch(sortUsers('age', direction, users));
                }}
              >
                <CellWrapper>
                  Age
                  <IconWrapper>
                    {sortField === 'age' ? direction === true ? <ArrowUpwardIcon /> : <ArrowDownwardIcon /> : null}
                  </IconWrapper>
                </CellWrapper>
              </TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Cell</TableCell>
              <TableCell>Доп. Инфо</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchField.length > 0
              ? searchResults.map((item) => (
                  <TableRow key={item.login.uuid}>
                    <TableCell> {item.userName}</TableCell>
                    <TableCell> {item.age}</TableCell>
                    <TableCell>{item.gender}</TableCell>
                    <TableCell> {item.location.country}</TableCell>
                    <TableCell> {item.phone}</TableCell>
                    <TableCell> {item.cell}</TableCell>
                    <TableCell>
                      <Link href="/users/[userId]" as={`/users/${item.login.uiid}`}>
                        <Button onClick={() => dispatch(setSingleUser(item))}>Подробнее</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))
              : users.map((item) => (
                  <TableRow key={item.login.uuid}>
                    <TableCell> {item.userName}</TableCell>
                    <TableCell> {item.age}</TableCell>
                    <TableCell>{item.gender}</TableCell>
                    <TableCell> {item.location.country}</TableCell>
                    <TableCell> {item.phone}</TableCell>
                    <TableCell> {item.cell}</TableCell>

                    <TableCell>
                      <Link href="/users/[userId]" as={`/users/${item.login.uuid}`}>
                        <Button onClick={() => dispatch(setSingleUser(item))}>Подробнее</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableWarapper>
  );
};

export default TableDynamicContainer;

const TableWarapper = styled.div`
  margin-top: 4.5rem;
`;

const SearchWrapper = styled.div`
  border-collapse: collapse;
  border-radius: 4px 4px 0 0;
  background-color: #fff;
  border-top-color: rgb(128, 128, 128)
  border-left-color: rgb(128, 128, 128)
  border-right-color: rgb(128,128, 128)
  box-sizing: border-box;
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const ContnentContainer = styled.div`
  margin: 0 1rem;
  padding: 0.3rem 0;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const CellWrapper = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  margin: 0px 0px 3px 3px;
`;
