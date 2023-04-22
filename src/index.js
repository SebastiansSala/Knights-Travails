import { renderDom } from "./dom";

renderDom();

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
          this.start = start;
          this.end = end;
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
      
      possibleMoves(row, column){
          const moves = [[-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [1, -2], [-1, -2]]
          const validMoves = []
         
          return moves;
      }
      
      createAdjList(){
          for(let i = 0; i < 8; i++){
              for(let j = 0; j < 8; j++){
                  const move = this.possibleMoves(i, j)
              }
          }
      }
      
      
  }
  
  
  const test = new Board();