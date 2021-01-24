import { DrawBox } from "./DrawBox.js";
import { Inspector} from "./Inspector.js";
import { TogglePlayer} from "./TogglePlayer.js";

export class Morpion{
    
    constructor(){

        this.drawBox = new DrawBox()
        this.togglePlayer = new TogglePlayer()
        this.inspector = new Inspector()

        this.ref = document.getElementById("ref")
        this.handleClick = (e) => {
            const box = e.target
            if(box.dataset.value === undefined){
                box.textContent = this.togglePlayer.currentMark
                box.dataset.value = "" + this.togglePlayer.currentPlayer
                this.togglePlayer.switchPlayer()
            }

            this.inspector.checkCells()

            if(this.inspector.end){
                this.ref.removeEventListener("click", this.handleClick)
            }
        }

        this.addEvent()
        
    }

    addEvent(){
        this.ref.addEventListener("click", this.handleClick)
    }
}
