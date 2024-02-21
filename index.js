if('serviceWorker' in navigator){
     navigator.serviceWorker.register('/re-peal/sw.js').catch(ev=>{
          console.log(ev);
     })
}