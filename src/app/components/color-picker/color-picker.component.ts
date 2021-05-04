import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  themes: {colors: {key: string, value: string}[], title: string}[] = [];

  constructor() {}

  ngOnInit(): void {
    this.themes = [{
      colors: [
        {key: '--mainColor', value: getComputedStyle(document.documentElement).getPropertyValue('--mainColor')},
        {key: '--buttonColor', value: getComputedStyle(document.documentElement).getPropertyValue('--buttonColor')},
        {key: '--backgroundColor', value: getComputedStyle(document.documentElement).getPropertyValue('--backgroundColor')},
        {key: '--highlightedColor', value: getComputedStyle(document.documentElement).getPropertyValue('--highlightedColor')},
        {key: '--textColor', value: getComputedStyle(document.documentElement).getPropertyValue('--textColor')}
      ],
      title: 'Default'
    },
    {
      colors: [
        {key: '--mainColor', value: 'rgba(217, 201, 195, 0.53)'},
        {key: '--buttonColor', value: '#E8E2DB'},
        {key: '--backgroundColor', value: '#d48a2a'},
        {key: '--highlightedColor', value: 'rgb(212, 138, 42)'},
        {key: '--textColor', value: '#272727'}
      ],
      title: 'Funky'
    },
    {
      colors: [
        {key: '--mainColor', value: 'rgba(223, 231, 234, 0.11)'},
        {key: '--buttonColor', value: '#191919'},
        {key: '--backgroundColor', value: '#2b3135'},
        {key: '--highlightedColor', value: 'rgb(53, 55, 56)'},
        {key: '--textColor', value: '#cccbca'}
      ],
      title: 'Dark'
    }];
  }

  getBackgroundColor(colors: {key: string, value: string}[]): string {
    return colors.find( color => color.key === '--backgroundColor').value;
  }

  changeColors(i): void {
    this.themes[i].colors.forEach(_ => document.documentElement.style.setProperty(_.key, _.value));
  }
}
