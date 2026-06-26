// ════════════════════════════════════════════════════════
//  DADOS — Reis de Israel · Mapa Estelar
//  Separado do HTML para facilitar manutenção e curadoria.
//
//  Campos por figura:
//   id, nome, tipo (juiz|rei|profeta), reino (unido|norte|sul|exilio|retorno),
//   year (ano central, negativo = a.C.), mag (brilho 1..3), datas (texto),
//   anos, tribo, eval (bom|mau|misto), desc, eventos[], profetas[], ref
//
//  NOVO — curadoria histórica:
//   confianca: 'firme' | 'aproximada' | 'debatida'
//     → quão segura é a datação. A cronologia dos juízes é amplamente
//       debatida; a monarquia segue majoritariamente Edwin Thiele.
//   contemporaneos: [ids] — figuras do OUTRO reino que reinaram em paralelo
//     (sincronismo Norte↔Sul). Usado para destacar quem coexistiu.
// ════════════════════════════════════════════════════════

// year = ano central do reinado (negativo = a.C.) ; mag = magnitude/brilho 1..3
const JUIZES=[
  {id:'otniel',nome:'Otniel',tipo:'juiz',year:-1354,mag:1.6,datas:'~1374–1334 a.C.',anos:40,tribo:'Judá',eval:'bom',confianca:'debatida',
   desc:'Primeiro juiz citado em Juízes. Filho de Quenaz, livrou Israel de Cusã-Risataim, rei da Mesopotâmia.',eventos:['O espírito de Jeová veio sobre ele','Livrou Israel de Cusã-Risataim, rei da Mesopotâmia','A terra teve paz por 40 anos'],profetas:[],ref:'Juízes 3:7-11'},
  {id:'eude',nome:'Eúde',tipo:'juiz',year:-1276,mag:1.7,datas:'~1316–1236 a.C.',anos:80,tribo:'Benjamim',eval:'bom',confianca:'debatida',
   desc:'Benjaminita canhoto que livrou Israel do domínio de Moabe, matando Eglom, rei de Moabe.',eventos:['Matou Eglom, rei de Moabe, com uma espada','Israel derrotou Moabe junto aos vaus do Jordão','A terra teve paz por 80 anos'],profetas:[],ref:'Juízes 3:12-30'},
  {id:'sangar',nome:'Sangar',tipo:'juiz',year:-1236,mag:1.2,datas:'~1236 a.C.',anos:0,tribo:'—',eval:'bom',confianca:'debatida',
   desc:'Filho de Anate; abateu 600 filisteus com uma aguilhada de bois.',eventos:['Matou 600 filisteus com uma aguilhada de bois','Também salvou Israel'],profetas:[],ref:'Juízes 3:31'},
  {id:'debora',nome:'Débora',tipo:'juiz',year:-1189,mag:2.2,datas:'~1209–1169 a.C.',anos:40,tribo:'Efraim',eval:'bom',confianca:'debatida',
   desc:'Profetisa que julgava Israel. Convocou Baraque contra Sísera, chefe do exército de Jabim, que tinha 900 carros de guerra.',eventos:['Convocou Baraque para a batalha','O exército de Sísera, com 900 carros, foi derrotado','Jael matou Sísera com uma estaca de tenda','O cântico de Débora e Baraque (Juízes 5)'],profetas:[],ref:'Juízes 4-5'},
  {id:'gideao',nome:'Gideão',tipo:'juiz',year:-1149,mag:2.4,datas:'~1169–1129 a.C.',anos:40,tribo:'Manassés',eval:'misto',confianca:'debatida',
   desc:'Também chamado Jerubaal. Com 300 homens, livrou Israel de Midiã. No fim, fez um éfode que se tornou laço para Israel.',eventos:['O espírito de Jeová veio sobre ele','Jeová reduziu o exército de 32.000 para 300','Derrotou Midiã com chifres, jarros e tochas','Recusou ser rei sobre Israel','Fez um éfode que virou armadilha religiosa'],profetas:[],ref:'Juízes 6-8'},
  {id:'abimeleque',nome:'Abimeleque',tipo:'juiz',year:-1127,mag:1.4,datas:'~1129–1126 a.C.',anos:3,tribo:'Manassés',eval:'mau',confianca:'debatida',
   desc:'Filho de Gideão. Procurou se tornar rei pela violência, matando 70 dos seus irmãos.',eventos:['Matou 70 irmãos sobre uma só pedra','Jotão pronunciou uma parábola contra Siquém','Incendiou a torre de Siquém','Morreu quando uma mulher lançou uma pedra de moinho sobre sua cabeça'],profetas:[],ref:'Juízes 9'},
  {id:'tola',nome:'Tolá',tipo:'juiz',year:-1114,mag:1.2,datas:'~1126–1103 a.C.',anos:23,tribo:'Issacar',eval:'bom',confianca:'debatida',
   desc:'Da tribo de Issacar; morava em Samir, na região montanhosa de Efraim. Julgou Israel por 23 anos.',eventos:['Julgou Israel por 23 anos em Samir'],profetas:[],ref:'Juízes 10:1-2'},
  {id:'jair',nome:'Jair',tipo:'juiz',year:-1092,mag:1.3,datas:'~1103–1081 a.C.',anos:22,tribo:'Gileade',eval:'bom',confianca:'debatida',
   desc:'O gileadita; julgou Israel por 22 anos. Tinha 30 filhos associados a 30 cidades em Gileade.',eventos:['30 filhos montavam 30 jumentos e tinham 30 cidades (Havote-Jair)','Julgou Israel por 22 anos'],profetas:[],ref:'Juízes 10:3-5'},
  {id:'jefte',nome:'Jefté',tipo:'juiz',year:-1078,mag:1.9,datas:'~1081–1075 a.C.',anos:6,tribo:'Gileade',eval:'misto',confianca:'debatida',
   desc:'O gileadita, filho de uma prostituta. Expulso pelos irmãos, foi chamado de volta para livrar Israel de Amom. Fez um voto a Jeová ligado à sua filha.',eventos:['Os anciãos de Gileade o chamaram para liderar','Argumentou com o rei de Amom citando a história de Israel','Fez um voto a Jeová antes da batalha','Derrotou os amonitas'],profetas:[],ref:'Juízes 11-12'},
  {id:'ibsao',nome:'Ibsã',tipo:'juiz',year:-1071,mag:1.1,datas:'~1075–1068 a.C.',anos:7,tribo:'Judá',eval:'bom',confianca:'debatida',
   desc:'De Belém. Teve 30 filhos e 30 filhas. Julgou Israel por 7 anos.',eventos:['Casou os filhos e filhas fora do seu clã','Julgou Israel por 7 anos'],profetas:[],ref:'Juízes 12:8-10'},
  {id:'elom',nome:'Elom',tipo:'juiz',year:-1063,mag:1.1,datas:'~1068–1058 a.C.',anos:10,tribo:'Zebulom',eval:'bom',confianca:'debatida',
   desc:'O zebulonita; julgou Israel por 10 anos.',eventos:['Julgou Israel por 10 anos','Foi sepultado em Aijalom, em Zebulom'],profetas:[],ref:'Juízes 12:11-12'},
  {id:'abdom',nome:'Abdom',tipo:'juiz',year:-1054,mag:1.1,datas:'~1058–1050 a.C.',anos:8,tribo:'Efraim',eval:'bom',confianca:'debatida',
   desc:'Filho de Hilel, de Piratom. Julgou Israel por 8 anos.',eventos:['Tinha 40 filhos e 30 netos que montavam 70 jumentos','Julgou Israel por 8 anos'],profetas:[],ref:'Juízes 12:13-15'},
  {id:'sansao',nome:'Sansão',tipo:'juiz',year:-1065,mag:2.3,datas:'~1075–1055 a.C.',anos:20,tribo:'Dã',eval:'misto',confianca:'debatida',
   desc:'Nazireu de Deus desde o nascimento. Combateu os filisteus; depois de Dalila descobrir o segredo da sua força, derrubou a casa de Dagom.',eventos:['Nazireu desde o ventre; o cabelo não devia ser cortado','O espírito de Jeová agia sobre ele','Matou 1.000 filisteus com uma queixada de jumento','Dalila descobriu o segredo da sua força e ele foi cegado','Ao morrer, matou mais do que durante a sua vida'],profetas:[],ref:'Juízes 13-16'},
  {id:'eli',nome:'Eli',tipo:'juiz',year:-1087,mag:1.5,datas:'~1107–1067 a.C.',anos:40,tribo:'Levi',eval:'misto',confianca:'debatida',
   desc:'Sumo sacerdote em Siló; também julgou Israel por 40 anos. Não conteve seus filhos maus.',eventos:['Seus filhos Hofni e Fineias desprezavam as ofertas a Jeová','Cuidou do menino Samuel em Siló','Caiu da cadeira e morreu ao saber que a Arca fora capturada'],profetas:['Samuel'],ref:'1 Samuel 1-4'},
  {id:'samuel',nome:'Samuel',tipo:'juiz',year:-1038,mag:2.6,datas:'~1067–1010 a.C.',anos:57,tribo:'Levi',eval:'bom',confianca:'aproximada',
   desc:'Profeta e o último dos juízes de Israel. Ungiu Saul e, mais tarde, Davi como reis.',eventos:['Jeová o chamou quando ainda era menino em Siló','Israel venceu os filisteus em Ebenézer','Ungiu Saul como rei','Repreendeu Saul por desobedecer a Jeová','Ungiu Davi em Belém'],profetas:[],ref:'1 Samuel 1-25'},
];

