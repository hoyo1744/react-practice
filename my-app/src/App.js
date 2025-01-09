
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";


// 7-7
// gh-pages는 github에서 무료 도메인을 배포해준다.


function App() {
    return <Router>
        <Switch>
            <Route path="/movie/:id">
                <Detail/>
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>
}

export default App;
