import {Component, HostListener, OnInit} from '@angular/core';
import { BoardModel } from '../../models/BoardModel';
import { ListModel } from '../../models/ListModel';
import { ControlPanelService } from '../../services/control-panel.service';
import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  options = { autoHide: false};
  board: BoardModel;
  currentIndex: number;
  targetTask: HTMLElement = null;

  isAddingList: boolean;
  isDragging = false;

  @HostListener('document:mousedown', ['$event.target'])
  startDrag(targetElement: HTMLElement): void {
    this.isDragging = true;
    this.targetTask = targetElement;

    if (this.targetTask.classList.contains('task')) {
      this.targetTask.style.position = 'fixed';
      this.targetTask.style.height = '20px';
      this.targetTask.style.width = '240px';

      this.targetTask.parentElement.style.height = '30px';
      this.targetTask.parentElement.style.backgroundColor = 'var(--darkColor)';
      // console.log(this.targetTask);
    }
  }

  @HostListener('document:mousemove', ['$event'])
  drag(event): void {
    if (this.isDragging) {
      this.targetTask.style.top = `${event.clientY}px`;
      this.targetTask.style.left = `${event.clientX}px`;
      // console.log(event.clientX, event.clientY);
    }
  }

  @HostListener('document:mouseup')
  endDrag(): void {
    this.isDragging = false;
    this.targetTask.style.removeProperty('position');
    this.targetTask.style.removeProperty('top');
    this.targetTask.style.removeProperty('left');
    this.targetTask.style.height = 'auto';

    this.targetTask.parentElement.style.background = 'none';
    this.targetTask.parentElement.style.height = 'auto';

    this.targetTask = null;
    // console.log(this.targetTask);
  }

  constructor(
    private readonly controlPanelService: ControlPanelService,
    private readonly dataService: DataService
  ) {
    this.isAddingList = false;
    this.board = null;
    this.currentIndex = 0;
  }

  ngOnInit(): void {
    this.controlPanelService.index$.subscribe( index => {
      this.currentIndex = index;
      this.dataService.getBoards().subscribe( data => this.board = data[index]);
    });

    this.dataService.getBoards().subscribe( data => {
      this.board = data[this.currentIndex];
      this.controlPanelService.setIndex(this.currentIndex);
    });
  }

  array(n: number): number[] {
    return Array(n);
  }

  pushToArray(text: string): void {
    this.board.lists.push(new ListModel(text));
  }

  // createTaskCopy(): void {
  //   document.getElementsByClassName('draggable');
  //
  //   const div = document.createElement( 'div');
  //
  //   // let found = false, x = -5, y = -5;
  //   // while (!found) {
  //   //   x += 10, y += 10
  //   //   for (let i = 0; i < map.length; i++) {
  //   //     if (parseInt(map[i].getAttribute("cx")) == x && parseInt(map[i].getAttribute("cy")) == y) {
  //   //       found = false;
  //   //       break;
  //   //     }
  //   //     found = true;
  //   //   }
  //   // }
  //
  //   div.setAttribute('class', 'draggable');
  //   // newStation.setAttribute("cx", `${x}`);
  //   // newStation.setAttribute("cy", `${y}`);
  //   // newStation.setAttribute("r", `${elemRadius}`);
  //   // newStation.setAttribute("fill", "#ff0000");
  //
  //   document.body.appendChild(div);
  //
  //   console.log('Added');
  // }
}
