import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import EmptyImage from '../EmptyImage/EmptyImage';
import Spinner from '../Spinner/Spinner';

const AdvanceTable = ({ isLoading, columns, data }) => {
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  return (
    <MaterialTable
      isLoading={isLoading}
      icons={tableIcons}
      columns={columns}
      data={data}
      options={{
        filtering: false,
        search: false,
        headerStyle: {
          backgroundColor: '#f7f9fc',
          fontWeight: '600',
          fontSize: '.98rem',
          lineHeight: '1.5rem'
        },
        rowStyle: {
          color: '#8f9bb3'
        },
        pageSize: 10,
        pageSizeOptions: [10, 25, 50, 100]
      }}
      components={{
        Toolbar: () => <div style={{ display: 'none' }} />,

        OverlayLoading: () => <Spinner />
      }}
      localization={{
        body: {
          emptyDataSourceMessage: (
            <div style={{ textAlign: 'center' }}>
              <EmptyImage color='black' size='226px' />
            </div>
          )
        }
      }}
    />
  );
};
AdvanceTable.propTypes = {
  isLoading: PropTypes.bool,
  columns: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.instanceOf(Object))
  ]),
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.instanceOf(Object))
  ])
};
AdvanceTable.defaultProps = {
  isLoading: false,
  columns: [],
  data: []
};
export default AdvanceTable;
