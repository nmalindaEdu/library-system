import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdvanceTable from '../../Components/Table/AdvanceTable';
import Search from '../../Components/Search/Search';
import CardHeader from '../../Components/Card/CardHeader';
import Card from '../../Components/Card/Card';
import ToolBar from '../../Components/ToolBar/ToolBar';
import NavLink from '../../Components/NavLink/NavLink';
import {
  fetchUserData,
  setUserName,
  deleteUser
} from '../../Store/reducers/userReducer';
import {
  getUserLoadingStatus,
  getUserSearchResults
} from '../../Store/selectors/userSelector';
import EditButton from '../../Components/Button/EditButton';
import Button from '../../Components/Button/Button';
import DeleteButton from '../../Components/Button/DeleteButton';
import { dateComparatorRev } from '../utils/comparator';
import DeleteDialog from '../../Components/PopupMessage/PopupMessage';

const UserManagement = () => {
  const dispatch = useDispatch();
  const onFetchUser = () => dispatch(fetchUserData());
  const onSetName = (userName) => dispatch(setUserName(userName));
  const onDeleteUser = (userId) => dispatch(deleteUser(userId));

  useEffect(() => {
    onFetchUser();
    return () => {};
  }, []);

  const [code, setCode] = useState('');
  const isLoading = useSelector(getUserLoadingStatus);
  let userData = useSelector(getUserSearchResults);
  const [open, setOpen] = useState(false);

  userData = userData.map((user) => ({
    ...user,
    edit: (
      <div>
        <EditButton to={`/user_management/edit_user/${user.user_id}`} />
        <DeleteButton clicked={() => handleDeleteConfirmation(user.user_id)} />
      </div>
    )
  }));
  const handleChangeSearchUserName = (event) => {
    onSetName(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteConfirmation = (idUser) => {
    // setOpen(true);
    handleClickOpen();
    setCode(idUser);
  };
  const handleDeleteUser = () => {
    onDeleteUser(code);
    handleClose();
  };

  return (
    <>
      <DeleteDialog
        clicked={handleDeleteUser}
        clickOpen={open}
        handleClose={handleClose}
      />
      <ToolBar>
        <NavLink to='/member_management/add_member'>
          <Button primary='true'>Add user</Button>
        </NavLink>
      </ToolBar>
      <Search
        isTextCss
        label='Search by name'
        change={handleChangeSearchUserName}
      />

      <Card>
        <CardHeader title='Member list' />
        <AdvanceTable
          isLoading={isLoading}
          columns={[
            {
              title: 'Name',
              field: 'user_full_name'
            },
            {
              title: 'Telephone no.',
              field: 'user_tel_no'
            },
            {
              title: 'User name',
              field: 'user_name'
            },

            {
              title: 'Added date',
              field: 'user_added_date',
              customSort: (a, b) => dateComparatorRev(a, b, 'user_added_date')
            },
            {
              title: '',
              field: 'edit'
            }
          ]}
          data={userData}
        />
      </Card>
    </>
  );
};

export default UserManagement;
