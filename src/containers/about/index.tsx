import React from 'react';
import SuspenseLoader from '../../components/common/suspenseLoader';

const LazyAbout = React.lazy(() =>
  import(/* webpackChunkName: "About" */ './about')
);

const About = (props: Record<string, any>) => (
  <React.Suspense fallback={<SuspenseLoader />}>
    <LazyAbout {...props} />
  </React.Suspense>
);

export default About