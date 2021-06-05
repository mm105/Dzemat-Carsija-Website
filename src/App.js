import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import News from "./components/News";
import News1 from "./components/News/News1";
import News2 from "./components/News/News2";
import News3 from "./components/News/News3";
import News4 from "./components/News/News4";

function App() {
    return (
        <Fragment>
            <Router>
                <div className="background">
                    <div className="container p-0">
                        <Navbar />
                        <Switch>
                            <Route exact path="/" component={Landing} />
                            <Route exact path="/vijesti" component={News} />
                            <Route exact path="/kontakt" component={Contact} />
                            <Route exact path="/vijesti/1" component={News1} />
                            <Route exact path="/vijesti/2" component={News2} />
                            <Route exact path="/vijesti/3" component={News3} />
                            <Route exact path="/vijesti/4" component={News4} />
                            <Route exact path="/o-dzematu" component={About} />
                        </Switch>

                        <div className="temp"></div>
                        <Footer />
                    </div>
                </div>
            </Router>
        </Fragment>
    );
}

export default App;
