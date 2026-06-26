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
   desc:'Filho de Salomão. Sua resposta dura ao povo precipitou a divisão do reino.',eventos:['Rejeitou o conselho dos anciãos','"Eu os castigarei com chicotes farpados"','Dez tribos se rebelaram contra ele','Sisaque, do Egito, levou os tesouros do templo'],profetas:['Semaías','Ido'],ref:'1 Reis 12-14'},
  {id:'abias',nome:'Abias',tipo:'rei',reino:'sul',year:-911,mag:1.3,datas:'913–910 a.C.',anos:3,eval:'mau',confianca:'firme',contemporaneos:['jeroboao1'],
   desc:'Filho de Roboão. Teve vitória sobre Jeroboão, mas o coração não foi plenamente fiel a Jeová.',eventos:['Confiou em Jeová no monte Zemaraim','Grande vitória sobre o exército de Jeroboão'],profetas:['Ido'],ref:'1 Reis 15:1-8; 2 Crônicas 13'},
  {id:'asa',nome:'Asa',tipo:'rei',reino:'sul',year:-889,mag:2.3,datas:'910–869 a.C.',anos:41,eval:'bom',confianca:'firme',contemporaneos:['nadabe','baasa','ela','zinri','onri','acabe'],
   desc:'Fez o que era bom aos olhos de Jeová. Removeu a idolatria de Judá; no fim, confiou na Síria em vez de Jeová.',eventos:['Removeu os ídolos da terra','Tirou a avó Maacá da posição de rainha-mãe por causa de um ídolo','Jeová derrotou o vasto exército de Zerá, o etíope','No fim, fez aliança com a Síria e foi repreendido por Hanani'],profetas:['Azarias','Hanani'],ref:'1 Reis 15:9-24; 2 Crônicas 14-16'},
  {id:'josafa',nome:'Josafá',tipo:'rei',reino:'sul',year:-860,mag:2.3,datas:'872–848 a.C.',anos:25,eval:'bom',confianca:'firme',contemporaneos:['acabe','ocozias_n','jorao_n'],
   desc:'Rei fiel. Enviou príncipes e levitas para ensinar a Lei por Judá. Errou ao se aliar com Acabe.',eventos:['Enviou homens para ensinar a Lei nas cidades de Judá','Pôs cantores à frente do exército, e os inimigos se destruíram','Aliou-se a Acabe e foi repreendido por isso'],profetas:['Jeú f. Hanani','Elias','Micaías'],ref:'1 Reis 22; 2 Crônicas 17-20'},
  {id:'jeorão_s',nome:'Jeorão',tipo:'rei',reino:'sul',year:-844,mag:1.4,datas:'848–841 a.C.',anos:8,eval:'mau',confianca:'firme',contemporaneos:['jorao_n'],
   desc:'Casou-se com uma filha de Acabe. Matou os próprios irmãos e levou Judá à infidelidade.',eventos:['Matou todos os seus irmãos','Casou-se com Atalia, da casa de Acabe','Recebeu uma carta de juízo da parte de Elias','Morreu de uma doença grave nos intestinos'],profetas:['Elias'],ref:'2 Reis 8:16-24; 2 Crônicas 21'},
  {id:'ocozias_s',nome:'Acazias',tipo:'rei',reino:'sul',year:-840,mag:1.1,datas:'841–840 a.C.',anos:1,eval:'mau',confianca:'firme',contemporaneos:['jorao_n','jeu'],
   desc:'Aparentado com a casa de Acabe pela mãe, Atalia. Foi morto durante a ação de Jeú.',eventos:['Seguiu o conselho da casa de Acabe','Foi atingido durante a ação de Jeú e morreu'],profetas:[],ref:'2 Reis 8:25 a 9:29'},
  {id:'atalia',nome:'Atalia',tipo:'rei',reino:'sul',year:-837,mag:1.7,datas:'840–835 a.C.',anos:6,eval:'mau',confianca:'firme',contemporaneos:['jeu'],
   desc:'Filha de Acabe. Tentou destruir toda a descendência real de Judá e governou por seis anos.',eventos:['Procurou matar toda a descendência real','O bebê Joás foi escondido por Jeoseba','Reinou por seis anos','Foi executada quando Joás foi proclamado rei'],profetas:[],ref:'2 Reis 11'},
  {id:'joas_s',nome:'Joás',tipo:'rei',reino:'sul',year:-815,mag:1.9,datas:'835–796 a.C.',anos:40,eval:'misto',confianca:'firme',contemporaneos:['jeu','jeoacaz','jeoas_n'],
   desc:'Tornou-se rei aos 7 anos. Reparou o templo enquanto o sacerdote Joiada vivia; depois se desviou.',eventos:['Coroado aos 7 anos pelo sacerdote Joiada','Mandou reparar o templo de Jeová','Após a morte de Joiada, abandonou a Jeová','Mandou matar Zacarias, filho de Joiada','Foi morto pelos seus próprios servos'],profetas:['Joel'],ref:'2 Reis 11-12; 2 Crônicas 24'},
  {id:'amazias',nome:'Amazias',tipo:'rei',reino:'sul',year:-781,mag:1.6,datas:'796–767 a.C.',anos:29,eval:'misto',confianca:'firme',contemporaneos:['jeoas_n','jeroboao2'],
   desc:'Fez o que era bom, mas não de coração inteiro. Derrotou Edom e depois passou a adorar os deuses de Edom.',eventos:['Derrotou os edomitas','Trouxe os deuses de Edom e os adorou','Desafiou Jeoás, de Israel, e foi derrotado'],profetas:[],ref:'2 Reis 14; 2 Crônicas 25'},
  {id:'uzias',nome:'Uzias',tipo:'rei',reino:'sul',year:-765,mag:2.6,datas:'790–740 a.C.',anos:52,eval:'bom',confianca:'firme',contemporaneos:['jeroboao2','zacarias','salum','menaem','pecaia'],
   desc:'Reinou 52 anos. Foi próspero enquanto buscou a Jeová; quando se tornou arrogante e queimou incenso no templo, foi atingido por lepra.',eventos:['Tornou-se rei aos 16 anos','Teve sucesso militar e construções','Entrou no templo para queimar incenso, agindo de modo infiel','Apareceu lepra na sua testa, e ele viveu isolado'],profetas:['Isaías','Amós','Miquéias'],ref:'2 Crônicas 26'},
  {id:'jotao',nome:'Jotão',tipo:'rei',reino:'sul',year:-741,mag:1.6,datas:'750–732 a.C.',anos:16,eval:'bom',confianca:'firme',contemporaneos:['pecaia','peca'],
   desc:'Fez o que era bom aos olhos de Jeová, embora o povo continuasse agindo de modo corrupto.',eventos:['Construiu a porta superior da casa de Jeová','Subjugou os amonitas','Tornou-se forte por manter os seus caminhos diante de Jeová'],profetas:['Isaías','Miquéias'],ref:'2 Crônicas 27'},
  {id:'acaz',nome:'Acaz',tipo:'rei',reino:'sul',year:-725,mag:1.9,datas:'735–715 a.C.',anos:20,eval:'mau',confianca:'firme',contemporaneos:['peca','oseias_r'],
   desc:'Um dos piores reis de Judá. Queimou seus filhos no fogo e buscou a ajuda da Assíria em vez de Jeová.',eventos:['Queimou seus filhos no fogo','Recusou pedir um sinal, e Isaías deu o sinal de Emanuel','Pediu ajuda ao rei da Assíria','Fechou as portas da casa de Jeová'],profetas:['Isaías','Miquéias','Oséias'],ref:'2 Reis 16; 2 Crônicas 28'},
  {id:'ezequias',nome:'Ezequias',tipo:'rei',reino:'sul',year:-700,mag:2.8,datas:'715–686 a.C.',anos:29,eval:'bom',confianca:'firme',contemporaneos:['oseias_r'],
   desc:'Confiou em Jeová como nenhum outro rei de Judá. Quando a Assíria ameaçou Jerusalém, Jeová a livrou.',eventos:['Reabriu e purificou o templo','Celebrou uma grande Páscoa','O anjo de Jeová matou 185.000 no acampamento assírio','Adoeceu e Jeová lhe acrescentou 15 anos de vida','Mostrou seus tesouros aos enviados de Babilônia'],profetas:['Isaías'],ref:'2 Reis 18-20'},
  {id:'manasses',nome:'Manassés',tipo:'rei',reino:'sul',year:-669,mag:2.4,datas:'697–642 a.C.',anos:55,eval:'misto',confianca:'firme',
   desc:'Reinou 55 anos. Praticou muita maldade, mas, levado cativo, humilhou-se a Jeová e foi restaurado.',eventos:['Reconstruiu os altares idólatras que o pai destruíra','Colocou uma imagem esculpida no templo','Foi capturado com ganchos e levado a Babilônia','Humilhou-se a Jeová e voltou a Jerusalém'],profetas:['Isaías'],ref:'2 Reis 21; 2 Crônicas 33'},
  {id:'amon',nome:'Amom',tipo:'rei',reino:'sul',year:-641,mag:1.1,datas:'642–640 a.C.',anos:2,eval:'mau',confianca:'firme',
   desc:'Filho de Manassés. Continuou na idolatria, mas sem se humilhar. Foi morto pelos seus servos.',eventos:['Adorou os ídolos que Manassés fizera','Não se humilhou a Jeová','Foi morto numa conspiração no palácio'],profetas:[],ref:'2 Reis 21:19-26; 2 Crônicas 33:21-25'},
  {id:'josias',nome:'Josias',tipo:'rei',reino:'sul',year:-624,mag:2.7,datas:'640–609 a.C.',anos:31,eval:'bom',confianca:'firme',
   desc:'Grande reformador de Judá. Ao se achar o livro da Lei, renovou a adoração de Jeová.',eventos:['Começou a buscar a Jeová ainda jovem','Removeu a idolatria de Judá','O sacerdote Hilquias achou o livro da Lei','Celebrou uma Páscoa como não havia desde os juízes','Morreu em Megido, ferido na luta contra o faraó Neco'],profetas:['Jeremias','Sofonias','Naum','Hulda'],ref:'2 Reis 22-23'},
  {id:'joacaz',nome:'Joacaz',tipo:'rei',reino:'sul',year:-609,mag:1.1,datas:'609 a.C. · 3 meses',anos:0,eval:'mau',confianca:'firme',
   desc:'Filho de Josias. Reinou três meses; o faraó Neco o tirou do trono e o levou ao Egito.',eventos:['Reinou três meses em Jerusalém','Neco o aprisionou e o levou ao Egito, onde morreu'],profetas:['Jeremias'],ref:'2 Reis 23:31-34'},
  {id:'jeoiaquim',nome:'Jeoiaquim',tipo:'rei',reino:'sul',year:-603,mag:1.8,datas:'609–598 a.C.',anos:11,eval:'mau',confianca:'firme',
   desc:'Posto no trono pelo Egito e depois vassalo de Babilônia. Queimou o rolo das profecias de Jeremias.',eventos:['Colocado no trono pelo faraó Neco','Queimou no fogo o rolo escrito por Jeremias','Neste período houve a primeira investida de Babilônia'],profetas:['Jeremias','Habacuque','Daniel'],ref:'2 Reis 23:34 a 24:7'},
  {id:'jeoiacim',nome:'Joaquim',tipo:'rei',reino:'sul',year:-597,mag:1.3,datas:'598–597 a.C.',anos:0,eval:'mau',confianca:'firme',
   desc:'Tornou-se rei aos 18 anos. Reinou três meses e foi levado cativo a Babilônia.',eventos:['Reinou três meses em Jerusalém','Rendeu-se a Babilônia','Foi levado cativo junto com nobres e artesãos'],profetas:['Jeremias','Ezequiel'],ref:'2 Reis 24:8-17'},
  {id:'zedequias',nome:'Zedequias',tipo:'rei',reino:'sul',year:-591,mag:2.2,datas:'597–586 a.C.',anos:11,eval:'mau',confianca:'firme',
   desc:'Último rei de Judá. Rebelou-se contra Babilônia, e Jerusalém foi destruída.',eventos:['Rebelou-se contra o rei de Babilônia','Jerusalém foi sitiada e tomada','Seus filhos foram mortos diante dele','Foi cegado e levado em cadeias a Babilônia','O templo e Jerusalém foram incendiados'],profetas:['Jeremias','Ezequiel','Obadias'],ref:'2 Reis 24:18 a 25:21'},
];

