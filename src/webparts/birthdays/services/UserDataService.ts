import { IPerson, IUserDataService } from "../interfaces";


export class UserDataService implements IUserDataService {
    getPropertiesForCurrentUser: () => Promise<IPerson>;
    getUsersListByBirthdayInCompany: (company: string) => Promise<IPerson[]>;
    getProfilePhoto: (photoUrl: string) => string;
}