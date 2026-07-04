// lista de waifus
const waifus = [

    {
        nome: "Akari Watanabe",
        anime:"More Than a Married Couple, but Not Lovers",
        genero:"Romance",
        favorita: false,
        imagem: "imagens/akari.jpg",
        descricao: "Garota alegre, extrovertida e cheia de energia. Apesar da aparência popular, demonstra grande carinho pelas pessoas que ama e cresce muito ao longo da história. Gosta de moda e tem uma personalidade muito expressiva."
    },

    {
        nome: "Runa Shirakawa",
        anime:"Our Dating Story: The Experienced You and The Inexperienced Me",
        genero:"Romance",
        favorita: false,
        imagem: "imagens/runa.webp",
        descricao: "Uma estudante gentil e sincera que valoriza os sentimentos das pessoas. Sua personalidade aberta e amigável conquista quem a conhece. Valoriza a honestidade e os relacionamentos verdadeiros."
    },

    {
        nome: "Rui Tachibana",
        anime:"Domestic Girlfriend",
        genero:"Romance",
        favorita: false,
        imagem: "imagens/rui.jpg",
        descricao: "Reservada e determinada, Rui busca amadurecer e seguir seus sonhos. Sua trajetória é marcada por crescimento pessoal e emocional. Sonha em se tornar uma chef de cozinha profissional."
    },

    {
        nome: "Kaoruko Waguri",
        anime:"The Fragrant Flower Blooms with Dignity",
        genero:"Romance",
        favorita: false,
        imagem: "imagens/waguri.webp",
        descricao: "Conhecida por sua bondade e empatia, Kaoruko sempre procura compreender os outros. Sua presença traz calma e conforto para quem está ao seu redor. É conhecida por sua gentileza e maturidade."
    },

    {
        nome: "Mahiru Shiina",
        anime:"The Angel Next Door Spoils Me Rotten",
        genero:"Romance",
        favorita: false,
        imagem: "imagens/mahiru.jpg",
        descricao: "Inteligente, educada e dedicada, Mahiru é admirada por muitos. Por trás de sua imagem perfeita, existe uma pessoa gentil e atenciosa. Recebe o apelido de Anjo por seu comportamento exemplar."
    },

    {
        nome: "Hitori Gotoh (Bocchi)",
        anime:"Bocchi the Rock!",
        genero:"Slice of Life",
        favorita: false,
        imagem: "imagens/bocchi.jpg",
        descricao: "Uma guitarrista extremamente talentosa que luta contra a timidez e a ansiedade social. Apesar das dificuldades, encontra na música uma forma de se conectar com outras pessoas."
    },

    {
        nome: "Rem",
        anime:"Re:Zero",
        genero:"Isekai",
        favorita: false,
        imagem: "imagens/rem.jpg",
        descricao: "Uma jovem leal e dedicada que está sempre disposta a ajudar aqueles que ama. Sua coragem e determinação a tornaram uma das personagens mais populares dos animes."
    },

    {
        nome: "Mine",
        anime:"Akame ga Kill!",
        genero:"Ação",
        favorita: false,
        imagem: "imagens/mine.webp",
        descricao: "Integrante da Night Raid, Mine possui uma personalidade forte e determinada. Mesmo parecendo fria em alguns momentos, demonstra grande coragem diante dos desafios."
    },

    {
        nome: "Mai Sakurajima",
        anime:"Rascal Does Not Dream of Bunny Girl Senpai",
        genero:"Romance",
        favorita: false,
        imagem: "imagens/mai.webp",
        descricao: "Uma atriz famosa que equilibra maturidade, inteligência e um charme provocativo. É extremamente leal, compreensiva e direta com seus sentimentos, agindo como um porto seguro inabalável para o protagonista."
    },

    {
        nome: "Asuna Yuuki",
        anime:"Sword Art Online",
        genero:"Ação",
        favorita: false,
        imagem: "imagens/asuna.webp",
        descricao: "Uma espadachim habilidosa e determinada que combina força em combate com um instinto acolhedor. É uma companheira exemplar, excelente cozinheira e sempre coloca a segurança daqueles que ama acima de tudo."
    },

    {
        nome: "Kurumi Tokisaki",
        anime:"Date A Live",
        genero:"Ação",
        favorita: false,
        imagem: "imagens/kurumi.jpg",
        descricao: "Uma figura misteriosa e imprevisível com um visual gótico marcante. Transita facilmente entre uma postura sádica e perigosa e momentos de extrema fofura e provocação, movendo-se sempre por objetivos próprios."
    },

    {
        nome: "Marin Kitagawa",
        anime:"My Dress-Up Darling",
        genero:"Romance",
        favorita: false,
        imagem: "imagens/marin.jpg",
        descricao: "Uma gyaru otaku completamente apaixonada pela cultura pop e pelo universo do cosplay. Alegre, espontânea e livre de preconceitos, contagia a todos com seu entusiasmo e expressividade sem igual."
    },

    {
        nome: "Anna Yanami",
        anime:"Makeine: Too Many Losing Heroines!",
        genero:"Romance",
        favorita: false,
        imagem: "imagens/anna.jpg",
        descricao: "Uma garota expressiva, divertida e com um apetite insaciável. Lida com suas desilusões amorosas de forma cômica e dramática, conquistando o público por sua espontaneidade e reações genuínas no dia a dia."
    },

    {
        nome: "Kana Arima",
        anime:"Oshi no Ko",
        genero:"Drama",
        favorita: false,
        imagem: "imagens/kana.jpg",
        descricao: "Uma ex-atriz mirim talentosa que trabalha duro para brilhar novamente como idol. Possui uma personalidade teimosa e orgulhosa, mas esconde um lado frágil e uma enorme necessidade de ser reconhecida."
    },

    {
        nome: "Chizuru Mizuhara",
        anime:"Rent-A-Girlfriend",
        genero:"Romance",
        favorita: false,
        imagem: "imagens/chizuru.webp",
        descricao: "Uma jovem profissional, linda e extremamente focada em seu grande sonho de ser atriz. Divide-se entre uma postura impecável no trabalho e momentos de vulnerabilidade apaixonantes quando está fora do palco."
    },

    {
        nome: "Yoruichi Shihoin",
        anime:"Bleach",
        genero:"Ação",
        favorita: false,
        imagem: "imagens/yoruichi.jpg",
        descricao: "Uma guerreira lendária, confiante e dona de um carisma avassalador. Adora provocar seus aliados com seu bom humor e inteligência, mas assume uma postura implacável e extremamente poderosa em combate."
    },

    {
        nome: "Shoko Komi",
        anime:"Komi Can't Communicate",
        genero:"Comédia",
        favorita: false,
        imagem: "imagens/shoko.webp",
        descricao: "Uma estudante de beleza estonteante que sofre com uma grave dificuldade de comunicação. Apesar de parecer fria e distante para os outros, possui um coração inocente e se esforça para realizar o sonho de fazer cem amigos."
    },

    {
        nome: "Miku Nakano",
        anime:"The Quintessential Quintuplets",
        genero:"Romance",
        favorita: false,
        imagem: "imagens/miku.jpg",
        descricao: "Uma jovem tímida, reservada e apaixonada por generais da história japonesa. É a que mais se esforça entre suas irmãs para aprender a cozinhar e evoluir academicamente para impressionar a pessoa de quem gosta."
    },

    {
        nome: "Yor Forger",
        anime:"Spy X Family",
        genero:"Ação",
        favorita: false,
        imagem: "imagens/yor.jpg",
        descricao: "Uma assassina profissional letal que, na vida cotidiana, é uma mulher doce, tímida e um pouco atrapalhada. Dedica-se ao máximo para ser uma esposa e mãe exemplar, protegendo sua família postiça a todo custo."
    },

    {
        nome: "Chika Fujiwara",
        anime:"Kaguya-sama: Love is War",
        genero:"Comédia",
        favorita: false,
        imagem: "imagens/chika.webp",
        descricao: "A personificação do caos alegre e imprevisível. Sempre cheia de energia, adora criar jogos malucos e quebrar a tensão do ambiente com sua personalidade borbulhante e passos de dança icônicos."
    },

    {
        nome: "Zero Two",
        anime:"DARLING in the FRANXX",
        genero:"Ficção Científica",
        favorita: false,
        imagem: "imagens/zerotwo.jpg",
        descricao: "Uma piloto de elite com traços misteriosos e uma personalidade selvagem. É rebelde, intensa e profundamente leal ao seu parceiro, buscando compreender a própria humanidade através do amor."
    },

    {
        nome: "Power",
        anime:"Chainsaw Man",
        genero:"Ação",
        favorita: false,
        imagem: "imagens/power.jpg",
        descricao: "Uma criatura caótica, egocêntrica e completamente sem filtros. Apesar de seus hábitos higiênicos questionáveis e comportamento infantil, possui um carisma magnético e desenvolve um forte senso de companheirismo."
    },

    {
        nome: "Holo",
        anime:"Spice and Wolf",
        genero:"Fantasia",
        favorita: false,
        imagem: "imagens/holo.jpg",
        descricao: "Uma deusa loba sábia, perspicaz e com séculos de experiência. Adora flertar, beber e comer maçãs, oferecendo uma dinâmica de relacionamento madura, cheia de diálogos inteligentes e sagazes."
    },

    {
        nome: "Sylphiette",
        anime:"Mushoku Tensei",
        genero:"Isekai",
        favorita: false,
        imagem: "imagens/sylphiette.jpg",
        descricao: "Uma jovem de coração enorme que demonstra uma lealdade inabalável desde a infância. É extremamente dedicada, compreensiva e disposta a apoiar o protagonista em todas as fases de sua jornada."
    },

    {
        nome: "Emilia",
        anime:"Re:Zero",
        genero:"Isekai",
        favorita: false,
        imagem: "imagens/emilia.jpg",
        descricao: "Uma meia-elfa de coração puríssimo, bondoso e que busca sempre a justiça. Apesar de enfrentar o preconceito do mundo, mantém sua inocência e determinação em ajudar a todos que cruzam seu caminho."
    },

    {
        nome: "Kaguya Shinomiya",
        anime:"Kaguya-sama: Love is War",
        genero:"Romance",
        favorita: false,
        imagem: "imagens/kaguya.jpg",
        descricao: "Uma gênia herdeira de um grande império, orgulhosa e extremamente calculista em seus planos cotidianos. No entanto, derrete-se por completo e perde a postura quando o assunto envolve seus sentimentos românticos."
    },

    {
        nome: "Yukino Yukinoshita",
        anime:"My Teen Romantic Comedy SNAFU",
        genero:"Romance",
        favorita: false,
        imagem: "imagens/yukino.jpg",
        descricao: "Conhecida por sua inteligência afiada e postura inicialmente fria e sarcástica. Busca sempre a verdade absoluta nas relações e passa por um dos desenvolvimentos emocionais mais maduros e sinceros dos animes."
    },

    {
        nome: "Makima",
        anime:"Chainsaw Man",
        genero:"Ação",
        favorita: false,
        imagem: "imagens/makima.jpg",
        descricao: "Uma líder enigmática, controladora e com uma presença absurdamente imponente. Exala mistério e autoridade por onde passa, atraindo a devoção absoluta daqueles que caem sob seu olhar manipulador."
    },

    {
        nome: "Vladilena Milizé (Lena)",
        anime:"86: Eighty-Six",
        genero:"Drama",
        favorita: false,
        imagem: "imagens/vladilena.webp",
        descricao: "Uma comandante militar idealista, corajosa e determinada a lutar pelos direitos humanos. Demonstra uma empatia profunda e cria laços emocionais verdadeiros e intensos mesmo à distância com seu esquadrão."
    },

    {
        nome: "Rin Tohsaka",
        anime:"Fate/stay night",
        genero:"Fantasia",
        favorita: false,
        imagem: "imagens/rin.webp",
        descricao: "Uma maga talentosa, racional e muito orgulhosa de suas habilidades. Representa perfeitamente o equilíbrio entre uma postura severa em momentos de crise e um lado extremamente protetor e carinhoso com seus aliados."
    },

    {
        nome: "Nezuko Kamado",
        anime:"Demon Slayer: Kimetsu no Yaiba",
        genero:"Ação",
        favorita: false,
        imagem: "imagens/nezuko.jpg",
        descricao: "Uma jovem transformada em demônio que mantém sua humanidade através do amor por sua família. Apesar de não falar, expressa sua fofura e proteção por meio de gestos e mostra uma força avassaladora em combate."
    },

    {
        nome: "Maki Zen'in",
        anime:"Jujutsu Kaisen",
        genero:"Ação",
        favorita: false,
        imagem: "imagens/maki.jpg",
        descricao: "Uma guerreira de elite determinada que supera a falta de energia amaldiçoada com força física e maestria em armas monstruosas. Possui uma postura firme, intimidadora e extremamente confiante, inspirando profunda admiração."
    },

    {
        nome: "Anri Teieri",
        anime:"Blue Lock",
        genero:"Ação",
        favorita: false,
        imagem:"imagens/anri.webp",
        descricao:"A mente sonhadora por trás do projeto Blue Lock e uma profissional profundamente focada. É determinada, inteligente e não hesita em peitar executivos para defender o futebol japonês, esbanjando charme e competência."
    },

    {
        nome:"Frieren",
        anime:"Frieren: Beyond Journey's End",
        genero:"Fantasia",
        favorita: false,
        imagem:"imagens/frieren.jpg",
        descricao:"Uma elfa maga milenar com uma percepção de tempo única e uma postura inicialmente indiferente. Ao longo de sua jornada, revela um amadurecimento tocante ao tentar compreender melhor os sentimentos humanos e as conexões do passado."
    },

    {
        nome:"Nami",
        anime:"One Piece",
        genero:"Ação",
        favorita: false,
        imagem:"imagens/nami.webp",
        descricao:"A talentosa e astuta navegadora dos Piratas do Chapéu de Palha. Combina uma inteligência brilhante com uma paixão por tesouros, mas esconde um coração gigante que prioriza a segurança e o bem-estar de seus companheiros."
    },

    {
        nome:"Chika Homura",
        anime:"Haruchika",
        genero:"Romance",
        favorita: false,
        imagem:"imagens/homura.webp",
        descricao:"Uma jovem trabalhadora, madura e extremamente companheira. Destaca-se por sua capacidade de ouvir, apoiar e trazer estabilidade emocional para aqueles que estão ao seu redor, sendo o porto seguro ideal em momentos difíceis."
    },

    {
        nome:"Nino Nakano",
        anime:"The Quintessential Quintuplets",
        genero:"Romance",
        favorita: false,
        imagem:"imagens/nino.webp",
        descricao:"Uma das quíntuplas mais marcantes, conhecida por sua personalidade tsundere intensa, estilosa e protetora com a família. Quando se apaixona, torna-se incrivelmente direta, corajosa e dedicada aos seus sentimentos."
    },

    {
        nome:"Megumin",
        anime:"KONOSUBA: God's Blessing on This Wonderful World!",
        genero:"Fantasia",
        favorita: false,
        imagem:"imagens/megumin.webp",
        descricao:"Uma maga excêntrica e obcecada pela magia de explosão, que ela só pode conjurar uma vez por dia. É dramática, orgulhosa e cheia de manias cômicas, mas possui um carisma magnético que conquista qualquer um."
    },

    {
        nome:"Kyouko Hori",
        anime:"Horimiya",
        genero:"Romance",
        favorita: false,
        imagem:"imagens/kyouko.jpg",
        descricao:"Uma estudante popular, enérgica e competente que esconde um lado puramente doméstico e caseiro. É extremamente dedicada à sua família e ao seu relacionamento, mostrando uma personalidade forte, ciumenta e apaixonante."
    },

    {
        nome:"Hatsune Miku",
        anime:"Colorful Stage! O Filme: Uma Miku Que não Sabe Cantar!",
        genero:"Musical",
        favorita: false,
        imagem:"imagens/miku.webp",
        descricao:"A diva virtual mais famosa do mundo, conhecida por seu visual icônico de longas marias-chiquinhas azul-turquesa. Esbanja carisma, energia positiva e uma presença de palco avassaladora, unindo pessoas através da música."
    }
];

