import { IPerson } from "../interfaces/IPerson";

export interface IUserDataService {
    getPropertiesForCurrentUser:       () => Promise<IPerson>;
    getUsersListByBirthdayInCompany:   (company: string) => Promise<IPerson[]>;

    getProfilePhoto:                   (photoUrl:string) => string;

}