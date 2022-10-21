import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Main from "page/Main";
import User from "page/User";
import Set from "page/Set";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="user">
        <Route index element={<User />}></Route>
      </Route>
      <Route path="set" element={<Set />}></Route>
    </Route>
  )
);

export default router;
