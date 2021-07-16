// $('.genre').change(function(){
//     // console.log('hi')
//     console.log($('.genre').val())
// })

//https://yts.mx/api/v2/list_movies.json
//https://yts.mx/api/v2/movie_details.json?movie_id=10
// console.log('hi')


    $.ajax({
        
        url :'https://yts.mx/api/v2/list_movies.json',
        type: 'GET',
        success: function(data){
            const counts = data.data.movie_count
            const random_id = Math.floor(Math.random()*counts) +1
            // console.log(random_id)
            // console.log(run_this)
            $('.next__list').click(function(){
                console.log('Hi this is pressed ')
            })
            
            
            
            $.ajax({
                url: `https://yts.mx/api/v2/movie_details.json?movie_id=${random_id}`,
                type: 'GET',
                success: function(data){
                    back_img = data.data.movie.background_image_original   //large_cover_image
                    // back_img = data.data.movie.large_cover_image
                    console.log(back_img)
                    $('.search__center').css({'background-image':`url(${back_img})`,'background-repeat':'no-repeat','background-size':'cover'})
                },
                error:function(){
                    console.log('file not found')
                } ,
    
            })
    
        },
    
        error: function(){
            console.log('file not found')
        }
    
    })

    
    


// console.log('counter is ',movie_count)



// $('.search__center').css('background-image',`url(${'ddd'})`)