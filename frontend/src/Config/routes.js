import React from 'react';

import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import PeopleIcon2 from '@material-ui/icons/PersonPin';
import User from '@material-ui/icons/SupervisedUserCircle';
import Grn from '@material-ui/icons/Receipt';
import BookIcon from '@material-ui/icons/BookOutlined';
import LayersIcon from '@material-ui/icons/Layers';
import StockIcon from '@material-ui/icons/Business';
import HistoryIcon from '@material-ui/icons/History';

export default [
  {
    path: '/',
    icon: <DashboardIcon />,
    name: 'dashboard'
  },
  {
    path: '/item_management',
    icon: <LayersIcon />,
    name: 'item_management'
  },
  {
    path: '/add_grn',
    icon: <Grn />,
    name: 'goods_receive_note'
  },
  {
    path: '/stock_balancing',
    icon: <StockIcon />,
    name: 'stock_balancing'
  },
  {
    path: '/customer_management',
    icon: <PeopleIcon />,
    name: 'customer_management'
  },
  {
    path: '/supplier_management',
    icon: <PeopleIcon2 />,
    name: 'supplier_management'
  },
  {
    path: '/history',
    icon: <HistoryIcon />,
    name: 'history'
  },
  {
    path: '/reports',
    icon: <BookIcon />,
    name: 'reports'
  },
  {
    path: '/user_management',
    icon: <User />,
    name: 'user_management'
  }
];

export const librarian = [
  {
    path: '/',
    icon: <User />,
    name: 'dashboard'
  },
  {
    path: '/members',
    icon: <PeopleIcon />,
    name: 'Member Management'
  },
  {
    path: '/books',
    icon: <BookIcon />,
    name: 'Book Management'
  }
];