const container = document.getElementById("container-cards");
const pesquisa = document.getElementById("pesquisa");
const filtroGenero = document.getElementById("filtro-genero");
const btnFavoritos = document.getElementById("btn-favoritos");
const inicio = document.getElementById("inicio");

let mostrarFavoritas = false;

// função para renderizar os cards na tela
function mostrarWaifus(lista) {
    container.innerHTML = "";
    if (lista.length === 0) {
        if (mostrarFavoritas) {
            container.innerHTML = `
                <h2 class="sem-favoritas">
                    💔 Você ainda não tem nenhuma waifu favorita :(
                </h2>
            `;
        } else {
            container.innerHTML = `
                <h2 class="sem-favoritas">
                    🔍 Nenhum resultado foi encontrado para a sua pesquisa.
                </h2>
            `;
        }
        return;
    }

    for (const waifu of lista) {
        container.innerHTML += `
            <article class="cartao">
                <div class="cartao-interno">
                    <div class="cartao-frente">
                        <div class="imagem-container">
                            <div class="favorito${waifu.favorita ? ' ativo' : ''}" data-nome="${waifu.nome}">
                                ${waifu.favorita ? '♥' : '♡'}
                            </div>
                            <img src="${waifu.imagem}" alt="${waifu.nome}" class="cartao-imagem">
                            <div class="info">
                                <h3>${waifu.nome}</h3>
                                <p>${waifu.anime}</p>
                                <span>${waifu.genero}</span>
                            </div>
                        </div>
                    </div>
                    <div class="cartao-verso">
                        <p>${waifu.descricao}</p>
                    </div>
                </div>
            </article>
        `;
    }
}

