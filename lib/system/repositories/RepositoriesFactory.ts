import { SystemRepository } from "./systemRepository";
import { ISystemRepository } from "../models/interfaces/classes/ISystemRepository";
export class RepositoriesFactory {
    constructor() {
        this.repositoriesMap = new Map<string, ISystemRepository>();
        this.createRepositories();
    }
    private repositoriesMap: Map<string, ISystemRepository>;
    private static instance: RepositoriesFactory;
    public static get Instance() {
        return RepositoriesFactory.instance || (RepositoriesFactory.instance = new RepositoriesFactory());
    }
    public getRepository(repositoryName: string) { return this.repositoriesMap.get(repositoryName); }
    private createRepositories() {
        this.repositoriesMap.set(SystemRepository.name, new SystemRepository());
    }
}
