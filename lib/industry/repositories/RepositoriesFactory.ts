import { IndustryRepository } from "./industryRepository";
import { IIndustryRepository } from "../models/interfaces/classes/IIndustryRepository";
export class RepositoriesFactory {
    constructor() {
        this.repositoriesMap = new Map<string, IIndustryRepository>();
        this.createRepositories();
    }
    private repositoriesMap: Map<string, IIndustryRepository>;
    private static instance: RepositoriesFactory;
    public static get Instance() {
        return RepositoriesFactory.instance || (RepositoriesFactory.instance = new RepositoriesFactory());
    }
    public getRepository(repositoryName: string) { return this.repositoriesMap.get(repositoryName); }
    private createRepositories() { this.repositoriesMap.set(IndustryRepository.name, new IndustryRepository()); }
}
