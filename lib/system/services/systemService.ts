import { SystemRepository } from "../repositories/systemRepository";
import { ISystemRepository } from "../models/interfaces/classes/ISystemRepository";
import { RepositoriesFactory } from "../repositories/RepositoriesFactory";
import { ISystemService } from "../models/interfaces/classes/ISystemService";
import { getLogger } from "../../shared/getLogger";
const TAG = "system-industry-be:system:systemService";
export class SystemService implements ISystemService {
    private repository: ISystemRepository;
    private repositoriesFactory: RepositoriesFactory;
    constructor(repository?: ISystemRepository) {
        if (!repository) {
            this.repositoriesFactory = RepositoriesFactory.Instance;
            this.repository = this.repositoriesFactory.getRepository(SystemRepository.name);
        } else this.repository = repository;
    }
}
