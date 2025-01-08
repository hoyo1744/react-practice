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
// 7-0
// event.preventDefault();은 form 이 새로고침되는걸 막음.
// setToDos((currentArray) => [toDo, ...currentArray] ) ...은 배열추가를 의미함.
// setToDos((currentArray) => [toDo, ...currentArray] ) ...은 배열추가를 의미함. ==> setToDos(function(currentArray){[toDo, ...currentArray}); 와 똑같다.

// 7-1
// set 함수는 2가지 옵션이 있다. 단순히 값을 전달하거나 함수는 전달하거나!
// 7-1은 todo List를 자바스크립트를 이용해서 컴포넌트로 표현하는것

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);

    const onChange = (event) => {
        setToDo(event.target.value);
    }


    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDo("");
        console.log(toDo);
        setToDos((currentArray) => [toDo, ...currentArray])
    }

    console.log(toDos);

    return (

        <div>
            <h1>
                My to Dos ({toDos.length})
            </h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} type="text" placeholder="write your to do...."/>
                <button>Add To Do</button>
            </form>
            <hr/>
            <ul>
                {toDos.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>);


}

export default App;
