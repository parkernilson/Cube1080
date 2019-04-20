import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

	private camera: THREE.PerspectiveCamera;

	private controls: OrbitControls;

	private dragging: boolean = false;
	private DRAG_SPEED: number = 0.01;

	private lookAtVector: THREE.Vector3;

	constructor() {
		this.lookAtVector = new THREE.Vector3(0, 0, 0);
	}

	createCamera(): THREE.PerspectiveCamera {
		this.camera = new THREE.PerspectiveCamera(
			75, window.innerWidth / window.innerHeight, 0.1, 1000
		);
		this.camera.position.set(3, 3, 3);
		this.camera.up = new THREE.Vector3(0, 0, 1);
		this.camera.lookAt(new THREE.Vector3(0, 0, 0));

		this.controls = new OrbitControls(this.camera);
		//TODO: need to fix zooming before it can be enabled
		this.controls.enableZoom = false;

		return this.camera;
	}

	roundTwoDecimals(num: number): string {
		return parseFloat('' + (Math.round(num * 100) / 100)).toFixed(2);
	}

	getPositionX(): string {
		return this.roundTwoDecimals(this.camera.position.x);
	}

	getPositionY(): string {
		return this.roundTwoDecimals(this.camera.position.y);
	}

	getPositionZ(): string {
		return this.roundTwoDecimals(this.camera.position.z);
	}

}
