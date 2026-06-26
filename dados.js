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
   desc:'Primeiro juiz de Israel. Sobrinho de Calebe, libertou Israel da opressão de Cusã-Risataim.',eventos:['Casou com a filha de Calebe','Libertou Israel de 8 anos de opressão mesopotâmica','O Espírito do Senhor o fortaleceu'],profetas:[],ref:'Juízes 3:7–11'},
  {id:'eude',nome:'Eúde',tipo:'juiz',year:-1276,mag:1.7,datas:'~1316–1236 a.C.',anos:80,tribo:'Benjamim',eval:'bom',confianca:'debatida',
   desc:'Juiz canhoto que libertou Israel da opressão moabita assassinando o rei Eglom com uma espada oculta.',eventos:['Matou Eglom em câmara privada com espada oculta','Venceu 10 mil moabitas no Jordão','Conquistou 80 anos de paz'],profetas:[],ref:'Juízes 3:12–30'},
  {id:'sangar',nome:'Sangar',tipo:'juiz',year:-1236,mag:1.2,datas:'~1236 a.C.',anos:0,tribo:'—',eval:'bom',confianca:'debatida',
   desc:'Libertou Israel matando 600 filisteus com um aguilhão de bois.',eventos:['Matou 600 filisteus com um aguilhão de bois'],profetas:[],ref:'Juízes 3:31'},
  {id:'debora',nome:'Débora',tipo:'juiz',year:-1189,mag:2.2,datas:'~1209–1169 a.C.',anos:40,tribo:'Efraim',eval:'bom',confianca:'debatida',
   desc:'Única juíza mulher de Israel. Profetisa que mobilizou Baraque para derrotar Sísara com 900 carros de ferro.',eventos:['Única mulher a governar Israel como juíza','Exército de Sísara com 900 carros foi destruído','Jael matou Sísara com uma estaca de tenda','Compôs o "Cântico de Débora"'],profetas:[],ref:'Juízes 4–5'},
  {id:'gideao',nome:'Gedeão',tipo:'juiz',year:-1149,mag:2.4,datas:'~1169–1129 a.C.',anos:40,tribo:'Manassés',eval:'misto',confianca:'debatida',
   desc:'Libertou Israel dos midianitas com apenas 300 guerreiros usando tochas e jarras. Criou um éfode idólatra.',eventos:['Deus reduziu seu exército de 32.000 para 300','Venceu os midianitas com tochas, jarras e clarim','Recusou ser rei','Criou um éfode que virou armadilha idólatra'],profetas:[],ref:'Juízes 6–8'},
  {id:'abimeleque',nome:'Abimeleque',tipo:'juiz',year:-1127,mag:1.4,datas:'~1129–1126 a.C.',anos:3,tribo:'Manassés',eval:'mau',confianca:'debatida',
   desc:'Usurpador que matou 70 meios-irmãos. Não foi enviado por Deus.',eventos:['Matou 70 meios-irmãos sobre uma pedra','Incendiou a torre de Siquém matando 1.000','Morreu por uma pedra de moinho lançada por uma mulher'],profetas:[],ref:'Juízes 9'},
  {id:'tola',nome:'Tolá',tipo:'juiz',year:-1114,mag:1.2,datas:'~1126–1103 a.C.',anos:23,tribo:'Issacar',eval:'bom',confianca:'debatida',
   desc:'Viveu no monte Efraim e julgou Israel por 23 anos.',eventos:['Julgou Israel 23 anos em Samir'],profetas:[],ref:'Juízes 10:1–2'},
  {id:'jair',nome:'Jair',tipo:'juiz',year:-1092,mag:1.3,datas:'~1103–1081 a.C.',anos:22,tribo:'Gileade',eval:'bom',confianca:'debatida',
   desc:'Gileadita com 30 filhos que governavam 30 cidades — Havote-Jair.',eventos:['30 filhos governavam 30 cidades','Julgou Israel por 22 anos'],profetas:[],ref:'Juízes 10:3–5'},
  {id:'jefte',nome:'Jefté',tipo:'juiz',year:-1078,mag:1.9,datas:'~1081–1075 a.C.',anos:6,tribo:'Gad',eval:'misto',confianca:'debatida',
   desc:'Filho de prostituta expulso pelos irmãos. Fez um voto trágico que custou sua filha.',eventos:['Os anciãos o chamaram de volta para liderar','Fez voto imprudente antes da batalha','Venceu os amonitas','Citado em Hebreus 11 como herói da fé'],profetas:[],ref:'Juízes 11–12'},
  {id:'ibsao',nome:'Ibsão',tipo:'juiz',year:-1071,mag:1.1,datas:'~1075–1068 a.C.',anos:7,tribo:'Judá',eval:'bom',confianca:'debatida',
   desc:'De Belém. Tinha 30 filhos e 30 filhas.',eventos:['Casou os 60 filhos fora de seu clã','Julgou Israel 7 anos'],profetas:[],ref:'Juízes 12:8–10'},
  {id:'elom',nome:'Elom',tipo:'juiz',year:-1063,mag:1.1,datas:'~1068–1058 a.C.',anos:10,tribo:'Zebulom',eval:'bom',confianca:'debatida',
   desc:'Da tribo de Zebulom. Julgou Israel 10 anos.',eventos:['Julgou Israel 10 anos','Sepultado em Aialom'],profetas:[],ref:'Juízes 12:11–12'},
  {id:'abdom',nome:'Abdom',tipo:'juiz',year:-1054,mag:1.1,datas:'~1058–1050 a.C.',anos:8,tribo:'Efraim',eval:'bom',confianca:'debatida',
   desc:'De Pirarom. Tinha 40 filhos e 30 netos.',eventos:['70 descendentes montavam 70 jumentos','Julgou Israel 8 anos'],profetas:[],ref:'Juízes 12:13–15'},
  {id:'sansao',nome:'Sansão',tipo:'juiz',year:-1065,mag:2.3,datas:'~1075–1055 a.C.',anos:20,tribo:'Dã',eval:'misto',confianca:'debatida',
   desc:'Nazireno com força sobrenatural ligada ao cabelo. Traído por Dalila, derrubou o templo de Dagom em seu último ato.',eventos:['Nazireno: cabelo não cortado era sinal de consagração','Matou 1.000 filisteus com um maxilar de jumento','Traído por Dalila, foi cegado','Derrubou o templo de Dagom matando mais na morte que em vida'],profetas:[],ref:'Juízes 13–16'},
  {id:'eli',nome:'Eli',tipo:'juiz',year:-1087,mag:1.5,datas:'~1107–1067 a.C.',anos:40,tribo:'Levi',eval:'misto',confianca:'debatida',
   desc:'Sumo Sacerdote em Siló por 40 anos. Falhou em disciplinar os filhos corruptos.',eventos:['Sumo sacerdote em Siló','Filhos Hofni e Finéias eram corruptos','Recebeu o jovem Samuel no templo','Morreu ao ouvir que a Arca foi tomada'],profetas:['Samuel'],ref:'1 Samuel 1–4'},
  {id:'samuel',nome:'Samuel',tipo:'juiz',year:-1038,mag:2.6,datas:'~1067–1010 a.C.',anos:57,tribo:'Levi',eval:'bom',confianca:'aproximada',
   desc:'Último dos juízes e primeiro dos profetas. Ungiu tanto Saul quanto Davi como reis.',eventos:['O Senhor o chamou três vezes à noite','Ungiu Saul como primeiro rei','Confrontou Saul pela desobediência','Ungiu Davi secretamente em Belém'],profetas:[],ref:'1 Samuel 1–25'},
];

