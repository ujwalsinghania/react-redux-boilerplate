import React from 'react';
import SuspenseLoader from '../../components/common/suspenseLoader';

const LazyLogin = React.lazy(() =>
  import(/* webpackChunkName: "Login" */ './login')
);

const Login = (props: Record<string, any>) => (
  <React.Suspense fallback={<SuspenseLoader />}>
    <LazyLogin {...props} />
  </React.Suspense>
);

export default Login