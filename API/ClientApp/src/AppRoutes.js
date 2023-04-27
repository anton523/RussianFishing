import { Admin } from "./components/Admin/Admin";
import { Login } from "./components/Auth/Login";
import { Register } from "./components/Auth/Register";
import { Counter } from "./components/Counter";
import CreatePostPage from "./components/CreatePostPage";
import { FetchData } from "./components/FetchData";
import ForumPage from "./components/ForumPage";
import ForumPost from "./components/ForumPost";
import { Home } from "./components/Home";
import { Baits } from "./components/PP4/Baits/Baits";
import { Fishes } from './components/PP4/Fishes'
import { Gears } from './components/PP4/Gears/Gears'
import { Profile } from "./components/Profile/Profile";
import { Hooks } from "./components/PP4/Hooks/Hooks";
import { Tools } from "./components/PP4/Tools/Tools";
import { Foods } from "./components/PP4/Foods/Foods";
import MapsPage from "./components/MapsPage";
import { Maps } from "./addons/Maps";
import MapPage from "./components/MapPage";
import PP4 from "./components/PP4";

const AppRoutes = [
  {
    index: true,
    element: <Home />,
    needForumActivity: true,
    needAside: true
  },
  {
    path: '/admin',
    element: <Admin />,
    needForumActivity: false,
    needAside: true
  },
  {
    path: '/profile',
    element: <Profile />,
    needForumActivity: false,
    needAside: true
  },
  {
    path: '/login',
    element: <Login />,
    needForumActivity: false,
    needAside: true
  },
  {
    path: '/register',
    element: <Register />,
    needForumActivity: false,
    needAside: true
  },
  {
    path: '/pp4',
    element: <PP4 />,
    needForumActivity: false,
    needAside: true
  },
  {
    path: '/pp4/fishes',
    element: <Fishes />,
    needForumActivity: false,
    needAside: true
  },
  {
    path: '/pp4/gears',
    element: <Gears />,
    needForumActivity: false,
    needAside: false
  },
  {
    path: '/pp4/baits',
    element: <Baits />,
    needForumActivity: false,
    needAside: true
  },
  {
    path: '/pp4/fishhooks',
    element: <Hooks />,
    needForumActivity: false,
    needAside: true
  },
  {
    path: '/pp4/tools',
    element: <Tools />,
    needForumActivity: false,
    needAside: true
  },
  {
    path: '/pp4/foods',
    element: <Foods />,
    needForumActivity: false,
    needAside: true
  },
  {
    path: '/pp4/help',
    element: <Counter />,
    needForumActivity: false,
    needAside: true
  },
  {
    path: '/maps',
    element: <MapsPage />,
    needForumActivity: false,
    needAside: true
  },
  {
    path: '/forum',
    element: <ForumPage />,
    needForumActivity: false,
    needAside: true
  },
  {
    path: '/forum/create-post',
    element: <CreatePostPage />,
    needForumActivity: false,
    needAside: true
  },
  {
    path: '/forum/:id',
    element: <ForumPost />,
    needForumActivity: false,
    needAside: true
  },
  {
    path: '/maps/:id',
    element: <MapPage />,
    needForumActivity: false,
    needAside: true
  },
];


export default AppRoutes;