const UNIDO=[
  {id:'saul',nome:'Saul',tipo:'rei',reino:'unido',year:-1030,mag:2.5,datas:'~1050–1010 a.C.',anos:40,tribo:'Benjamim',eval:'misto',confianca:'aproximada',
   desc:'Primeiro rei de Israel, ungido por Samuel. Por desobedecer a Jeová, foi rejeitado como rei.',eventos:['Ungido por Samuel como o primeiro rei','Desobedeceu ao oferecer sacrifício e ao poupar Agague','Samuel: "ele rejeitou você como rei"','Perseguiu Davi por ciúme','Consultou uma mulher que invocava espíritos, em En-Dor','Morreu na batalha no monte Gilboa'],profetas:['Samuel','Gade'],ref:'1 Samuel 9-31'},
  {id:'davi',nome:'Davi',tipo:'rei',reino:'unido',year:-990,mag:3.0,datas:'~1010–970 a.C.',anos:40,tribo:'Judá',eval:'bom',confianca:'aproximada',
   desc:'Segundo rei de Israel. Fez de Jerusalém a capital. Jeová fez com ele um pacto para um Reino eterno.',eventos:['Derrotou Golias "em nome de Jeová dos exércitos"','Reinou primeiro em Hebrom e depois sobre todo o Israel','Conquistou Jerusalém e levou para lá a Arca','Jeová fez um pacto de Reino com ele (2 Samuel 7)','Pecou com Bate-Seba; Natã o repreendeu','Compôs muitos dos Salmos'],profetas:['Natã','Gade'],ref:'1 Samuel 16 a 1 Reis 2'},
  {id:'salomao',nome:'Salomão',tipo:'rei',reino:'unido',year:-950,mag:2.9,datas:'~970–930 a.C.',anos:40,tribo:'Judá',eval:'misto',confianca:'firme',
   desc:'Terceiro rei de Israel. Pediu sabedoria a Jeová e construiu o templo. No fim, suas esposas estrangeiras desviaram o seu coração.',eventos:['Pediu a Jeová um coração obediente','Construiu o templo em Jerusalém','A rainha de Sabá veio testá-lo','Associado a Provérbios, Eclesiastes e Cântico de Salomão','Suas esposas estrangeiras o desviaram a outros deuses','Após sua morte, o reino se dividiu'],profetas:['Natã','Aías','Ido'],ref:'1 Reis 1-11'},
];

