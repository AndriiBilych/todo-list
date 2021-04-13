import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren
} from '@angular/core';
import {TaskCreationComponent} from './components/task-creation/task-creation.component';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'TodoList';

  constructor(
    private readonly renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit(): void {

    // document.addEventListener('click', (element) => {
    //   console.log(element);
    // });

    // this.renderer.listen(this.elementRef.nativeElement, 'click', (element) => {
    //
    //   if (!element.target.classList.contains('add_task') && !element.target.classList.contains('open_form_to_add_task')) {
    //     const openForms = this.elementRef.nativeElement.querySelectorAll('button.add_task');
    //     const countOfOpenForms = openForms.length;
    //     if (countOfOpenForms > 0) {
    //       openForms.forEach(el => {
    //         el.click();
    //       });
    //     }
    //   }
    //
    // });


      // TODO search all active components and close

  }

  ngOnInit(): void {

  }
}
