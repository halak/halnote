export type IEEE754FloatingPoint = {
    readonly sign: string,
    readonly exponent: string,
    readonly mantissa: string,
    readonly decimal: string,
};

export function binary32(input: string): IEEE754FloatingPoint {
    return binary(input.substring(0, 1), input.substring(1, 9), input.substring(9, 32));
}

export function binary64(input: string): IEEE754FloatingPoint {
    return binary(input.substring(0, 1), input.substring(1, 12), input.substring(12, 64));
}

type BitString = {
    readonly bits: string;
    readonly int: number;
};

function binary(sign: string, exponent: string, mantissa: string): IEEE754FloatingPoint {
    const decimal = interpret(createBitString(sign), createBitString(exponent), createBitString(mantissa));
    return {
        sign: sign,
        exponent: exponent,
        mantissa: mantissa,
        decimal: decimal,
    };
}

function createBitString(bits: string): BitString {
    return {
        bits: bits,
        int: Number.parseInt(bits, 2),
    };
}

function interpret(sign: BitString, exponent: BitString, mantissa: BitString): string {
    const s = sign.int === 0 ? '+' : '-';
    if (exponent.int === 0) {
        if (mantissa.int === 0) {
            return `${s}0`;
        } else {
            const minimumExponent = 2 - (1 << (exponent.bits.length - 1));
            return `${s}${interpretSubnormalNumber(minimumExponent, mantissa)}`;
        }
    } else if (exponent.int === (1 << exponent.bits.length) - 1) {
        if (mantissa.int === 0) {
            return `${s}∞`;
        } else {
            return 'NaN';
        }
    } else {
        const bias = (1 << (exponent.bits.length - 1)) - 1;
        return `${s}${interpretNormalNumber(exponent.int - bias, mantissa)}`;
    }
}

const ZERO = BigInt(0);
const ONE = BigInt(1);
const TWO = BigInt(2);
const FIVE = BigInt(5);
const TEN = BigInt(10);

function interpretNormalNumber(exponent: number, mantissa: BitString): string {
    if (exponent >= 0) {
        let integerPart = ZERO;
        let base = ONE;
        for (let i = exponent - 1; i >= 0; i--, base *= TWO) {
            if (mantissa.bits[i] === '1') {
                integerPart += base;
            }
        }

        integerPart += base;

        const fractionalPart = calculateFractionalPart(0, 0, mantissa.bits, exponent);
        if (fractionalPart === '0') {
            return `${integerPart}`;
        } else {
            return `${integerPart}.${fractionalPart}`;
        }
    } else {
        return `0.${calculateFractionalPart(exponent, 1, mantissa.bits)}`;
    }
}

function interpretSubnormalNumber(exponent: number, mantissa: BitString): string {
    return `0.${calculateFractionalPart(exponent, 0, mantissa.bits)}`;
}

function calculateFractionalPart(exponent: number, leadingSignificandBit: number, mantissa: string, start: number = 0) {
    let base = FIVE;
    let value = ZERO;

    if (exponent < 0) {
        for (let i = Math.abs(exponent) - 1; i > 0; i--) {
            base *= FIVE;
        }

        value = leadingSignificandBit === 1 ? base : ZERO;
        value *= TEN;
        base *= FIVE;
    }

    const end = mantissa.lastIndexOf('1') + 1;
    for (let i = start; i < end; i++, value *= TEN, base *= FIVE) {
        if (mantissa[i] === '1') {
            value += base;
        }
    }

    value /= TEN;

    const digits = Math.abs(exponent) + (end - start);
    return value.toString().padStart(digits, '0');
}
