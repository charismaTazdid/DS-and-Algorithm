class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function findClosestNode(root, target) {
    let closestNode = null;
    let closestDistance = Infinity;
  
    function traverse(node) {
      if (!node) {
        return;
      }
  
      const distance = Math.abs(target - node.value);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestNode = node;
      }
  
      if (target < node.value) {
        traverse(node.left);
      } else {
        traverse(node.right);
      }
    }
  
    traverse(root);
    return closestNode;
  }