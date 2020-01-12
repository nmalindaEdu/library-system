import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardHeader from '../../Components/Card/CardHeader';
import Card from '../../Components/Card/Card';
import { GridContainer, GridItem } from '../../Components/Grid';
import {
  getDashboardBookStatus,
  getDashboardData,
  getDashboardLoading
} from '../../Store/selectors/dashboardSelector';
import {
  setBookingStatus,
  fetchDashboardData
} from '../../Store/reducers/dashboardReducer';
import Select from '../../Components/select/select';
import AdvanceTable from '../../Components/Table/AdvanceTable';
import status from '../utils/availability';
import { dateComparatorRev } from '../utils/comparator';
import NavLink from '../../Components/NavLink/NavLink';
import Button from '../../Components/Button/Button';

const Dashboard = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getDashboardLoading);
  const dashboardData = useSelector(getDashboardData);
  const bookStatus = useSelector(getDashboardBookStatus);

  const onFetchData = (bookState) => dispatch(fetchDashboardData(bookState));
  const onSetBookingStatus = (stat) => dispatch(setBookingStatus(stat));

  useEffect(() => {
    onFetchData(bookStatus);
    return () => {};
  }, []);

  const handleChangeBookStat = (status) => {
    onSetBookingStatus(status);
    onFetchData(status);
  };

  return (
    <>
      <Card>
        <CardHeader title='Librarian Dashboard' />
        <GridContainer container spacing={4}>
          <GridItem item xs={12} sm={6}>
            <NavLink to='/book_management/issue'>
              <Button primary='true'>Issue books</Button>
            </NavLink>
          </GridItem>

          <GridItem item xs={12} sm={6}>
            <Select
              newId={bookStatus}
              array={status}
              id='bookStatus'
              label='Book Status'
              keyValue='value'
              MenuLabel='label'
              change={handleChangeBookStat}
            />
          </GridItem>
        </GridContainer>
      </Card>
      <Card>
        <CardHeader title='Books availability data' />
        <AdvanceTable
          isLoading={isLoading}
          columns={[
            {
              title: 'Book',
              field: 'book_name'
            },
            {
              title: 'Borrower member',
              field: 'user_full_name'
            },
            {
              title: 'Book issued date',
              field: 'book_movement_issue_date',
              customSort: (a, b) =>
                dateComparatorRev(a, b, 'book_movement_issue_date')
            },

            {
              title: 'Must return date',
              field: 'book_movement_must_return_date',
              customSort: (a, b) =>
                dateComparatorRev(a, b, 'book_movement_must_return_date')
            },
            {
              title: 'Is returned',
              field: 'book_movement_is_returned',
              type: 'numeric',
              sorting: false
            }
          ]}
          data={dashboardData}
        />
      </Card>
    </>
  );
};
export default Dashboard;
