import { IMiddleware } from "./IMiddleware";
import { IMiddlewareFactory } from "./IMiddlewareFactory";
export class MiddlewareFactory implements IMiddlewareFactory {
    private middlewareMap: Map<string, IMiddleware> ;
    constructor() {
        this.middlewareMap = new Map<string, IMiddleware>();
        this.createMiddlewares();
    }
    public getMiddleware(middlewareName: string) { return this.middlewareMap.get(middlewareName); }
    private createMiddlewares(): void {}
}
export default MiddlewareFactory;
