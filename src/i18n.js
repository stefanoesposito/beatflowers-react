import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

const userLang = navigator.language || navigator.languages[0]
const mainLanguage = userLang.split('-')[0]

const resources = {
    'en': {
        translation: {
            'letsBegin': 'Let\'s begin',
            'Follow': 'Follow',
            'aBeatlesCoverTrioTitle': 'A Beatles Cover Trio with a Unique Sound',
            'aBeatlesCoverTrioDescription': 'Beat FlowerS is a Beatlemania acoustic trio based in Naples, Italy. They play the songs of the legendary band with a unique twist - using guitar, cello and minimal drums to create a sound that is both familiar and fresh.',
            'whoTheyAre': 'Who they are',
            'whoTheyAreDescription': 'The trio consists of Patrizio Buonaiuto on vocals and minimal drums, Marco Di Palo on cello and vocals, and Stefano Esposito on acoustic guitar and vocals. Together, they have created a sound that is truly their own.',
            'aUniqueTitle': 'A Unique Live Experience',
            'beatlesImpressionists': 'The Impressionists of the Beatles',
            'aUniqueDescription': 'What sets Beat FlowerS apart from other Beatles cover bands is their use of cello in their arrangements. This adds a depth and richness to the music that is not often heard in traditional rock bands. Their minimal use of drums also allows the vocals and instruments to shine through, creating a stripped-down sound that is both intimate and powerful. If you\'re a fan of The Beatles and are looking for a new take on their classic songs, then Beat FlowerS is definitely worth checking out!',
            'meetTheBand': 'Meet the Band',
            'hireUs': 'Hire us!',
            'yourAmazingLiveExperience': 'Your amazing live experience with us!',
            'upcomingLiveDates': 'Upcoming live dates',
            'Date': 'Date',
            'Location': 'Venue',
            'Links': 'Links',
            'Start': 'Start:',
            'PastGigs': 'Past live gigs',
            'Tonight': 'Tonight',
            'noFutureEventsSoFar': 'No future events… so far! :)',
            'Install': 'Install',
            menu: {
                'Home': 'Home',
                'About': 'About',
                'Band': 'Band',
                'Live': 'Live',
                'Videos': 'Videos',
                'Contacts': 'Contacts'
            },
            band: {
                'Name': 'Name:',
                'Instrument': 'Instrument:',
                'InstrumentPat': 'Vocals, Minimal Drums',
                'InstrumentMarco': 'Cello and Vocals',
                'InstrumentStefano': 'Acustic Guitar and Vocals',
            },
            cookieStrip: {
                'Text': 'This website uses cookies to enhance the user experience.',
                'Decline': 'I decline',
                'OK': 'OK'
            },
            whatsApp: {
                "helloThere": "Hello there! 🤝 \nHow can I help?",
                "repliesWithinHour": "Typically replies within 1 hour",
                "typeAMessage": "Type a message…",
            },
        },
    },
    'it': {
        translation: {
            'letsBegin': 'Cominciamo',
            'Follow': 'Seguici',
            'aBeatlesCoverTrioTitle': 'Un tributo ai Beatles con un sound unico',
            'aBeatlesCoverTrioDescription': 'I Beat FlowerS sono un trio acustico che rende omaggio ai Beatles. Hanno sede a Napoli, e suonano le canzoni della leggendaria band con un tocco unico - con chitarra, violoncello e minimal drums per creare un suono intimo ed unico.',
            'whoTheyAre': 'Chi sono',
            'whoTheyAreDescription': 'Il trio è composto da Patrizio Buonaiuto alla voce e minimal drums, Marco Di Palo al violoncello e voce, e Stefano Esposito alla chitarra acustica e voce. Insieme, hanno creato un suono che è veramente il loro.',
            'aUniqueTitle': 'Un\'esperienza live unica',
            'beatlesImpressionists': 'Gli Impressionisti dei Beatles',
            'aUniqueDescription': 'Ciò che distingue Beat FlowerS dalle altre band tributo ai Beatles è l\'utilizzo del violoncello nei loro arrangiamenti. Questo conferisce alla musica una profondità e una ricchezza che non si sente spesso nelle tradizionali band rock. Il loro utilizzo minimale della batteria consente inoltre alle voci e agli strumenti di emergere, creando un suono essenziale che è allo stesso tempo intimo e potente. Se sei un fan dei Beatles e stai cercando una nuova interpretazione delle loro canzoni classiche, allora i Beat FlowerS meritano sicuramente di essere ascoltati!',
            'meetTheBand': 'La Band',
            'hireUs': 'Ingaggiaci!',
            'yourAmazingLiveExperience': 'La tua incredibile esperienza live con noi!',
            'upcomingLiveDates': 'Prossime date live',
            'Date': 'Data',
            'Location': 'Location',
            'Links': 'Link',
            'Start': 'Start:',
            'PastGigs': 'Concerti passati',
            'Tonight': 'Stasera',
            'noFutureEventsSoFar': 'Nessun evento futuro... per il momento! :)',
            'Install': 'Installa',
            menu: {
                'Home': 'Home',
                'About': 'About',
                'Band': 'Band',
                'Live': 'Live',
                'Videos': 'Video',
                'Contacts': 'Contatti'
            },
            band: {
                'Name': 'Nome:',
                'Instrument': 'Strumento:',
                'InstrumentPat': 'Voce, Minimal Drums',
                'InstrumentMarco': 'Violoncello e Voce',
                'InstrumentStefano': 'Chitarra Acustica e Voce',
            },
            cookieStrip: {
                'Text': 'Questo sito web utilizza i cookie per migliorare l\'esperienza dell\'utente.',
                'Decline': 'Non accetto',
                'OK': 'OK'
            },
            whatsApp: {
                "helloThere": "Ciao! 🤝 \nCome posso aiutarti?",
                "repliesWithinHour": "Solitamente risponde entro 1 ora",
                "typeAMessage": "Scrivi un messaggio...",
            }
        },
    },
    'fr': {
        translation: {
            'letsBegin': 'Commençons',
            'Follow': 'Suivre',
            'aBeatlesCoverTrioTitle': 'Un trio de reprises des Beatles avec un son unique',
            'aBeatlesCoverTrioDescription': 'Beat FlowerS est un trio acoustique de Beatlemania basé à Naples, en Italie. Ils jouent les chansons du groupe légendaire avec une touche unique - en utilisant la guitare, le violoncelle et une batterie minimale pour créer un son à la fois familier et frais.',
            'whoTheyAre': 'Qui sont-ils',
            'whoTheyAreDescription': 'Le trio se compose de Patrizio Buonaiuto au chant et à la batterie minimale, Marco Di Palo au violoncelle et au chant, et Stefano Esposito à la guitare acoustique et au chant. Ensemble, ils ont créé un son qui leur est propre.',
            'aUniqueTitle': 'Une expérience live unique',
            'beatlesImpressionists': 'Les impressionnistes des Beatles',
            'aUniqueDescription': 'Ce qui distingue Beat FlowerS des autres groupes de reprises des Beatles, c\'est l\'utilisation du violoncelle dans leurs arrangements. Cela ajoute une profondeur et une richesse à la musique que l\'on n\'entend pas souvent dans les groupes de rock traditionnels. Leur utilisation minimale de la batterie permet également aux voix et aux instruments de briller, créant un son épuré à la fois intime et puissant. Si vous êtes fan des Beatles et que vous recherchez une nouvelle interprétation de leurs chansons classiques, alors Beat FlowerS vaut vraiment le détour !',
            'meetTheBand': 'Rencontrez le groupe',
            'hireUs': 'Engagez-nous !',
            'yourAmazingLiveExperience': 'Votre incroyable expérience live avec nous !',
            'upcomingLiveDates': 'Prochaines dates de concert',
            'Date': 'Date',
            'Location': 'Lieu',
            'Links': 'Liens',
            'Start': 'Début:',
            'PastGigs': 'Concerts passés',
            'Tonight': 'Ce soir',
            'noFutureEventsSoFar': 'Aucun événement à venir... pour le moment ! :)',
            'Install': 'Installer',
            menu: {
                'Home': 'Accueil',
                'About': 'À propos',
                'Band': 'Groupe',
                'Live': 'Live',
                'Videos': 'Vidéos',
                'Contacts': 'Contacts'
            },
            band: {
                'Name': 'Nom :',
                'Instrument': 'Instrument :',
                'InstrumentPat': 'Voix, Batterie minimale',
                'InstrumentMarco': 'Violoncelle et Voix',
                'InstrumentStefano': 'Guitare acoustique et Voix',
            },
            cookieStrip: {
                'Text': 'Ce site web utilise des cookies pour améliorer l\'expérience utilisateur.',
                'Decline': 'Je refuse',
                'OK': 'OK'
            },
            whatsApp: {
                "helloThere": "Bonjour ! 🤝 \nComment pouvons-nous vous aider ?",
                "repliesWithinHour": "Réponses habituellement sous 1 heure",
                "typeAMessage": "Écrire un message...",
            }
        },
    },
    'es': {
        translation: {
            'letsBegin': 'Comencemos',
            'Follow': 'Seguir',
            'aBeatlesCoverTrioTitle': 'Un trío de covers de los Beatles con un sonido único',
            'aBeatlesCoverTrioDescription': 'Beat FlowerS es un trío acústico de Beatlemania con sede en Nápoles, Italia. Interpretan las canciones de la legendaria banda con un toque único, utilizando guitarra, violonchelo y batería mínima para crear un sonido que es a la vez familiar y fresco.',
            'whoTheyAre': 'Quiénes son',
            'whoTheyAreDescription': 'El trío está compuesto por Patrizio Buonaiuto en voz y batería mínima, Marco Di Palo en violonchelo y voz, y Stefano Esposito en guitarra acústica y voz. Juntos, han creado un sonido que realmente les pertenece.',
            'aUniqueTitle': 'Una experiencia en vivo única',
            'beatlesImpressionists': 'Los impresionistas de los Beatles',
            'aUniqueDescription': 'Lo que distingue a Beat FlowerS de otras bandas tributo a los Beatles es el uso del violonchelo en sus arreglos. Esto agrega profundidad y riqueza a la música que no se escucha a menudo en las bandas de rock tradicionales. Su uso mínimo de la batería también permite que las voces e instrumentos brillen, creando un sonido despojado que es a la vez íntimo y poderoso. Si eres fan de los Beatles y estás buscando una nueva interpretación de sus canciones clásicas, definitivamente vale la pena ver a Beat FlowerS.',
            'meetTheBand': 'Conoce a la banda',
            'hireUs': 'Contrátanos',
            'yourAmazingLiveExperience': 'Tu increíble experiencia en vivo con nosotros',
            'upcomingLiveDates': 'Próximas fechas en vivo',
            'Date': 'Fecha',
            'Location': 'Ubicación',
            'Links': 'Enlaces',
            'Start': 'Inicio:',
            'PastGigs': 'Conciertos pasados',
            'noFutureEventsSoFar': '¡No hay eventos futuros... por el momento! :)',
            'Install': 'Instalar',
            menu: {
                'Home': 'Inicio',
                'About': 'Nosotros',
                'Band': 'Banda',
                'Live': 'En vivo',
                'Videos': 'Videos',
                'Contacts': 'Contactos'
            },
            band: {
                'Name': 'Nombre:',
                'Instrument': 'Instrumento:',
                'InstrumentPat': 'Voz, Batería Mínima',
                'InstrumentMarco': 'Violonchelo y Voz',
                'InstrumentStefano': 'Guitarra Acústica y Voz',
            },
            cookieStrip: {
                'Text': 'Este sitio web utiliza cookies para mejorar la experiencia del usuario.',
                'Decline': 'No acepto',
                'OK': 'OK'
            },
            whatsApp: {
                "helloThere": "¡Hola! 🤝 \n¿En qué podemos ayudarte?",
                "repliesWithinHour": "Normalmente respondemos en 1 hora",
                "typeAMessage": "Escribe un mensaje...",
            }
        },
    },
    'de': {
        translation: {
            'letsBegin': 'Lass uns anfangen',
            'Follow': 'Folgen',
            'aBeatlesCoverTrioTitle': 'Ein Beatles Cover Trio mit einem einzigartigen Sound',
            'aBeatlesCoverTrioDescription': 'Beat FlowerS ist ein Beatlemania-Akustiktrio mit Sitz in Neapel, Italien. Sie spielen die Songs der legendären Band mit einer einzigartigen Note - unter Verwendung von Gitarre, Cello und minimaler Schlagzeugbegleitung, um einen Sound zu erzeugen, der gleichermaßen vertraut und frisch ist.',
            'whoTheyAre': 'Wer sie sind',
            'whoTheyAreDescription': 'Das Trio besteht aus Patrizio Buonaiuto am Gesang und minimaler Schlagzeugbegleitung, Marco Di Palo am Cello und Gesang und Stefano Esposito an der Akustikgitarre und am Gesang. Gemeinsam haben sie einen Sound geschaffen, der wirklich einzigartig ist.',
            'aUniqueTitle': 'Ein einzigartiges Live-Erlebnis',
            'beatlesImpressionists': 'Die Impressionisten der Beatles',
            'aUniqueDescription': 'Was Beat FlowerS von anderen Beatles-Coverbands unterscheidet, ist der Einsatz des Cellos in ihren Arrangements. Dies verleiht der Musik eine Tiefe und Fülle, die man in traditionellen Rockbands selten hört. Durch den minimalen Einsatz von Schlagzeug kommen auch die Gesangsstimmen und Instrumente besonders gut zur Geltung und schaffen einen reduzierten Sound, der sowohl intim als auch kraftvoll ist. Wenn Sie ein Fan der Beatles sind und eine neue Interpretation ihrer klassischen Songs suchen, dann sollten Sie sich Beat FlowerS auf jeden Fall anhören!',
            'meetTheBand': 'Triff die Band',
            'hireUs': 'Engagiere uns!',
            'yourAmazingLiveExperience': 'Dein fantastisches Live-Erlebnis mit uns!',
            'upcomingLiveDates': 'Kommende Live-Termine',
            'Date': 'Datum',
            'Location': 'Ort',
            'Links': 'Links',
            'Start': 'Start:',
            'PastGigs': 'Vergangene Auftritte',
            'Tonight': 'Heute Abend',
            'noFutureEventsSoFar': 'Keine zukünftigen Veranstaltungen... im Moment! :)',
            'Install': 'Installieren',
            menu: {
                'Home': 'Startseite',
                'About': 'Über uns',
                'Band': 'Band',
                'Live': 'Live',
                'Videos': 'Videos',
                'Contacts': 'Kontakte'
            },
            band: {
                'Name': 'Name:',
                'Instrument': 'Instrument:',
                'InstrumentPat': 'Gesang, Minimales Schlagzeug',
                'InstrumentMarco': 'Cello und Gesang',
                'InstrumentStefano': 'Akustikgitarre und Gesang',
            },
            cookieStrip: {
                'Text': 'Diese Website verwendet Cookies, um das Nutzererlebnis zu verbessern.',
                'Decline': 'Ich lehne ab',
                'OK': 'OK'
            }
        },
    },
    'pt': {
        translation: {
            'letsBegin': 'Vamos começar',
            'Follow': 'Seguir',
            'aBeatlesCoverTrioTitle': 'Um trio cover dos Beatles com um som único',
            'aBeatlesCoverTrioDescription': 'Beat FlowerS é um trio acústico de Beatlemania com base em Nápoles, Itália. Eles tocam as músicas da lendária banda com um toque único - usando guitarra, violoncelo e bateria mínima para criar um som que é ao mesmo tempo familiar e fresco.',
            'whoTheyAre': 'Quem são',
            'whoTheyAreDescription': 'O trio é composto por Patrizio Buonaiuto nos vocais e bateria mínima, Marco Di Palo no violoncelo e vocais, e Stefano Esposito na guitarra acústica e vocais. Juntos, eles criaram um som que é verdadeiramente único.',
            'aUniqueTitle': 'Uma experiência ao vivo única',
            'beatlesImpressionists': 'Os impressionistas dos Beatles',
            'aUniqueDescription': 'O que diferencia o Beat FlowerS de outras bandas cover dos Beatles é o uso do violoncelo em seus arranjos. Isso adiciona profundidade e riqueza à música que não é frequentemente ouvida em bandas de rock tradicionais. Seu uso mínimo de bateria também permite que os vocais e instrumentos se destaquem, criando um som despojado que é ao mesmo tempo íntimo e poderoso. Se você é fã dos Beatles e está procurando uma nova abordagem para suas músicas clássicas, então o Beat FlowerS definitivamente vale a pena conferir!',
            'meetTheBand': 'Conheça a banda',
            'hireUs': 'Contrate-nos!',
            'yourAmazingLiveExperience': 'Sua incrível experiência ao vivo conosco!',
            'upcomingLiveDates': 'Próximas datas ao vivo',
            'Date': 'Data',
            'Location': 'Localização',
            'Links': 'Links',
            'Start': 'Início:',
            'PastGigs': 'Shows passados',
            'Tonight': 'Hoje à noite',
            'noFutureEventsSoFar': 'Nenhum evento futuro... por enquanto! :)',
            'Install': 'Instalar',
            menu: {
                'Home': 'Início',
                'About': 'Sobre',
                'Band': 'Banda',
                'Live': 'Ao vivo',
                'Videos': 'Vídeos',
                'Contacts': 'Contatos'
            },
            band: {
                'Name': 'Nome:',
                'Instrument': 'Instrumento:',
                'InstrumentPat': 'Vocais, Bateria Mínima',
                'InstrumentMarco': 'Violoncelo e Vocais',
                'InstrumentStefano': 'Violão Acústico e Vocais',
            },
            cookieStrip: {
                'Text': 'Este site usa cookies para aprimorar a experiência do usuário.',
                'Decline': 'Não aceito',
                'OK': 'OK'
            }
        },
    },
    'ja': {
        translation: {
            'letsBegin': '始めましょう',
            'Follow': 'フォロー',
            'aBeatlesCoverTrioTitle': 'ユニークなサウンドを持つビートルズカバートリオ',
            'aBeatlesCoverTrioDescription': 'Beat FlowerSはイタリア・ナポリを拠点としたビートルマニアのアコースティックトリオです。彼らは伝説のバンドの曲を、ギター、チェロ、最小限のドラムを使って独自のアレンジで演奏し、なじみ深さと新鮮さを兼ね備えたサウンドを生み出しています。',
            'whoTheyAre': '彼らは誰か',
            'whoTheyAreDescription': 'このトリオは、パトリツィオ・ブオナイウトがボーカルと最小限のドラムを担当し、マルコ・ディ・パロがチェロとボーカル、ステファノ・エスポジートがアコースティックギターとボーカルを担当しています。彼らは一緒に独自のサウンドを作り出しています。',
            'aUniqueTitle': 'ユニークなライブ体験',
            'beatlesImpressionists': 'ビートルズの印象派',
            'aUniqueDescription': 'Beat FlowerSが他のビートルズカバーバンドと異なるのは、彼らがアレンジにチェロを使用していることです。これにより、伝統的なロックバンドではあまり聞かれない音楽に奥行きと豊かさが加わります。彼らの最小限のドラムの使用は、ボーカルと楽器が際立つことを可能にし、親密で力強いストリップダウンサウンドを生み出します。もしもあなたがビートルズのファンで、彼らのクラシックな曲に新たなアプローチを探しているなら、Beat FlowerSをぜひチェックしてみてください！',
            'meetTheBand': 'バンドに会おう',
            'hireUs': '私たちを雇ってください！',
            'yourAmazingLiveExperience': '私たちとの素晴らしいライブ体験！',
            'upcomingLiveDates': '今後のライブ日程',
            'Date': '日付',
            'Location': '場所',
            'Links': 'リンク',
            'Start': 'スタート:',
            'PastGigs': '過去のライブ',
            'Tonight': '今夜',
            'noFutureEventsSoFar': '将来のイベントはありません... とりあえず！ :)',
            'Install': 'インストールする',
            menu: {
                'Home': 'ホーム',
                'About': 'について',
                'Band': 'バンド',
                'Live': 'ライブ',
                'Videos': 'ビデオ',
                'Contacts': 'コンタクト'
            },
            band: {
                'Name': '名前：',
                'Instrument': '楽器：',
                'InstrumentPat': 'ボーカル、最小限のドラム',
                'InstrumentMarco': 'チェロとボーカル',
                'InstrumentStefano': 'アコースティックギターとボーカル',
            },
            cookieStrip: {
                'Text': 'このウェブサイトでは、利用者の体験を向上するためにクッキーを使用しています。',
                'Decline': '辞退する',
                'OK': 'OK'
            },
        },
    },
    'sv': {
        translation: {
            'letsBegin': 'Låt oss börja',
            'Follow': 'Följ',
            'aBeatlesCoverTrioTitle': 'En Beatles Cover Trio med en unik ljudbild',
            'aBeatlesCoverTrioDescription': 'Beat FlowerS är en Beatlemania akustisk trio baserad i Neapel, Italien. De spelar låtarna från det legendariska bandet med en unik twist - de använder gitarr, cello och minimalt med trummor för att skapa en ljudbild som både är bekant och fräsch.',
            'whoTheyAre': 'Vem de är',
            'whoTheyAreDescription': 'Trion består av Patrizio Buonaiuto på sång och minimala trummor, Marco Di Palo på cello och sång, och Stefano Esposito på akustisk gitarr och sång. Tillsammans har de skapat en ljudbild som verkligen är deras egen.',
            'aUniqueTitle': 'En unik liveupplevelse',
            'beatlesImpressionists': 'Impressionisterna av Beatles',
            'aUniqueDescription': 'Det som skiljer Beat FlowerS från andra Beatles-coverband är deras användning av cello i sina arrangemang. Detta ger en djup och fyllighet till musiken som sällan hörs i traditionella rockband. Deras minimala användning av trummor låter även sången och instrumenten lysa igenom och skapar en avskalad ljudbild som både är intim och kraftfull. Om du är en fan av The Beatles och letar efter en ny tolkning av deras klassiska låtar är Beat FlowerS definitivt värt att kolla in!',
            'meetTheBand': 'Träffa bandet',
            'hireUs': 'Anlita oss!',
            'yourAmazingLiveExperience': 'Din fantastiska liveupplevelse med oss!',
            'upcomingLiveDates': 'Kommande spelningar',
            'Date': 'Datum',
            'Location': 'Plats',
            'Links': 'Länkar',
            'Start': 'Start:',
            'PastGigs': 'Tidigare spelningar',
            'Tonight': 'Ikväll',
            'noFutureEventsSoFar': 'Inga framtida evenemang... för tillfället! :)',
            'Install': 'Installera',
            menu: {
                'Home': 'Hem',
                'About': 'Om oss',
                'Band': 'Band',
                'Live': 'Live',
                'Videos': 'Videor',
                'Contacts': 'Kontakt',
            },
            band: {
                'Name': 'Namn:',
                'Instrument': 'Instrument:',
                'InstrumentPat': 'Sång, minimala trummor',
                'InstrumentMarco': 'Cello och sång',
                'InstrumentStefano': 'Akustisk gitarr och sång',
            },
            cookieStrip: {
                'Text': 'Denna webbplats använder cookies för att förbättra användarupplevelsen.',
                'Decline': 'Jag avböjer',
                'OK': 'OK'
            }


        }
    },
    'cs': {
        translation: {
            'letsBegin': 'Začněme',
            'Follow': 'Sledovat',
            'aBeatlesCoverTrioTitle': 'Trio coverů Beatles s unikátním zvukem',
            'aBeatlesCoverTrioDescription': 'Beat FlowerS je akustické trio Beatlemanie se sídlem v Neapoli, Itálie. Hrají písně legendární kapely s unikátním překvapením - používají kytaru, violoncello a minimální bicí nástroje pro vytvoření zvuku, který je zároveň povědomý a svěží.',
            'whoTheyAre': 'Kdo jsou',
            'whoTheyAreDescription': 'Trio se skládá z Patrizia Buonaiuta na vokálech a minimálních bicích nástrojích, Marca Di Pala na violoncellu a vokálech a Stefana Esposita na akustické kytarě a vokálech. Společně vytvořili zvuk, který je opravdu jejich vlastní.',
            'aUniqueTitle': 'Jedinečný živý zážitek',
            'beatlesImpressionists': 'Impresionisté Beatles',
            'aUniqueDescription': 'To, co odlišuje Beat FlowerS od ostatních cover kapel Beatles, je jejich použití violoncella ve svých aranžmá. To přidává hudbě hloubku a bohatství, které často nelze slyšet v tradičních rockových kapelách. Jejich minimální použití bicích nástrojů také umožňuje zpěvům a nástrojům zazářit, vytvářející střídmý zvuk, který je zároveň intimní a silný. Pokud jste fanouškem Beatles a hledáte novou interpretaci jejich klasických písní, pak určitě stojí za to si Beat FlowerS poslechnout!',
            'meetTheBand': 'Potkejte kapelu',
            'hireUs': 'Najměte nás!',
            'yourAmazingLiveExperience': 'Vaše úžasný živý zážitek s námi!',
            'upcomingLiveDates': 'Nadcházející živé koncerty',
            'Date': 'Datum',
            'Location': 'Místo',
            'Links': 'Odkazy',
            'Start': 'Začátek:',
            'PastGigs': 'Předchozí živé koncerty',
            'Tonight': 'Dnes večer',
            'noFutureEventsSoFar': 'Žádné budoucí události... prozatím! :)',
            'Install': 'Instalovat',
            menu: {
                'Home': 'Domů',
                'About': 'O nás',
                'Band': 'Kapela',
                'Live': 'Živě',
                'Videos': 'Videa',
                'Contacts': 'Kontakty'
            },
            band: {
                'Name': 'Jméno:',
                'Instrument': 'Nástroj:',
                'InstrumentPat': 'Vokály, Minimální bicí nástroje',
                'InstrumentMarco': 'Violoncello a Vokály',
                'InstrumentStefano': 'Akustická kytara a Vokály'
            },
            cookieStrip: {
                'Text': 'Tato webová stránka používá soubory cookie ke zlepšení uživatelského zážitku.',
                'Decline': 'Nesouhlasím',
                'OK': 'OK'
            }
        }
    },
    'nl': {
        translation: {
            'letsBegin': 'Laten we beginnen',
            'Follow': 'Volgen',
            'aBeatlesCoverTrioTitle': 'Een Beatles Cover Trio met een Uniek Geluid',
            'aBeatlesCoverTrioDescription': 'Beat FlowerS is een akoestisch trio uit Napels, Italië, dat zich toelegt op Beatlemania. Ze spelen de nummers van de legendarische band met een unieke twist - gebruikmakend van gitaar, cello en minimale drums om een geluid te creëren dat zowel vertrouwd als fris is.',
            'whoTheyAre': 'Wie ze zijn',
            'whoTheyAreDescription': 'Het trio bestaat uit Patrizio Buonaiuto op zang en minimale drums, Marco Di Palo op cello en zang, en Stefano Esposito op akoestische gitaar en zang. Samen hebben ze een geluid gecreëerd dat echt van henzelf is.',
            'aUniqueTitle': 'Een Unieke Live-ervaring',
            'beatlesImpressionists': 'De impressionisten van de Beatles',
            'aUniqueDescription': 'Wat Beat FlowerS onderscheidt van andere Beatles coverbands is het gebruik van cello in hun arrangementen. Dit voegt diepte en rijkdom toe aan de muziek die niet vaak te horen is in traditionele rockbands. Hun minimale gebruik van drums laat ook de zang en instrumenten schitteren, waardoor een ingetogen geluid ontstaat dat zowel intiem als krachtig is. Als je een fan bent van The Beatles en op zoek bent naar een nieuwe interpretatie van hun klassieke nummers, dan is Beat FlowerS zeker het ontdekken waard!',
            'meetTheBand': 'Ontmoet de Band',
            'hireUs': 'Huur ons in!',
            'yourAmazingLiveExperience': 'Jouw geweldige live-ervaring met ons!',
            'upcomingLiveDates': 'Komende live-data',
            'Date': 'Datum',
            'Location': 'Locatie',
            'Links': 'Links',
            'Start': 'Start:',
            'PastGigs': 'Vorige live-optredens',
            'Tonight': 'Vanavond',
            'noFutureEventsSoFar': 'Geen toekomstige evenementen... op dit moment! :)',
            'Install': 'Installeren',
            menu: {
                'Home': 'Home',
                'About': 'Over',
                'Band': 'Band',
                'Live': 'Live',
                'Videos': 'Video\'s',
                'Contacts': 'Contacten'
            },
            band: {
                'Name': 'Naam:',
                'Instrument': 'Instrument:',
                'InstrumentPat': 'Zang, Minimale Drums',
                'InstrumentMarco': 'Cello en Zang',
                'InstrumentStefano': 'Akoestische Gitaar en Zang'
            },
            cookieStrip: {
                'Text': 'Deze website maakt gebruik van cookies om de gebruikerservaring te verbeteren.',
                'Decline': 'Ik weiger',
                'OK': 'OK'
            }
        }
    },
    'pl': {
        translation: {
            'letsBegin': 'Zaczynajmy',
            'Follow': 'Obserwuj',
            'aBeatlesCoverTrioTitle': 'Trio coverowe zespołu Beatles o unikalnym brzmieniu',
            'aBeatlesCoverTrioDescription': 'Beat FlowerS to akustyczne trio Beatlemanii z siedzibą w Neapolu we Włoszech. Grają piosenki legendarnego zespołu w niepowtarzalny sposób - wykorzystując gitarę, wiolonczelę i minimalne perkusjonalia, tworzą dźwięk, który jest zarówno znajomy, jak i świeży.',
            'whoTheyAre': 'Kim są',
            'whoTheyAreDescription': 'Trio składa się z Patrizio Buonaiuto - wokal i minimalne perkusjonalia, Marco Di Palo - wiolonczela i wokal oraz Stefano Esposito - gitara akustyczna i wokal. Razem stworzyli dźwięk, który jest prawdziwie ich własny.',
            'aUniqueTitle': 'Niezwykłe doświadczenie na żywo',
            'beatlesImpressionists': 'Impresjoniści Beatlesów',
            'aUniqueDescription': 'To, co wyróżnia Beat FlowerS spośród innych zespołów coverowych Beatles, to wykorzystanie wiolonczeli w swoich aranżacjach. Dodaje to głębi i bogactwa muzycznego, które rzadko słychać w tradycyjnych zespołach rockowych. Minimalne użycie perkusji pozwala również na wyeksponowanie wokalu i instrumentów, tworząc prosty, intymny i potężny dźwięk. Jeśli jesteś fanem The Beatles i szukasz nowej interpretacji ich klasycznych utworów, to koniecznie sprawdź Beat FlowerS!',
            'meetTheBand': 'Poznaj zespół',
            'hireUs': 'Zatrudnij nas!',
            'yourAmazingLiveExperience': 'Twoje niesamowite wrażenia na żywo z nami!',
            'upcomingLiveDates': 'Nadchodzące koncerty',
            'Date': 'Data',
            'Location': 'Lokalizacja',
            'Links': 'Linki',
            'Start': 'Początek:',
            'PastGigs': 'Poprzednie koncerty',
            'Tonight': 'Dziś wieczorem',
            'noFutureEventsSoFar': 'Brak przyszłych wydarzeń... na razie! :)',
            'Install': 'Instalować',
            menu: {
                'Home': 'Strona główna',
                'About': 'O nas',
                'Band': 'Zespół',
                'Live': 'Koncerty',
                'Videos': 'Filmy',
                'Contacts': 'Kontakt'
            },
            band: {
                'Name': 'Imię:',
                'Instrument': 'Instrument:',
                'InstrumentPat': 'Wokal, Minimalne perkusjonalia',
                'InstrumentMarco': 'Wiolonczela i Wokal',
                'InstrumentStefano': 'Gitara akustyczna i Wokal',
            },
            cookieStrip: {
                'Text': 'Ta witryna używa plików cookie w celu ulepszenia doświadczenia użytkownika.',
                'Decline': 'Odmawiam',
                'OK': 'OK'
            }


        },
    },
    'hi': {
        translation: {
            'letsBegin': 'चलो शुरू करें',
            'Follow': 'फ़ॉलो करें',
            'aBeatlesCoverTrioTitle': 'एक बीटल्स कवर त्रयी जिसमें एक अद्वितीय ध्वनि है',
            'aBeatlesCoverTrioDescription': 'बीट फ्लावर्स एक नापोली, इटली में स्थित बीटलमेनिया एकूस्टिक त्रयी है। वे मशहूर बैंड के गाने एक अद्वितीय अंदाज में बजाते हैं - गिटार, चेलो और कम ड्रम्स का उपयोग करके एक ऐसी ध्वनि बनाते हैं जो परिचित और ताजगी से भरी होती है।',
            'whoTheyAre': 'वे कौन हैं',
            'whoTheyAreDescription': 'त्रयी में पैट्रिजियो बुएनाइटो गायन और कम ड्रम्स, मार्को दी पालो चेलो और गायन, और स्टेफानो एस्पोजितो एकूस्टिक गिटार और गायन पर हैं। इसके साथ, वे एक ऐसी ध्वनि बनाए हैं जो सचमुच खुद की है।',
            'aUniqueTitle': 'एक अद्वितीय लाइव अनुभव',
            'beatlesImpressionists': 'बीटल्स के इम्प्रेशनिस्ट',
            'aUniqueDescription': 'बीट फ्लावर्स को अन्य बीटल्स कवर बैंड से अलग बनाता है उनके इंटरवेंशन में चेलो का उपयोग। यह ध्वनि में एक गहराह और समृद्धि जोड़ता है जो पारंपरिक रॉक बैंड में अक्सर नहीं सुनी जाती है। उनके कम ड्रम्स का उपयोग भी अवाज और वाद्ययंत्रों को बहार आने देता है, जो एक निर्मल और शक्तिशाली ध्वनि बनाता है। यदि आप बीटल्स के प्रशंसक हैं और उनके क्लासिक गानों का एक नया रूप देख रहे हैं, तो बीट फ्लावर्स को जरूर देखने योग्य माना जाता है!',
            'meetTheBand': 'बैंड से मिलें',
            'hireUs': 'हमें किराए पर लें!',
            'yourAmazingLiveExperience': 'हमारे साथ आपका अद्भुत लाइव अनुभव!',
            'upcomingLiveDates': 'आगामी लाइव तिथियाँ',
            'Date': 'तारीख',
            'Location': 'स्थान',
            'Links': 'लिंक',
            'Start': 'शुरू:',
            'PastGigs': 'पिछले लाइव गिग्स',
            'Tonight': 'आज रात',
            'noFutureEventsSoFar': 'कोई भविष्य की घटना नहीं... अभी के लिए! :)',
            'Install': 'स्थापित करें',
            menu: {
                'Home': 'होम',
                'About': 'हमारे बारे में',
                'Band': 'बैंड',
                'Live': 'लाइव',
                'Videos': 'वीडियो',
                'Contacts': 'संपर्क'
            },
            band: {
                'Name': 'नाम:',
                'Instrument': 'उपकरण:',
                'InstrumentPat': 'गायन, कम ड्रम्स',
                'InstrumentMarco': 'चेलो और गायन',
                'InstrumentStefano': 'एकूस्टिक गिटार और गायन'
            },
            cookieStrip: {
                'Text': 'इस वेबसाइट को उपयोगकर्ता अनुभव को बेहतर बनाने के लिए कुकीज़ का उपयोग करती है।',
                'Decline': 'मैं इनकार करता हूँ',
                'OK': 'ठीक है'
            }
        }
    },
    'zh': {
        translation: {
            'letsBegin': '让我们开始',
            'Follow': '关注',
            'aBeatlesCoverTrioTitle': '一个独特声音的披头士乐队翻唱三人组',
            'aBeatlesCoverTrioDescription': 'Beat FlowerS 是一个在意大利那不勒斯成立的披头士乐队原声三人组。他们用独特的方式演奏这支传奇乐队的歌曲 - 使用吉他、大提琴和极简鼓点，创造出既熟悉又新鲜的声音。',
            'whoTheyAre': '他们是谁',
            'whoTheyAreDescription': '这个三人组由 Patrizio Buonaiuto 担任主唱和极简鼓点，Marco Di Palo 负责大提琴和人声，Stefano Esposito 负责原声吉他和人声。他们一起创造了一种真正属于自己的声音。',
            'aUniqueTitle': '独特的现场体验',
            'beatlesImpressionists': '披头士的印象派',
            'aUniqueDescription': 'Beat FlowerS 与其他披头士翻唱乐队的不同之处在于他们在编曲中使用大提琴。这为音乐增添了一种深度和丰富性，这在传统摇滚乐队中并不常见。他们极简鼓点的使用也让人声和乐器更加突出，创造了一种既亲密又强大的剥离感声音。如果你是披头士的粉丝，并且正在寻找他们经典歌曲的新演绎，那么 Beat FlowerS 绝对值得一试！',
            'meetTheBand': '见见乐队',
            'hireUs': '聘请我们！',
            'yourAmazingLiveExperience': '与我们一起的惊艳现场体验！',
            'upcomingLiveDates': '即将到来的现场日期',
            'Date': '日期',
            'Location': '场地',
            'Links': '链接',
            'Start': '开始：',
            'PastGigs': '过去的现场演出',
            'Tonight': '今晚',
            'noFutureEventsSoFar': '到目前为止还没有未来的活动！ :)',
            'Install': '安装',
            menu: {
                'Home': '首页',
                'About': '关于',
                'Band': '乐队',
                'Live': '现场',
                'Videos': '视频',
                'Contacts': '联系方式'
            },
            band: {
                'Name': '姓名：',
                'Instrument': '乐器：',
                'InstrumentPat': '人声, 极简鼓点',
                'InstrumentMarco': '大提琴和人声',
                'InstrumentStefano': '原声吉他和人声',
            },
            cookieStrip: {
                'Text': '本网站使用cookie来增强用户体验。',
                'Decline': '我拒绝',
                'OK': '好的'
            },
        },
    },

}


i18n.use(initReactI18next).init({
    resources,
    lng: mainLanguage,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
})

export default i18n
