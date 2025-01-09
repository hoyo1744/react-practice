
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";


// 7-5 페이지 전환
//  npm i react-router-dom@5.3.0 --force 설치.
// Route 순서가 중요하네?
// BrowserRouter는 일반 웹사이트 URL, 이외 HashRouter등등 여러 종류가 있음.
// Switch 컴포넌트는 왜? 한번에 하나의 Route만 렌더링하려고!
// Link 컴포넌트가 아닌  a html 태그를 사용해도되지만 전체가 리로딩됨. Link컴포넌트를 사용하면 재실행되는걸 피할수있음.
// Link는 새로고침없이 다른 페이지로 이동시켜줌.

function App() {
    return <Router>
        <Switch>
            <Route path="/movie">
                <Detail/>
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>
}

export default App;
