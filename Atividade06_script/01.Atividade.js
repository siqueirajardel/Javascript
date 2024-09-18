const ler = require('readline-sync');

const criarMusica = () => {
    const titulo = ler.question('Digite o título da música: ');
    const artista = ler.question('Digite o nome do artista: ');
    const duracao = ler.questionFloat('Digite a duração da música (em minutos): ');

    return {
        titulo: titulo,
        artista: artista,
        duracao: duracao
    };
};

const simularPlaylist = () => {
    let playlist = [];
    let continuar = true;

    while (continuar) {
        console.log("\nAdicione uma nova música à playlist:");

        let novaMusica = criarMusica();
        playlist.push(novaMusica);

        let resposta = ler.keyInYNStrict('Deseja adicionar mais músicas?');
        if (!resposta) {
            continuar = false;
        }
    }

    let tempoTotal = playlist.reduce((total, musica) => total + musica.duracao, 0);

    console.log("\nDetalhes da Playlist:");
    for (let musica of playlist) {
        console.log(`Título: ${musica.titulo}, Artista: ${musica.artista}, Duração: ${musica.duracao} minutos`);
    }

    console.log(`\nTempo total da playlist: ${tempoTotal} minutos`);
};
