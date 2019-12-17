import firebase from 'firebase'
import { useSelector, useDispatch} from 'react-redux'; 
import { useState } from 'react';
import serReducer from '../../store/userReducer'


export default class FirebaseService {
    static getDataList = (nodePath, pedido_status, callback) => {

        let query = firebase.database().ref(nodePath);
        query.on('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                if (item.status===pedido_status){
                    items.push(item);
                }
                
            });
            callback(items);
        });

        return query;
    };

    static ids = (nodePath, callback) => {

        let query = firebase.database().ref(nodePath);
        query.on('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        });

        return query;
    };

    static updateData = (id, node, obj) => {
        return firebase.database().ref(node + '/' + id).set(...obj);
    };


    static getDataListNoFilter = (nodePath,callback) => {

        let query = firebase.database().ref(nodePath);
        query.on('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        });

        return query;
    };













    // static Categoria = (callback) => {
    //     const dispatch = useDispatch();
    //     let query = firebase.database().ref('perfil');
    //     query.on('value', dataSnapshot => {
    //         dataSnapshot.forEach(childSnapshot => {
    //             var categoria;
    //             var email=useSelector(state => state.userEmail)
    //             let item = childSnapshot.val();
    //             if (email===childSnapshot.key){
    //                 if (item.categoria==="tecnico") {
    //                     categoria="/inicio_tecnico"
    //                 }
    //                 if (item.categoria==="usuario"){
    //                     categoria="/inicio_usuario"}
                    
    //                 dispatch({type: 'LOG_IN', userCategoria: item.categoria})
    //                 callback(categoria)
    //             };
    //         });
    //     });
    //     return query;
    // };



    // static pushData = (node, objToSubmit) => {
    //     const ref = firebaseDatabase.ref(node).push();
    //     const id = firebaseDatabase.ref(node).push().key;
    //     ref.set(objToSubmit);
    //     return id;
    // };

    // static remove = (id, node) => {
    //     return firebaseDatabase.ref(node + '/' + id).remove();
    // };

    // static getUniqueDataBy = (node, id, callback) => {
    //     const ref = firebaseDatabase.ref(node + '/' + id);
    //     let newData = {};
    //     ref.once('value', (dataSnapshot) => {

    //         if (!dataSnapshot || dataSnapshot === undefined || !dataSnapshot.val() || dataSnapshot.val() === undefined) {
    //             callback(null);
    //             return;
    //         }

    //         const snap = dataSnapshot.val();
    //         const keys = Object.keys(snap);
    //         keys.forEach((key) => {
    //             newData[key] = snap[key]
    //         });
    //     }).then(() => {
    //         callback(newData);
    //     });
    // };


    // static createUser = (email, password) => {
    //     return firebaseAuth.createUserWithEmailAndPassword(email, password);
    // };

    // static login = (email, password) => {
    //     return firebaseAuth.signInWithEmailAndPassword(email, password);
    // };

    // static logout = () => {
    //     return firebaseAuth.signOut();
    // };

    // static onAuthChange = (callbackLogin, callbackLogout) => {
    //     firebaseAuth.onAuthStateChanged(authUser => {
    //         if (!authUser) {
    //             callbackLogout(authUser);
    //         } else {
    //             callbackLogin(authUser);
    //         }
    //     });
    // };

}