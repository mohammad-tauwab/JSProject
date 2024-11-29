
    console.log("I am alone");
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = "balck";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
class matrix {
    constructor(w, h, interval) {
        this.w = w;
        this.h = h;
        this.interval = interval;
    }
  
    generateMatrix() {
        let array = [0, 1];
        ctx.font = "20px Arial";
        ctx.fillStyle = "green";
        let opacity = 1;
      
        console.log(canvas.height);
        setInterval(() => {
            if (this.h > canvas.height) {
                this.h = 20;
                this.clearWindow(this.w);
            }
            let text = String(array[Math.trunc(Math.random() * 10) % 2]) + " ";
            opacity -= 0.2;
            ctx.globalAplha = opacity;
            ctx.fillText(text, this.w, this.h);
            this.h += 20;
        }, this.interval);
    }
    clearWindow(w){
        ctx.fillStyle="black";
        ctx.fillRect(0,0,w+20,canvas.height);
        ctx.fillStyle="green";
    }
}

let noOfObjects=Math.trunc(canvas.width/20);
let objectArray = new Array(noOfObjects);
let wObj = 20;
for(let i=0; i<objectArray.length;i++){
    objectArray[i]= new matrix(wObj,20,150+Math.trunc(Math.random()*100));
    wObj+=20;
}
objectArray.forEach(element => {
    element.generateMatrix();
});

