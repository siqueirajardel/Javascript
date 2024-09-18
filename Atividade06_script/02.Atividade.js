const sujeitos = ["um cachorro", "um gato", "um pássaro", "uma criança", "um astronauta"];
const verbos = ["comeu", "saltou", "voou", "correu", "brincou"];
const objetos = ["um biscoito", "um brinquedo", "alto no céu", "pela floresta", "na praia"];

const gerarHistoria = () => {
    let historia = '';
    for (let i = 0; i < 5; i++) {
        const sujeito = sujeitos[Math.floor(Math.random() * sujeitos.length)];
        const verbo = verbos[Math.floor(Math.random() * verbos.length)];
        const objeto = objetos[Math.floor(Math.random() * objetos.length)];
        historia += `${sujeito} ${verbo} ${objeto}. `;
    }
    return historia;
};

console.log(gerarHistoria());
