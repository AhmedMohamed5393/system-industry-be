import { IConfig, IEndpoint } from "../shared/config/IConfig";
import bodyparser from "body-parser";
import cookieParser from "cookie-parser";
import MiddlewareFactory from "../shared/middlewares/MiddlewareFactory";
export class ServiceConfig implements IConfig {
    public middlewares = [{ handler: bodyparser.json() }, { "handler": cookieParser() }];
    public middlewareFactory = new MiddlewareFactory();
    public endpoints: IEndpoint[] = [];
}
