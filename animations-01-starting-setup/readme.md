## transition 컴포넌트
<transition> 컴포넌트로 감싼 요소에 css 클래스를 추가한다.

### 엘레먼트가 생성되기까지
1. etner-from, enter-active 클래스를 동시에 추가한다.
2. enter-from 클래스를 지우고, enter-active 클래스는 남겨둔다.
3. 애니메이션이 끝나면 enter-to 클래스를 바로 추가한다.
4. vue에서 특수 css 클래스를 분석하여 transition 효과와 애니메이션을 찾아내 지속시간을 읽는다.
5. 해당 지속 시간만큼 특수 css를 추가해서 해당 요소가 나타나는 시간동안 여러 스타일을 지정할 수 있도록 한다.

### 엘레먼트가 사라지기까지
1. v-if 조건이 거짓이라 판단되면 생성된 요소를 해제한다.
2. leave-form, leave-active 클래스를 동시에 추가한다.
3. leave-from 클래스를 지우고, leave-to 클래스를 추가한다.
4. vue에서 특수 css 클래스를 분석하여 transition 효과와 애니메이션을 찾아내 지속시간을 읽는다.
5. 해당 지속 시간이 끝나면 비로서 DOM에서 요소를 제거한다.