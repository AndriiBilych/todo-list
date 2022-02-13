import {Component, Input} from '@angular/core';
import {BoardModel} from '../../../models/BoardModel';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  @Input() boards: BoardModel[];
  @Input() loadBoard: (uuid: string) => void;
  @Input() createBoard: () => void;
}
