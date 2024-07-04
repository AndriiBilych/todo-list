import {
  Component,
  Input,
} from '@angular/core';
import { IList } from '../../models/interfaces/list.interface';

@Component({
  selector: 'app-list-placeholder',
  templateUrl: './list-placeholder.component.html',
  styles: [`
    .list {
      max-height: calc(75vh + 5px);
    }

    .list-placeholder {
      width: calc(100% - .85rem);
    }
  `]
})
export class ListPlaceholderComponent {
  @Input() list: IList;
  @Input() hidden = false;
}
