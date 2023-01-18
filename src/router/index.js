import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Error from 'compontents/Error';

import Main from 'page/Main';
import User from 'page/User';
import Set from 'page/Set';
import Today from 'page/Today';
import PhotoWall from 'page/PhotoWall';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />} errorElement={<Error />}>
      <Route path="user">
        <Route index element={<User />} />
      </Route>
      <Route path="today" element={<Today />} />
      <Route path="set" element={<Set />} />
      <Route path="photoWall" element={<PhotoWall />}></Route>
    </Route>,
  ),
);

export default router;
