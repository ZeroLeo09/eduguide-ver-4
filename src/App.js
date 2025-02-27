import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./menu/Home";
import About from "./menu/About";
import Blogs from "./menu/Blogs";
import FAQs from "./menu/FAQs";
import Community from "./menu/Community";
import Contact from "./menu/Contact";
import Login from "./account/Login";
import AdminLogin from "./admin/AdminLogin";
import AdminPage from "./admin/AdminPage";
import Signup from "./account/SignUp";
import Welcome from "./account/Welcome";
import MainProfile from "./account/MainProfile";
import EditProfile from "./account/EditProfile";
import ChangeIcon from "./account/ChangeIcon";
import ChangePass from "./account/ChangePass";
import TestResults from "./account/TestResults";
import GenDesc from "./generaltest/GenDesc";
import GenTest from "./generaltest/GenTest";
import GenResults from "./generaltest/GenResults";
import GenCourses from "./generaltest/GenCourses";
import SpecDesc from "./spectest/SpecDesc";
import SpecTest1 from "./spectest/SpecTest1";
import SpecResults1 from "./spectest/SpecResults1";
import SpecTest2 from "./spectest/SpecTest2";
import SpecResults2 from "./spectest/SpecResults2";
import SpecTest3 from "./spectest/SpecTest3";
import SpecResults3 from "./spectest/SpecResults3";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    const client = new ApolloClient({
      uri: "https://eduguide-backend.herokuapp.com/graphql",
      cache: new InMemoryCache(),
    });

    return (
      <Router>
        <ApolloProvider client={client}>
          <div className="app">
            <Navbar />
            <Sidebar />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/faqs" component={FAQs} />
            <Route exact path="/community" component={Community} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/adminlogin" component={AdminLogin} />
            <Route exact path="/adminpage" component={AdminPage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/mainprofile" component={MainProfile} />
            <Route exact path="/editprofile" component={EditProfile} />
            <Route exact path="/changeicon" component={ChangeIcon} />
            <Route exact path="/changepass" component={ChangePass} />
            <Route exact path="/testresults" component={TestResults} />
            <Route exact path="/gendesc" component={GenDesc} />
            <Route exact path="/gentest" component={GenTest} />
            <Route exact path="/genresults" component={GenResults} />
            <Route exact path="/gencourses" component={GenCourses} />
            <Route exact path="/specdesc" component={SpecDesc} />
            <Route exact path="/spectest1" component={SpecTest1} />
            <Route exact path="/spectest2" component={SpecTest2} />
            <Route exact path="/spectest3" component={SpecTest3} />
            <Route exact path="/specresults1" component={SpecResults1} />
            <Route exact path="/specresults2" component={SpecResults2} />
            <Route exact path="/specresults3" component={SpecResults3} />
            <Route exact path="/welcome" component={Welcome} />
            <div className="push"></div>
            <Footer />
          </div>
        </ApolloProvider>
      </Router>
    );
  }
}

export default App;
