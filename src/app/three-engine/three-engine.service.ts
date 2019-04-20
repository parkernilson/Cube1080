import * as THREE from 'three';
import { Injectable } from '@angular/core';
import { CameraService } from './camera.service';

@Injectable({
  providedIn: 'root'
})
export class ThreeEngineService {
	private canvas: HTMLCanvasElement;
	private renderer: THREE.WebGLRenderer;
	private camera: THREE.PerspectiveCamera;
	private scene: THREE.Scene;
	private light: THREE.AmbientLight;
	private pointLight: THREE.PointLight;

	private delta: number = 0;
	private prev: number;

	private renderList: any[] = [];

	constructor(
		private cameraService: CameraService
	) { }

	createScene(elementId: string): void {
		// The first step is to get the reference of the canvas element from our HTML document
		this.canvas = <HTMLCanvasElement>document.getElementById(elementId);

		this.renderer = new THREE.WebGLRenderer({
			canvas: this.canvas,
			alpha: true,    // transparent background
			antialias: true // smooth edges
		});
		this.renderer.setSize(window.innerWidth, window.innerHeight);

		// create the scene
		this.scene = new THREE.Scene();

		this.camera = this.cameraService.createCamera();
		this.scene.add(this.camera);

		// soft white light
		this.light = new THREE.AmbientLight( 0x404040, 5.0 );
		this.light.position.z = -3;
		this.scene.add(this.light);

		// white point light
		this.pointLight = new THREE.PointLight(0xffffff, 1, 100);
		this.pointLight.position.set(3, 2, 5);
		this.scene.add(this.pointLight);
	}

	/**
	 * add a mesh to the scene
	 */
	addMeshToScene(mesh: THREE.Mesh): void {
		this.scene.add(mesh);
		console.log('EngineService: added mesh to scene');
		console.log(mesh);
	}

	/**
	 * add a group to the scene
	 */
	addGroupToScene(group: THREE.Group): void {
		this.scene.add(group);
		console.log('EngineService: added group to scene');
		console.log(group);
	}

	/**
	 * Adds an object to a list for which o.render() is called every animation cycle
	 */
	addToRenderList(o: any): void {
		//if the component has a render function, add it to the render list
		if(o.render && typeof o.render === "function") {
			this.renderList.push(o);
		}
	}

	/**
	 * Initializes the event listeners for the engine service
	 */
	initializeEventListeners(): void {
		//start rendering when the DOM content is loaded
		window.addEventListener('DOMContentLoaded', () => {
		  this.render();
		});

		window.addEventListener('resize', () => {
		  this.resize();
		});
	}

	render() {
		if(!this.prev) this.prev = performance.now();

		requestAnimationFrame(() => {
		  this.render();
		});

		//render all of the components in the render list (if they are not null)
		for(var i = 0; i < this.renderList.length; ++i){
			this.delta = performance.now() - this.prev;
			if(this.renderList[i] !== null) this.renderList[i].render(this.delta);
		}

		this.renderer.render(this.scene, this.camera);

		this.prev = performance.now();
	}

	resize() {
		let width = window.innerWidth;
		let height = window.innerHeight;

		this.camera.aspect = width / height;
		this.camera.updateProjectionMatrix();

		this.renderer.setSize( width, height );
	}
}
