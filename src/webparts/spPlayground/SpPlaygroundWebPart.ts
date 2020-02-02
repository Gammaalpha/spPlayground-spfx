import { Version } from '@microsoft/sp-core-library';
import {
    BaseClientSideWebPart,
    IPropertyPaneConfiguration,
    PropertyPaneTextField
  } from '@microsoft/sp-webpart-base';

import { escape } from '@microsoft/sp-lodash-subset';

import * as strings from 'SpPlaygroundWebPartStrings';

import 'sp-playground/dist/SpPlayground/bundle';
import 'sp-playground/dist/SpPlayground/styles.css';
export interface ISpPlaygroundWebPartProps {
  description: string;
}

export default class SpPlaygroundWebPart extends BaseClientSideWebPart<ISpPlaygroundWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `<app-sp-playground-web-part description="${ this.properties.description }"></app-sp-playground-web-part>`;
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
