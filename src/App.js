/* eslint-disable react/jsx-no-comment-textnodes */
import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import * as ROUTES from "./constants/routes"
import UserContext from "./context/user"
import useAuthListener from "./hooks/use-auth-listener"

const Dashboard = lazy(() => import("./pages/dashboard"))
const Signup = lazy(() => import("./pages/signup"))
const Login = lazy(() => import("./pages/login"))
const Chart = lazy(() => import("./pages/charts"))
const Menu = lazy(() => import("./pages/menu"))
const notfound = lazy(() => import("./pages/not-found"))

function App() {

  const { user } = useAuthListener();

    return (
        <UserContext.Provider value={{ user }}>
            <Router>
                <Suspense fallback={<p>Loading...</p>}>
                    <Switch>
                        //New Pages //End New Pages
                        <Route path={ROUTES.CHART} component={Chart} />
                        <Route path={ROUTES.MENU} component={Menu} />
                        <Route path={ROUTES.LOGIN} component={Login} />
                        <Route path={ROUTES.SIGNUP} component={Signup} />
                        <Route path={ROUTES.DASHBOARD} component={Dashboard} />
                        <Route component={notfound} />
                    </Switch>
                </Suspense>
            </Router>
        </UserContext.Provider>
    )
}

export default App
