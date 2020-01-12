import React from 'react';
import { Router } from '@reach/router';

import Layout from './Containers/Layout';

const App = () => {
  const Dashboard = React.lazy(() =>
    import('./Containers/Dashboard/Dashboard')
  );

  return (
    <Router>
      <Layout path='/'>
        <Dashboard path='/' />
      </Layout>
    </Router>
  );
};

export default App;
