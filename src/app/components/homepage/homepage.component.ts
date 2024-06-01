import { Component, Input } from '@angular/core';
import { ISection } from "../../models/interfaces/section.interface";

@Component({
  selector: 'app-homepage',
  template: `
    <app-homepage-section [section]="exampleSection"></app-homepage-section>
    <app-homepage-section [section]="userSection"></app-homepage-section>
  `,
})
export class HomepageComponent {
  @Input() loadBoard: (id: string) => void;
  @Input() createBoard: () => void;

  exampleSection: ISection = {
    id: 0,
    title: 'Example boards',
    description: 'Created by developer',
    additionAllowed: false,
    boards: [
      {
        id: '0',
        title: 'Groceries list',
        description: 'Simple board of everyday groceries by category, Simple board of everyday groceries by category, Simple board of everyday groceries by category, Simple board of everyday groceries by category'
      },
      {
        id: '1',
        title: 'TODO list',
        description: 'Things that need to be done on weekend'
      },
      {
        id: '2',
        title: 'Favorite games',
        description: 'Collection of my favorite games'
      },
    ]
  }

  userSection: ISection = {
    id: 0,
    title: 'Your boards',
    description: 'Created by you',
    additionAllowed: true,
    boards: []
  }
}
