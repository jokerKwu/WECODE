# Redux란?
자바스크립트의 State를 관리하기 위해 등장한 라이브러리이다.

## Redux를 사용하는 이유?
부모 Component에서 State를 관리할 수 있다. 하지만 정말 많은 State들이 산재되어 있다보면, <br>
이 많은 데이터를 한곳에서 관리할 수 있는 방법을 찾게 될 것이다. 바로 Redux가 그 해결방법이다.<br>
Redux는 State들을 하나의 Store에서 유지한다.<br>

### Action
Action은 Redux의 State가 어떻게 변할지를 알려주는 인자이다.<br>
Redux에서는 State를 변경할 수 있는 유일한 방법을 store에 action 신호를 보내는 것이라고 규정하고 있다.<br>
즉, Action은 application에서 Store에 보내는 일종의 데이터이다.<br>

### Reducer
1. Reducer는 순수함수이다.
  - 반환값이 state가 함수 인자인 state, action에 의해서만 정의되는 함수.
  - state의 변화에 외부 요인이 영향을 주면 순수함수가 아니다.
2. state는 불변성을 갖는다.

### Store
Application의 데이터 State를 저장해서 전역에서 관리하는 한 곳.<br>

#### Store의 기능
- store.getState() : 애플리케이션의 현재 state tree에 접근하는 용도
- store.dispatch(action) : 액션을 기반으로 state 변화를 일으키는 용도
- store.subscribe() : state에서 변화를 감지하는 용도. 액션이 dispatch 될 때마다 호출됨.
- store.unsubscribe() : 컴포넌트가 언마운트될 때, store에서 listening를 해제하고, 메모리 누수를 막기 위해 사용된다.