const UNIDO=[
  {id:'saul',nome:'Saul',tipo:'rei',reino:'unido',year:-1030,mag:2.5,datas:'~1050–1010 a.C.',anos:40,tribo:'Benjamim',eval:'misto',confianca:'aproximada',
   desc:'Primeiro rei de Israel. Começou promissor mas caiu em desobediência e ciúme de Davi.',eventos:['Ungido por Samuel em Mizpá','Desobedeceu em Gilgal','Samuel declarou: "o Senhor rejeitou você como rei"','Atormentado por espírito mau — Davi tocava harpa','Consultou a feiticeira de Endor','Morreu em batalha no monte Gilboa'],profetas:['Samuel','Gade'],ref:'1 Samuel 9–31'},
  {id:'davi',nome:'Davi',tipo:'rei',reino:'unido',year:-990,mag:3.0,datas:'~1010–970 a.C.',anos:40,tribo:'Judá',eval:'bom',confianca:'aproximada',
   desc:'O maior rei de Israel. Matou Golias, unificou as 12 tribos e com ele Deus fez uma aliança eterna.',eventos:['Matou Golias com uma funda','Conquistou Jerusalém como capital','Trouxe a Arca para Jerusalém','Deus fez aliança eterna com Davi (2 Sm 7)','Pecou com Bate-Seba — Natã o confrontou','Escreveu grande parte dos Salmos'],profetas:['Natã','Gade'],ref:'1 Samuel 16 – 1 Reis 2'},
  {id:'salomao',nome:'Salomão',tipo:'rei',reino:'unido',year:-950,mag:2.9,datas:'~970–930 a.C.',anos:40,tribo:'Judá',eval:'misto',confianca:'firme',
   desc:'O mais sábio e rico rei de seu tempo. Construiu o Templo. Mas suas mulheres o desviaram para ídolos.',eventos:['Pediu sabedoria a Deus','Construiu o Templo em 7 anos','A Rainha de Sabá veio testá-lo','Escreveu Provérbios, Eclesiastes e Cantares','700 esposas o desviaram para ídolos','O reino se dividiu após sua morte'],profetas:['Natã','Aiás','Ido'],ref:'1 Reis 1–11'},
];

