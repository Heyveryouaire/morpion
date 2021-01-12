import { DrawBox } from "./DrawBox.js";
import { Inspector} from "./Inspector.js";
import { TogglePlayer} from "./TogglePlayer.js";

export class Morpion{
    
    constructor(){

        this.drawBox = new DrawBox()
        this.togglePlayer = new TogglePlayer()
        this.inspector = new Inspector()

        this.addEvent()
        
    }


    addEvent(){
        const ref = document.getElementById("ref")

        ref.addEventListener("click", (e) => {
            const box = e.target
            if(box.dataset.value === undefined){
                box.textContent = this.togglePlayer.currentMark
                box.dataset.value = "" + this.togglePlayer.currentPlayer
                this.togglePlayer.switchPlayer()
            }

            this.inspector.checkLine()
            this.inspector.checkCol()
            this.inspector.checkDiagonal()

        })
    }

}
