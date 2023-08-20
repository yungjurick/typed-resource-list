# Typed Resource List Solution Description

## Solution

## Issue

- Typed Design System Peer Dependency Module Error
  - Emotion이 프로젝트에 dependency로 설치가 되어 있지 않으면 Typed design-system의 컴포넌트를 참조 할 때 module-not-found 에러가 발생합니다
  - 그렇다고 emotion 패키지를 최신 버전으로 설치해도 실제로 emotion 11 부터는 emotion/core에서 emotion/react로 패키지의 이름이 변경되어서 naming mismatch 에러가 이어서 발생합니다
  - 이를 현재 원활하게 해결 하기 위해서는 emotion/core가 사용이 가능한 10.x 버전 대로 돌려두면 정상적으로 작동합니다
