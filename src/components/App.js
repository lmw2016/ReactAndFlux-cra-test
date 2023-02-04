import React from "react";
import HomePage from "./HomePage"; //fold path is important
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import PerformancesPage from "./PerformancesPage"
import {Route, Switch,Redirect} from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import ManagePerformancePage from "./ManagePerformancePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageChangeOnScroll from "./forHooks/ImageChangeOnScroll";

function App() {

  return (
    <div className="container-fluid">
      <ToastContainer autoClose={2000} hideProgressBar/>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/courses" component={CoursesPage} />
        <Route path="/performances" component={PerformancesPage} />
        <Route path="/performance/:mktCarrierFlyNum" component={ManagePerformancePage} />
        <Route path="/about" component={AboutPage}/>
        <Route path="/course/:slug" component={ManageCoursePage}/>
        <Route path="/course" component={ManageCoursePage}/>
        <Route path="/ImageOnScroll" component={ImageChangeOnScroll} />
        <Redirect from="/about-hello" to="about"/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  );
}

export default App;