const NORTE=[
  {id:'jeroboao1',nome:'Jeroboão I',tipo:'rei',reino:'norte',year:-920,mag:2.4,datas:'930–910 a.C.',anos:22,eval:'mau',confianca:'firme',contemporaneos:['roboao','abias'],
   desc:'Primeiro rei do Reino do Norte. Fez dois bezerros de ouro, em Betel e Dã, para o povo não subir a Jerusalém.',eventos:['Aías predisse que ele teria 10 tribos','Fez dois bezerros de ouro, em Betel e Dã','Estabeleceu sacerdotes que não eram da tribo de Levi'],profetas:['Aías','Semaías'],ref:'1 Reis 12-14'},
  {id:'nadabe',nome:'Nadabe',tipo:'rei',reino:'norte',year:-909,mag:1.2,datas:'910–909 a.C.',anos:2,eval:'mau',confianca:'firme',contemporaneos:['asa'],
   desc:'Filho de Jeroboão. Andou no caminho do pai e foi morto por Baasa.',eventos:['Morto por Baasa durante o cerco de Gibetom','Toda a casa de Jeroboão foi eliminada'],profetas:[],ref:'1 Reis 15:25-31'},
  {id:'baasa',nome:'Baasa',tipo:'rei',reino:'norte',year:-897,mag:1.6,datas:'909–886 a.C.',anos:24,eval:'mau',confianca:'firme',contemporaneos:['asa'],
   desc:'Tomou o trono eliminando a casa de Jeroboão, mas continuou no mesmo pecado.',eventos:['Eliminou toda a casa de Jeroboão','Guerreou contra Asa, de Judá','O profeta Jeú, filho de Hanani, anunciou juízo sobre ele'],profetas:['Jeú f. de Hanani'],ref:'1 Reis 15:27 a 16:7'},
  {id:'ela',nome:'Elá',tipo:'rei',reino:'norte',year:-885,mag:1.1,datas:'886–885 a.C.',anos:2,eval:'mau',confianca:'firme',contemporaneos:['asa'],
   desc:'Filho de Baasa. Foi morto por Zinri enquanto bebia.',eventos:['Morto por Zinri enquanto bebia em Tirza','Toda a casa de Baasa foi eliminada'],profetas:[],ref:'1 Reis 16:8-14'},
  {id:'zinri',nome:'Zinri',tipo:'rei',reino:'norte',year:-885,mag:1.3,datas:'885 a.C. · 7 dias',anos:0,eval:'mau',confianca:'firme',contemporaneos:['asa'],
   desc:'Reinou apenas 7 dias. Cercado por Onri, incendiou a torre da casa do rei sobre si mesmo.',eventos:['Reinou 7 dias em Tirza','Cercado pelo exército que apoiava Onri','Incendiou a torre da casa do rei sobre si mesmo'],profetas:[],ref:'1 Reis 16:15-20'},
  {id:'onri',nome:'Onri',tipo:'rei',reino:'norte',year:-879,mag:2.0,datas:'885–874 a.C.',anos:12,eval:'mau',confianca:'firme',contemporaneos:['asa'],
   desc:'Comprou o monte Samaria e ali fez a capital. O relato diz que agiu pior do que todos os reis antes dele.',eventos:['Comprou de Semer o monte Samaria por 2 talentos de prata','Construiu a cidade de Samaria','Agiu pior do que todos os que reinaram antes dele'],profetas:[],ref:'1 Reis 16:21-28'},
  {id:'acabe',nome:'Acabe',tipo:'rei',reino:'norte',year:-863,mag:2.8,datas:'874–853 a.C.',anos:22,eval:'mau',confianca:'firme',contemporaneos:['asa','josafa'],
   desc:'Casou-se com Jezabel e promoveu a adoração de Baal. Elias o confrontou repetidamente.',eventos:['Casou-se com Jezabel, filha do rei de Sídon','Construiu um templo de Baal em Samaria','Elias anunciou anos de seca','No Carmelo, fogo de Jeová desceu diante de 450 profetas de Baal','Jezabel mandou matar Nabote por causa da sua vinha','Morreu na batalha quando um arqueiro atirou "ao acaso"'],profetas:['Elias','Eliseu','Micaías'],ref:'1 Reis 16:29 a 22:40'},
  {id:'ocozias_n',nome:'Acazias',tipo:'rei',reino:'norte',year:-852,mag:1.3,datas:'853–852 a.C.',anos:2,eval:'mau',confianca:'firme',contemporaneos:['josafa'],
   desc:'Filho de Acabe. Após cair pela grade do terraço, consultou Baal-Zebube, deus de Ecrom.',eventos:['Caiu pela grade do quarto no terraço, em Samaria','Mandou consultar Baal-Zebube, deus de Ecrom','Elias: "Será que não há Deus em Israel?"'],profetas:['Elias'],ref:'1 Reis 22:51 a 2 Reis 1'},
  {id:'jorao_n',nome:'Jorão',tipo:'rei',reino:'norte',year:-846,mag:1.7,datas:'852–841 a.C.',anos:12,eval:'mau',confianca:'firme',contemporaneos:['josafa','jeorão_s','ocozias_s'],
   desc:'Filho de Acabe. Removeu a coluna sagrada de Baal, mas manteve os bezerros de ouro. Foi morto por Jeú.',eventos:['Removeu a coluna sagrada de Baal','Campanha contra Moabe junto com Judá','No seu tempo, Eliseu curou Naamã da lepra','Morto por Jeú no terreno que fora de Nabote'],profetas:['Eliseu'],ref:'2 Reis 3-9'},
  {id:'jeu',nome:'Jeú',tipo:'rei',reino:'norte',year:-827,mag:2.3,datas:'841–814 a.C.',anos:28,eval:'misto',confianca:'firme',contemporaneos:['atalia','joas_s'],
   desc:'Ungido para executar o juízo contra a casa de Acabe. Eliminou a adoração de Baal, mas manteve os bezerros de ouro.',eventos:['Guiava o carro "como um louco"','Matou Jorão no terreno que fora de Nabote','Jezabel foi jogada da janela e os cães comeram seu corpo','Mandou matar os 70 filhos de Acabe','Eliminou os adoradores de Baal e transformou o templo em sanitário'],profetas:['Eliseu'],ref:'2 Reis 9-10'},
  {id:'jeoacaz',nome:'Jeoacaz',tipo:'rei',reino:'norte',year:-806,mag:1.3,datas:'814–798 a.C.',anos:17,eval:'mau',confianca:'firme',contemporaneos:['joas_s'],
   desc:'Filho de Jeú. Israel foi oprimido pela Síria; Jeová mostrou misericórdia ao povo aflito.',eventos:['Oprimido por Hazael, rei da Síria','O exército ficou reduzido a 50 cavaleiros e 10 carros','Jeová deu um libertador a Israel'],profetas:[],ref:'2 Reis 13:1-9'},
  {id:'jeoas_n',nome:'Jeoás',tipo:'rei',reino:'norte',year:-790,mag:1.6,datas:'798–782 a.C.',anos:16,eval:'mau',confianca:'firme',contemporaneos:['joas_s','amazias'],
   desc:'Visitou Eliseu já doente e recebeu o sinal das flechas, prevendo vitórias sobre a Síria.',eventos:['Chorou diante de Eliseu doente','Recebeu o sinal das flechas — 3 vitórias sobre a Síria','Derrotou Amazias, de Judá, e entrou em Jerusalém'],profetas:['Eliseu'],ref:'2 Reis 13:10 a 14:16'},
  {id:'jeroboao2',nome:'Jeroboão II',tipo:'rei',reino:'norte',year:-773,mag:2.4,datas:'793–753 a.C.',anos:41,eval:'mau',confianca:'firme',contemporaneos:['amazias','uzias'],
   desc:'Restaurou os limites de Israel. Tempo de prosperidade, mas também de injustiça denunciada pelos profetas.',eventos:['Restaurou os limites de Israel','Período de grande prosperidade material','Amós denunciou a injustiça social','Oséias expôs a infidelidade religiosa'],profetas:['Amós','Oséias','Jonas'],ref:'2 Reis 14:23-29'},
  {id:'zacarias',nome:'Zacarias',tipo:'rei',reino:'norte',year:-752,mag:1.1,datas:'753–752 a.C.',anos:1,eval:'mau',confianca:'firme',contemporaneos:['uzias'],
   desc:'Filho de Jeroboão II. Reinou seis meses e foi morto por Salum — fim da dinastia de Jeú.',eventos:['Morto publicamente por Salum','Cumpriu-se a palavra sobre a casa de Jeú até a 4ª geração'],profetas:['Amós','Oséias'],ref:'2 Reis 15:8-12'},
  {id:'salum',nome:'Salum',tipo:'rei',reino:'norte',year:-752,mag:1.0,datas:'752 a.C. · 1 mês',anos:0,eval:'mau',confianca:'firme',contemporaneos:['uzias'],
   desc:'Reinou um mês inteiro em Samaria e foi morto por Menaém.',eventos:['Matou Zacarias e assumiu o trono','Reinou um mês e foi morto por Menaém'],profetas:[],ref:'2 Reis 15:13-15'},
  {id:'menaem',nome:'Menaém',tipo:'rei',reino:'norte',year:-747,mag:1.5,datas:'752–742 a.C.',anos:10,eval:'mau',confianca:'firme',contemporaneos:['uzias'],
   desc:'Reinou com violência. Pagou pesado tributo a Pul, rei da Assíria, para firmar o seu poder.',eventos:['Atacou Tifsa após sair de Tirza','Deu a Pul, rei da Assíria, 1.000 talentos de prata','Cobrou o tributo dos homens ricos de Israel'],profetas:['Oséias'],ref:'2 Reis 15:16-22'},
  {id:'pecaia',nome:'Pecaías',tipo:'rei',reino:'norte',year:-741,mag:1.1,datas:'742–740 a.C.',anos:2,eval:'mau',confianca:'firme',contemporaneos:['uzias','jotao'],
   desc:'Filho de Menaém. Foi morto por Peca, um dos seus ajudantes.',eventos:['Morto por Peca na torre fortificada do palácio, em Samaria'],profetas:['Oséias'],ref:'2 Reis 15:23-26'},
  {id:'peca',nome:'Peca',tipo:'rei',reino:'norte',year:-742,mag:1.7,datas:'752–732 a.C.',anos:20,eval:'mau',confianca:'debatida',contemporaneos:['jotao','acaz'],
   desc:'Aliou-se a Rezim, da Síria, contra Judá. No seu tempo, a Assíria deportou parte de Israel.',eventos:['Aliou-se a Rezim, da Síria, contra Acaz, de Judá','Tiglate-Pileser tomou regiões de Israel e levou o povo cativo','Foi morto por Oséias'],profetas:['Oséias','Isaías'],ref:'2 Reis 15:27-31'},
  {id:'oseias_r',nome:'Oséias (rei)',tipo:'rei',reino:'norte',year:-727,mag:2.0,datas:'732–722 a.C.',anos:9,eval:'mau',confianca:'firme',contemporaneos:['acaz','ezequias'],
   desc:'Último rei do Reino do Norte. Samaria caiu, e Israel foi levado ao exílio na Assíria.',eventos:['Buscou apoio do Egito e parou de pagar tributo à Assíria','Samaria foi sitiada por três anos','A Assíria capturou Samaria e levou Israel ao exílio'],profetas:['Oséias','Miquéias'],ref:'2 Reis 17'},
];

