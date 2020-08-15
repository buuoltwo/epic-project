import React, { Suspense } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// import About from './page/About'
// import History from './page/History'
// import Home from './page/Home'
const About = React.lazy(() => import('./page/About'))
const History = React.lazy(() => import('./page/History'))
const Home = React.lazy(() => import('./page/Home'))
const Login = React.lazy(() => import('./page/Login'))
const Register = React.lazy(() => import('./page/Register'))


function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <main>
          {/* main */}
          <Suspense fallback={<p>loading..</p>}>
            <Switch>
              {/* <Route exact path='/' children={Home}></Route> */}
              <Route exact path='/' component={Home}></Route>
              <Route path='/history' component={History} />
              <Route path='/about'><About /></Route>
              <Route path='/login'><Login /></Route>
              <Route path='/register'><Register /></Route>
            </Switch>
          </Suspense>
        </main>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
