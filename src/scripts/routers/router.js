import Detail from '../views/pages/detail';
import Home from '../views/pages/home';

const Router = {
  '/': Home,
  '/detail/:id': Detail,
};

export default Router;