const NORTE=[
  {id:'jeroboao1',nome:'Jeroboão I',tipo:'rei',reino:'norte',year:-920,mag:2.4,datas:'930–910 a.C.',anos:22,eval:'mau',confianca:'firme',contemporaneos:['roboao','abias'],
   desc:'Primeiro rei do Norte. Criou dois bezerros de ouro em Betel e Dã.',eventos:['Aiás rasgou o manto em 12 pedaços — 10 para Jeroboão','Criou 2 bezerros de ouro em Betel e Dã','Instituiu sacerdotes não-levitas'],profetas:['Aiás','Semaías'],ref:'1 Reis 12–14'},
  {id:'nadabe',nome:'Nadabe',tipo:'rei',reino:'norte',year:-909,mag:1.2,datas:'910–909 a.C.',anos:2,eval:'mau',confianca:'firme',contemporaneos:['asa'],
   desc:'Filho de Jeroboão. Assassinado por Baasa.',eventos:['Assassinado por Baasa em cerco de Gibetom','Toda a casa de Jeroboão foi eliminada'],profetas:[],ref:'1 Reis 15:25–31'},
  {id:'baasa',nome:'Baasa',tipo:'rei',reino:'norte',year:-897,mag:1.6,datas:'909–886 a.C.',anos:24,eval:'mau',confianca:'firme',contemporaneos:['asa'],
   desc:'Eliminou toda a casa de Jeroboão, mas cometeu os mesmos pecados.',eventos:['Exterminou a casa de Jeroboão','Guerreou contra Judá','Condenado pelo profeta Jeú filho de Hanani'],profetas:['Jeú f. de Hanani'],ref:'1 Reis 15:27–16:7'},
  {id:'ela',nome:'Elá',tipo:'rei',reino:'norte',year:-885,mag:1.1,datas:'886–885 a.C.',anos:2,eval:'mau',confianca:'firme',contemporaneos:['asa'],
   desc:'Morreu bêbado. Assassinado por Zinri.',eventos:['Assassinado por Zinri enquanto bebia','Toda a casa de Baasa foi eliminada'],profetas:[],ref:'1 Reis 16:8–14'},
  {id:'zinri',nome:'Zinri',tipo:'rei',reino:'norte',year:-885,mag:1.3,datas:'885 a.C. · 7 dias',anos:0,eval:'mau',confianca:'firme',contemporaneos:['asa'],
   desc:'O reinado mais curto da Bíblia: 7 dias. Incendiou o palácio sobre si mesmo.',eventos:['Reinou apenas 7 dias','Cercado por Onri','Incendiou o palácio sobre si mesmo'],profetas:[],ref:'1 Reis 16:15–20'},
  {id:'onri',nome:'Onri',tipo:'rei',reino:'norte',year:-879,mag:2.0,datas:'885–874 a.C.',anos:12,eval:'mau',confianca:'firme',contemporaneos:['asa'],
   desc:'Fundou Samaria como capital. Assírios chamaram Israel de "Casa de Onri" por séculos.',eventos:['Comprou o monte Samaria — nova capital','Aliança com Fenícia: Acabe casou com Jezabel','Superou todos os anteriores em maldade'],profetas:[],ref:'1 Reis 16:21–28'},
  {id:'acabe',nome:'Acabe',tipo:'rei',reino:'norte',year:-863,mag:2.8,datas:'874–853 a.C.',anos:22,eval:'mau',confianca:'firme',contemporaneos:['asa','josafa'],
   desc:'O rei mais infame do Norte. Casou com Jezabel que trouxe o culto a Baal. Elias o confrontou.',eventos:['Casou com Jezabel de Sidom','Templo de Baal em Samaria','Elias profetizou 3 anos de seca','Elias vs 450 profetas de Baal no Carmelo — fogo do céu','Jezabel matou Nabote pela vinha','Morreu por uma flecha aleatória'],profetas:['Elias','Eliseu','Micaías'],ref:'1 Reis 16:29–22:40'},
  {id:'ocozias_n',nome:'Ocozias',tipo:'rei',reino:'norte',year:-852,mag:1.3,datas:'853–852 a.C.',anos:2,eval:'mau',confianca:'firme',contemporaneos:['josafa'],
   desc:'Caiu de uma janela e consultou Baal-Zebube. Elias profetizou sua morte.',eventos:['Caiu pela grade de uma janela','Consultou Baal-Zebube','Elias: "Não há Deus em Israel?"'],profetas:['Elias'],ref:'1 Reis 22:51–2 Reis 1'},
  {id:'jorao_n',nome:'Jorão',tipo:'rei',reino:'norte',year:-846,mag:1.7,datas:'852–841 a.C.',anos:12,eval:'mau',confianca:'firme',contemporaneos:['josafa','jeorão_s','ocozias_s'],
   desc:'Removeu o pilar de Baal mas manteve os bezerros. Eliseu fez milagres. Morto por Jeú.',eventos:['Removeu o pilar de Baal','Eliseu curou Naamã da lepra','Eliseu revelou planos secretos sírios','Morto por Jeú — profecia sobre Acabe cumprida'],profetas:['Eliseu'],ref:'2 Reis 3–9'},
  {id:'jeu',nome:'Jeú',tipo:'rei',reino:'norte',year:-827,mag:2.3,datas:'841–814 a.C.',anos:28,eval:'misto',confianca:'firme',contemporaneos:['atalia','joas_s'],
   desc:'Ungido para exterminar a casa de Acabe. Eliminou Baal mas manteve os bezerros.',eventos:['"Dirige como Jeú" — condução furiosa','Matou Jorão no campo de Nabote','Jezabel jogada da janela — cães a comeram','Matou os 70 filhos de Acabe','Transformou o templo de Baal em latrina'],profetas:['Eliseu'],ref:'2 Reis 9–10'},
  {id:'jeoacaz',nome:'Jeoacaz',tipo:'rei',reino:'norte',year:-806,mag:1.3,datas:'814–798 a.C.',anos:17,eval:'mau',confianca:'firme',contemporaneos:['joas_s'],
   desc:'Israel oprimido pelos sírios. Exército reduzido a 50 cavaleiros.',eventos:['Oprimido por Hazael da Síria','Exército reduzido a 50 cavaleiros e 10 carros'],profetas:[],ref:'2 Reis 13:1–9'},
  {id:'jeoas_n',nome:'Jeoás',tipo:'rei',reino:'norte',year:-790,mag:1.6,datas:'798–782 a.C.',anos:16,eval:'mau',confianca:'firme',contemporaneos:['joas_s','amazias'],
   desc:'Visitou Eliseu moribundo. Recebeu profecia de 3 vitórias sobre a Síria.',eventos:['Chorou sobre Eliseu moribundo','Atirou flechas 3 vezes — 3 vitórias','Derrotou Amazias de Judá e saqueou Jerusalém'],profetas:['Eliseu'],ref:'2 Reis 13:10–14:16'},
  {id:'jeroboao2',nome:'Jeroboão II',tipo:'rei',reino:'norte',year:-773,mag:2.4,datas:'793–753 a.C.',anos:41,eval:'mau',confianca:'firme',contemporaneos:['amazias','uzias'],
   desc:'Reinado mais longo do Norte (41 anos). Grande prosperidade mas injustiça social extrema.',eventos:['Reinado mais longo do Norte','Restaurou as fronteiras de Israel','Grande prosperidade econômica','Injustiça social — Amós profetizou contra'],profetas:['Amós','Oséias','Jonas'],ref:'2 Reis 14:23–29'},
  {id:'zacarias',nome:'Zacarias',tipo:'rei',reino:'norte',year:-752,mag:1.1,datas:'753–752 a.C.',anos:1,eval:'mau',confianca:'firme',contemporaneos:['uzias'],
   desc:'Apenas 6 meses. Assassinado por Salum — fim da dinastia de Jeú.',eventos:['Assassinado por Salum','Encerrou a dinastia de Jeú (4 gerações)'],profetas:['Amós','Oséias'],ref:'2 Reis 15:8–12'},
  {id:'salum',nome:'Salum',tipo:'rei',reino:'norte',year:-752,mag:1.0,datas:'752 a.C. · 1 mês',anos:0,eval:'mau',confianca:'firme',contemporaneos:['uzias'],
   desc:'Reinou apenas um mês. Assassinado por Menaém.',eventos:['Reinou 1 mês','Assassinado por Menaém'],profetas:[],ref:'2 Reis 15:13–15'},
  {id:'menaem',nome:'Menaém',tipo:'rei',reino:'norte',year:-747,mag:1.5,datas:'752–742 a.C.',anos:10,eval:'mau',confianca:'firme',contemporaneos:['uzias'],
   desc:'Brutal. Pagou tributo pesado à Assíria.',eventos:['Atacou Tifsa brutalmente','Pagou 1.000 talentos de prata à Assíria'],profetas:['Oséias'],ref:'2 Reis 15:16–22'},
  {id:'pecaia',nome:'Pecaías',tipo:'rei',reino:'norte',year:-741,mag:1.1,datas:'742–740 a.C.',anos:2,eval:'mau',confianca:'firme',contemporaneos:['uzias','jotao'],
   desc:'Assassinado pelo oficial Peca.',eventos:['Assassinado por seu oficial Peca'],profetas:['Oséias'],ref:'2 Reis 15:23–26'},
  {id:'peca',nome:'Peca',tipo:'rei',reino:'norte',year:-742,mag:1.7,datas:'752–732 a.C.',anos:20,eval:'mau',confianca:'debatida',contemporaneos:['jotao','acaz'],
   desc:'Aliou-se com a Síria contra Judá. Isaías profetizou Emanuel nesse contexto.',eventos:['Aliou-se com Rezim contra Judá','Isaías profetizou Emanuel a Acaz (Is 7)','Tiglate-Pileser deportou parte de Israel'],profetas:['Oséias','Isaías'],ref:'2 Reis 15:27–31'},
  {id:'oseias_r',nome:'Oséias (rei)',tipo:'rei',reino:'norte',year:-727,mag:2.0,datas:'732–722 a.C.',anos:9,eval:'mau',confianca:'firme',contemporaneos:['acaz','ezequias'],
   desc:'Último rei do Norte. Samaria caiu em 722 a.C. — fim de Israel.',eventos:['Tentou aliança secreta com o Egito','Samaria sitiada 3 anos','722 a.C.: Sargão II deportou as 10 tribos','Fim do Norte após 209 anos'],profetas:['Oséias','Miquéias'],ref:'2 Reis 17'},
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
