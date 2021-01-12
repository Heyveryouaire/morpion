export class TogglePlayer{

    playerOne = 1
    playerTwo = -1

    playerOneMark = "O"
    playerTwoMark = "X"

    currentPlayer = this.playerOne
    currentMark = this.playerOneMark

    switchPlayer(){

        if(this.currentPlayer === this.playerOne){
            this.currentPlayer = this.playerTwo
            this.currentMark = this.playerTwoMark
        }else if(this.currentPlayer === this.playerTwo){
            this.currentPlayer = this.playerOne
            this.currentMark = this.playerOneMark

        }
    }

}