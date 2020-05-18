---
title: 헷갈리기 쉬운 유니코드
---

# 헷갈리기 쉬운 유니코드 문자들

의미는 다르지만 형태가 비슷한 유니코드 문자들을 정리한 문서입니다. 물론 형태가 비슷해서 사람이 읽을 때는 대개 문제가 없습니다만 그로 인하여 더욱 까다로운 모습의 버그로 나타나 개발자들의 시간을 낭비시킵니다.


## 줄표 (Dash)

| 출력 | 유니코드 | 이름                                   | 메모          |
|:----:|:--------:|:---------------------------------------|:--------------|
|  -   | `U+002D` | Hyphen-Minus                           |               |
|  －  | `U+FF0D` | Fullwidth Hyphen-Minus                 |               |
|  −   | `U+2212` | Minus Sign                             | 수학 기호     |
|  ‒   | `U+2012` | Figure Dash                            |               |
|  –   | `U+2013` | En Dash                                |               |
|  —   | `U+2014` | Em Dash                                |               |
|  ─   | `U+2500` | Box Drawings Light Horizontal          |               |
|  ━   | `U+2501` | Box Drawings Heavy Horizontal          |               |
|  ー  | `U+30FC` | Katakana-Hiragana Prolonged Sound Mark | 카타가나 장음 |
|  一  | `U+4E00` | CJK Unified Ideograph-4E00             | 한자 숫자 `1` |


## 물결표 (Wave)

| 출력 | 유니코드 | 이름            | 메모      |
|:----:|:--------:|:----------------|:----------|
|  ~   | `U+007E` | Tilde           |           |
|  ˜   | `U+02DC` | Small Tilde     |           |
|  ∼   | `U+223C` | Tilde Operator  |           |
|  ∽   | `U+223D` | Reversed Tilde  |           |
|  ～  | `U+FF5E` | Fullwidth Tilde |           |
|  〜   | `U+301C` | Wave Dash       |           |


## 원과 영 (Circle and Zero)

| 출력 | 유니코드 | 이름                    | 메모          |
|:----:|:--------:|:------------------------|:--------------|
|  ○   | `U+25CB` | White Circle            |               |
|  〇  | `U+3007` | Ideographic Number Zero | 한자 숫자 `0` |



## 생략 부호 (Ellipsis)

`Midline Horizontal Ellipsis`를 수학 기호로써 $1 + 2 + 3 + \cdots$ 에 사용되는 문자로 평문을 생략할 때에는 `Horizontal Ellipsis`를 사용해야합니다.

| 출력 | 유니코드 | 이름                         | 메모      |
|:----:|:--------:|:-----------------------------|:----------|
|  …   | `U+2026` | Horizontal Ellipsis          |           |
|  ⋯   | `U+22EF` | Midline Horizontal Ellipsis  | 수학 기호 |
 