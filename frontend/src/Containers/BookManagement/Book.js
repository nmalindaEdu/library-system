import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdvanceTable from '../../Components/Table/AdvanceTable';
import Search from '../../Components/Search/Search';
import CardHeader from '../../Components/Card/CardHeader';
import Card from '../../Components/Card/Card';
import ToolBar from '../../Components/ToolBar/ToolBar';
import NavLink from '../../Components/NavLink/NavLink';
import {
  fetchBookData,
  setBookName,
  deleteBook
} from '../../Store/reducers/bookReducer';
import {
  getBookLoadingStatus,
  getBookSearchResults
} from '../../Store/selectors/bookSelector';
import EditButton from '../../Components/Button/EditButton';
import Button from '../../Components/Button/Button';
import DeleteButton from '../../Components/Button/DeleteButton';
import { dateComparatorRev } from '../utils/comparator';
import DeleteDialog from '../../Components/PopupMessage/PopupMessage';

const BookManagement = () => {
  const dispatch = useDispatch();
  const onFetchBook = () => dispatch(fetchBookData());
  const onSetName = (book) => dispatch(setBookName(book));
  const onDeleteBook = (bookId) => dispatch(deleteBook(bookId));

  useEffect(() => {
    onFetchBook();
    return () => {};
  }, []);

  const [code, setCode] = useState('');
  const isLoading = useSelector(getBookLoadingStatus);
  let booksData = useSelector(getBookSearchResults);
  const [open, setOpen] = useState(false);

  booksData = booksData.map((book) => ({
    ...book,
    edit: (
      <div>
        <EditButton to={`/book_management/edit_book/${book.book_id}`} />
        <DeleteButton clicked={() => handleDeleteConfirmation(book.book_id)} />
      </div>
    )
  }));
  const handleChangeSearchBookName = (event) => {
    onSetName(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteConfirmation = (idBook) => {
    // setOpen(true);
    handleClickOpen();
    setCode(idBook);
  };
  const handleDeleteBook = () => {
    onDeleteBook(code);
    handleClose();
  };

  return (
    <>
      <DeleteDialog
        clicked={handleDeleteBook}
        clickOpen={open}
        handleClose={handleClose}
      />
      <ToolBar>
        <NavLink to='/book_management/add_book'>
          <Button primary='true'>Add book</Button>
        </NavLink>
      </ToolBar>
      <Search
        isTextCss
        label='Search by book name'
        change={handleChangeSearchBookName}
      />
      <Card>
        <CardHeader title='Books list' />
        <AdvanceTable
          isLoading={isLoading}
          columns={[
            {
              title: 'Name',
              field: 'book_name'
            },
            {
              title: 'Author',
              field: 'book_author'
            },
            {
              title: 'Availability',
              field: 'book_status'
            },
            {
              title: 'Added date',
              field: 'book_added_date',
              customSort: (a, b) => dateComparatorRev(a, b, 'book_added_date')
            },
            {
              title: '',
              field: 'edit'
            }
          ]}
          data={booksData}
        />
      </Card>
    </>
  );
};

export default BookManagement;
