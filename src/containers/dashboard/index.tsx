import React from 'react';
import SuspenseLoader from '../../components/common/suspenseLoader';

const LazyDashboard = React.lazy(() =>
  import(/* webpackChunkName: "Dashboard" */ './dashboard')
);

const Dashboard = (props: Record<string, any>) => (
  <React.Suspense fallback={<SuspenseLoader />}>
    <LazyDashboard {...props} />
  </React.Suspense>
);

export default Dashboard