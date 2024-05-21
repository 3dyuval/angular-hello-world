import { Component, signal } from '@angular/core';
import { MatListOption, MatSelectionList } from '@angular/material/list';

@Component({
  selector: 'app-multi-select',
  standalone: true,
  imports: [
    MatSelectionList,
    MatListOption
  ],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.scss'
})
export class MultiSelectComponent {
  options: any = ['hello','world', 'whats', 'up']
  selected  = signal<string[]>([])


  selectAll() {
    this.selected.set(this.options)
  }

  isSelected(option: string) {
    return option in this.selected()
  }

  handleChange(e: any) {
     const itemValue: string[] = e.source._value
    if (itemValue === null) {
      this.selectAll()
    } else {
      this.selected.update(() => itemValue)
    }
  }

  log(e: any) {
    console.log(e)
  }

  compareWith(o1: any, o2: any): boolean {
    return o1 === null
  }
}
