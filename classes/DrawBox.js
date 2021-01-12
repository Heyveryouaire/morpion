export class DrawBox {
    
    constructor() {
        this.add()
    }

    add() {
        let divref = document.getElementById("ref");
        for (let num = 1; num < 10; num++) {
            let box = document.createElement("div");
            box.id = num
            divref.appendChild(box);
        }
    }
}
