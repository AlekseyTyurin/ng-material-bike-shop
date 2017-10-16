import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-bikes',
    templateUrl: './bikes.component.html',
    styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

    bikes: Object[] = [
        {
            "name": "Marin Bolinas Ridge 1 27.5 Mountain Bike",
            "description": "The SuperSix EVO Black Inc. makes crushing the competition a formal affair.",
            "imageUrl": "assets/images/cannondale-supersix-evo-hi-mod-etap-277974-1.jpg"
        },
        {
            "name": "Marin Wildcat Trail 1 Women's 27.5 Mountain Bike ",
            "description": "The SuperSix EVO Black Inc. makes crushing the competition a formal affair.",
            "imageUrl": "assets/images/cannondale-supersix-evo-hydraulic-disc-ultegra-di2-277981-1.jpg"
        },
        {
            "name": "Cannondale Supersix EVO Black Inc.",
            "description": "The SuperSix EVO Black Inc. makes crushing the competition a formal affair.",

            "imageUrl": "assets/images/cannondale-supersix-evo-black-inc-277968-1.jpg"
        },
        {
            "name": "Cannondale SuperSix EVO Hi-MOD Dura-Ace 1",
            "description": "The SuperSix EVO Black Inc. makes crushing the competition a formal affair.",

            "imageUrl": "assets/images/cannondale-supersix-evo-hi-mod-dura-ace-277975-11.jpg"
        },

        {
            "name": "Fuji SLM 2.1 29er Mountain Bike ",
            "description": "The SuperSix EVO Black Inc. makes crushing the competition a formal affair.",

            "imageUrl": "assets/images/cannondale-synapse-hydraulic-disc-ultegra-di2-277919-11.jpg"
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
