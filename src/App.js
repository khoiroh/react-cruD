import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './Component/NavigationBar';
import Home from './pages/Home';
import Edit from './pages/Edit';


function App() {
  return (
    <>
    <NavigationBar />
    <BrowserRouter>
     <main>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/edit/:id" component={Edit} exact/>
      </Switch>
     </main>
    </BrowserRouter>
    </>
  );
}

export default App;
