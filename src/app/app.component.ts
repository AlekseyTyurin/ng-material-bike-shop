import {Component} from '@angular/core';
import {RouterConfigLoader} from "@angular/router/src/router_config_loader";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    views: Object[] = [
        {
            name: "My Account",
            description: "Edit my account information",
            icon: "assignment ind"
        },
        {
            name: "Potential dates",
            description: "Find your dream!",
            icon: "motorcycle"
        }

    ]
}
