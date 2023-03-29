var nickname=document.querySelector('.nickname')
var password=document.querySelector('.password')
var daxil=document.querySelector('.daxil')
var login=document.querySelector('.login')
var message=document.querySelector('.message')
var textarea=document.querySelector('textarea')
var gonder=document.querySelector('.gonder')
var messageBox=document.querySelector('.message-box')
var file=document.querySelector('.file')
var img=document.querySelector('img')
var img1=document.querySelector('.img1')
var users=[{
    ad:"letife",
    parol:'letife123'
},{
    ad:"aygun",
    parol:'aygun123'
}]

daxil.onclick=function(){
    for(let i=0;i<users.length;i++){
        if(users[i].ad==nickname.value && users[i].parol==password.value){
            login.style.display='none'
            message.style.display='block'
            
        }
    }
}

const firebaseConfig = {
    apiKey: "AIzaSyCDX9dlUXZbL22FU_H08ZfiaCmj-gkjAxQ",
    authDomain: "letife12.firebaseapp.com",
    databaseURL: "https://letife12-default-rtdb.firebaseio.com",
    projectId: "letife12",
    storageBucket: "letife12.appspot.com",
    messagingSenderId: "415778069780",
    appId: "1:415778069780:web:567a0fab4119ad3e41b601"
  };
  
  firebase.initializeApp(firebaseConfig);
  var db=firebase.database();

  
  
  gonder.onclick=function(){
    var MyName=nickname.value
    var message=textarea.value;
    db.ref('messages').set({
        'sender':MyName,
        'email':message
    })

  }
  
  db.ref('messages').on('value',function(snapshot){
    var p=document.createElement('p')
    p.innerText=`${snapshot.val().sender}:${snapshot.val().email}`
    messageBox.append(p)
  })

// gonder.onclick=function(){
//     var p=document.createElement('p')
//     p.innerText=`${nickname.value}: ${textarea.value}`
//     messageBox.append(p)
// }



// file.onchange=function(e){
//    const Reader=new FileReader()
//    Reader.readAsDataURL(e.target.files[0])
//    Reader.addEventListener('load',function(){
//    img.setAttribute('src',Reader.result)
//    })
// }