import * as THREE from 'three';

interface Position {
	x: number;
	y: number;
	z: number;
}

interface CubeOptions {
	cPosition: Position;
	position: Position;
	width: number;
	height: number;
	depth: number;
}

export class Cube {
	private mesh: THREE.Mesh;
	private color: THREE.Color;
	private material: THREE.Material;
	private geometry: THREE.BoxBufferGeometry;
	/** position of this cube in the CubeCollection it is a part of */
	private cPosition: Position;
	private position: Position;

	private width: number;
	private height: number;
	private depth: number;

	constructor(options: CubeOptions) {
		var { cPosition, position, width, height, depth } = options;

		this.cPosition = cPosition;
		this.position = position;
		this.width = width;
		this.height = height;
		this.depth = depth;

		//set the color in a 3d diagonal gradient
		this.color = new THREE.Color(
			1 * ((this.cPosition.x**2 + this.cPosition.y**2 + this.cPosition.z**2) / (5**2 + 5**2 + 5**2)),
			1 * (Math.sqrt((this.cPosition.x**2 + this.cPosition.y**2 + this.cPosition.z**2)) / Math.sqrt((5**2 + 5**2 + 5**2))),
			1
		)

		this.material = new THREE.MeshStandardMaterial({ color: this.color });
		this.geometry = new THREE.BoxBufferGeometry(this.width, this.height, this.depth);
		this.mesh = new THREE.Mesh(this.geometry, this.material);

		this.mesh.position.set(this.position.x, this.position.y, this.position.z);
	}

	/**
	 * get a reference to this cube's mesh
	 */
	getMesh(): THREE.Mesh {
		return this.mesh;
	}
}
