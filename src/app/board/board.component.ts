import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = true;
  }

  get player(){
    return this.xIsNext ? 'X' : 'o';
  }

  makeMove(index: number){
    if(!this.squares[index]){
      this.squares.splice(index, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
  }
  
  calculateWinner(){
    const winnerLines = [
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,2,3],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [2,4,6]
    ]

    for(let constellation of winnerLines){
      const [a,b,c] = constellation;
      if(this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]){
        return this.squares[a];
      }
    }
  }

}
