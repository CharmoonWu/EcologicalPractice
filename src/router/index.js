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
import TextWall from 'page/TextWall';
import Statistics from 'page/Statistics';
import Qrcode from 'page/Qrcode';
import QuotesList from 'page/Quotes/List';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />} errorElement={<Error />}>
      <Route path="user">
        <Route index element={<User />} />
      </Route>
      <Route path="today" element={<Today />} />
      <Route path="set" element={<Set />} />
      <Route path="photoWall" element={<PhotoWall />} />
      <Route path="textWall" element={<TextWall />} />
      <Route path="statistics" element={<Statistics />} />
      <Route path="qrcode" element={<Qrcode />} />
      <Route path="quotesList" element={<QuotesList />} />
    </Route>,
  ),
);
export default router;
