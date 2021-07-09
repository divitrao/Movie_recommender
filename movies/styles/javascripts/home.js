

    // document.getElementById('counter').innerHTML = '32000+ movies'

// function task(i){
//     setTimeout(function(){
//         $('#counter').html(String(i)+ '+ movies')
//     },2000)
//     console.log(i)
// }
var i = 0 
$('.bg-image2').mouseenter(function ent(){
    
setTimeout(function(){
    $('#counter').html(String(i)+ '+ movies')
i+=50
if(i<32050){
    ent()
}
if(i>32000){
    i=0
}
},0.01)
})

// $(".bg-image2").mouseenter(function(){
//     $('#counter').html('0+ movies')
   
    
//     for(let i = 0;i<=32000;i+=5){
//         task(i)
//         // console.log(i)
//        }
    

// })
let for_page=Math.floor(Math.random()*664)
let for_movie = Math.floor(Math.random()*30)


$.ajax({
    url :'https://yts.mx/api/v2/list_movies.json?page='+for_page+'&limit='+50,
    type: "GET",
    dataType: "json",
    success: function(data){
        
        // console.log(Object.keys(data.data.movies[for_movie]))
        // console.log(data.data.movies[for_movie].large_cover_image)
        
        for(let i = for_movie;i<=for_movie+20;i++){
            // $('#posters').attr('src',data.data.movies[for_movie].large_cover_image)
            let img_elem=document.createElement('img')
            img_elem.src = data.data.movies[i].large_cover_image
            img_elem.alt = 'poster'
            img_elem.id = 'posters'
            let div_tag = document.createElement('div')
            div_tag.appendChild(img_elem)
            document.getElementById('main_page_poster').appendChild(div_tag)
            // console.log(i)
        }
        
        // console.log(for_movie)
        // console.log(for_page)
    },
    error: function(){
        console.log('error in request')
    }

})



