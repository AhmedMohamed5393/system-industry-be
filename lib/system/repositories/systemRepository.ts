import { ISystemRepository } from "../models/interfaces/classes/ISystemRepository";
import { Database } from '../../database/database';
import { getLogger } from "../../shared/getLogger";
const TAG = "system-industry-be:system:systemRepository";
export class SystemRepository implements ISystemRepository {
    private database: Database;
    constructor() {
        Database.connectionEvents.once("database connected", () => console.log("Fire database-connected"));
        Database.connectionEvents.once("database disconnected", () => console.log("Fire database-disconnected"));
        this.database = new Database();
    }
}
