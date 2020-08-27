import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const History = React.lazy(() => import('./pages/History'));
const About = React.lazy(() => import('./pages/About'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));


function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<p>loading..</p>}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/history' component={History} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/about' component={About} />
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