// função para atualizar a lista de waifus com base nos filtros e pesquisas
function atualizarLista() {
    const texto = pesquisa.value.toLowerCase();
    const genero = filtroGenero.value;

    const resultado = waifus.filter(waifu => {
        const batePesquisa = waifu.nome.toLowerCase().includes(texto) || waifu.anime.toLowerCase().includes(texto);
        const bateGenero = genero === "Todos" || waifu.genero === genero;
        const bateFavorito = !mostrarFavoritas || waifu.favorita;

        return batePesquisa && bateGenero && bateFavorito;
    });

    mostrarWaifus(resultado);
}

// salva os nomes das waifus favoritadas no LocalStorage
function salvarFavoritasNoStorage() {
    const nomesFavoritas = waifus.filter(w => w.favorita).map(w => w.nome);
    localStorage.setItem("waifusFavoritas", JSON.stringify(nomesFavoritas));
}

// carrega os dados salvos do LocalStorage assim que o site inicia
function carregarFavoritasDoStorage() {
    const dadosSalvos = localStorage.getItem("waifusFavoritas");
    if (dadosSalvos) {
        const nomesFavoritas = JSON.parse(dadosSalvos);
        waifus.forEach(waifu => {
            if (nomesFavoritas.includes(waifu.nome)) {
                waifu.favorita = true;
            }
        });
    }
}

