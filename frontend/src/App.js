import React from 'react';
import { Router } from '@reach/router';

import Layout from './Containers/Layout';

const App = () => {
  const Dashboard = React.lazy(() =>
    import('./Containers/Dashboard/Dashboard')
  );
  const Members = React.lazy(() =>
    import('./Containers/MemberManagement/User')
  );
  const Books = React.lazy(() => import('./Containers/BookManagement/Book'));

  return (
    <Router>
      <Layout path='/'>
        <Dashboard path='/' />
        <Members path='/members' />
        <Books path='/books' />
      </Layout>
    </Router>
  );
};

export default App;
