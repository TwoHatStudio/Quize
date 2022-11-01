function intro(){
  setTimeout(() =>{
    document.getElementById('logointro').style.marginTop='-150px';
    setTimeout(()=>{
      
      document.getElementById('introcont').style.opacity ='0'
      setTimeout(()=>{document.getElementById('introcont').style.display ='none'
      document.getElementById('loginpg').style.display ='flex';
      document.getElementById('loginpg').style.opacity ='1'},500)
    },500)
    
    
  } ,5000)
}
intro()
