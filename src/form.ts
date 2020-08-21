type Constructor = { new(target: HTMLFormElement): any };

const constructors = new Map<string, Constructor>();

export function register(name: string) {
    return function (constructor: Constructor) {
        constructors.set(name, constructor);
    };
}

export function configureForms() {
    const forms = document.querySelectorAll<HTMLFormElement>("form[data-handler]");
    if (forms.length === 0) {
        return;
    }

    forms.forEach((form) => {
        const handler = form.dataset.handler ?? "";
        const constructor = constructors.get(handler);
        if (typeof constructor !== "undefined") {
            new constructor(form);
        }
    });
}
