import * as THREE from 'three';
import { Component, OnInit, Input } from '@angular/core';
import { ThreeEngineService } from '../three-engine/three-engine.service';
import { Cube1080Service } from './cube1080.service';

@Component({
  selector: 'app-cube1080',
  templateUrl: './cube1080.component.html',
  styleUrls: ['./cube1080.component.css']
})
export class Cube1080Component implements OnInit {

	constructor(
		private engineService: ThreeEngineService,
		private cubeService: Cube1080Service
	) {

	}

	ngOnInit() {
		this.engineService.addGroupToScene(this.cubeService.getCubeCollection().getCubeGroup());
		this.engineService.addToRenderList(this.cubeService);
	}

}
