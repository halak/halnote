---
title: 부동 소수점 시뮬레이터 (32bit)
---

# 부동 소수점 시뮬레이터 (32bit)

이 페이지에서는 2진수 기반의 32비트 부동소수점이 정확히 10진수로 표현하면 어떤 값을 나타내는지 확인할 수 있습니다.<br />

<form class="ieee-754" data-handler="ieee-754">
    <div class="output">
        <label>
            <h5>실제 값</h5>
            <output name="interpreted-value" for="bit1 bit2 bit3 bit4 bit5 bit6 bit7 bit8 bit9 bit10 bit11 bit12 bit13 bit14 bit15 bit16 bit17 bit18 bit19 bit20 bit21 bit22 bit23 bit24 bit25 bit26 bit27 bit28 bit29 bit30 bit31 bit32">+0</output>
        </label>
    </div>
    <div class="row">
        <h5>부호</h5>
        <div>
            {{ checkbox('bit1') }}
        </div>
    </div>
    <div class="row">
        <h5>지수부</h5>
        <div>
            {{ checkbox('bit2') }}
            {{ checkbox('bit3') }}
            {{ checkbox('bit4') }}
            {{ checkbox('bit5') }}
            {{ checkbox('bit6') }}
            {{ checkbox('bit7') }}
            {{ checkbox('bit8') }}
            {{ checkbox('bit9') }}
        </div>
    </div>
    <div class="row">
        <h5>가수부</h5>
        <div>
            {{ checkbox('bit10') }}
            {{ checkbox('bit11') }}
            {{ checkbox('bit12') }}
            {{ checkbox('bit13') }}
            {{ checkbox('bit14') }}
            {{ checkbox('bit15') }}
            {{ checkbox('bit16') }}
            {{ checkbox('bit17') }}
            {{ checkbox('bit18') }}
            {{ checkbox('bit19') }}
            {{ checkbox('bit20') }}
            {{ checkbox('bit21') }}
            {{ checkbox('bit22') }}
            {{ checkbox('bit23') }}
            {{ checkbox('bit24') }}
            {{ checkbox('bit25') }}
            {{ checkbox('bit26') }}
            {{ checkbox('bit27') }}
            {{ checkbox('bit28') }}
            {{ checkbox('bit29') }}
            {{ checkbox('bit30') }}
            {{ checkbox('bit31') }}
            {{ checkbox('bit32') }}
        </div>
    </div>
</form>