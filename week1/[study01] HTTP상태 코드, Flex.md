# wecode APP1기 1주차 내용 정리

## 수업 챕터
[ HTML , CSS ]


## HTTP 상태 코드 (HTTP status code)

- 1xx : 정보성 상태 코드
정보성 상태 코드는 HTTP/1.1 에서 도입되어 비교적 새로운 것이며, 복잡함을 감수할 만큼 가치가 있는지에 대해 논란이 되고 있다.

- 2xx : 성공 상태 코드


- 3xx : 리다이렉션 상태 코드
클라이언트에 요청에 대해 적절한 다른 위치를 제공하거나, 대안의 응답을 제공

- 4xx : 클라이언트 에러 상태 코드
클라이언트의 잘못된 요청에 대한 대응 코드

- 5xx : 올바른 클라이언트 요청에 대해 서버의 문제로 응답 할 수 없음을 의미


## HTML 
 - HTML은 웹 페이지를 만들기 위한 언어
 - HTML로 웹 페이지의 구조를 잡을 수 있다.
 - HTML 파일은 이미지, 텍스트, 비디오, 버튼 등 웹사이트에 보여줄 내용을 구성하고 있다.
 - 브라우저는 HTML파일을 가지고 뭘 어떻게 그려주면 되는지 파악한 후에 웹 페이지를 생성
 - Hypertext Markup Language
 
 ## CSS
 CSS는 기존에 HTML만으로 이루어져서 단순하게 정리된 정보를 좀 더 보기에도 좋고 효과적으로 전달하기 위해 탄생한 언어이다.
 
 HTML 태그의 색이나 레이아웃 등의 디자인을 바꾸기 위해서는 먼저 무엇(선택자)을 바꿀지 선택하는 과정이 필요하다.
 
 선택자에는 2가지가 있다. class , id 
 class는 클래스명 앞에 점(.)을 붙인다.
 id는 아이디명 앞에 #을 붙인다.
 
 
 ## 경로 설정
 상대 경로 - 현재 위치한 곳을 기준으로해서 그곳의 위치이다.
 1. / : 루트
 2. ./ : 현재 위치
 3. ../ : 현재 위치의 상단 폴더
 
 절대 경로 - 어떠한 웹페이지나 파일이 가지고 있는 고유한 경로 (ex C:/Program Files/ ....)
 
 
 CSS 꼭 알아야 하는 CSS 속성
 
 margin - border를 기준으로 바깥 영역
 margin + 이면 바깥 영역이 커진다.
 margin - 이면 바깥 영역이 작아진다.
 
 padding - border를 기준으로 안쪽 영역 
 padding + 이면 안쪽 영역이 커진다.
 padding - 이면 안쪽 영역이 작아진다.
 
 ## Flex-bod의 여러 가지 속성들
 1. justify-content
 2. align-items
 3. flex-direction
 4. align-self
 5. flex-wrap
 6. flex-flow
 7. align-content
 
 #### justify-content
 flex의 방향과 같은 방향에서 요소들을 배치하는 방법이다.
 1. flex-start: 요소들을 컨테이너의 왼쪽으로 정렬
 2. flex-end : 요소들을 컨테이너의 오른쪽으로 정렬
 3. center : 요소들을 컨테이너의 가운데로 정렬
 4. space-between : 요소들 사이에 동일한 간격을 둔다.
 5. space-around : 요소들 주위에 동일한 간격을 둔다.
 
 #### align-content
 flex-wrap의 wrap이나 wrap-reverse에 의해 여러 줄이 되었을 때 줄 사이의 간격을 조절할 수 있는 속성
 1. flex-start : 여러 줄들을 컨테이너의 꼭대기에 정렬
 2. flex-end : 여러 줄들을 컨테이너의 바닥에 정렬
 3. center : 여러 줄들을 세로선 상의 가운데에 정렬
 4. space-between : 여러 줄들 사이에 동일한 간격을 둔다.
 5. space-around : 여러 줄들 주위에 동일한 간격을 둔다.
 6. stretch : 여러 줄들을 컨테이너에 맞도록 늘린다.
 
 
