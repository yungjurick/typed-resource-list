# Typed Resource List Solution Description 🚀

이 문서는 과제에 대한 설명 및 트러블 슈팅에 대한 내용을 담은 글 입니다!

## Used Tech / Packages

- `Nextjs v13 (App Router)`
- `Recoil` - Global State Management
- `Tailwind CSS` - Styling
- `React Toastify` - Toast
- `Date-fns` - Date Library
- `uuid` - UID Generator
- `Typed Design System`

## Solution

**Resource Data**

- `Resource` 들은 배열 형태로 리코일 상태로 저장합니다
- `Resource`는 두 가지 형태로 타입을 나눠져있고 union 타입으로 관리하고 있습니다
  - `UrlResource`
  - `ImageResource`
- 추가 된 순으로 리스트에 아이템이 뿌려져야 하기에 `Resource` 리스트 같은 경우는 `sortedResources` selector로 렌더링 합니다
- 뷰어에 보여지는 `Resource` 같은 경우는 selector를 통해 관리 합니다 - `@selectedResource`
- 지정된 resource의 ID 값을 담고 있는 별개의 atom이 존재하고 이 atom을 참조하여 resource 배열이 담긴 atom에서 조회하는 방식으로 개발 되었습니다
- 지정된 resource는 selector로 조회하기에 resource의 변경사항에 싱크가 되어 있습니다
- 이미지 같은 경우는 Base64로 인코딩하여 저장 됩니다

**Validation**

- 코드 내에 리소스를 업로드 하는 함수 내부에서 validation을 먼저 진행 후 전부 통과 할 시 resources atom에 추가 하는 방식으로 구현 되었습니다
- 이미지 등록 같은 경우는 이미지 별로 validation이 개별적으로 일어나야 하기에 forEach로 파일 아이템을 iterate하면서 validation 로직을 실행 합니다
- 리소스 등록 시에 발생하는 랜덤 딜레이 및 성공 확률은 `Math.random()`을 활용하여 구현 되었습니다
- 리소스 등록 로딩, 성공, 그리고 실패에 대한 토스트는 `react-toastify`로 구현 되였습니다

**Other Logic**

- 제목 변경 시 인풋 필드 밖으로 나오면 수정된 이름으로 저장하는 부분은 input 컴포넌트의 `onBlur` 이벤트를 활용하여 구현 하였습니다
- 기본적으로 제목 변경 인풋이 활성화 되면 focus를 주고 밖을 클릭 시 blur이 트리거 되면서 저장 로직이 실행이 됩니다
- 또한, 인풋들 같은 경우는 `<form>`으로 wrapping하여 Enter 키에 대한 서포트도 추가 했습니다

## Issue

**Typed Design System Peer Dependency Module Error**

- Emotion이 프로젝트에 dependency로 설치가 되어 있지 않으면 Typed design-system의 컴포넌트를 참조 할 때 module-not-found 에러가 발생합니다
- 그렇다고 emotion 패키지를 최신 버전으로 설치해도 실제로 emotion 11 부터는 emotion/core에서 emotion/react로 패키지의 이름이 변경되어서 naming mismatch 에러가 이어서 발생합니다
- 이를 현재 원활하게 해결 하기 위해서는 emotion/core가 사용이 가능한 10.x 버전 대로 돌려두면 정상적으로 작동합니다
