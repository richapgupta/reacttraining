import React, { Suspense } from "react";

import "./App.css";
import "./header/Header.css";
import "./banner/Banner.css";
import "./nav/Nav.css";
import "./footer/Footer.css";

import Header from "./header/Header";
import { Nav } from "./nav/Nav";
import { Footer } from "./footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./home/Home";
import About from "./about/About";
import Like from "./like/Like";
import Catalouge from "./catalouge/Catalouge";
import Store from "./Store";
import Address from "./Address";
import Feedback from "./Feedback";
import Review from "./Review";

const Authors = React.lazy(() => import("./authors/Authors"));

function App() {
  const footerData = {
    msg: "© MyBookshop. All Rights Reserved",
  };

  const year = 2020;
  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/" component={Nav} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/like" component={Like} />
        {/* <Route path="/like" render={() => component = { <Like initial={0}/>} /> */}
        <Route path="/catalouge" component={Catalouge} />

        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/author" component={Authors} />
        </Suspense>
        <Route path="/store" component={Store} />
        <Route path="/store/:city" component={Address} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/review" component={Review} />
      </Router>

      {/* <Like count={0} /> */}
      <Footer footermsg={footerData.msg} year={year} />
    </div>
  );
}

export default App;
