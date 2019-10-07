import  profileReducer from "./profile-reducer"
import  dialogsReducer from "./dialogs-reducer"
import  sadebarReducer from "./sadebar-reducer"



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: 'MIt\'s my first post', likesCount: 20}
            ],
            newPostText: ['It-kamasutra.com']
        },
        dialogsPage: {

            dialogs: [
                {
                    id: 1,
                    name: 'Vasilly',
                    src: 'http://www.adm-mosrentgen.ru/wp-content/uploads/2017/07/%D0%BC%D0%B8%D0%BD%D1%8C%D0%BE%D0%BD%D1%8B-%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8B-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8.jpg'
                },
                {id: 2, name: 'Sveta', src: 'https://img.fonwall.ru/o/55/minonyi_gadkiy_ya_2_Despicable.jpg'},
                {
                    id: 3,
                    name: 'Andrey',
                    src: 'https://qapper.ru/wp-content/uploads/2015/02/%D0%9C%D0%B8%D0%BD%D1%8C%D0%BE%D0%BD%D1%8B-qapper.ru_.jpeg'
                },
                {
                    id: 4,
                    name: 'Natasha',
                    src: 'https://zakazposterov.ru/fotooboi/z/fotooboi-508-112-minjoni-zakazposterov-ru_z.jpg'
                },
                {id: 5, name: 'Victor', src: 'https://www.decorel.by/wp-content/uploads/2015/03/thumb_05777.jpg'},
                {
                    id: 6,
                    name: 'Sergey',
                    src: 'http://megahit-online.guru/uploads/monthly_08_2015/post-1-0-21197000-1439362090.jpg'
                }
            ],

            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'My father from is Belarus'},
                {id: 3, message: 'Capital of great Moscow'},
                {id: 4, message: 'Capital of great Moscow'},
                {id: 5, message: 'Capital of great Moscow'},
                {id: 6, message: 'Capital of great Moscow'}
            ],
            newMessageBody: ""

        },
        sadebar: {
            friends: [
                {
                    name: 'Vasilly',
                    src: 'http://www.adm-mosrentgen.ru/wp-content/uploads/2017/07/%D0%BC%D0%B8%D0%BD%D1%8C%D0%BE%D0%BD%D1%8B-%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8B-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8.jpg'
                },
                {name: 'Sveta', src: 'https://img.fonwall.ru/o/55/minonyi_gadkiy_ya_2_Despicable.jpg'},
                {
                    name: 'Andrey',
                    src: 'https://qapper.ru/wp-content/uploads/2015/02/%D0%9C%D0%B8%D0%BD%D1%8C%D0%BE%D0%BD%D1%8B-qapper.ru_.jpeg'
                },
            ],
        }
    },
    _callSubscriber() {
        console.log('State изменился')

    },

    getState() {
        return this._state;
    },
    subscribe(observer) {

        this._callSubscriber = observer;


    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.sadebar = sadebarReducer(this._state.sadebar,action);

        this._callSubscriber(this._state);

    }
};




window.store = store;
export default store;