import React from "react"
//login
const Login = React.lazy(() => import("../page/Login"))
const Register = React.lazy(() => import("../page/Register"))
const Home = React.lazy(() => import("../page/home"))

const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]

export default routes
