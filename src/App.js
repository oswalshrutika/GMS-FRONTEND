import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddCategory from './components/AddCategory';
import Product from './components/AddProduct';
import AdminDashBoard from './components/AdminDashBoard';
import AllCategory from './components/AllCategory';
import AllProducts from './components/AllProducts';
import Cart from './components/Cart';
import CategoryList from './components/Categorylist';
import CategoryNavbar from './components/CategoryNavbar';
import Changepassword from './components/Changepassword';
import ChangeSellerPassword from './components/ChangeSellerPassword';
import Delivery from './components/Delivery';
import EditProfile from './components/EditProfile';
import Footer from './components/Footer';
import Home from './components/Home';
import Info from './components/Info';
import Logout from './components/Logout';
import Navbar from './components/NavBar';
import Order from './components/Order';
import Payment from './components/Payment';
import SellerDashboard from './components/SellerDashboard';
import SellerEditProfile from './components/SellerEditProfile';
import SellerLogout from './components/SellerLogout';
import SellerProfile from './components/SellerProfile';
import SellerSignIn from './components/SellerSignIn';
import Signin from './components/Signin';
import SignUp from './components/SignUp';
import SignUpSeller from './components/SignUpSeller';
import AboutUs from './pages/AboutUs';
import Category from './pages/Category';
import ContactUs from './pages/ContactUs';




function App() {
  return (
    <div className="app">

      <div className="container-fluid">
        <BrowserRouter>

          <Navbar />
          <Switch>
            {/* <Route path="/home" component={Home}></Route> */}

            {/* <Route path="/browse" component={Browse}></Route> */}
            <Route path="/signin-signup" component={Signin}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/sellerSignup" component={SignUpSeller}></Route>
            <Route path="/sellerSignin" component={SellerSignIn}></Route>
            <Route path="/changepassword" component={Changepassword}></Route>
            <Route path="/changeSellerPassword" component={ChangeSellerPassword}></Route>
            <Route path="/profile" component={Info}></Route>
            <Route path="/editprofile" component={EditProfile}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route path="/sellerLogout" component={SellerLogout}></Route>
            <Route path="/category" component={Category}></Route>
            <Route path="/product" component={Product}></Route>
            <Route path="/addCategory" component={AddCategory}></Route>
            <Route path="/sellerDashboard" component={SellerDashboard}></Route>
            <Route path="/allProducts" component={AllProducts}></Route>
            <Route path="/allCategory" component={AllCategory}></Route>
            <Route path="/sellerEditProfile" component={SellerEditProfile}></Route>
            <Route path="/sellerProfile" component={SellerProfile}></Route>
            <Route path="/home" component={Home}></Route>

            <Route path="/categoryNavbar" component={CategoryNavbar}></Route>
            <Route path="/categoryList" component={CategoryList}></Route>
            <Route path="/contactus" component={ContactUs}></Route>
            <Route path="/aboutus" component={AboutUs}></Route>
            <Route path="/payment" component={Payment}></Route>
            <Route path="/delivery" component={Delivery}></Route>
            <Route path="/order" component={Order}></Route>
            <Route path="/admin" >
              <AdminDashBoard />

            </Route>
            <Route path="/" component={Home}></Route>




          </Switch>


        </BrowserRouter>

      </div>
      <Footer />

    </div>
  );
}

export default App;
