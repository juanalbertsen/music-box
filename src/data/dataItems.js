import {collection, getFirestore} from "firebase/firestore"

export const dataItems = [
    {
        id: '1',
        name: 'Guitarra Acústica',
        detail: 'Gutarra Acústica con micrófono',
        category: 'guitarras',
        price: 50000,
        stock: 5,
        imgurl:'https://http2.mlstatic.com/D_NQ_NP_785977-MLA44436119721_122020-W.webp'
    },
    {
        id: '2',
        name: 'Teclado',
        detail: 'Teclado sensitivo',
        category: 'teclados',
        price: 120000,
        stock: 2,
        imgurl:'https://http2.mlstatic.com/D_NQ_NP_751505-MLA47599755946_092021-V.webp'

    },
    {
        id: '3',
        name: 'Guitarra Eléctrica',
        detail: 'Gutarra Eléctrica Telecaster',
        category: 'guitarras',
        price: 200000,
        stock: 4,
        imgurl:'https://http2.mlstatic.com/D_NQ_NP_824668-MLA47681169880_092021-W.webp'

    },
    {
        id: '4',
        name: 'Batería',
        detail: 'Batería electrónica con sonidos MIDI',
        category: 'percusion',
        price: 140000,
        stock: 9,
        imgurl:'https://http2.mlstatic.com/D_NQ_NP_752827-MLA43980881630_112020-V.webp'
    },
    {
        id: '5',
        name: 'Bongó',
        detail: 'Bongo profesionales de madera',
        category: 'percusion',
        price: 40000,
        stock: 15,
        imgurl:'https://media.guitarcenter.com/is/image/MMGS7/LPM199-Mini-Tunable-Bongos/440615000000000-00-220x220.jpg'
    },
    {
        id: '6',
        name: 'Sintetizador',
        detail: 'Sintetizador Workstation de 88 teclas',
        category: 'teclados',
        price: 500000,
        stock: 9,
        imgurl:'https://media.guitarcenter.com/is/image/MMGS7/MOXF8-88-Key-Synthesizer-Workstation/J00610000000000-00-220x220.jpg'
    },
    {
        id: '7',
        name: 'Guitarra Criolla',
        detail: 'Guitarra con cuerdas de nylon y amplificador',
        category: 'guitarras',
        price: 140000,
        stock: 22,
        imgurl:'https://media.guitarcenter.com/is/image/MMGS7/C12-CD-Classical-Guitar-Natural/H96255000001000-00-220x220.jpg'
    },
    {
        id: '8',
        name: 'Triangulo',
        detail: 'Triangulo de concierto con baqueta',
        category: 'percusion',
        price: 4000,
        stock: 2,
        imgurl:'https://media.guitarcenter.com/is/image/MMGS7/8-Concert-Triangle/J56595000000000-00-220x220.jpg'
    }
]
