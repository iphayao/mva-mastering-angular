import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: `<span>{{message | capitalize}}</span>`,
})
export class AppComponent {

    public message: string = "hello";

}
