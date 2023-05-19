import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "letsBegin": "Let's begin",
            "Follow": "Follow",
            "aBeatlesCoverTrioTitle": "A Beatles Cover Trio with a Unique Sound",
            "aBeatlesCoverTrioDescription": "Beat FlowerS is a Beatlemania acoustic trio based in Naples, Italy. They play the songs of the legendary band with a unique twist - using guitar, cello and minimal drums to create a sound that is both familiar and fresh.",
            "whoTheyAre": "Who they are",
            "whoTheyAreDescription": "The trio consists of Patrizio Buonaiuto on vocals and minimal drums, Marco Di Palo on cello and vocals, and Stefano Esposito on acoustic guitar and vocals. Together, they have created a sound that is truly their own.",
            "aUniqueTitle": "A Unique Live Experience",
            "aUniqueDescription": "What sets Beat FlowerS apart from other Beatles cover bands is their use of cello in their arrangements. This adds a depth and richness to the music that is not often heard in traditional rock bands. Their minimal use of drums also allows the vocals and instruments to shine through, creating a stripped-down sound that is both intimate and powerful. If you're a fan of The Beatles and are looking for a new take on their classic songs, then Beat FlowerS is definitely worth checking out!",
            "meetTheBand": "Meet the Band",
            "hireUs": "Hire us!",
            "yourAmazingLiveExperience": "Your amazing live experience with us!",
            "upcomingLiveDates": "Upcoming live dates",
            "Date": "Date",
            "Location": "Location",
            "Links": "Links",
            "Start": "Start:",
        menu: {
            "Home": "Home",
            "About": "About",
            "Band": "Band",
            "Live": "Live",
            "Videos": "Videos",
            "Contacts": "Contacts"
        },
            band: {
                "Name": "Name:",
                "Instrument": "Instrument:",
                "InstrumentPat": "Vocals, Minimal Drums",
                "InstrumentMarco": "Cello and Vocals",
                "InstrumentStefano": "Acustic Guitar and Vocals",
            }
        },
    },
    it: {
        translation: {
            "letsBegin": "Cominciamo",
            "Follow": "Seguici",
            "aBeatlesCoverTrioTitle": "Un tributo ai Beatles con un sound unico",
            "aBeatlesCoverTrioDescription": "I Beat FlowerS sono un trio acustico che rende omaggio ai Beatles. Hanno sede a Napoli, e suonano le canzoni della leggendaria band con un tocco unico - con chitarra, violoncello e minimal drums per creare un suono intimo ed unico.",
            "whoTheyAre": "Chi sono",
            "whoTheyAreDescription": "Il trio è composto da Patrizio Buonaiuto alla voce e minimal drums, Marco Di Palo al violoncello e voce, e Stefano Esposito alla chitarra acustica e voce. Insieme, hanno creato un suono che è veramente il loro.",
            "aUniqueTitle": "Un'esperienza live unica",
            "aUniqueDescription": "Ciò che distingue Beat FlowerS dalle altre band tributo ai Beatles è l'utilizzo del violoncello nei loro arrangiamenti. Questo conferisce alla musica una profondità e una ricchezza che non si sente spesso nelle tradizionali band rock. Il loro utilizzo minimale della batteria consente inoltre alle voci e agli strumenti di emergere, creando un suono essenziale che è allo stesso tempo intimo e potente. Se sei un fan dei Beatles e stai cercando una nuova interpretazione delle loro canzoni classiche, allora i Beat FlowerS meritano sicuramente di essere ascoltati!",
            "meetTheBand": "La Band",
            "hireUs": "Ingaggiaci!",
            "yourAmazingLiveExperience": "La tua incredibile esperienza live con noi!",
            "upcomingLiveDates": "Prossime date live",
            "Date": "Data",
            "Location": "Location",
            "Links": "Link",
            "Start": "Start:",
        menu: {
            "Home": "Home",
            "About": "About",
            "Band": "Band",
            "Live": "Live",
            "Videos": "Video",
            "Contacts": "Contatti"
        },
            band: {
                "Name": "Nome:",
                "Instrument": "Strumento:",
                "InstrumentPat": "Voce, Minimal Drums",
                "InstrumentMarco": "Violoncello e Voce",
                "InstrumentStefano": "Chitarra acustica e Voce",

            }
        },
    },
    fr: {
        translation: {
            "letsBegin": "Commençons",
            "Follow": "Suivre",
            "aBeatlesCoverTrioTitle": "Un trio de reprises des Beatles avec un son unique",
            "aBeatlesCoverTrioDescription": "Beat FlowerS est un trio acoustique de Beatlemania basé à Naples, en Italie. Ils jouent les chansons du groupe légendaire avec une touche unique - en utilisant la guitare, le violoncelle et une batterie minimale pour créer un son à la fois familier et frais.",
            "whoTheyAre": "Qui sont-ils",
            "whoTheyAreDescription": "Le trio se compose de Patrizio Buonaiuto au chant et à la batterie minimale, Marco Di Palo au violoncelle et au chant, et Stefano Esposito à la guitare acoustique et au chant. Ensemble, ils ont créé un son qui leur est propre.",
            "aUniqueTitle": "Une expérience live unique",
            "aUniqueDescription": "Ce qui distingue Beat FlowerS des autres groupes de reprises des Beatles, c'est l'utilisation du violoncelle dans leurs arrangements. Cela ajoute une profondeur et une richesse à la musique que l'on n'entend pas souvent dans les groupes de rock traditionnels. Leur utilisation minimale de la batterie permet également aux voix et aux instruments de briller, créant un son épuré à la fois intime et puissant. Si vous êtes fan des Beatles et que vous recherchez une nouvelle interprétation de leurs chansons classiques, alors Beat FlowerS vaut vraiment le détour !",
            "meetTheBand": "Rencontrez le groupe",
            "hireUs": "Engagez-nous !",
            "yourAmazingLiveExperience": "Votre incroyable expérience live avec nous !",
            "upcomingLiveDates": "Prochaines dates de concert",
            "Date": "Date",
            "Location": "Lieu",
            "Links": "Liens",
            "Start": "Début:",
            menu: {
                "Home": "Accueil",
                "About": "À propos",
                "Band": "Groupe",
                "Live": "Live",
                "Videos": "Vidéos",
                "Contacts": "Contacts"
            },
            band: {
                "Name": "Nom :",
                "Instrument": "Instrument :",
                "InstrumentPat": "Voix, Batterie minimale",
                "InstrumentMarco": "Violoncelle et Voix",
                "InstrumentStefano": "Guitare acoustique et Voix",
            }
        },
    },
    es: {
        translation: {
            "letsBegin": "Comencemos",
            "Follow": "Seguir",
            "aBeatlesCoverTrioTitle": "Un trío de covers de los Beatles con un sonido único",
            "aBeatlesCoverTrioDescription": "Beat FlowerS es un trío acústico de Beatlemania con sede en Nápoles, Italia. Interpretan las canciones de la legendaria banda con un toque único, utilizando guitarra, violonchelo y batería mínima para crear un sonido que es a la vez familiar y fresco.",
            "whoTheyAre": "Quiénes son",
            "whoTheyAreDescription": "El trío está compuesto por Patrizio Buonaiuto en voz y batería mínima, Marco Di Palo en violonchelo y voz, y Stefano Esposito en guitarra acústica y voz. Juntos, han creado un sonido que realmente les pertenece.",
            "aUniqueTitle": "Una experiencia en vivo única",
            "aUniqueDescription": "Lo que distingue a Beat FlowerS de otras bandas tributo a los Beatles es el uso del violonchelo en sus arreglos. Esto agrega profundidad y riqueza a la música que no se escucha a menudo en las bandas de rock tradicionales. Su uso mínimo de la batería también permite que las voces e instrumentos brillen, creando un sonido despojado que es a la vez íntimo y poderoso. Si eres fan de los Beatles y estás buscando una nueva interpretación de sus canciones clásicas, definitivamente vale la pena ver a Beat FlowerS.",
            "meetTheBand": "Conoce a la banda",
            "hireUs": "Contrátanos",
            "yourAmazingLiveExperience": "Tu increíble experiencia en vivo con nosotros",
            "upcomingLiveDates": "Próximas fechas en vivo",
            "Date": "Fecha",
            "Location": "Ubicación",
            "Links": "Enlaces",
            "Start": "Inicio:",
            menu: {
                "Home": "Inicio",
                "About": "Acerca de",
                "Band": "Banda",
                "Live": "En vivo",
                "Videos": "Videos",
                "Contacts": "Contactos"
            },
            band: {
                "Name": "Nombre:",
                "Instrument": "Instrumento:",
                "InstrumentPat": "Voz, Batería Mínima",
                "InstrumentMarco": "Violonchelo y Voz",
                "InstrumentStefano": "Guitarra Acústica y Voz",
            }
        },
    },
    de: {
        translation: {
            "letsBegin": "Lass uns anfangen",
            "Follow": "Folgen",
            "aBeatlesCoverTrioTitle": "Ein Beatles Cover Trio mit einem einzigartigen Sound",
            "aBeatlesCoverTrioDescription": "Beat FlowerS ist ein Beatlemania-Akustiktrio mit Sitz in Neapel, Italien. Sie spielen die Songs der legendären Band mit einer einzigartigen Note - unter Verwendung von Gitarre, Cello und minimaler Schlagzeugbegleitung, um einen Sound zu erzeugen, der gleichermaßen vertraut und frisch ist.",
            "whoTheyAre": "Wer sie sind",
            "whoTheyAreDescription": "Das Trio besteht aus Patrizio Buonaiuto am Gesang und minimaler Schlagzeugbegleitung, Marco Di Palo am Cello und Gesang und Stefano Esposito an der Akustikgitarre und am Gesang. Gemeinsam haben sie einen Sound geschaffen, der wirklich einzigartig ist.",
            "aUniqueTitle": "Ein einzigartiges Live-Erlebnis",
            "aUniqueDescription": "Was Beat FlowerS von anderen Beatles-Coverbands unterscheidet, ist der Einsatz des Cellos in ihren Arrangements. Dies verleiht der Musik eine Tiefe und Fülle, die man in traditionellen Rockbands selten hört. Durch den minimalen Einsatz von Schlagzeug kommen auch die Gesangsstimmen und Instrumente besonders gut zur Geltung und schaffen einen reduzierten Sound, der sowohl intim als auch kraftvoll ist. Wenn Sie ein Fan der Beatles sind und eine neue Interpretation ihrer klassischen Songs suchen, dann sollten Sie sich Beat FlowerS auf jeden Fall anhören!",
            "meetTheBand": "Triff die Band",
            "hireUs": "Engagiere uns!",
            "yourAmazingLiveExperience": "Dein fantastisches Live-Erlebnis mit uns!",
            "upcomingLiveDates": "Kommende Live-Termine",
            "Date": "Datum",
            "Location": "Ort",
            "Links": "Links",
            "Start": "Start:",
            menu: {
                "Home": "Startseite",
                "About": "Über uns",
                "Band": "Band",
                "Live": "Live",
                "Videos": "Videos",
                "Contacts": "Kontakte"
            },
            band: {
                "Name": "Name:",
                "Instrument": "Instrument:",
                "InstrumentPat": "Gesang, Minimales Schlagzeug",
                "InstrumentMarco": "Cello und Gesang",
                "InstrumentStefano": "Akustikgitarre und Gesang",
            }
        },
    },
    br: {
        translation: {
            "letsBegin": "Vamos começar",
            "Follow": "Seguir",
            "aBeatlesCoverTrioTitle": "Um trio cover dos Beatles com um som único",
            "aBeatlesCoverTrioDescription": "Beat FlowerS é um trio acústico de Beatlemania com base em Nápoles, Itália. Eles tocam as músicas da lendária banda com um toque único - usando guitarra, violoncelo e bateria mínima para criar um som que é ao mesmo tempo familiar e fresco.",
            "whoTheyAre": "Quem são",
            "whoTheyAreDescription": "O trio é composto por Patrizio Buonaiuto nos vocais e bateria mínima, Marco Di Palo no violoncelo e vocais, e Stefano Esposito na guitarra acústica e vocais. Juntos, eles criaram um som que é verdadeiramente único.",
            "aUniqueTitle": "Uma experiência ao vivo única",
            "aUniqueDescription": "O que diferencia o Beat FlowerS de outras bandas cover dos Beatles é o uso do violoncelo em seus arranjos. Isso adiciona profundidade e riqueza à música que não é frequentemente ouvida em bandas de rock tradicionais. Seu uso mínimo de bateria também permite que os vocais e instrumentos se destaquem, criando um som despojado que é ao mesmo tempo íntimo e poderoso. Se você é fã dos Beatles e está procurando uma nova abordagem para suas músicas clássicas, então o Beat FlowerS definitivamente vale a pena conferir!",
            "meetTheBand": "Conheça a banda",
            "hireUs": "Contrate-nos!",
            "yourAmazingLiveExperience": "Sua incrível experiência ao vivo conosco!",
            "upcomingLiveDates": "Próximas datas ao vivo",
            "Date": "Data",
            "Location": "Localização",
            "Links": "Links",
            "Start": "Início:",
            menu: {
                "Home": "Início",
                "About": "Sobre",
                "Band": "Banda",
                "Live": "Ao vivo",
                "Videos": "Vídeos",
                "Contacts": "Contatos"
            },
            band: {
                "Name": "Nome:",
                "Instrument": "Instrumento:",
                "InstrumentPat": "Vocais, Bateria Mínima",
                "InstrumentMarco": "Violoncelo e Vocais",
                "InstrumentStefano": "Violão Acústico e Vocais",
            }
        },
    },
    ja: {
        translation: {
            "letsBegin": "始めましょう",
            "Follow": "フォロー",
            "aBeatlesCoverTrioTitle": "ユニークなサウンドを持つビートルズカバートリオ",
            "aBeatlesCoverTrioDescription": "Beat FlowerSはイタリア・ナポリを拠点としたビートルマニアのアコースティックトリオです。彼らは伝説のバンドの曲を、ギター、チェロ、最小限のドラムを使って独自のアレンジで演奏し、なじみ深さと新鮮さを兼ね備えたサウンドを生み出しています。",
            "whoTheyAre": "彼らは誰か",
            "whoTheyAreDescription": "このトリオは、パトリツィオ・ブオナイウトがボーカルと最小限のドラムを担当し、マルコ・ディ・パロがチェロとボーカル、ステファノ・エスポジートがアコースティックギターとボーカルを担当しています。彼らは一緒に独自のサウンドを作り出しています。",
            "aUniqueTitle": "ユニークなライブ体験",
            "aUniqueDescription": "Beat FlowerSが他のビートルズカバーバンドと異なるのは、彼らがアレンジにチェロを使用していることです。これにより、伝統的なロックバンドではあまり聞かれない音楽に奥行きと豊かさが加わります。彼らの最小限のドラムの使用は、ボーカルと楽器が際立つことを可能にし、親密で力強いストリップダウンサウンドを生み出します。もしもあなたがビートルズのファンで、彼らのクラシックな曲に新たなアプローチを探しているなら、Beat FlowerSをぜひチェックしてみてください！",
            "meetTheBand": "バンドに会おう",
            "hireUs": "私たちを雇ってください！",
            "yourAmazingLiveExperience": "私たちとの素晴らしいライブ体験！",
            "upcomingLiveDates": "今後のライブ日程",
            "Date": "日付",
            "Location": "場所",
            "Links": "リンク",
            "Start": "スタート:",
            menu: {
                "Home": "ホーム",
                "About": "について",
                "Band": "バンド",
                "Live": "ライブ",
                "Videos": "ビデオ",
                "Contacts": "コンタクト"
            },
            band: {
                "Name": "名前：",
                "Instrument": "楽器：",
                "InstrumentPat": "ボーカル、最小限のドラム",
                "InstrumentMarco": "チェロとボーカル",
                "InstrumentStefano": "アコースティックギターとボーカル",
            }
        },
    }

};

i18n.use(initReactI18next).init({
    resources,
    lng: 'it',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