const PROFETAS=[
  {id:'elias',nome:'Elias',tipo:'profeta',reino:'norte',year:-860,mag:2.7,datas:'~875–848 a.C.',confianca:'firme',
   desc:'Profeta no Reino do Norte, nos dias de Acabe. Defendeu a adoração de Jeová contra o culto a Baal.',eventos:['Anunciou anos de seca','No Carmelo, fogo de Jeová desceu diante de 450 profetas de Baal','Ouviu uma voz calma e baixa em Horebe','Foi levado aos céus num vendaval'],profetas:[],ref:'1 Reis 17 a 2 Reis 2'},
  {id:'eliseu',nome:'Eliseu',tipo:'profeta',reino:'norte',year:-820,mag:2.6,datas:'~848–797 a.C.',confianca:'firme',
   desc:'Sucessor de Elias. Pediu e recebeu uma porção dupla do espírito de Elias.',eventos:['Recebeu uma porção dupla do espírito de Elias','Multiplicou o azeite da viúva','Curou Naamã da lepra','Fez o ferro do machado flutuar'],profetas:[],ref:'2 Reis 2-13'},
  {id:'nata',nome:'Natã',tipo:'profeta',reino:'unido',year:-985,mag:2.0,datas:'~1010–970 a.C.',confianca:'aproximada',
   desc:'Profeta nos dias de Davi e Salomão. Transmitiu o pacto de Reino a Davi e o repreendeu por seu pecado.',eventos:['Transmitiu o pacto de Reino a Davi (2 Samuel 7)','Repreendeu Davi: "O senhor é o homem!"','Apoiou a entronização de Salomão'],profetas:[],ref:'2 Samuel 7; 12'},
  {id:'isaias',nome:'Isaías',tipo:'profeta',reino:'sul',year:-710,mag:2.9,datas:'~740–681 a.C.',confianca:'firme',
   desc:'Profeta em Judá. Profetizou sobre o sinal de Emanuel e sobre o servo de Jeová.',eventos:['Viu em visão os serafins: "Santo, santo, santo é Jeová dos exércitos"','Respondeu: "Aqui estou! Envia-me!"','Deu o sinal de Emanuel (Isaías 7)','Falou do servo de Jeová (Isaías 53)','Predisse a libertação por Ciro'],profetas:[],ref:'Isaías 1-66'},
  {id:'jeremias',nome:'Jeremias',tipo:'profeta',reino:'sul',year:-606,mag:2.7,datas:'~627–585 a.C.',confianca:'firme',
   desc:'Profeta em Judá nos seus últimos anos. Viveu para ver a destruição de Jerusalém que havia anunciado.',eventos:['"Antes de eu o formar no ventre, eu o conheci"','Jeoiaquim queimou o rolo das suas profecias','Foi lançado numa cisterna','Predisse um novo pacto (Jeremias 31)'],profetas:[],ref:'Jeremias 1-52'},
  {id:'amos',nome:'Amós',tipo:'profeta',reino:'norte',year:-755,mag:1.8,datas:'~760–750 a.C.',confianca:'firme',
   desc:'Pastor de Tecoa enviado a profetizar contra Israel. Denunciou a injustiça e a opressão.',eventos:['Não era profeta de profissão; cuidava de rebanhos','"Que a justiça flua como as águas"','Foi mandado embora de Betel por Amazias','Falou da restauração da "cabana caída de Davi"'],profetas:[],ref:'Amós 1-9'},
  {id:'oseias',nome:'Oséias',tipo:'profeta',reino:'norte',year:-735,mag:1.9,datas:'~755–715 a.C.',confianca:'firme',
   desc:'Profeta no Reino do Norte. Seu casamento ilustrou a infidelidade de Israel a Jeová.',eventos:['Casou-se com Gômer, que lhe foi infiel','Sua história retratou Israel deixando a Jeová','Anunciou que Israel voltaria a buscar a Jeová'],profetas:[],ref:'Oséias 1-14'},
  {id:'miqueas',nome:'Miquéias',tipo:'profeta',reino:'sul',year:-717,mag:1.9,datas:'~735–700 a.C.',confianca:'firme',
   desc:'Profeta em Judá. Predisse que de Belém Efrata sairia aquele que governaria Israel.',eventos:['"E você, ó Belém Efrata... De você me sairá aquele que será governante em Israel"','Denunciou os líderes corruptos','Mostrou o que Jeová pede: justiça, bondade e humildade'],profetas:[],ref:'Miquéias 1-7'},
  {id:'sofonias',nome:'Sofonias',tipo:'profeta',reino:'sul',year:-625,mag:1.5,datas:'~640–609 a.C.',confianca:'firme',
   desc:'Profetizou nos dias de Josias. Anunciou o dia de Jeová e a restauração do povo.',eventos:['Anunciou o dia de Jeová como dia de ira','"Jeová... por sua causa ele exultará com grande alegria"'],profetas:[],ref:'Sofonias 1-3'},
  {id:'naum',nome:'Naum',tipo:'profeta',reino:'sul',year:-631,mag:1.4,datas:'~650–612 a.C.',confianca:'aproximada',
   desc:'Profetizou a queda de Nínive, a capital da Assíria.',eventos:['Pronunciou o juízo contra Nínive','Anunciou o fim do poder assírio'],profetas:[],ref:'Naum 1-3'},
  {id:'habacuque',nome:'Habacuque',tipo:'profeta',reino:'sul',year:-608,mag:1.6,datas:'~612–605 a.C.',confianca:'aproximada',
   desc:'Perguntou a Jeová por que a maldade prosperava. Recebeu a resposta sobre viver pela fidelidade.',eventos:['"Até quando, ó Jeová, clamarei por socorro?"','"Mas o justo viverá pela sua fidelidade"','Expressou confiança em Jeová mesmo sem bênçãos visíveis'],profetas:[],ref:'Habacuque 1-3'},
  {id:'joel',nome:'Joel',tipo:'profeta',reino:'sul',year:-835,mag:1.5,datas:'incerto (~835 a.C.?)',confianca:'debatida',
   desc:'Usou uma praga de gafanhotos para falar do dia de Jeová. Predisse o derramamento do espírito de Deus.',eventos:['A praga de gafanhotos retratou o dia de Jeová','"Rasguem o coração, não as roupas"','"Derramarei meu espírito sobre todo tipo de pessoas"'],profetas:[],ref:'Joel 1-3'},
  {id:'jonas',nome:'Jonas',tipo:'profeta',reino:'norte',year:-770,mag:1.8,datas:'~793–753 a.C.',confianca:'firme',
   desc:'Fugiu da designação de pregar em Nínive. Engolido por um grande peixe, depois pregou, e a cidade se arrependeu.',eventos:['Fugiu de barco rumo a Társis','Foi lançado ao mar e engolido por um grande peixe','Ficou três dias dentro do peixe','Pregou em Nínive, e a cidade se arrependeu','Ficou irado com a misericórdia de Jeová'],profetas:[],ref:'Jonas 1-4'},
  {id:'obadias',nome:'Obadias',tipo:'profeta',reino:'sul',year:-587,mag:1.3,datas:'~586 a.C.',confianca:'aproximada',
   desc:'O livro mais curto das Escrituras Hebraicas. Anunciou o juízo de Edom por se alegrar com a queda de Jerusalém.',eventos:['Profecia contra Edom (descendentes de Esaú)','Edom se alegrou com a desgraça de Jerusalém','"Assim como você fez, será feito a você"'],profetas:[],ref:'Obadias 1'},
];

