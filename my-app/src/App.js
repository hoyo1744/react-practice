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

// 자바스크립트쓸때는 {}를 붙여야함.

// function Hello(){
//     useEffect(() => {
//         console.log('Im Here!');
//     }, [])
//
//     return <h1>
//         Hello
//     </h1>
// }
//  위코드에서 useEffect는 마치 생성자처럼 동작하는구나. 그럼 소멸자처럼 동작하는것도 있겟군?


// function Hello(){
//     useEffect(() => {
//         console.log("created :) ");
//         return () => {
//             console.log("destroyed :) ");
//         }
//     }, [])
//
//     return <h1>
//         Hello
//     </h1>;
// }
//  위코드에서 destroyted 부분을 cleanup function이라고 함, 소멸자 역할

function App() {
    const [showing, setShwoing] = useState(false);

    const onClick = () => {
        setShwoing((prev) => !prev);
    }


    function Hello(){

        useEffect(() => {
            console.log("hi :)");
            return function(){
                console.log("by :(");
            }
        }, []);

        return <h1>
            Hello
        </h1>;
    }

    return (
        <div>
            {showing ? <Hello/> : null}
            <button onClick={onClick}> {showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default App;
