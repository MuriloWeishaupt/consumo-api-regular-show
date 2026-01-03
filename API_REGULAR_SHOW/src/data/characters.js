const characters = [
  {
    id: 1,
    name: "Mordecai",
    species: "Gaio-azul",
    image: "https://pbs.twimg.com/media/EbY57cgWAAEtRvc.jpg",
    description: "Trabalha no parque e é conhecido por sua personalidade calma e responsável."
  },
  {
    id: 2,
    name: "Rigby",
    species: "Guaxinim",
    image: "https://i.pinimg.com/564x/ca/d7/e2/cad7e2162090d159623c980297d87766.jpg",
    description: "Melhor amigo de Mordecai, preguiçoso e impulsivo."
  },
  {
    id: 3,
    name: "Saltitão (Skips)",
    species: "Yeti",
    image: "https://gartic.com.br/imgs/mural/18/18lazuli/saltitao-pro-yellow-flash-3.png",
    description: "Imortal e sábio, sempre ajuda o grupo com sua experiência."
  },
  {
    id: 4,
    name: "Benson",
    species: "Máquina de chicletes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShlRnHCctMOYYq8CkKaq8pakPZ9pYHQ_zqdA&s",
    description: "Gerente do parque, vive estressado com Mordecai e Rigby."
  },
  {
    id: 5,
    name: "Musculoso",
    species: "Humano",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT47VywpGxnl0Tck5GDPck7_-OZ0W3p8wumPg&s",
    description: "Fortão do parque, adora fazer pegadinhas."
  },
  {
  id: 6,
  name: "Fantasmão (Hi-Five Ghost)",
  species: "Fantasma",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHdn2Mu0fyuwCs7vBeRjz5qGYnhLviOLq9pg&s",
  description: "Trabalha no parque, é animado, parceiro do Musculoso e adora dar toques de mão."
},
  {
    id: 7,
    name: "Pairulito",
    species: "Fantasma",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBw47YtYsrq1aT7iAtEOOnM0P_sgUeRN95zA&s",
    description: "Amigável e descontraído, trabalha no parque."
  },
  {
    id: 8,
    name: "Margaret",
    species: "Pássaro",
    image: "https://i.pinimg.com/736x/9f/3f/ba/9f3fba147b4e2f9d469ea214d7b9e4c6.jpg",
    description: "Trabalha no café e é interesse amoroso de Mordecai."
  },
  {
    id: 9,
    name: "CJ",
    species: "Nuvem",
    image: "https://i.pinimg.com/736x/69/74/03/69740306fd1adcba0c5a245bf7d8d7f4.jpg",
    description: "Namorada de Mordecai por um período, sensível e emocional."
  },
  {
    id: 10,
    name: "Eileen",
    species: "Rato",
    image: "https://pbs.twimg.com/media/E4F2-QOUUAMSGVR.png",
    description: "Namorada de Rigby, inteligente e muito paciente."
  },
  {
    id: 11,
    name: "Anti-Pairulito",
    species: "Humanoide",
    image: "https://preview.redd.it/who-wins-between-bill-cipher-black-hat-anti-pops-and-the-v0-ioimmrtaqpvc1.jpg?width=640&crop=smart&auto=webp&s=d590860f3632c4e3b8b9336d3d1f81b97f58a018",
    description: "Irmão maligno de Pairulito, representa o caos."
  },
  {
    id: 12,
    name: "Thomas",
    species: "Humano",
    image: "https://pbs.twimg.com/media/GNQb8QyWkAAvD3M.jpg",
    description: "Funcionário do parque que esconde um grande segredo."
  },
  {
    id: 13,
    name: "Death",
    species: "Entidade",
    image: "https://pbs.twimg.com/media/FlfyeeMWAAEA9H8.jpg",
    description: "Representação da morte, aparece em diversos episódios."
  },
  {
  id: 14,
  name: "Pai do Pairulito (Pop's Dad)",
  species: "Humano",
  image: "https://pt.quizur.com/_image?href=https%3A%2F%2Fimg.quizur.com%2Ff%2Fimg5da4ad45120600.92147637.png%3FlastEdited%3D1571073357&w=400&h=400&f=webp",
  description: "Pai do Pairulito, excêntrico e dono do parque."
  },
  {
    id: 15,
    name: "Techmo",
    species: "Humano",
    image: "https://forum.adrenaline.com.br/data/avatars/o/2700/2700745.jpg?1590428771",
    description: "Especialista em tecnologia e jogos."
  },
  {
    id: 16,
    name: "Starla",
    species: "Humana",
    image: "https://assets.mycast.io/actor_images/actor-starla-gutsmandottir-sorrenstein-865441_large.jpg?1694202861",
    description: "Esposa de Musculoso, tem personalidade forte."
  },
  {
  id: 21,
  name: "Don",
  species: "Guaxinim",
  image: "https://m.media-amazon.com/images/M/MV5BN2E1MTFkMTQtODE4Yy00YWRhLWE0M2MtZGQ3ZTVkOWE2MmNhXkEyXkFqcGc@._V1_QL75_UY281_CR157,0,190,281_.jpg",
  description: "Irmão mais novo de Rigby, educado, responsável e sempre tenta fazer o certo, sendo o oposto da personalidade do irmão."
  },
  {
  id: 18,
  name: "Guardiões da Juventude",
  species: "Grupo de humanos",
  image: "https://preview.redd.it/the-guardians-of-eternal-youth-reminds-me-of-the-watchers-v0-xw9d447iknc91.jpg?width=640&crop=smart&auto=webp&s=baf04feec9e10496f888f2ee178d5537529cd379",
  description: "Grupo responsável por proteger a juventude e manter a disciplina. Liderados pelo Sensei, os Guardiões da Juventude treinam Mordecai e Rigby para que não se tornem adultos irresponsáveis. O grupo é formado por Sensei, Baião, Morte e Garra, cada um com habilidades e personalidades distintas."
  }
];

export default characters;
