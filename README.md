# Week3. 리액트 입문 과제 - 내 일주일 평점 남기기

## 과제 목표
- 컴포넌트와 리액트 요소를 다룰 수 있어요.
- 이벤트를 관리할 수 있어요.
- 라우팅을 할 수 있어요.

<br>

## 과제 미션
`내 일주일 평점 남기기 완성` + `파이어베이스 or S3로 배포` 두 가지를 모두 완수해야 합니다.
1) 메인 페이지
  - 일주일 평점 보여주기
    - 평점은 1~5까지 숫자 중 랜덤한 정수로 만들어주세요.
    - 각 요일 옆 삼각형 버튼을 누르면 요일 평점 남기기 페이지로 이동하기
2) 평점 남기기 페이지
  - 선택한 요일 보여주기
  - 동그라미를 눌러서 평점 입력하기 (1번째 동그라미 누르면 1점, 3번째 동그라미 누르면 3점)
  - 남기기 버튼을 누르면 이전 페이지로 이동하기
3) 평균 평점 보여주기 (메인 페이지 컴포넌트에 구성 or 하위 컴포넌트인 평균 평점 컴포넌트에 구성)
  - 각 요일별 랜덤 정수로 구성된 점수의 평균을 구하기
  - Reset 버튼을 누르면 평점 평균을 0으로 상테변화 시키기


+) 추가로 해보면 좋을 기능 `(필수x)`
  - 오늘을 기준으로 일주일을 보여주세요.
    - ex: 오늘이 화요일일 경우, "화-수-목-금-토-일-월"을, 
          오늘이 목요일일 경우, "목-금-토-일-월-화-수"를 보여주세요.
  - 키보드의 숫자키를 눌러서 평점을 입력할 수 있게 해보세요. (input 사용X)
    - ex: 1,2,3,4,5 중 하나를 누르면 평점이 입력되도록 해보세요.
    
<hr>
<br>

## 작업 내용

### 공통
- CSS는 styled-componenets 패키지 활용
- App.js 내에 메인페이지/상세페이지 두가지 컴포넌트로 나누어 진행

### 메인 페이지
- for문을 사용하여 1~5까지의 숫자를 랜덤으로 생성
- 랜덤 숫자의 평균값이 바뀔때마다 화면에 반영되도록 useState() 사용
- 월~일 총 7개의 요소가 담긴 배열을 생성 후, new Data() 함수를 이용하여 오늘 요일에 대한 숫자를 반환받고
  오늘 요일을 기준으로 정수값이 나열된 새로운 배열 생성(App.js 파일 > dateFromToday 함수)
- 요일 배열의 길이만큼 map 함수로 요일별 row 생성
- 요일별 row 안에서 map 함수로 별 5개 생성
- 각 요일에 해당하는 랜덤으로 생성된 평점 숫자를 map 함수로 돌아가는 별의 index와 비교하여 별 이미지 경로 변경(활성화/비활성화 이미지)
- 평점 남기기 버튼에 연결된 요일별 상세 페이지는 파일 하나로 작업하고, 넘겨주는 파라미터 값에 따라 요일 정보가 나오도록 반영

### 상세 페이지(요일별 평점 남기기)
- useState() 를 사용하여 클릭 및 키보드 이벤트가 발생할때마다 변경되는 별의 갯수를 반영
- useEffect() 훅 안에 window에 keyup 이벤트를 추가하여 key값이 1~5일 경우 활성화된 별의 갯수 바뀌도록 반영
- 삼항연산자를 활용하여 useState() 내에 선언된 별의 갯수인 count의 값이 변할 때마다 이모티콘이 바뀌어 보이도록 효과 추가
- Array.from 함수를 활용하여 length: 5의 길이를 가진 새로운 배열을 생성해 map으로 버튼 5개 추가,
  해당 버튼이 눌리면 버튼의 index 값을 count의 새로운 값으로 지정해 선택된 별의 이미지 변경되도록 반영
  
<br>

## 사용된 Package
- react-router-dom (v5.2.1)
- styled-components
