import { Cube } from './cube';
import * as THREE from 'three';

interface CubeCollectionOptions {
	width: number;
	height: number;
	depth: number;
	numCubesX?: number;
	numCubesY?: number;
	numCubesZ?: number;
}

export class CubeCollection {

	private cubes: Cube[];
	private cubeGroup: THREE.Group;

	width: number;
	height: number;
	depth: number;

	/** number of cubes in the X direction in this column */
	numCubesX: number = 5;
	/** number of cubes in the Y direction in this column */
	numCubesY: number = 5;
	/** number of cubes in the Z direction in this column */
	numCubesZ: number = 5;

	constructor(options: CubeCollectionOptions) {
		this.cubes = [];
		this.cubeGroup = new THREE.Group();

		this.width = options.width;
		this.height = options.height;
		this.depth = options.depth;

		if(options.numCubesX) this.numCubesX = options.numCubesX;
		if(options.numCubesY) this.numCubesY = options.numCubesY;
		if(options.numCubesZ) this.numCubesZ = options.numCubesZ;

		for(var x = 0; x < this.numCubesX; ++x) {
			for(var y = 0; y < this.numCubesY; ++y) {
				for(var z = 0; z < this.numCubesZ; ++z) {

					var cubeSize = 1;

					var position = {
						x: (x - ((this.numCubesX - 1) / 2)) * (cubeSize * (this.width / this.numCubesX)),
						y: (y - ((this.numCubesY - 1) / 2)) * (cubeSize * (this.height / this.numCubesY)),
						z: (z - ((this.numCubesZ - 1) / 2)) * (cubeSize * (this.depth / this.numCubesZ))
					}

					var cube = new Cube({
						cPosition: {
							x: x,
							y: y,
							z: z
						},
						width: (1 / this.numCubesX) * this.width,
						height: (1 / this.numCubesY) * this.height,
						depth: (1/ this.numCubesZ) * this.depth,
						position: position
					})

					this.cubes.push(cube);
					this.cubeGroup.add(cube.getMesh());

				}
			}
		}
	}

	getCubeGroup(): THREE.Group {
		return this.cubeGroup;
	}
}
