export class Inspector{

    constructor(){
        this.end = false
    }

    lineOne = [1, 2, 3]
    lineTwo = [4, 5, 6]
    lineThree = [ 7, 8 , 9]

    lines = [this.lineOne, this.lineTwo, this.lineThree]

    colOne = [1, 4, 7]
    colTwo = [2, 5, 8]
    colThree = [3, 6, 9]

    cols = [this.colOne, this.colTwo, this.colThree]

    diagonalOne = [1, 5, 9]
    diagonalTwo = [7, 5, 3]

    diagonals = [this.diagonalOne, this.diagonalTwo]
    
    checkRows(rows){true
        rows.map(line => {
            let res = 0
            line.map( l => {
                let value = document.getElementById(l).dataset.value
                if(value !== undefined){
                    res += parseInt(value)
                }
            })  
            this.checkEnd(res)   
        })
    }

    checkLine(){   
        this.checkRows(this.lines)
    }

    checkCol(){
        this.checkRows(this.cols)
    }

    checkDiagonal(){
        this.checkRows(this.diagonals)
    }

    checkCells(){
        this.checkLine()
        this.checkCol()
        this.checkDiagonal()
    }
    
    checkEnd(res){
        if(res === 3){
            console.log("Le joueur 1 à gagné")
            this.end = true
            alert("Player 1 won !")
        }else if(res === -3){
            console.log("Le joueur 2 a gagné")
            this.end = true
            alert("Player two won !")
        }
    }
}