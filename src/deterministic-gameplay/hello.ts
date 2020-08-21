import { register, CanvasRenderer } from "../canvas";

@register("hello")
export class Hello implements CanvasRenderer {
    constructor(canvas: HTMLCanvasElement) {
        const context = canvas.getContext("2d") as CanvasRenderingContext2D;
        context.fillStyle = "rgb(200,0,0)";
        context.fillRect(10, 10, 50, 50);
    }

    start(): void {
    }

    stop(): void {
    }
}
