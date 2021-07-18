# design-system

# Project setup

```
npm install
```

## Compiles and hot-reloads for development

```
npm run serve
```

## Compiles and minifies for production

```
npm run build
```

## 컴포넌트 이용 방법

### \<Row>

#### Description

Grid 기준 값은 10 입니다.

### \<Col>

#### Description

Grid 기준 10에서 cols 수에 따라 그려집니다.

#### Properties

| property | type   | default | description       |
| -------- | ------ | ------- | ----------------- |
| cols     | Number |         | 그리드 셀의 열 수 |

#### example

```
<Row>
  <Col cols="2">1</Col>
  <Col cols="2">2</Col>
  <Col cols="2">3</Col>
  <Col cols="2">4</Col>
  <Col cols="2">5</Col>
</Row>
```

### \<Card>

#### description

카드 레이아웃 direction에 따라 가로형/세로형 레이아웃이 그려집니다.
imgSrc, imgAlt property는 필수로 입력해야 합니다.

#### Properties

| property  | type           | default | description        |
| --------- | -------------- | ------- | ------------------ |
| imgSrc    | String         |         | 이미지 경로        |
| imgAlt    | String         |         | 이미지 대체 텍스트 |
| direction | 'col' or 'row' | 'col'   | 카드 레이아웃 방향 |

#### example

```
<Card img-src="${imgUrl}" img-alt="Image" direction="col">
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
```

### \<CardContent>

#### description

카드 레이아웃의 content 컴포넌트입니다.
유연한 사용을 위해 내부의 내용은 slot으로 받도록 되어있습니다.

### \<CardFooter>

#### description

카드 레이아웃의 footer 컴포넌트입니다.
유연한 사용을 위해 내부의 내용은 slot으로 받도록 되어있습니다.

### \<Star>

#### Properties

| property | type    | default | description             |
| -------- | ------- | ------- | ----------------------- |
| isFilled | Boolean | false   | 별이 채워져 있는지 여부 |

#### example

```
<Star :isFilled="true" />

<Star isFilled />

```

### \<StarRate>

#### description

별점 컴포넌트 입니다. rate property를 받아서 별점을 보여줍니다.
rate를 보내지 않을 시 0점으로 보여집니다.

#### Properties

| property | type   | default | description |
| -------- | ------ | ------- | ----------- |
| rate     | Number | 0       | 별점        |

#### example

```
<StarRate rate="3"/>
```

### \<TextInput>

#### Properties

| property    | type    | default | description          |
| ----------- | ------- | ------- | -------------------- |
| placeholder | String  |         |                      |
| disabled    | Boolean | false   | 사용불가             |
| readonly    | Boolean | false   | 읽기전용             |
| content     | String  | ''      | 내용                 |
| maxLength   | Number  | 500     | 텍스트 입력 최대길이 |

### \<Button>

#### description

버튼 컴포넌트 입니다.