carregarFavoritasDoStorage();
mostrarWaifus(waifus);

pesquisa.addEventListener("input", atualizarLista);
filtroGenero.addEventListener("change", atualizarLista);

// botão de favoritos
btnFavoritos.addEventListener("click", () => {
    mostrarFavoritas = !mostrarFavoritas;
    btnFavoritos.classList.toggle("ativo", mostrarFavoritas);
    btnFavoritos.textContent = mostrarFavoritas ? "❤️" : "🤍";
    atualizarLista();
});

// clique duplo para favoritar um card
container.addEventListener("dblclick", (e) => {
    const card = e.target.closest(".cartao");
    if (!card || !container.contains(card)) return;

    const favorito = card.querySelector(".favorito");
    if (!favorito) return;

    const nome = favorito.dataset.nome;
    const waifu = waifus.find((item) => item.nome === nome);
    if (!waifu) return;

    waifu.favorita = !waifu.favorita;
    
    favorito.classList.toggle("ativo", waifu.favorita);
    favorito.textContent = waifu.favorita ? "♥" : "♡";
    salvarFavoritasNoStorage();

    if (mostrarFavoritas) {
        atualizarLista();
    }
});

// botão de voltar para o início (embaralhar a lista e reseta os filtros)
inicio.addEventListener("click", (e) => {
    e.preventDefault();
    pesquisa.value = "";
    filtroGenero.value = "Todos";
    mostrarFavoritas = false;
    btnFavoritos.classList.remove("ativo");
    btnFavoritos.textContent = "🤍";
    waifus.sort(() => Math.random() - 0.5);
    atualizarLista();
});