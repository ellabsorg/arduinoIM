var arduino = document.querySelector('#arduino')
var arduino_comp = document.querySelectorAll('#arduino a image')
var comp_list = document.querySelectorAll('.comp_list ul li a')

arduino_comp.forEach(function(comp){
    comp.addEventListener('mouseenter', function(e){
        var id = this.id
       console.log(id) ;
       comp_list.forEach(function(item){
           item.classList.remove('is-active')
       })
        arduino_comp.forEach(function(item){
           item.classList.remove('is-active')
       })
        document.querySelector('.'+id).classList.add('is-active')
        document.querySelector('#'+id).classList.add('is-active')
    })
})

comp_list.forEach(function(comp){
    comp.addEventListener('mouseenter', function(e){
        var id = this.classList[0]
       console.log(id) ;
       comp_list.forEach(function(item){
           item.classList.remove('is-active')
       })
        arduino_comp.forEach(function(item){
           item.classList.remove('is-active')
       })
        document.querySelector('.'+id).classList.add('is-active')
        document.querySelector('#'+id).classList.add('is-active')
    })
})

arduino.addEventListener('mouseover', function(){
    comp_list.forEach(function(item){
           item.classList.remove('is-active')
       })
        arduino_comp.forEach(function(item){
           item.classList.remove('is-active')
       })
})
document.querySelector('ul').addEventListener('mouseleave', function(){
    comp_list.forEach(function(item){
           item.classList.remove('is-active')
       })
        arduino_comp.forEach(function(item){
           item.classList.remove('is-active')
       })
})
document.querySelector('ul').addEventListener('mouseover', function(){
    comp_list.forEach(function(item){
           item.classList.remove('is-active')
       })
        arduino_comp.forEach(function(item){
           item.classList.remove('is-active')
       })
})