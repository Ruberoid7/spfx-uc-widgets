import { IPerson, IUserDataService } from "../interfaces";
import { Promise } from "es6-promise";

export class MockUserDataService implements IUserDataService {

    getPropertiesForCurrentUser: () => Promise<IPerson>;
    public getUsersListByBirthdayInCompany (company: string): Promise<IPerson[]> {
        return new Promise<IPerson[]>((resolve, reject) => {
            const users: IPerson[] = [];
            users.push({ 
                Title: "Ведущий специалист по контролю сметной документации и факта выполненных работ ",
                DisplayName: "Белкин Максим Николаевич",
                Company: `ОАО "ОХК "УРАЛХИМ"`,
                Department: "Структурное подразделение КРУ по г.Березники",
                PictureUrl: "https://portal.uralchem.com/my/User%20Photos/Profile%20Pictures/uc_yuriy.zolotov_LThumb.jpg",
                birthDay: new Date(2000,0,29),
            });
            users.push({ 
                Title: "Водитель-экспедитор",
                DisplayName: "Золотов Юрий (Yuriy Zolotov)",
                Company: `ОАО "ОХК "УРАЛХИМ"`,
                Department: "Автотранспортный отдел",
                PictureUrl: "https://portal.uralchem.com/my/User%20Photos/Profile%20Pictures/uc_yuriy.zolotov_LThumb.jpg",
                birthDay: new Date(2000,0,30),
            });
            users.push({ 
                Title: "Персональный ассистент директора по персоналу ",
                DisplayName: "Полякова Яна (Войцеховская)",
                Company: `ОАО "ОХК "УРАЛХИМ"`,
                Department: "Департамент делопроизводства",
                PictureUrl: "https://portal.uralchem.com/my/User%20Photos/Profile%20Pictures/uc_yana.poliakova_LThumb.jpg",
                birthDay: new Date(2000,0,30),
            });            
                

        });
    }
    getProfilePhoto: (photoUrl: string) => string;

    
}