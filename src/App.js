import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './Component/NavigationBar';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Login from './pages/Login';


function App() {
  return (
    <>
    <NavigationBar />
    {/* untuk menjaga UI tetap sinkron dengan URL*/}
    <BrowserRouter> 
     <main>
      <Switch>        {/* untuk merender rute secara eksklusif */}
        <Route path="/" component={Home} exact/>          {/*ROUTE untuk pengalihan sisi server */}
        <Route path="/edit/:id" component={Edit} exact/>
        <Route path="/login" component={Login} exact/>
      </Switch>
     </main>
    </BrowserRouter>
    </>
  );
}

export default App;
