import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import MyOrders from "./Components/MyOrders/MyOrders";
import ManageAllOrders from "./Components/ManageAllOrders/ManageAllOrders";
import AddNewService from "./Components/AddNewService/AddNewService";
import BookNow from "./Components/BookNow/BookNow";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/manageorders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/addservice">
              <AddNewService></AddNewService>
            </PrivateRoute>
            <PrivateRoute exact path="/booknow/:id">
              <BookNow></BookNow>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
