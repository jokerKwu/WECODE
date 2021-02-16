# Flex 정리 
-------------------------------------------------------------
## Flex 
Flex는 레이아웃 배치 전용 기능으로 고안되었다. <br>
부모 요소인 div.container를 <strong>Flex Container</strong>라고 부르고,<br>
자식 요소인 div.item들을 <strong>Flex Item</strong>이라고 부른다.<br>
컨테이너가 Flex의 영향을 받는 전체 공간이고, 설정된 속성에 따라 각각의 아이템들이 어떤 형태로 배치되는 것이라고 생각하면 된다.<br>

Flex의 속성들은

- 컨테이너에 적용하는 속성
- 아이템에 적용하는 속성


Flex 컨테이너에 적용하는 속성들<br>
Flex 컨테이너에 display:flex;를 적용하는게 시작이다.<br>
Flex 아이템들은 가로 방향으로 배치되고, 자신이 가진 내용물의 width만큼만 차지하게 된다. 마치 inline 요소들 처럼 height는 컨테이너의 높이만큼 늘어난다.<br>
inline-flex도 있는데, 이건 block과 inline-block의 관계를 생각하면 된다.<br>

### 배치 방향 설정
flex-direction<br>
아이템들이 배치되는 축의 방향을 결정하는 속성. 즉 "메인축의 방향을 가로로 할거냐 세로로 할거냐"를 정해주는 거다.<br>
1. row(기본값) - 아이템들이 행(가로) 방향으로 배치<br>
2. row-reverse - 아이템들이 역순으로 가로 배치<br>
3. column - 아이템들이 열(세로) 방향으로 배치<br>
4. column-reverse - 아이템들이 역순으로 세로 배치<br>

### flex-flow 
flex-direction과 flex-wrap을 한꺼번에 지정할 수 있는 단축 속성<br>
flex-direction, flex-wrap의 순으로 한 칸 떼고 써준다.<br>

### 메인축 방향 정렬
justify-content<br>
메인축 방향으로 아이템들을 정렬하는 속성<br>
1. flex-start(default) - 아이템들을 시작점으로 정렬 <br>
2. flex-end - 아이템들을 끝점으로 정렬<br>
3. center - 아이템들을 가운데로 정렬<br>
4. space-between - 아이템들의 "사이"에 균일한 간격을 만들어 준다.<br>
5. space-around - 아이템들의 "둘레"에 균일한 간격을 만들어 준다.<br><br>
6. space-evenly - 아이템들의 사이와 양 끝에 균일한 간격을 만들어 준다.<br>

![justify-content 속성](https://user-images.githubusercontent.com/35329247/107459140-de143780-6b98-11eb-9759-0b3ae1b189b2.PNG)

### 수직축 방향 정렬
align-items<br>
수직축 방향으로 아이템들을 정렬하는 속성<br>
1. stretch(default) - 아이템들이 수직축 방향으로 끝까지 쭈욱 늘어난다.<br>
2. flex-start - 아이템들을 시작점으로 정렬<br>
3. flex-end - 아이템들을 끝으로 정렬<br>
4. center - 아이템들을 가운데로 정렬<br>
5. baseline - 아이템들을 텍스트 베이스라인 기준으로 정렬<br>

### 여러 행 정렬
align-content는 flex-wrap;wrap;이 설정된 상태에서, 아이템들의 행이 2줄 이상 되었을 때의 수직축 방향 정렬을 결정하는 속성<br>

### 유연한 박스의 기본 영역
flex-basis는 Flex 아이템의 기본 크기를 설정한다. (flex-direction이 row일 때는 너비, column일 때는 높이) <br>

### 유연하게 늘리기
flex-grow는 아이템이 flex-basis의 값보다 커질 수 있는지를 결정하는 속성 <br>
flex-grow에는 숫자값이 들어가는데, 몇이든 일단 0보다 큰 값이 세팅이 되면 해당 아이템이 유연한(Flexible) 박스로 변하고 원래의 크기보다 커지며 빈 공간을 메우게 된다. <br>


# display vs visibility 
------------------------------
### display 속성은 요소를 어떻게 표시할지를 선택
### visibility 속성은 요소를 보일지 말지 결정하는 속성

- display : inline; 요소를 inline 요소처럼 표시한다. (따라서 앞뒤로 줄바꿈 되지 않는다.)
- display : block; 요소를 block 요소처럼 표시한다. (따라서 요소 앞 뒤로 줄바꿈 된다.)
- display : none; 박스가 생성되지 않습니다. (따라서 공간을 차지하지도 않습니다.)
- display : inline-block; 요소는 inline인데 내부는 block처럼 표시한다. (즉, 박스 모양이 inline 처럼 옆으로 늘어난다.)


### visibility 속성은 어떤 요소를 보이게 할지 숨길지를 결정한다.
- visibility : visible; 기본값으로 요소가 그대로 보인다.
- visibility : hidden; 요소가 보이지 않지만, 여전히 그 공간을 차지하며 투명하게 남는다.
- visibility : collapse; <table> 태그에서만 사용할 수 있는 값으로, 선택 테이블의 행과 열을 숨긴다. 
