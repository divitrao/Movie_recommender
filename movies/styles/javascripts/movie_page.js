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
            function tests(message){
                console.log(message)
            }
            const counts = data.data.movie_count
            const random_id = Math.floor(Math.random()*counts) +1
            const pictures = data.data.movies
            let table_tag = document.createElement('table')
            table_tag.id = 'table_form'
            function creating_elem(i,movies){
                let img_elem = document.createElement('img')
                    img_elem.src = movies[i].large_cover_image
                    img_elem.alt = 'poster'
                    img_elem.id = 'poster'
                    
                    td_tag = document.createElement('td')
                    td_tag.appendChild(img_elem)
                    return td_tag

                
                
                

            }
            
            for(i=0;i<20;i+=2){
               
                
                let tr_tag = document.createElement('tr')
                tr_tag.id = 'rows'
                tr_tag.appendChild(creating_elem(i,pictures))
                tr_tag.appendChild(creating_elem(i+1,pictures))
                table_tag.appendChild(tr_tag)
                
            }
            
            document.getElementById('list_of__pictures').appendChild(table_tag)
            
            let page_numer  = 1
            
            $('.next__list').click(function(){
                let div_height_of_picture_list = document.querySelector('#list_of__pictures')
                let height_div = div_height_of_picture_list.offsetHeight
                
                let myObj = document.getElementById('table_form')
                myObj.remove()
                document.getElementById('list_of__pictures').style.height = `${height_div}px`
                page_numer+= 1
                console.log(counts)
                total__pages = Math.ceil(counts/20)
                $.ajax({
                    url:`https://yts.mx/api/v2/list_movies.json?page=${page_numer}`,
                    type:'GET',
                    success:function(data){
                        tests('hemlo')
                        // console.log(data)
                        const pictures = data.data.movies
                        let table_tag = document.createElement('table')
                        table_tag.id = 'table_form'
                        for(i=0;i<20;i+=2){
               
                
                            let tr_tag = document.createElement('tr')
                            tr_tag.id = 'rows'
                            tr_tag.appendChild(creating_elem(i,pictures))
                            tr_tag.appendChild(creating_elem(i+1,pictures))
                            table_tag.appendChild(tr_tag)
                        }

                        document.getElementById('list_of__pictures').appendChild(table_tag)
                    },

                    error:function(){
                        console.log('error')
                    }
                })
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

    
    