const SUL=[
  {id:'roboao',nome:'Roboão',tipo:'rei',reino:'sul',year:-921,mag:2.0,datas:'930–913 a.C.',anos:17,eval:'mau',confianca:'firme',contemporaneos:['jeroboao1'],
   desc:'Filho de Salomão. Sua arrogância causou a divisão do reino.',eventos:['Recusou o conselho dos anciãos','"Eu vos fustigarei com escorpiões"','10 tribos do Norte se rebelaram','Sisaque do Egito saqueou o Templo'],profetas:['Semaías','Ido'],ref:'1 Reis 12–14'},
  {id:'abias',nome:'Abias',tipo:'rei',reino:'sul',year:-911,mag:1.3,datas:'913–910 a.C.',anos:3,eval:'mau',confianca:'firme',contemporaneos:['jeroboao1'],
   desc:'Vitória militar contra Jeroboão, mas coração não foi fiel.',eventos:['"Deus está conosco" no monte Zemaraim','Grande vitória sobre Jeroboão'],profetas:['Ido'],ref:'1 Reis 15:1–8'},
  {id:'asa',nome:'Asá',tipo:'rei',reino:'sul',year:-889,mag:2.3,datas:'910–869 a.C.',anos:41,eval:'bom',confianca:'firme',contemporaneos:['nadabe','baasa','ela','zinri','onri','acabe'],
   desc:'Primeiro rei verdadeiramente justo de Judá. Removeu altares falsos.',eventos:['Removeu os ídolos','Destituiu a avó Maacá por um ídolo','Vitória sobre 1 milhão de etíopes pela oração','Renovou o altar do Senhor'],profetas:['Azarias','Hanani'],ref:'1 Reis 15:9–24'},
  {id:'josafa',nome:'Josafá',tipo:'rei',reino:'sul',year:-860,mag:2.3,datas:'872–848 a.C.',anos:25,eval:'bom',confianca:'firme',contemporaneos:['acabe','ocozias_n','jorao_n'],
   desc:'Enviou levitas a ensinar a Lei. Vitória miraculosa com cantores à frente do exército.',eventos:['Levitas ensinaram a Lei por toda Judá','Cantores louvaram À FRENTE do exército','Inimigos se mataram entre si','Erro: aliou-se com Acabe'],profetas:['Jeú f. Hanani','Elias','Micaías'],ref:'1 Reis 22'},
  {id:'jeorão_s',nome:'Jeorão',tipo:'rei',reino:'sul',year:-844,mag:1.4,datas:'848–841 a.C.',anos:8,eval:'mau',confianca:'firme',contemporaneos:['jorao_n'],
   desc:'Casou com Atalia, filha de Jezabel. Matou todos os irmãos.',eventos:['Matou todos os seus irmãos','Casou com Atalia','Carta profética de Elias','Morreu de doença intestinal grave'],profetas:['Elias'],ref:'2 Reis 8:16–24'},
  {id:'ocozias_s',nome:'Ocozias',tipo:'rei',reino:'sul',year:-840,mag:1.1,datas:'841–840 a.C.',anos:1,eval:'mau',confianca:'firme',contemporaneos:['jorao_n','jeu'],
   desc:'Neto de Acabe. Morto por Jeú na purga contra a casa de Acabe.',eventos:['Aconselhado pela família de Acabe','Morto por Jeú'],profetas:[],ref:'2 Reis 8:25–9:29'},
  {id:'atalia',nome:'Atalia',tipo:'rei',reino:'sul',year:-837,mag:1.7,datas:'840–835 a.C.',anos:6,eval:'mau',confianca:'firme',contemporaneos:['jeu'],
   desc:'Única rainha de Judá — usurpadora. Matou toda a família real. O bebê Joás foi salvo.',eventos:['Matou toda a família real','Joás foi escondido por Joiada','Reinou 6 anos','Executada quando Joás foi coroado'],profetas:[],ref:'2 Reis 11'},
  {id:'joas_s',nome:'Joás',tipo:'rei',reino:'sul',year:-815,mag:1.9,datas:'835–796 a.C.',anos:40,eval:'misto',confianca:'firme',contemporaneos:['jeu','jeoacaz','jeoas_n'],
   desc:'Coroado com 7 anos. Restaurou o Templo. Mas após a morte de Joiada, voltou-se à idolatria.',eventos:['Coroado com 7 anos','Restaurou o Templo','Voltou-se à idolatria após Joiada','Mandou apedrejar Zacarias','Assassinado pelos próprios servos'],profetas:['Joel'],ref:'2 Reis 11–12'},
  {id:'amazias',nome:'Amazias',tipo:'rei',reino:'sul',year:-781,mag:1.6,datas:'796–767 a.C.',anos:29,eval:'misto',confianca:'firme',contemporaneos:['jeoas_n','jeroboao2'],
   desc:'Fez o reto mas sem coração perfeito. Derrotou Edom mas adorou seus deuses.',eventos:['Respeitou a Lei nos julgamentos','Derrotou Edom e adorou seus deuses','Desafiou o Norte e foi derrotado'],profetas:[],ref:'2 Reis 14'},
  {id:'uzias',nome:'Uzias',tipo:'rei',reino:'sul',year:-765,mag:2.6,datas:'790–740 a.C.',anos:52,eval:'bom',confianca:'firme',contemporaneos:['jeroboao2','zacarias','salum','menaem','pecaia'],
   desc:'Reinado de 52 anos — o mais longo do Sul. Grande prosperidade. O orgulho o tornou leproso.',eventos:['Reinado mais longo do Sul','Máquinas de guerra inovadoras','Entrou no Templo para queimar incenso','Lepra apareceu em sua testa','Isaías teve sua visão no ano de sua morte'],profetas:['Isaías','Amós','Miquéias'],ref:'2 Crônicas 26'},
  {id:'jotao',nome:'Jotão',tipo:'rei',reino:'sul',year:-741,mag:1.6,datas:'750–732 a.C.',anos:16,eval:'bom',confianca:'firme',contemporaneos:['pecaia','peca'],
   desc:'Governou enquanto o pai estava leproso. Fiel, mas o povo continuou corrompido.',eventos:['Corregente enquanto Uzias era leproso','Construiu a porta superior do Templo','Submeteu os amonitas'],profetas:['Isaías','Miquéias'],ref:'2 Crônicas 27'},
  {id:'acaz',nome:'Acaz',tipo:'rei',reino:'sul',year:-725,mag:1.9,datas:'735–715 a.C.',anos:20,eval:'mau',confianca:'firme',contemporaneos:['peca','oseias_r'],
   desc:'Um dos piores reis. Sacrificou filhos no fogo. Fechou o Templo.',eventos:['Sacrificou filhos no fogo','Fechou o Templo','Isaías deu o sinal de Emanuel (Is 7)','Chamou a Assíria por ajuda'],profetas:['Isaías','Miquéias','Oséias'],ref:'2 Reis 16'},
  {id:'ezequias',nome:'Ezequias',tipo:'rei',reino:'sul',year:-700,mag:2.8,datas:'715–686 a.C.',anos:29,eval:'bom',confianca:'firme',contemporaneos:['oseias_r'],
   desc:'Um dos melhores reis. 185.000 assírios destruídos em uma noite por um anjo.',eventos:['Reabriu e purificou o Templo','Páscoa com todo Israel pela 1ª vez desde Salomão','185.000 assírios destruídos por um anjo','Deus acrescentou 15 anos à sua vida'],profetas:['Isaías'],ref:'2 Reis 18–20'},
  {id:'manasses',nome:'Manassés',tipo:'rei',reino:'sul',year:-669,mag:2.4,datas:'697–642 a.C.',anos:55,eval:'misto',confianca:'firme',
   desc:'Reinado mais longo (55 anos) e o mais mau. Mas se humilhou e Deus o restaurou.',eventos:['Reinado mais longo de Judá','Colocou ídolo dentro do Templo','Capturado com ganchos no nariz','Humilhou-se — Deus o restaurou'],profetas:['Isaías'],ref:'2 Reis 21'},
  {id:'amon',nome:'Âmon',tipo:'rei',reino:'sul',year:-641,mag:1.1,datas:'642–640 a.C.',anos:2,eval:'mau',confianca:'firme',
   desc:'Seguiu os caminhos maus sem o arrependimento. Assassinado pelos servos.',eventos:['Continuou os pecados de Manassés','Assassinado pelos próprios servos'],profetas:[],ref:'2 Reis 21:19–26'},
  {id:'josias',nome:'Josias',tipo:'rei',reino:'sul',year:-624,mag:2.7,datas:'640–609 a.C.',anos:31,eval:'bom',confianca:'firme',
   desc:'O maior reformador de Judá. O Livro da Lei foi encontrado no Templo — Josias chorou.',eventos:['Coroado com 8 anos','Destruiu altares de Baal','O Livro da Lei encontrado — rasgou as vestes','Maior Páscoa desde Samuel','Morreu no Megido contra o Faraó Neco'],profetas:['Jeremias','Sofonias','Naum'],ref:'2 Reis 22–23'},
  {id:'joacaz',nome:'Joacaz',tipo:'rei',reino:'sul',year:-609,mag:1.1,datas:'609 a.C. · 3 meses',anos:0,eval:'mau',confianca:'firme',
   desc:'Deposto pelo Faraó Neco após 3 meses e levado ao Egito.',eventos:['Deposto pelo Faraó Neco','Levado acorrentado ao Egito'],profetas:['Jeremias'],ref:'2 Reis 23:31–34'},
  {id:'jeoiaquim',nome:'Jeoiaquim',tipo:'rei',reino:'sul',year:-603,mag:1.8,datas:'609–598 a.C.',anos:11,eval:'mau',confianca:'firme',
   desc:'Queimou o rolo das profecias de Jeremias pedaço por pedaço.',eventos:['Posto no trono pelo Egito','Queimou o rolo de Jeremias no braseiro','Daniel levado para Babilônia neste período'],profetas:['Jeremias','Habacuque','Daniel'],ref:'2 Reis 23:34–24:7'},
  {id:'jeoiacim',nome:'Jeoiacim',tipo:'rei',reino:'sul',year:-597,mag:1.3,datas:'598–597 a.C.',anos:0,eval:'mau',confianca:'firme',
   desc:'Reinou 3 meses. Levado cativo para Babilônia com 10.000 — incluindo Ezequiel.',eventos:['Reinou 3 meses','Levado cativo para Babilônia','10.000 cativos incluindo Ezequiel'],profetas:['Jeremias','Ezequiel'],ref:'2 Reis 24:8–17'},
  {id:'zedequias',nome:'Zedequias',tipo:'rei',reino:'sul',year:-591,mag:2.2,datas:'597–586 a.C.',anos:11,eval:'mau',confianca:'firme',
   desc:'Último rei de Judá. Jerusalém caiu em 586 a.C. Cegado após ver os filhos mortos.',eventos:['Rebelou-se contra a Babilônia','Cerco de 2 anos com fome terrível','Filhos mortos diante de seus olhos','Foi cegado e levado em cadeias','586 a.C.: Templo e Jerusalém incendiados','Fim do Sul após 344 anos'],profetas:['Jeremias','Ezequiel','Obadias'],ref:'2 Reis 24:18–25'},
];

