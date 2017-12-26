import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: ` <div>
                <span>{{message | lowercase}}</span><br>
                <input type="text" [(ngModel)]="message">
            </div>`,
})
export class AppComponent {

    public message: string = "Hello World!";

}
