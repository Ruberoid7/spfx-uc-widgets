import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'TilesMenuWebPartStrings';
import TilesMenu from './components/TilesMenu';
import { ITilesMenuProps } from './components/ITilesMenuProps';

export interface ITilesMenuWebPartProps {
  description: string;
}

export default class TilesMenuWebPart extends BaseClientSideWebPart<ITilesMenuWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ITilesMenuProps > = React.createElement(
      TilesMenu,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
