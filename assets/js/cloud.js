var arduino1 = document.querySelector('#arduino1')
var arduino_comp1 = document.querySelectorAll('#arduino1 a image')
var comp_list1 = document.querySelectorAll('#comp_cloud image')

arduino_comp1.forEach(function(comp){
    comp.addEventListener('mouseenter', function(e){
        var id = this.id
        var id1 = this.id.replace('-','_')
       console.log(id) ;
       comp_list1.forEach(function(item){
           item.classList.remove('is-active')
       })
        arduino_comp1.forEach(function(item){
           item.classList.remove('is-active')
       })
        document.querySelectorAll('#'+id).forEach(function(item){ 
            item.classList.add('is-active')})
        
    })
})



arduino1.addEventListener('mouseover', function(){
    comp_list1.forEach(function(item){
           item.classList.remove('is-active')
       })
        arduino_comp1.forEach(function(item){
           item.classList.remove('is-active')
       })
})
arduino1.addEventListener('mouseleave', function(){
    comp_list1.forEach(function(item){
           item.classList.remove('is-active')
       })
        arduino_comp1.forEach(function(item){
           item.classList.remove('is-active')
       })
})
