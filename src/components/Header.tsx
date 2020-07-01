import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../redux/store';
import { logIn } from '../redux/actions/loginActions';
import Router from 'next/router';
import Link from 'next/link';

import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';

const Header: React.FC = () => {
  const isLoggined = useSelector((state: AppStateType) => state.login.isLogin);
  const dispatch = useDispatch();

  const exit = () => {
    dispatch(logIn(false));
    Router.push('/');
  };

  return (
    <HeaderWrapper>
      <StyledHeader>
        <ButtonsWrapper>
          <Link href="/">
            <UsersButton>Table Project</UsersButton>
          </Link>

          {isLoggined ? (
            <Link href={'/login'}>
              <AddUserButton onClick={() => exit()}>Выход</AddUserButton>
            </Link>
          ) : (
            <Link href={'/login'}>
              <AddUserButton>Вход</AddUserButton>
            </Link>
          )}
        </ButtonsWrapper>
      </StyledHeader>
    </HeaderWrapper>
  );
};

export default Header;

const StyledHeader = styled(AppBar)`
  display: flex;
  align-items: center;
  padding: 10px;
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1160px;
  width: 100%;
`;

const UsersButton = styled.p`
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;

  & :hover {
    color: #77a0a9;
  }
`;

const AddUserButton = styled.button`
  cursor: pointer;
  border-radius: 10px;
  padding: 10px 30px;
  font-size: 14px;
  background-color: #77a0a9;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
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
