import clsx from 'clsx';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Paper, Button } from '@material-ui/core';

import styled from 'styled-components';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { UserType } from '../../interfaces/index';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortUsers } from '../../redux/actions/usersAction';

import Link from 'next/link';
import { AppStateType } from '../../redux/store';

const TableDynamicContainer: React.FC = () => {
  const dispatch = useDispatch();

  const users: Array<UserType> = useSelector((state: AppStateType) => state.users.users);
  const sortField: string = useSelector((state: AppStateType) => state.users.sortField);
  const [direction, setDirection] = useState<boolean>(false);

  const directionNavigator = (direction: boolean) => {
    setDirection(!direction);
  };

  return (
    <TableWarapper>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                onClick={() => {
                  directionNavigator(direction), dispatch(sortUsers('userName', direction, users));
                }}
              >
                Name
                {sortField === 'userName' ? direction === true ? <ArrowDownwardIcon /> : <ArrowUpwardIcon /> : null}
              </TableCell>
              <TableCell
                onClick={() => {
                  directionNavigator(direction), dispatch(sortUsers('age', direction, users));
                }}
              >
                Age
                {sortField === 'age' ? direction === true ? <ArrowUpwardIcon /> : <ArrowDownwardIcon /> : null}
              </TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Cell</TableCell>
              <TableCell>Доп. Инфо</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((item) => (
              <TableRow key={item.login.uuid}>
                <TableCell> {item.userName}</TableCell>
                <TableCell> {item.age}</TableCell>
                <TableCell>{item.gender}</TableCell>
                <TableCell> {item.location.country}</TableCell>
                <TableCell> {item.phone}</TableCell>
                <TableCell> {item.cell}</TableCell>
                <TableCell>
                  <Link href="/users/[userId]" as={`/users/${item.login.uiid}`}>
                    <Button>Подробнее</Button>
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
  margin-top: 10rem;
`;
