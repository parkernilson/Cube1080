import { Injectable } from '@angular/core';
import { CubeCollection } from './cube-collection';

@Injectable({
  providedIn: 'root'
})
/**
 * The 1080 Cube is a collection of cubes that represent intersections
 * in Bruce Jackson's 1080 Sweep dimensions of leadership.
 */
export class Cube1080Service {

	private cubeCollection: CubeCollection;

	constructor() {
		this.cubeCollection = new CubeCollection({
			width: 3,
			height: 3,
			depth: 3
		});
	}

	getCubeCollection(): CubeCollection {
		return this.cubeCollection;
	}
}
