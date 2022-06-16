const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');
    },500);

    score(false); 
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {
        
        
        pipe.style.animation = 'nome'
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'nome'
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = './img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        
        score(true);
       

        clearInterval(loop);
    }
}, 10);

const score = (item) => {

    const numberScore = +document.querySelector('.number_score').innerHTML; 
    
    if (!item && document.querySelector('.title_score').innerText !== "PONTUAÇÃO:") {
        document.querySelector('.number_score').innerHTML = (numberScore + 1); 
    } else {
        var pontuacao = (numberScore - 1);   
        document.querySelector('.title_score').innerHTML = "PONTUAÇÃO:";
        document.querySelector('.number_score').innerHTML = pontuacao;
    }
}

function reset() {
    document.location.reload(true);
}

document.addEventListener('keydown',jump ); 