const PROFETAS=[
  {id:'elias',nome:'Elias',tipo:'profeta',reino:'norte',year:-860,mag:2.7,datas:'~875–848 a.C.',confianca:'firme',
   desc:'O maior profeta do Norte. Confrontou os 450 profetas de Baal no Carmelo. Arrebatado em carro de fogo.',eventos:['Profetizou 3 anos de seca','450 profetas de Baal no Carmelo — fogo do céu','Voz mansa e delicada no Horebe','Arrebatado em carro de fogo'],profetas:[],ref:'1 Reis 17–2 Reis 2'},
  {id:'eliseu',nome:'Eliseu',tipo:'profeta',reino:'norte',year:-820,mag:2.6,datas:'~848–797 a.C.',confianca:'firme',
   desc:'Sucessor de Elias. Realizou o dobro dos milagres. Pediu dupla porção do Espírito.',eventos:['Dupla porção do espírito de Elias','Multiplicou óleo para a viúva','Curou Naamã da lepra','Fez o machado flutuar','Até seus ossos ressuscitaram um morto'],profetas:[],ref:'2 Reis 2–13'},
  {id:'nata',nome:'Natã',tipo:'profeta',reino:'unido',year:-985,mag:2.0,datas:'~1010–970 a.C.',confianca:'aproximada',
   desc:'Profeta de Davi e Salomão. Confrontou Davi com a parábola da ovelha.',eventos:['Revelou a aliança davídica (2 Sm 7)','"Tu és o homem!"','Garantiu a coroação de Salomão'],profetas:[],ref:'2 Samuel 7; 12'},
  {id:'isaias',nome:'Isaías',tipo:'profeta',reino:'sul',year:-710,mag:2.9,datas:'~740–681 a.C.',confianca:'firme',
   desc:'O maior profeta de Judá. Profetizou sobre Emanuel e o Servo Sofredor — cumprido em Jesus.',eventos:['Visão dos serafins: "Santo, Santo, Santo"','"Aqui estou eu, envia-me"','Sinal de Emanuel (Is 7)','Servo Sofredor (Is 53)','Cativeiro babilônico séculos antes'],profetas:[],ref:'Isaías 1–66'},
  {id:'jeremias',nome:'Jeremias',tipo:'profeta',reino:'sul',year:-606,mag:2.7,datas:'~627–585 a.C.',confianca:'firme',
   desc:'O "profeta que chora". Viveu para ver a destruição de Jerusalém que anunciou.',eventos:['"Antes de te formar no ventre, te conheci"','Rolos queimados por Jeoiaquim','Jogado em cisterna','Viu a queda de Jerusalém','Profetizou a Nova Aliança (Jr 31)'],profetas:[],ref:'Jeremias 1–52'},
  {id:'amos',nome:'Amós',tipo:'profeta',reino:'norte',year:-755,mag:1.8,datas:'~760–750 a.C.',confianca:'firme',
   desc:'Pastor de Tecoa chamado a profetizar no Norte. Denunciou a injustiça social.',eventos:['Pastor — não era profeta profissional','Expulso de Betel','"Vendiam o justo por dinheiro"','Restauração da "tenda caída de Davi"'],profetas:[],ref:'Amós 1–9'},
  {id:'oseias',nome:'Oséias',tipo:'profeta',reino:'norte',year:-735,mag:1.9,datas:'~755–715 a.C.',confianca:'firme',
   desc:'Casou com mulher infiel como símbolo do casamento de Deus com Israel.',eventos:['Casou com Gomér, infiel','Comprou Gomér de volta — símbolo de redenção','"Não conhecerás outro Deus"'],profetas:[],ref:'Oséias 1–14'},
  {id:'miqueas',nome:'Miquéias',tipo:'profeta',reino:'sul',year:-717,mag:1.9,datas:'~735–700 a.C.',confianca:'firme',
   desc:'Profetizou que o Messias nasceria em Belém (Mq 5:2).',eventos:['"De ti, Belém Efrata... sairá o soberano"','Denunciou líderes corruptos','"Praticar a justiça, amar a misericórdia..."'],profetas:[],ref:'Miquéias 1–7'},
  {id:'sofonias',nome:'Sofonias',tipo:'profeta',reino:'sul',year:-625,mag:1.5,datas:'~640–609 a.C.',confianca:'firme',
   desc:'Profetizou no início de Josias. Anunciou o Dia do Senhor e depois restauração.',eventos:['Descendente de Ezequias','"Dia de ira, dia de angústia..."','Deus cantará de alegria sobre seu povo'],profetas:[],ref:'Sofonias 1–3'},
  {id:'naum',nome:'Naum',tipo:'profeta',reino:'sul',year:-631,mag:1.4,datas:'~650–612 a.C.',confianca:'aproximada',
   desc:'Profetizou a queda de Nínive, capital da Assíria. Cumprido em 612 a.C.',eventos:['Profecia sobre a queda de Nínive','Nínive caiu em 612 a.C.'],profetas:[],ref:'Naum 1–3'},
  {id:'habacuque',nome:'Habacuque',tipo:'profeta',reino:'sul',year:-608,mag:1.6,datas:'~612–605 a.C.',confianca:'aproximada',
   desc:'Questionou a Deus sobre o triunfo dos ímpios. "O justo viverá pela sua fé."',eventos:['"Até quando, ó Senhor, clamarei?"','"O justo viverá pela sua fé" (Hc 2:4)','Hino de fé total mesmo sem bênção'],profetas:[],ref:'Habacuque 1–3'},
  {id:'joel',nome:'Joel',tipo:'profeta',reino:'sul',year:-835,mag:1.5,datas:'incerto (~835 a.C.?)',confianca:'debatida',
   desc:'Usou uma praga de gafanhotos como imagem do Dia do Senhor. Profetizou o derramamento do Espírito sobre toda carne.',eventos:['A praga de gafanhotos como sinal do Dia do Senhor','"Rasgai o vosso coração e não as vossas vestes"','"Derramarei o meu Espírito sobre toda a carne" (Jl 2:28)','Citado por Pedro em Pentecostes (Atos 2)'],profetas:[],ref:'Joel 1–3'},
  {id:'jonas',nome:'Jonas',tipo:'profeta',reino:'norte',year:-770,mag:1.8,datas:'~793–753 a.C.',confianca:'firme',
   desc:'Fugiu da ordem de Deus de pregar em Nínive. Engolido por um grande peixe, foi cuspido e Nínive se arrependeu.',eventos:['Fugiu de Deus num navio para Társis','Lançado ao mar — engolido por um grande peixe','3 dias no ventre do peixe','Pregou em Nínive — a cidade inteira se arrependeu','Irou-se com a misericórdia de Deus','Sinal de Jonas: figura da ressurreição (Mt 12:40)'],profetas:[],ref:'Jonas 1–4'},
  {id:'obadias',nome:'Obadias',tipo:'profeta',reino:'sul',year:-587,mag:1.3,datas:'~586 a.C.',confianca:'aproximada',
   desc:'O livro mais curto do AT. Profetizou a destruição de Edom por ter se alegrado com a queda de Jerusalém.',eventos:['Profecia contra Edom (descendentes de Esaú)','Edom se alegrou com a queda de Jerusalém','"Como fizeste, assim se fará contigo"'],profetas:[],ref:'Obadias 1'},
];

