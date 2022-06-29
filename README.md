![voca_대지 1](https://user-images.githubusercontent.com/105091138/176488392-59c51ba2-1b4d-4758-bcd2-e654cc67095e.png)
# 💬 개요

개발을 시작하는 사람들을 위한 개발 용어 사전

# 💪 목적

- 최소한의 컴포넌트 사용
- firebase를 사용해 서버에 데이터 저장

# ✨ 기능

![ezgif com-gif-maker](https://user-images.githubusercontent.com/105091138/176488120-577b9c3f-d819-46c1-9118-2ed0cac76b17.gif)
- 메인 페이지
    - 일주일 평균 점수 확인
    - 오늘 요일이 리스트 상단에 위치
    - `리셋버튼`을 누르면 점수 리셋

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/105091138/176483176-f1c643bf-2ed3-42d6-b989-53d91fb79b11.gif)
- 리뷰 페이지
    - 선택한 요일을 파라미터로 가져와 해당 요일을 화면에 보여주기
    - 점수를 입력하면 데이터베이스에 저장했다가 메인 페이지에 보여주기
    
# 🚀 트러블슈팅

### **에러**

score 의 state 변경이 비동기 처리로 한박자씩 늦게 변경

### 해결 코드

useEffect 의 dependency array 에 score를 넣어 score가 변경될 때 렌더링이 이루어지게 함

<img src="https://user-images.githubusercontent.com/105091138/176482009-d28aec2c-321e-4eae-b1e2-0faf608c71b2.png" width="500" height="504">
