import { IIndustryRepository } from "../models/interfaces/classes/IIndustryRepository";
import { Database } from '../../database/database';
import { getLogger } from "../../shared/getLogger";
const TAG = "system-industry-be:industry:industryRepository";
export class IndustryRepository implements IIndustryRepository {
    private database: Database;
    constructor() {
        Database.connectionEvents.once("database connected", () => console.log("Fire database-connected"));
        Database.connectionEvents.once("database disconnected", () => console.log("Fire database-disconnected"));
        this.database = new Database();
    }
}
