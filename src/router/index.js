import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Error from 'compontents/Error';

import Main from 'page/Main';
import User from 'page/User';
import Set from 'page/Set';
import PhotoWall from 'page/PhotoWall';
import TextWall from 'page/TextWall';
import Statistics from 'page/Statistics';
import QuotesList from 'page/Quotes/List';
import Map from 'page/Map';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />} errorElement={<Error />}>
      <Route path="user">
        <Route index element={<User />} />
      </Route>
      <Route path="set" element={<Set />} />
      <Route path="photoWall" element={<PhotoWall />} />
      <Route path="textWall" element={<TextWall />} />
      <Route path="statistics" element={<Statistics />} />
      <Route path="quotesList" element={<QuotesList />} />
      <Route path="map" element={<Map />} />
    </Route>,
  ),
);
export default router;
