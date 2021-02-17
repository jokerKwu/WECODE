#React-Native

# 컴포넌트 사용

리액트 네이티브에서는 html tag 대신 RN에서 제공하는 컴포넌트를 가지고 화면을 구성한다.<br>
웹과 다른 환경이기 때문에 HTML을 사용할 수 없다.<br>

## View 
화면 상에서 하나의 영역을 나타내는 컴포넌트이다.<br>
웹에서 사용했던 div태그와 같은 역할을 합니다.<br>

## Styling
RN에서는 하나의 js 파일 안에 css를 같이 사용한다.<br>
스타일링을 할 때는 px 단위를 사용하지 않는다.<br>

기존에 배웠던 속성과 다른 대표적인 두 가지<br>
<strong>display:flex</strong>
RN에서는 기본이 flex이기 때문에 더 편하게 스타일링을 할 수 있다.<br>

<strong>flex:1</strong>
기존에 화면 전체를 채울 때 height: 100% or height: 100vh를 사용했다면 RN에서는 flex:1을 사용한다.<br>

## Text
문자를 보여줄 수 있는 컴포넌트이다. 웹페이지를 개발했을 떄는 따로 사용하지 않았지만 RN에서는 모든 문자를 사용할 때문에 Text 컴포넌트를 사용해야 한다.

## Image
이미지는 아래와 두 가지 방법으로 사용할 수 있다.<br>
이미지를 사용하실 때는 항상 width(가로)와 height(세로)를 넣어줘야된다.<br>

### 1.외부에 있는 이미지 파일 참조
```
<Image
	style={{ ... }}
	source={{uri: "이미지 주소"}}>
</Image>
```

### 2.내부에 있는 이미지 파일 참조
```
<Image
	source={require("이미지 경로")}>
</Image>
```
# 컴포넌트란?
컴포넌트는 독립적이면서 재사용가능한 코드라는 뜻을 가진다.<br>
컴포넌트 영역은 개발자 설정에 따라서 크기가 다르다.<br>

컴포넌트로 나누는 기준은 "재사용이 가능한 부분인가?" 이다.<br>
재사용되는 구역을 하나의 컴포넌트를 만들어서 재사용하는게 좋다.<br>
즉, 컴포넌트를 사용하는 이유는 재사용 가능한 코드를 이용해 효율적으로 코드를 작성하기 위해서이다.<br>

JSX는 자바스크립트 확장 문법이다.<br>
RN에서 좀 더 JS를 편하게 사용할 수 있게 해주는 문법이라고 생각하면 된다.<br>

JSX 덕분에 {} 중괄호 하나는 자바스크립트 영역으로 인식한다.<br>
{{}} 에 의미는 자바스크립트 영역안에 객체 사용한거다.<br>

변수에 컴포넌트 저장해서 사용하기<br>
<pre><code>
let sayHello = <Text>Hello, world!</Text>
</code></pre>

## 중첩된 컴포넌트
<pre><code>
let sayHello = (
<View>
  <Text>Hello, world!</Text>
</View>
  )
</code></pre>

그리고 항상 가장 바깥에는 하나의 컴포넌트로 감싸야 한다.<br>
<pre><code>
//잘못된 예시
let wrongList = (
	<Text>테스트1</Text>
	<Text>테스트2</Text>
)
//잘된 예시
let goodList = (
	<View>
		<Text>테스트1</Text>
		<Text>테스트2</Text>
	</View>
)
</code></pre>

## 최상위 태그에 <>
위에서 꼭 가장 바깥에는 하나의 컴포넌트만 있어야 한다.<br>
그 컴포넌트를 의미 없게 View 컴포넌트를 사용하기 보다는 빈 컴포넌트를 사용할 수도 있다.<br>

## import
import는 프로그래밍에서는 가져온다는 의미로 사용된다.<br>
import A from B 는 의미 그대로 B로부터 A를 가져오는 것이다.<br>

## export default
import와 반대되는 의미이다. 뒤에 default는 붙일 수도 있고 안 붙일 수도 있다.<br>
default를 붙이게 되면 다른 파일에서 이 파일을 import 할 때 아무 이름으로 가져올 수 있다.<br>
하지만 default를 붙이지 않으면 어떤 함수를 import 할지 모르게 되므로 꼭 그 함수이름으로 가져와야 한다.<br>

