type Constructor = { new(target: HTMLCanvasElement): CanvasRenderer };

const constructors = new Map<string, Constructor>();

const createRenderers = new Map<HTMLCanvasElement, CanvasRenderer>();

export interface CanvasRenderer {
    start(): void;
    stop(): void;
}

export function register(name: string) {
    return function (constructor: Constructor) {
        constructors.set(name, constructor);
    };
}

export function configureCanvases() {
    const canvases = document.querySelectorAll<HTMLCanvasElement>('canvas[data-src]');
    if (canvases.length === 0) {
        return;
    }

    const observer = (() => {
        if (window.IntersectionObserver) {
            return new window.IntersectionObserver(onCanvasObserverCallback, {});
        } else {
            return null;
        }
    })();
    
    if (observer !== null) {
        canvases.forEach((canvas) => observer.observe(canvas));
    } else {
        canvases.forEach((canvas) => initializeCanvasRenderer(canvas));
    }
}

function initializeCanvasRenderer(canvas: HTMLCanvasElement) {
    const src = canvas.dataset.src ?? '';

    const constructor = constructors.get(src);
    if (typeof constructor !== 'undefined') {
        const renderer = new constructor(canvas);
        createRenderers.set(canvas, renderer);
        renderer.start();
    }
}

function onCanvasObserverCallback(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    entries.filter(entry => entry.isIntersecting).forEach((entry) => {
        const canvas = entry.target as HTMLCanvasElement;
        initializeCanvasRenderer(canvas);
        observer.unobserve(canvas);
    });
}
