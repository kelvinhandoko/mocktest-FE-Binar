import {CircularProgress} from "@chakra-ui/react"
import {Suspense} from "react"
import {Route, Routes} from "react-router-dom"
import "./App.css"
import routes from "./routes/route"

function App() {
  return (
    <Suspense fallback={<CircularProgress color="primary" />}>
      <div className="App">
        <Routes>
          {routes.map((route, index) => (
            <Route path={route.path} element={route.element} key={index} />
          ))}
        </Routes>
      </div>
    </Suspense>
  )
}

export default App
