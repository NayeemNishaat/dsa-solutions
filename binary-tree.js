class Node {
	constructor(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	}
}

function traverseLR(root) {
	if (root !== null) {
		traverseLR(root.left);
		console.log("LR", root.key);
		traverseLR(root.right);
	}
}

function traverseRL(root) {
	if (root !== null) {
		traverseRL(root.right);
		console.log("RL", root.key);
		traverseRL(root.left);
	}
}

// Chapter: Creating Binary Tree
const root = new Node(12);
root.left = new Node(8);
root.right = new Node(80);
root.left.left = new Node(45);
root.left.right = new Node(455);
// console.log(root);

// Chapter: Traversing Binary Tree
traverseLR(root);
traverseRL(root);
