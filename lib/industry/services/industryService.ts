import { IndustryRepository } from "../repositories/industryRepository";
import { IIndustryRepository } from "../models/interfaces/classes/IIndustryRepository";
import { RepositoriesFactory } from "../repositories/RepositoriesFactory";
import { IIndustryService } from "../models/interfaces/classes/IIndustryService";
import { getLogger } from "../../shared/getLogger";
const TAG = "system-industry-be:industry:industryService";
export class IndustryService implements IIndustryService {
    private repository: IIndustryRepository;
    private repositoriesFactory: RepositoriesFactory;
    constructor(repository?: IIndustryRepository) {
        if (!repository) {
            this.repositoriesFactory = RepositoriesFactory.Instance;
            this.repository = this.repositoriesFactory.getRepository(IndustryRepository.name);
        } else this.repository = repository;
    }
}
