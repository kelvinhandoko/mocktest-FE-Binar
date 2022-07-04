import React from "react"
//login
const Login = React.lazy(() => import("../page/Login"))
const Register = React.lazy(() => import("../page/Register"))

const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]

export default routes
