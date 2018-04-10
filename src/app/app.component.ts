import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';
    firstName : string;
    lastName: string;

    items: any[] = [
      {name: 'archie', lastName: 'test1'},
      {name: 'archie', lastName: 'test4'},
      {name: 'jake', lastName: 'test2'},
      {name: 'richard', lastName: 'test3'}];


    clear() {
        this.firstName = '';
        this.lastName = '';
    }
}