// ── EXÍLIO E RETORNO (586–430 a.C.) ──
const EXILIO=[
  {id:'daniel',nome:'Daniel',tipo:'profeta',reino:'exilio',year:-570,mag:2.7,datas:'~605–536 a.C.',confianca:'firme',
   desc:'Levado cativo a Babilônia ainda jovem. Serviu sob reis babilônios e persas e recebeu visões sobre o futuro dos impérios.',eventos:['Recusou contaminar-se com a comida do rei','Interpretou o sonho da imagem de Nabucodonosor','Seus três companheiros na fornalha ardente','Leu a escrita na parede de Belsazar','Foi lançado na cova dos leões e preservado','Recebeu a profecia das 70 semanas'],profetas:[],ref:'Daniel 1-12'},
  {id:'ezequiel',nome:'Ezequiel',tipo:'profeta',reino:'exilio',year:-580,mag:2.4,datas:'~593–571 a.C.',confianca:'firme',
   desc:'Sacerdote levado cativo com Joaquim. Profetizou aos exilados em Babilônia por meio de visões e atos simbólicos.',eventos:['Visão da glória de Jeová e das criaturas viventes','Comeu o rolo, que ficou doce como mel','Representou o cerco de Jerusalém em atos simbólicos','Viu o vale de ossos secos voltarem a viver','Recebeu a visão de um novo templo'],profetas:[],ref:'Ezequiel 1-48'},
  {id:'ageu',nome:'Ageu',tipo:'profeta',reino:'retorno',year:-520,mag:1.7,datas:'520 a.C.',confianca:'firme',
   desc:'Depois do retorno, animou o povo a retomar a reconstrução do templo, junto com Zorobabel.',eventos:['Exortou o povo a reconstruir o templo','"Considerem o seu proceder"','"A futura glória desta casa será maior do que a da anterior"','O povo retomou a obra do templo'],profetas:[],ref:'Ageu 1-2'},
  {id:'zacarias_p',nome:'Zacarias (profeta)',tipo:'profeta',reino:'retorno',year:-518,mag:2.0,datas:'520–518 a.C.',confianca:'firme',
   desc:'Contemporâneo de Ageu. Incentivou a reconstrução do templo por meio de visões.',eventos:['Recebeu visões sobre a restauração','"Não por meio de força militar, mas por meio do meu espírito"','"Seu rei... humilde e vem montado num jumento"'],profetas:[],ref:'Zacarias 1-14'},
  {id:'malaquias',nome:'Malaquias',tipo:'profeta',reino:'retorno',year:-432,mag:2.2,datas:'~430 a.C.',confianca:'aproximada',
   desc:'O último livro das Escrituras Hebraicas. Repreendeu os sacerdotes infiéis e prometeu o mensageiro de Jeová.',eventos:['Repreendeu os sacerdotes que desonravam a Jeová','Condenou o divórcio traiçoeiro e a retenção dos dízimos','"Tragam todos os dízimos ao depósito"','Prometeu o mensageiro que prepararia o caminho'],profetas:[],ref:'Malaquias 1-4'},
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
