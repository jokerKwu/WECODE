# React.js JSX

React.js는 일반 JavaScript 문법이 아닌 JSX 문법을 사용하여 UI를 템플릿화 한다.<br>
## JSX 사용하면 장점
 - JSX는 컴파일링 되면서 최적화 되므로 빠르다.
 - Type-safe (어떠한 연산도 정의되지 않은 결과를 내놓지 않는 것, 즉 예측 불가능한 결과를 나타내지 않는 것)하며 컴파일링 과정에서 에러를 감지할 수 있다.
 - HTML에 익숙하다면, JSX를 사용하여 더 쉽고 빠르게 템플릿을 작성할 수 있다.

# 확장자에 대하여...
## JSX VS JS

JSX코드는 자바스크립트가 확장된 형태로 엄밀히 얘기해서 브라우저가 바로 실행할 수 있는 자바스크립트 코드가 아니다.<br>
이렇게 JSX와 같이 자바스크립트의 표준에서 벗어난 코드는 소위 트랜스파일이라는 과정을 거쳐서 브라우저가 이해할 수 있는 순수한 자바스크립트 코드로 변환을 해줘야한다.<br>

브라우저에서 JSX코드를 바로 실행한다면?<br>
우리가 리액트를 사용하는 프로젝트에서는 위와 같이 JSX 코드가 자바스크립트로 변환되는 것이 당연하게 여겨진다.<br>
일반적으로 프로젝트 초기에 이미 다른 누군가에 의해 셋업이 되었거나, Create React App과 같은 프레임워크들이 이 부분에 대해 걱정할 필요없이 셋업이 되서 나오기 때문이다.<br>

JSX 코드를 자바스크립트로 변환하기 (Babel)<br>
JSX 코드는 자바스크립트가 확장된 형태로 엄밀히 얘기해서 브라우저가 바로 실행할 수 있는 자바스크립트 코드가 아니다.<br>
이렇게 JSX와 같이 자바스크립트의 표준에서 벗어난 코드는 소위 트랜스파일이라는 과정을 거쳐서 브라우저가 이해할 수 있는 순수한 자바스크립트 코드로 변환을 해줘야 한다.<br>


### 1. JSX 사용하기
JSX는 HTML이랑 거의 비슷하게 생겼다. <br>

### 2. Nested Elements
컴포넌트에서 여러 Element를 렌더링 해야 할 때, 그 element들을 필수적으로 container element 안에 포함시켜줘야된다.<br>

### 3. JavaScript Expression
JSX안에서, JavaScript 표현을 사용하는 방법은 매우 간단하다. {}로 wrapping 하면 된다.<br>

- if-else 문 사용 불가<br>
JSX안에서 사용되는 JavaScript 표현에는 If-Else 문이 사용 불가능하다. 이에 대한 대안은 ternary( condition ? true: false) 표현을 사용하는 것이다.<br>

### 4. Inline style
React의 Inline Style 에서는 string 형식이 사용되지 않고 key 가 camelCase인 Object가 사용된다.<br>

### 5. 주석
{ /* 내용 */ } 형식으로 작성하면 된다.<br>

### 6. Naming Convention
모든 React 컴포넌트는 첫 문자가 대문자인 CamelCase로 작성된다.<br>

