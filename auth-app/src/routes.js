import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import ReactLoading from "react-loading";
import Authenticate from "./auth"

function PrivateRoute({ component: Component, ...rest }) {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(false);
  
    useEffect(() => {
      AsyncAuthenticate();
    }, []);
  
    async function AsyncAuthenticate() {
      const response = await Authenticate();
      setIsAuth(response);
      setIsLoading(false);
    }

    return (
        <>
          {isLoading ? (
            <ReactLoading
              type={"spinningBubbles"}
              color={"red"}
              height={667}
              width={375}
            />
          ) : (
            <Route
              {...rest}
              render={(props) =>
                isAuth ? (
                  <Component {...props} />
                ) : (
                  <Redirect to={{ pathname: "/" }} />
                )
              }
            />
          )}
        </>
      );
}

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <h1>Tela inicial</h1>}></Route>
            <PrivateRoute exact path="/home" component={() => <h1>Autenticado</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;