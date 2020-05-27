import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore();


firebase.collection('user').doc('MFZ2Y4fpcw34cV7n0KdV').collection('cartItems').doc('K0Ci4GkDc1jeSkXdvFZk')
    
firestore.doc('/users/MFZ2Y4fpcw34cV7n0KdV/cartItems/K0Ci4GkDc1jeSkXdvFZk')