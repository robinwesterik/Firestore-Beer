// Initialize Firebase
  var firebaseConfig = {
//Insert your firebase config here
  };
  firebase.initializeApp(firebaseConfig); 
//Initialize Firestore
  var firestore = firebase.firestore();
 
  const db = firebase.firestore();
  const increment = firebase.firestore.FieldValue.increment(1);
  const decrement = firebase.firestore.FieldValue.increment(-24);

//Document reference
  const dennisRef = db.collection('users').doc('Dennis');
  const ducRef = db.collection('users').doc('Duc');
  const robinRef = db.collection('users').doc('Robin');
  const gastRef = db.collection('users').doc('Gast');  

//Dennis buttons
  document.querySelector("#dennisTake").addEventListener("click",function(){dennisRef.update({pils: increment});});
  document.querySelector("#dennisGive").addEventListener("click",function(){dennisRef.update({pils: decrement});});
//Duc buttons
  document.querySelector("#ducTake").addEventListener("click",function(){ducRef.update({pils: increment});});
  document.querySelector("#ducGive").addEventListener("click",function(){ducRef.update({pils: decrement});});
//Robin buttons
  document.querySelector("#robinTake").addEventListener("click",function(){robinRef.update({pils: increment});});
  document.querySelector("#robinGive").addEventListener("click",function(){robinRef.update({pils: decrement});});
//Guest buttons
  document.querySelector("#gastTake").addEventListener("click",function(){gastRef.update({pils: increment});});
  document.querySelector("#gastGive").addEventListener("click",function(){gastRef.update({pils: decrement});});
  
//This allows the page to get the data in real time.
  getRealtimeUpdates = function(ref, field){
    ref.onSnapshot(function(doc){
      if (doc && doc.exists){
        const myData = doc.data();
        field.innerText = myData.pils;
      }
    });
  }
  getRealtimeUpdates(dennisRef, dennisField);
  getRealtimeUpdates(ducRef, ducField);
  getRealtimeUpdates(robinRef, robinField);
  getRealtimeUpdates(gastRef, gastField);
