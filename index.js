class Node {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.adjList = [];
  }
}

class Board {
  constructor(start = [], end = []) {
    this.board = this.buildBoard();
    this.start = start;
    this.end = end;
    this.createAdjList();
    this.visited = new Set();
    this.path = [];
  }

  buildBoard() {
    const board = [];
    for (let i = 0; i < 8; i++) {
      board.push([]);
      for (let j = 0; j < 8; j++) {
        board[i][j] = new Node(i, j);
      }
    }
    return board;
  }

  possibleMoves(row, col) {
    const moves = [
      [-2, 1],
      [-1, 2],
      [1, 2],
      [2, 1],
      [2, -1],
      [1, -2],
      [-1, -2],
    ];
    const validMoves = [];
    for (let move of moves) {
      const newRow = row + move[0];
      const newCol = col + move[1];
      if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
        validMoves.push(this.board[newRow][newCol]);
      }
    }
    return validMoves;
  }

  createAdjList() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const move = this.board[i][j];
        move.adjList = this.possibleMoves(i, j);
      }
    }
  }

  dfs(node) {
    if (node === this.board[this.end[0]][this.end[1]]) {
      this.path.unshift([node.row, node.col]);
      return true;
    }

    this.visited.add(node);

    for (const neighbor of node.adjList) {
      if (!this.visited.has(neighbor)) {
        if (this.dfs(neighbor)) {
          this.path.unshift([node.row, node.col]);
          return true;
        }
      }
    }

    return false;
  }

  findPath() {
    const startNode = this.board[this.start[0]][this.start[1]];
    this.dfs(startNode);
    return this.path;
  }
}

const test = new Board([0, 0], [7, 7]);
console.log(test.findPath());
