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
import { useDispatch } from 'react-redux';
import { setUsers } from '../../redux/actions/usersAction';
import Link from 'next/link';

const TableDynamicContainer: React.FC<TableContainerProps> = (props) => {
  const dispatch = useDispatch();

  const [sortConfig, setSortConfig] = useState<ISortConfig>({ key: '', direction: 'ascending' });
  // const [selected, setSelected] = useState<boolean>(false);

  const onSort = () => {
    const sortedProducts: Array<UserType> = props.users;
    sortedProducts.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    console.log(sortConfig, 'iside');
    dispatch(setUsers(sortedProducts));
  };

  const requestSort = (key: string | number) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
    // setSelected(!selected);
  };

  const arrow = sortConfig.direction === 'ascending' ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />;
  console.log(sortConfig, 'arrow');

  return (
    <TableWarapper>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                onClick={() => {
                  requestSort('userName');
                  onSort();
                }}
              >
                Name
                {sortConfig.key === 'userName' ? (
                  sortConfig.direction === 'ascending' ? (
                    <ArrowDownwardIcon />
                  ) : (
                    <ArrowUpwardIcon />
                  )
                ) : null}
              </TableCell>
              <TableCell
                onClick={() => {
                  requestSort('age'), onSort();
                }}
              >
                Age
                {sortConfig.key === 'age' ? (
                  sortConfig.direction === 'ascending' ? (
                    <ArrowUpwardIcon />
                  ) : (
                    <ArrowDownwardIcon />
                  )
                ) : null}
              </TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Cell</TableCell>
              <TableCell>Доп. Инфо</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.users.map((item) => (
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

interface TableContainerProps {
  users: Array<UserType>;
}

interface ISortConfig {
  key: string | number;
  direction: string;
}

const TableWarapper = styled.div`
  margin-top: 10rem;
`;
