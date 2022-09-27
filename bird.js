
// Object oriented - WITHOUT CLASS

// This is a abstract class of object 
// function createAnimal(x, y) {
//     const animal = {};

//     animal.x = x;
//     animal.y = y;

//     return animal;
// }

// function createBird(x, y, sound) {
//     const bird = createAnimal(x, y);
//     bird.sound = sound;
    
//     bird.sing = () => console.log(sound,'at:', x, y);
    
//     return bird;
// }

// WITH CLASS

class Animal {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    eat() {
        console.log('nom nom..');
    }
}

class Bird extends Animal {
    constructor(x, y, size, img) {
        super(x,y);
        this.startX = x;
        this.startY = y;
        this.size = size;
        this.img = img;
        this.gravity = 9.82;
        this.velocityY = 0;
        this.mass = 0.05;
    }
    
    reset() {
        this.x = this.startX;
        this.y = this.startY;
        this.velocityY = 0;
    }

    update() {
        this.velocityY += this.mass * this.gravity / 2;
        this.y += this.velocityY;
    }

    draw(ctx) {
        // ctx.fillStyle = this.color;
        // ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.drawImage(this.img, this.x, this.y);
    }

    flop() {
        // this.y -= 20;
        this.velocityY -= 5.0; // this.velocityY = this.velocityY - 10.0
    }

}