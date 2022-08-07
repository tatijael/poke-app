
import Details from '../views/details';
import Home from '../views/home';

const routes = [
  {
    path: '/',
    exact: true,
    element: <Home />
  },
  {
    path: '/details',
    exact: true,
    element: <Details />
  }
]

export default routes