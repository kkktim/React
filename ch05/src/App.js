import logo from "./logo.svg";
import "./App.css";
import MyComponent1 from "./components/MyComponent1";
import MyComponent2 from "./components/MyComponent2";
import MyComponent3 from "./components/MyComponent3";
/**
 *
 * @returns
 * 날짜 : 2022/05/12
 * 이름 : 강태호
 * 내용 : ch05.React Hooks 실습하기
 *
 * React Hooks
 *  - 함수형 컴포넌트에서 기능확장을 위해 제공하는 리액트 기능함수
 *  - 함수이름이 use~ 로 시작, 래퍼런스 참고(https://reactjs.org/docs/hooks-reference.html)
 *
 * useState()
 *  - 함수형 컴포넌트의 상태값을 관리하는 Hook
 *  - React의 가장 기본 Hook
 *
 * useEffect()
 *  - 함수형 컴포넌트가 랜더링될 때 특정 작업을 특정시점에 수행할 수 있는 Hook
 *  - 클래스형 컴포넌트의 생명주기 함수와 비슷한 역할
 *
 * useRef()
 *  - 함수형 컴포넌트에서 특정 DOM에 대한 식별값을 설정하기 위한 Hook
 */
function App() {
  return (
    <div className="App">
      <h3>ch05.React Hooks 실습</h3>
      <h4>1) useState</h4>
      <MyComponent1 />
      <h4>1) useEffect</h4>
      <MyComponent2 />
      <h4>1) useRef</h4>
      <MyComponent3>useRef 실습</MyComponent3>
    </div>
  );
}

export default App;
