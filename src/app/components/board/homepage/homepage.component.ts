import {Component, Input} from '@angular/core';
import {BoardModel} from '../../../models/BoardModel';
import {IBoard} from '../../../models/interfaces/board.interface';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  // @Input() boards: BoardModel[];
  @Input() loadBoard: (uuid: string) => void;
  @Input() createBoard: () => void;

  boards: IBoard[] = [
    {
      title: 'title1',
      id: 0,
      uid: 'sdfsf1',
      dateCreated: '13-2-2022',
      color: 'd4622a',
      dateModified: '13-2-2022'
    },
    {
      title: 'title2',
      id: 1,
      uid: 'sdfsf2',
      dateCreated: '10-1-2022',
      color: 'cfd42a',
      dateModified: '12-2-2022'
    },
    {
      title: 'title3',
      id: 2,
      uid: 'sdfsf3',
      dateCreated: '1-12-2021',
      color: '2fd42a',
      dateModified: '5-12-2021'
    },
  ];

  defaultColor: string = 'b0c1cb';
}
