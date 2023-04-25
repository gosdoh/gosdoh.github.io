document.querySelectorAll('.dropdown-item').forEach(function(listItem){
    listItem.addEventListener('click',function(){
        document.querySelector('.dro').innerText = this.innerText; 
    })
})