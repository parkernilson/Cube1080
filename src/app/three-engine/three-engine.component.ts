import { ThreeEngineService } from './three-engine.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-engine',
  templateUrl: './three-engine.component.html',
  styleUrls: [],
})
export class ThreeEngineComponent implements OnInit {

	private canEleId = 'renderCanvas';

	constructor(private engServ: ThreeEngineService) { }

	ngOnInit() {
		this.engServ.createScene(this.canEleId);
		this.engServ.initializeEventListeners();
	}

}
