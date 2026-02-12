function comprar(produto) {
    let discordLink = "https://discord.gg/SEULINKAQUI";

    let mensagem = `Olá, gostaria de adquirir o produto ${produto}.

Poderiam abrir um ticket para que eu receba as instruções de pagamento via Pix e o processo de entrega?

Aguardo orientações. Obrigado!`;

    navigator.clipboard.writeText(mensagem).then(() => {
        alert("Mensagem copiada! Cole no ticket do Discord.");
        window.open(discordLink, "_blank");
    });
}

/* PARTÍCULAS */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let particlesArray = [];

class Particle {
    constructor() {
        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height;
        this.size = Math.random()*2;
        this.speedX = (Math.random()-0.5)*0.5;
        this.speedY = (Math.random()-0.5)*0.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.x<0||this.x>canvas.width) this.speedX*=-1;
        if(this.y<0||this.y>canvas.height) this.speedY*=-1;
    }
    draw() {
        ctx.fillStyle="rgba(168,85,247,0.8)";
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.fill();
    }
}

function init(){
    particlesArray=[];
    for(let i=0;i<120;i++){ particlesArray.push(new Particle()); }
}

function connect(){
    for(let a=0;a<particlesArray.length;a++){
        for(let b=a;b<particlesArray.length;b++){
            let dx=particlesArray[a].x-particlesArray[b].x;
            let dy=particlesArray[a].y-particlesArray[b].y;
            let dist=dx*dx+dy*dy;
            if(dist<10000){
                ctx.strokeStyle="rgba(168,85,247,0.08)";
                ctx.lineWidth=1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x,particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x,particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particlesArray.forEach(p=>{p.update();p.draw();});
    connect();
    requestAnimationFrame(animate);
}

init();
animate();
window.addEventListener("resize",()=>{canvas.width=innerWidth;canvas.height=innerHeight;init();});
