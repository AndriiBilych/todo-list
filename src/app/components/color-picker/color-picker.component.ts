import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  themes: {colors: {key: string, value: string}[], title: string}[] = [];

  constructor() {
    const colors: {key: string, value: string}[] = [];
    colors.push({key: '--mainColor', value: getComputedStyle(document.documentElement).getPropertyValue('--mainColor')});
    colors.push({key: '--buttonColor', value: getComputedStyle(document.documentElement).getPropertyValue('--buttonColor')});
    colors.push({key: '--backgroundColor', value: getComputedStyle(document.documentElement).getPropertyValue('--backgroundColor')});
    colors.push({key: '--highlightedColor', value: getComputedStyle(document.documentElement).getPropertyValue('--highlightedColor')});
    colors.push({key: '--textColor', value: getComputedStyle(document.documentElement).getPropertyValue('--textColor')});
    this.themes.push({colors, title: 'Default'});

    const colors2: {key: string, value: string}[] = [];
    colors2.push({key: '--mainColor', value: 'rgba(217, 201, 195, 0.53)'});
    colors2.push({key: '--buttonColor', value: '#E8E2DB'});
    colors2.push({key: '--backgroundColor', value: '#d48a2a'});
    colors2.push({key: '--highlightedColor', value: 'rgb(212, 138, 42)'});
    colors2.push({key: '--textColor', value: '#272727'});
    this.themes.push({colors: colors2, title: 'Funky'});

    const colors1: {key: string, value: string}[] = [];
    colors1.push({key: '--mainColor', value: 'rgba(223, 231, 234, 0.11)'});
    colors1.push({key: '--buttonColor', value: '#191919'});
    colors1.push({key: '--backgroundColor', value: '#2b3135'});
    colors1.push({key: '--highlightedColor', value: 'rgb(53, 55, 56)'});
    colors1.push({key: '--textColor', value: '#cccbca'});
    this.themes.push({colors: colors1, title: 'Dark'});
  }

  ngOnInit(): void {
  }

  getBackgroundColor(colors: {key: string, value: string}[]): string {
    return colors.find( color => color.key === '--backgroundColor').value;
  }

  changeColors(i): void {
    this.themes[i].colors.forEach(_ => document.documentElement.style.setProperty(_.key, _.value));
  }
}
