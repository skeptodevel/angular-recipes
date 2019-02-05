import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() optionSelected = new EventEmitter<string>();

    onOptionSelected(opt: string) {
        this.optionSelected.emit(opt);
    }
}