// ── EXÍLIO E RETORNO (586–430 a.C.) ──
const EXILIO=[
  {id:'daniel',nome:'Daniel',tipo:'profeta',reino:'exilio',year:-570,mag:2.7,datas:'~605–536 a.C.',confianca:'firme',
   desc:'Levado cativo jovem para a Babilônia. Serviu reis babilônicos e persas. Recebeu visões proféticas sobre os impérios e o fim dos tempos.',eventos:['Levado cativo para Babilônia ainda jovem','Recusou contaminar-se com a comida do rei','Interpretou o sonho da estátua de Nabucodonosor','Seus amigos na fornalha ardente','Leu a escrita na parede de Belsazar','Lançado na cova dos leões — preservado por Deus','Visões dos 4 impérios e das 70 semanas','Profetizou a vinda do Messias'],profetas:[],ref:'Daniel 1–12'},
  {id:'ezequiel',nome:'Ezequiel',tipo:'profeta',reino:'exilio',year:-580,mag:2.4,datas:'~593–571 a.C.',confianca:'firme',
   desc:'Sacerdote levado no cativeiro com Jeoiacim. Profetizou aos exilados na Babilônia com visões dramáticas e atos simbólicos.',eventos:['Visão da glória de Deus e das criaturas viventes','Comeu o rolo doce como mel','Atos simbólicos sobre o cerco de Jerusalém','Visão do vale dos ossos secos que reviveram','Visão do novo Templo','"Tirarei o coração de pedra e darei um coração de carne"'],profetas:[],ref:'Ezequiel 1–48'},
  {id:'ageu',nome:'Ageu',tipo:'profeta',reino:'retorno',year:-520,mag:1.7,datas:'520 a.C.',confianca:'firme',
   desc:'Após o retorno do exílio, exortou o povo a reconstruir o Templo, que estava parado. Profetizou em 520 a.C. com Zorobabel.',eventos:['Exortou a reconstrução do Templo parada há anos','"Considerai os vossos caminhos"','"A glória desta última casa será maior que a da primeira"','O povo retomou a obra do Templo'],profetas:[],ref:'Ageu 1–2'},
  {id:'zacarias_p',nome:'Zacarias (profeta)',tipo:'profeta',reino:'retorno',year:-518,mag:2.0,datas:'520–518 a.C.',confianca:'firme',
   desc:'Contemporâneo de Ageu. Encorajou a reconstrução do Templo com visões cheias de simbolismo messiânico.',eventos:['8 visões noturnas sobre a restauração','"Não por força nem por violência, mas pelo meu Espírito"','Profetizou o Rei vindo "humilde, montado num jumentinho" (Zc 9:9)','"Olharão para aquele a quem traspassaram" (Zc 12:10)'],profetas:[],ref:'Zacarias 1–14'},
  {id:'malaquias',nome:'Malaquias',tipo:'profeta',reino:'retorno',year:-432,mag:2.2,datas:'~430 a.C.',confianca:'aproximada',
   desc:'O último profeta do Antigo Testamento. Repreendeu a frieza espiritual após o retorno e prometeu o mensageiro que prepararia o caminho — então vieram 400 anos de silêncio até João Batista.',eventos:['Repreendeu sacerdotes negligentes','Condenou o divórcio e os dízimos retidos','"Trazei todos os dízimos à casa do tesouro"','Prometeu o "mensageiro" — Elias (cumprido em João Batista)','"O sol da justiça nascerá trazendo cura em suas asas"','Último livro do AT — seguem 400 anos de silêncio'],profetas:[],ref:'Malaquias 1–4'},
];

