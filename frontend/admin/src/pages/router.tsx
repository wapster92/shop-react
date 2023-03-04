import Main from "./Main";
import Users from "./Users";

const routes = [
  {
    name: 'Главная',
    path: '/',
    element: <Main />,
  },
  {
    name: 'Пользователи',
    path: '/users/*',
    link: '/users',
    element: <Users />,
  },
]

export default routes;
