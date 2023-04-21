class Node {
    constructor(row, col) {
      this.row = row;
      this.col = col;
      this.adjList = [];
    }
  }
  
  class Board{
      constructor(start = [], end = []){
          this.board = this.buildBoard();
      }
      
      buildBoard(){
          const board = [];
          for(let i = 0; i < 8; i++){
              board.push([]);
              for(let j = 0; j < 8; j++){
                  board[i][j] = new Node(i, j);
              }
          }
          return board;
      }
  }
  
  
  const test = new Board();