import * as React from 'react';
import styles from './Birthdays.module.scss';

import { escape } from '@microsoft/sp-lodash-subset';

import { Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';

import { ServiceScope, Environment, EnvironmentType } from '@microsoft/sp-core-library';

import { FontClassNames } from "@uifabric/styling";

import { IBirthdaysProps } from './IBirthdaysProps';

import { IPerson, IUserDataService } from '../interfaces';
//import { } from "../services";
import { MockUserDataService } from "../mocks";

interface IPersonaListProps {
  title: string;
  users: IPerson[];
  getProfilePhoto: (photoUrl: string) => string;
  onProfileLinkClick: (profileLink: string) => void;
}

class PersonaList extends React.Component<IPersonaListProps, {}> {
  public render() {
    return (
      <div>
        <div className={FontClassNames.large}>{this.props.title}</div>
        {this.props.users.map((user, index) => (
          <div key={index}>
            <Persona
              imageUrl={this.props.getProfilePhoto(user.PictureUrl)}
              primaryText={user.DisplayName}
              secondaryText={user.Title}
              size={PersonaSize.regular}
              presence={PersonaPresence.none}
              onClick={() => this.props.onProfileLinkClick(user.UserUrl)}
            />
          </div>
        ))}
      </div>
    );
  }
}


export default class Birthdays extends React.Component<IBirthdaysProps, {}> {

  private userDataServiceInstance: IUserDataService;

  constructor(props: IBirthdaysProps) {
    super(props);
    // Based on the type of environment, return the correct instance of the IUserProfileService interface
    if (Environment.type == EnvironmentType.SharePoint || Environment.type == EnvironmentType.ClassicSharePoint) {
      // Mapping to be used when webpart runs in SharePoint.
      //this.userProfileServiceInstance = serviceScope.consume(UserProfileService.serviceKey);
      this.userDataServiceInstance = new MockUserDataService();
    }
    else {
      // This means webpart is running in the local workbench or from a unit test.
      // So we will need a non default implementation of the UserProfileService i.e. MockUserProfileService
      //this.userProfileServiceInstance = serviceScope.consume(MockUserProfileService.serviceKey);
      this.userDataServiceInstance = new MockUserDataService();
    }
  }

  public render(): React.ReactElement<IBirthdaysProps> {
    return (
      <div className={ styles.birthdays }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
