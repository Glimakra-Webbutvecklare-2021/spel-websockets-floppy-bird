class Pipe {
    constructor(x, width, images, canvasHeight) {
        this.x = x;
        this.width = width;
        this.topImg = images.top;
        this.botImg = images.bot;
        this.canvasHeight = canvasHeight;
        this.topHeight = canvasHeight * 0.10 + 
                        Math.random() * 
                        canvasHeight/3;

        this.bottomHeight = canvasHeight * 0.10 +
                        Math.random() * 
                        canvasHeight/3;
    }

    // DONE: Create a method draw() that console logs "Pipe is drawing"
    draw(ctx) {
        // DONE: use canvas context to draw rect with this.color has fillStyle
        // ctx.fillStyle = this.color;

        // Top Pipe
        // ctx.fillRect(this.x, 
        //     0, // <- placement in y-axis
        //     this.width, 
        //     this.topHeight);
        ctx.drawImage(this.topImg, this.x, -this.topImg.height + this.topHeight);

        // Bottom Pipe
        // ctx.fillRect(this.x, 
        //     this.canvasHeight - this.bottomHeight,  this.width, 
        //     this.bottomHeight);
        ctx.drawImage(this.botImg, this.x, this.canvasHeight - this.bottomHeight);
    }

    // DONE: create a method called update() that moves this.x to the left one pixel
    update(speedFactor) {
        this.x -= 2 + 0.2 * speedFactor;
    }
}

class PipeHandler {
    constructor(startPos, pipeWidth, canvasWidth, canvasHeight, images) {
        this.startPos = startPos;
        this.pipeWidth = pipeWidth;
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.images = images;

        // DONE: create one pipe inside the array
        this.pipes = [ new Pipe(this.startPos, this.pipeWidth, this.images, this.canvasHeight) ];
    }

    reset() {
        this.pipes = [ new Pipe(this.startPos, this.pipeWidth, this.images, this.canvasHeight) ];
    }

    draw(ctx) {
        this.pipes.forEach(pipe => pipe.draw(ctx));
    }

    update(speedFactor) {
        this.pipes.forEach(pipe => pipe.update(speedFactor));

        const oldestPipe = this.pipes[0];

        let isTimeToAddNewPipe = oldestPipe.x <= this.canvasWidth/2 - this.pipeWidth && this.pipes.length === 1;
        
        if (isTimeToAddNewPipe) {
            this.pipes.push(new Pipe(this.startPos, this.pipeWidth, this.images, this.canvasHeight));

            // DONE: remove oldest pipe
            // this.pipes.shift();
        }

        // TODO: remove oldest pipe when it is out of canvas
        const isTimeToRemovePipe = oldestPipe.x <= 0 - this.pipeWidth;
        if (isTimeToRemovePipe) {
            this.pipes.shift();
        }
    }
}