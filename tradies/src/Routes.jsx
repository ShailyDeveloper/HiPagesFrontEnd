import React, { Suspense } from 'react'
import Grid from './Components/Headers/Headers';
import Invited from './Containers/Invited/Invited';
//import Accepted from './Containers/Accepted/Accepted';
import Usestyles from './Styles/Styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const Pagelayout = () => {
  const classes = Usestyles();
  const Accept = React.lazy(() => import('./Containers/Accepted/Accepted'));
  return (
    <BrowserRouter>
      <div className={classes.backcolour}>

        <Grid />

        <Switch>

          <Route path='/' exact component={Invited}></Route>
          <Route path='/Accepted' render={() => <Suspense fallback={<div>Still Loading..</div>}><Accept /></Suspense>}></Route>

        </Switch>
      </div>
    </BrowserRouter >
  )
}

export default Pagelayout;