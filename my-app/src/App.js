
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";


// 7-6 동적 url
// "/movie/:id :id는 변수임. :를 붙여야변수가 된다.
// url에서 id를 정보를 detail 컴포넌특 어떻게알아갈수있을까'?

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
