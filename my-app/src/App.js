import {useState, useEffect} from "react"

// App의 state 변경될때마다 리로드된다. 만약 최초 1번만 리로드하고싶다면?
// 그런 경우는 많지! api 호출은 딱 1번만 이루어져야하니까
// 그럼 어떻게 해야 처음에만 로딩될까?
// 일반적으로 sate변화되면 전부 리로드 된다. 왜냐하면 업데이트된 Value를 봐야하니까 알아서 리로드하는거임. 어떨때? State가 변경될때
// 그래서 나온게 useEffect 이다.
// useEffect의 첫번째인자에 한번만 실행될 함수를 넣어준다.

// useEffect(() => {
//     console.log("SEARCH FOR", keyword);
// }, [keyworkd]);
//  위 코드는 keyword state가 변경될때만 리로딩된다. 그래서 빈 배열을 주면 딱 1번만 리로드된다. 리액트가 지켜보고 있지 않으니까.

function App() {

    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");

    const onClick = () => {
        setValue((prev) => prev + 1);
    }

    const onChange = (event) => {
        setKeyword(event.target.value);
    }
    console.log("i run all the time");

    const iRunOnlyOne = () => {
        console.log("I run only once.");
    }

    useEffect(iRunOnlyOne, []);
    useEffect(() => {
        if (keyword !== "" && keyword.length > 5) {
            console.log("SEARCH FOR", keyword);
        }
        console.log ("I run when 'keyword' change")
    }, [keyword]);

    useEffect(() => {

        console.log ("I run when 'counter' change")
    }, [counter]);

    return (
        <div>
            <input
                value={keyword}
                onChange={onChange}
                type="text"
                placeholder="Search here..."/>
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>

        </div>
    );
}

export default App;