const ALL=[...JUIZES,...UNIDO,...NORTE,...SUL,...PROFETAS,...EXILIO];

// ════════════════════════════════════════════════════════
//  IMPÉRIOS DO PANO DE FUNDO  (potência dominante no cenário)
//  Bandas suaves desenhadas atrás de tudo, ao longo do eixo do tempo.
//  Datas aproximadas do período de maior influência sobre Israel/Judá.
// ════════════════════════════════════════════════════════
const IMPERIOS=[
  {nome:'Egito',          y0:-1380,y1:-1100,cor:'#d4a24c',
   nota:'Sombra do Egito faraônico no fim da era dos juízes.'},
  {nome:'Potências locais',y0:-1100,y1:-900, cor:'#7c8aa0',
   nota:'Filisteus, arameus e vizinhos — sem um grande império dominante.'},
  {nome:'Assíria',        y0:-900, y1:-609, cor:'#6f86b8',
   nota:'O império assírio cresce, leva o Norte (722) e ameaça Judá.'},
  {nome:'Babilônia',      y0:-609, y1:-539, cor:'#9b6fb8',
   nota:'A Babilônia destrói Jerusalém (586) e leva Judá ao exílio.'},
  {nome:'Pérsia',         y0:-539, y1:-410, cor:'#5fa6a0',
   nota:'Ciro liberta os judeus (538) — período do Retorno e reconstrução.'},
];

// ════════════════════════════════════════════════════════
//  CO-REGÊNCIAS  (períodos de governo sobreposto, pai/filho)
//  Explicam datas que "se sobrepõem" nas listas dos reis.
// ════════════════════════════════════════════════════════
const COREGENCIAS=[
  {a:'uzias',b:'jotao',  nota:'Jotão governou enquanto Uzias vivia leproso e isolado.'},
  {a:'jotao',b:'acaz',   nota:'Acaz assumiu funções ainda em vida de Jotão.'},
  {a:'ezequias',b:'manasses',nota:'Manassés foi co-regente nos últimos anos de Ezequias.'},
  {a:'amazias',b:'uzias',nota:'Uzias começou a reinar ainda jovem, junto de Amazias.'},
];
