function Menu(e){
    let list = document.querySelector('ul');
    let i = document.getElementById('navTo')
    if(e.name === 'menu')
    {
        e.name = "close";
        i.style.paddingTop = "364px";
        list.classList.add('top-[80px]') ;
        list.classList.add('opacity-100'); 
    }else{
        e.name = "menu" ;
         i.style.paddingTop = "0px";
        list.classList.remove('top-[80px]');
        list.classList.remove('opacity-100');
    }

  }
 
