class Node {
    constructor(value, neighbors = []) {
      this.value = value;
      this.neighbors = neighbors;
    }
  }
  
  function breadthFirstSearch(root, target) {
    const queue = [root];
    const seen = new Set([root]);
  
    while (queue.length) {
      const node = queue.shift();
      if (node.value === target) {
        return true;
      }
      for (const neighbor of node.neighbors) {
        if (!seen.has(neighbor)) {
          queue.push(neighbor);
          seen.add(neighbor);
        }
      }
    }
    return false;
  }
  
  const nodeA = new Node('A');
  const nodeB = new Node('B');
  const nodeC = new Node('C');
  const nodeD = new Node('D');
  const nodeE = new Node('E');
  const nodeF = new Node('F');
  
  nodeA.neighbors = [nodeB, nodeC];
  nodeB.neighbors = [nodeD, nodeE];
  nodeC.neighbors = [nodeF];
  
  console.log(breadthFirstSearch(nodeA, 'E')); // true
  console.log(breadthFirstSearch(nodeA, 'G')); // false