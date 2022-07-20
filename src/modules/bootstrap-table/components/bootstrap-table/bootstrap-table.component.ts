import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'mw-bootstrap-table',
  templateUrl: './bootstrap-table.component.html',
  styleUrls: ['./bootstrap-table.component.scss']
})
export class BootstrapTableComponent implements OnChanges {

  @Input() isShowHeader = true;
  @Input() isShowPluginHeader = false;
  @Input() total: string | number = 0;
  @Input() tableClass = 'table-striped';
  @Input() items$: Observable<unknown[]>;
  @Input() fontSize = 14;
  @Input() inputClass = '';

  @Output() changeInputFilter = new EventEmitter<string>();

  inputFilter: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('items$')) {
      this.items$.subscribe((items) => {
        this.total = items.length;
      });
    }
  }

  onChangeInputFilter() {
    this.changeInputFilter.emit(this.inputFilter);
  }
}
