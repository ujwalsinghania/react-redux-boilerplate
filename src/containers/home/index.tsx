import React from 'react';
import SuspenseLoader from '../../components/common/suspenseLoader';

const LazyHome = React.lazy(() =>
  import(/* webpackChunkName: "Home" */ './home')
);

const Home = (props: Record<string, any>) => (
  <React.Suspense fallback={<SuspenseLoader />}>
    <LazyHome {...props} />
  </React.Suspense>
);

export default Home