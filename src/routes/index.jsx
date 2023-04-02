import React, { Suspense, lazy } from 'react';
import { BounceLoader } from 'react-spinners';
import { path } from '../utils/paths';

const load = (Component) => (props) =>
(
  <Suspense
    fallback={
      <div className="w-[100%] my-[20%] flex justify-center items-center">
        <BounceLoader loading color="#0052CC" />
      </div>
    }
  >
    <Component {...props} />
  </Suspense>
);

const Dashboard = load(lazy(() => import('../pages/Dashboard')));

const homeRoutes = [
  { path: path.DASHBOARD, component: Dashboard },
  { path: path.ANALYTICS, component: Dashboard },
  { path: path.BOTS, component: Dashboard },
  { path: path.NOTIFICATIONS, component: Dashboard },
  { path: path.POSITIONS, component: Dashboard },
  { path: path.SIGNALGROUPS, component: Dashboard },
];

export { homeRoutes };
