import * as ieee754 from './core/ieee754';
import { register } from './form';

@register('ieee-754')
export class IEEE754Form {
    constructor(target: HTMLFormElement) {
        target.addEventListener('input', (e) => {
            const target = e.target as HTMLInputElement;
            const bits = getBitString(target.form!);
            const output = (target.form!).querySelector('[name="interpreted-value"]');
            if (output === null) {
                return;
            }

            if (bits.length === 32) {
                output.textContent = ieee754.binary32(bits).decimal;
            } else if (bits.length === 64) {
                output.textContent = ieee754.binary64(bits).decimal;
            }
        });
    }
}

function getBitString(form: HTMLFormElement): string {
    const elements = form.elements;

    const data = new Map<string, boolean>();
    for (let i = 0; i < elements.length; i++) {
        const element = elements.item(i);
        if (element instanceof HTMLInputElement && element.type === 'checkbox') {
            if (element.name.startsWith('bit')) {
                data.set(element.name, element.checked);
            }
        }
    }

    if (data.size === 32 || data.size === 64) {
        const bits = [];
        for (let i = 1; i <= data.size; i++) {
            if (data.get(`bit${i}`) === true) {
                bits.push('1');
            } else {
                bits.push('0');
            }
        }
        return bits.join('');
    } else {
        throw new Error();
    }
}
