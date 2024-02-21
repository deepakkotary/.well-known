
function store(){
 var data = document.querySelector('textarea').value;    
localStorage.setItem('data',data)  
}

function restore (){
 var data = document.querySelector('textarea   ');  
var getValue= localStorage.getItem('data');
data.value=getValue;
}

////////////kgvk
window.addEventListener('load',()=>{
 restore();    
})

window.addEventListener('beforeunload',()=>{
store();     
})

function reload(){
 window.location.reload(); 
}

var data = document.querySelector('textarea   ');  
data.addEventListener('focus',()=>{
 //alert('focus')
})

data.addEventListener('blur',()=>{
 //alert('blur')    
})







///////>>>>>>>>>>>
window.addEventListener('keyup',()=>{
//alert("sto")  
store();
})
///////>>>>>>>>>>>

// In your main JavaScript file

// Request permission
Notification.requestPermission().then(permission => {
  if (permission === 'granted') {
    console.log('Notification permission granted');
  } else {
    console.warn('Notification permission denied');
  }
});

// Subscribe to push notifications (using FCM as an example)
const messaging = firebase.messaging();
messaging.getToken().then(token => {
  console.log('FCM Token:', token);
  // Send this token to your server for later use
}).catch(error => {
  console.error('Error getting FCM token:', error);
});


///////>>>>>>>>>>>
///////>>>>>>>>>>>
///////>>>>>>>>>>>
///////>>>>>>>>>>>


        let deferredPrompt;

        window.addEventListener('beforeinstallprompt', (event) => {
            // Prevent the default installation prompt
            event.preventDefault();

            // Store the event for later use
            deferredPrompt = event;

            // Show the installation promotion
            showInstallPrompt();
        });

        function showInstallPrompt() {
            // Display a custom install button or UI element
            const installPrompt = document.getElementById('install-prompt');
            installPrompt.style.display = 'block';

            // Add an event listener to trigger the installation prompt
            installPrompt.addEventListener('click', () => {
                // Show the installation prompt
                deferredPrompt.prompt();

                // Wait for the user to respond
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the install prompt');
                    } else {
                        console.log('User dismissed the install prompt');
                    }

                    // Reset the deferredPrompt variable
                    deferredPrompt = null;

                    // Hide the install prompt
                    installPrompt.style.display = 'none';
                });
            });
        }
/////////









///////>>>>>>>>>>>
