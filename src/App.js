import { Route, Switch, Link, NavLink, Redirect } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store/store.reducer";
import './App.css';
import BillingInfo from "./views/billingInfo/billinginfo";
import ConfirmPayment from "./views/confirmPayment/confirmpayment";
import PersonalInfo from './views/personalInfo/personalinfo';
import ListInfo from "./views/listviews/list.views";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <div className='app'>
            <Switch>
              <Route path="/" exact component={PersonalInfo} />
              <Route path="/bill" exact component={BillingInfo} />
              <Route path="/payment" exact component={ConfirmPayment} />
              <Route path="/list" exact component={ListInfo} />
            </Switch>
          </div>
        </Provider>
      </header>
    </div>
  );
}

export default App;
