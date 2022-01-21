import {
  About,
  Home,
  Login,
  MovieCategory,
  MovieDetail,
  Profile,
  Search,
} from "./pages";

const routes = [
  { title: "Home", element: Home, path: "/", isNav: true },
  {
    title: "About",
    element: About,
    path: "/about",
    isNav: true,
  },
  {
    title: "Category",
    element: MovieCategory,
    path: "/movie/:movieCat",
    isNav: true,
  },
  {
    title: "Movie Detail",
    element: MovieDetail,
    path: "/movies/:movieId",
    isNav: false,
  },
  {
    title: "Login",
    element: Login,
    path: "/login",
    isNav: true,
  },
  {
    title: "Profile",
    path: "/profile",
    element: Profile,
    isNav: true,
  },
  {
    title: "Search",
    path: "/search",
    element: Search,
    isNav: true,
  },
];

export default routes;
