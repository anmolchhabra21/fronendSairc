import { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import PageLoader from '../components/common/PageLoader'

const Feed = lazy(() => import('../pages/Feed'))
const Landing = lazy(() => import('../pages/Landing'))
const Profile = lazy(() => import('../pages/Profile'))
const Enter = lazy(() => import('../pages/Enter'))
const Search = lazy(() => import('../pages/Search'))
const ErrorPage = lazy(() => import('../pages/404'))
const Post = lazy(() => import('../pages/Post'))
const Event = lazy(() => import('../pages/Event'))
const Forgot = lazy(() => import('../pages/Forgot'))
const Organisation = lazy(() => import('../pages/Organisation'))
const JobPage = lazy(() => import('../pages/Job'))

const Routes = function () {
  return (
    <Suspense fallback={<PageLoader imageLoader />}>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/landing' component={Landing} />
        <Route exact path='/home/old' component={Landing} />
        <Route exact path='/feed' component={Feed} />
        <Route exact path='/profile' component={Profile} />
        <Route path='/profile/:id' component={Profile} />
        <Route exact path='/organisations' component={Organisation} />
        <Route path='/organisations/:id' component={Organisation} />
        <Route exact path='/event' component={Event} />
        <Route path='/events/:id' component={Event} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/enter' component={Enter} />
        <Route exact path='/posts' component={Post} />
        <Route path='/posts/:id' component={Post} />
        <Route exact path='/jobs' component={JobPage} />
        <Route path='/jobs/:id' component={JobPage} />
        <Route exact path='/forgotpassword' component={Forgot} />
        <Route path='/' component={ErrorPage} />
      </Switch>
    </Suspense>
  )
}

export default Routes
