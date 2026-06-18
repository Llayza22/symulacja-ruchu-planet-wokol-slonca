const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth - 320;
    canvas.height = window.innerHeight - 90;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const center = () => ({
    x: canvas.width / 2,
    y: canvas.height / 2
});

let running = true;

const sunMassSlider = document.getElementById("sunMass");
const timeSlider = document.getElementById("timeSpeed");

const massValue = document.getElementById("massValue");
const speedValue = document.getElementById("speedValue");

let timeScale = 1;
let sunMassMultiplier = 1;

sunMassSlider.addEventListener("input", () => {
    sunMassMultiplier = parseFloat(sunMassSlider.value);
    massValue.textContent = sunMassMultiplier.toFixed(1) + "x";
});

timeSlider.addEventListener("input", () => {
    timeScale = parseFloat(timeSlider.value);
    speedValue.textContent = timeScale + "x";
});

class Planet {
    constructor(radius,color,distance,speed){
        this.radius = radius;
        this.color = color;
        this.distance = distance;
        this.angle = Math.random()*Math.PI*2;
        this.baseSpeed = speed;
        this.trail = [];
    }

    update(){

        const orbitalSpeed =
            this.baseSpeed *
            Math.sqrt(sunMassMultiplier);

        this.angle += orbitalSpeed * timeScale;

        const c = center();

        this.x =
            c.x +
            Math.cos(this.angle)*this.distance;

        this.y =
            c.y +
            Math.sin(this.angle)*this.distance;

        this.trail.push({
            x:this.x,
            y:this.y
        });

        if(this.trail.length > 250){
            this.trail.shift();
        }
    }

    draw(){

        ctx.beginPath();

        for(let i=0;i<this.trail.length;i++){

            const p = this.trail[i];

            if(i===0){
                ctx.moveTo(p.x,p.y);
            }
            else{
                ctx.lineTo(p.x,p.y);
            }
        }

        ctx.strokeStyle = this.color;
        ctx.globalAlpha = 0.4;
        ctx.stroke();

        ctx.globalAlpha = 1;

        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

const stars = [];

for(let i=0;i<500;i++){
    stars.push({
        x:Math.random()*2000,
        y:Math.random()*1200,
        r:Math.random()*2
    });
}

function drawStars(){

    ctx.fillStyle="white";

    stars.forEach(star=>{

        ctx.globalAlpha =
            0.3 + Math.random()*0.7;

        ctx.beginPath();

        ctx.arc(
            star.x % canvas.width,
            star.y % canvas.height,
            star.r,
            0,
            Math.PI*2
        );

        ctx.fill();
    });

    ctx.globalAlpha = 1;
}

const earth =
new Planet(
    8,
    "#4FC3F7",
    160,
    0.010
);

const mars =
new Planet(
    6,
    "#FF7043",
    230,
    0.008
);

const venus =
new Planet(
    7,
    "#FFE082",
    110,
    0.013
);

const planets = [
    venus,
    earth,
    mars
];

function drawOrbits(){

    const c = center();

    planets.forEach(p=>{

        ctx.beginPath();

        ctx.arc(
            c.x,
            c.y,
            p.distance,
            0,
            Math.PI*2
        );

        ctx.strokeStyle =
            "rgba(255,255,255,0.12)";

        ctx.stroke();
    });
}

function drawSun(){

    const c = center();

    const glow =
        40 +
        sunMassMultiplier*10;

    const gradient =
        ctx.createRadialGradient(
            c.x,
            c.y,
            0,
            c.x,
            c.y,
            glow
        );

    gradient.addColorStop(
        0,
        "#fff59d"
    );

    gradient.addColorStop(
        0.5,
        "#ffca28"
    );

    gradient.addColorStop(
        1,
        "rgba(255,202,40,0)"
    );

    ctx.beginPath();

    ctx.arc(
        c.x,
        c.y,
        glow,
        0,
        Math.PI*2
    );

    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.beginPath();

    ctx.arc(
        c.x,
        c.y,
        18,
        0,
        Math.PI*2
    );

    ctx.fillStyle = "#FFD54F";
    ctx.fill();
}

function animate(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    drawStars();
    drawOrbits();
    drawSun();

    planets.forEach(planet=>{

        if(running){
            planet.update();
        }

        planet.draw();
    });

    requestAnimationFrame(
        animate
    );
}

animate();

document
.getElementById("startBtn")
.addEventListener("click",()=>{
    running = true;
});

document
.getElementById("pauseBtn")
.addEventListener("click",()=>{
    running = false;
});

document
.getElementById("resetBtn")
.addEventListener("click",()=>{

    planets.forEach(p=>{

        p.angle =
            Math.random()*Math.PI*2;

        p.trail = [];
    });

});