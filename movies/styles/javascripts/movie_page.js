// $('.genre').change(function(){
//     // console.log('hi')
//     console.log($('.genre').val())
// })

//https://yts.mx/api/v2/list_movies.json
//https://yts.mx/api/v2/movie_details.json?movie_id=10
// console.log('hi')


// $(document).ready(function(){

    
// var keys = config.tmdb_api
// console.log('hi',keys)

// const kk = require('./config')
// console.log(kk.tmdb_api)

const pass = require('./config')
console.log(pass)

// console.log(API_token.tmdb_api)
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
                let a_link = document.createElement('a')
                let img_elem = document.createElement('img')
                    img_elem.src = movies[i].large_cover_image
                    img_elem.alt = 'poster'
                    img_elem.id = i
                    img_elem.className ='poster'
                    img_elem.setAttribute('onmouseover','give_me_id(this)')
                    img_elem.setAttribute("onmouseleave",'back_to_original(this)')
                    hide_div = document.createElement('div')
                    hide_div.id = `div__`
                    hide_div.setAttribute('style','visibility:hidden,color:yellow')
                    
                    // document.getElementById(`div_${i}`).style.visibility = 'hidden' 
                   
                    
                    
                    td_tag = document.createElement('td')
                    a_link.appendChild(img_elem)
                    a_link.appendChild(hide_div)
                    td_tag.appendChild(a_link)
                    
                    // c = document.querySelectorAll(".poster")
                    // console.log(c)
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

            set_div(pictures)
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

    $('img').hover(function(){
        console.log(this.id)
    })
 
   


    
    
   
// })

function set_div(rate){
    setTimeout(function(){
        c =  document.querySelectorAll("#div__")
        // console.log(c[0])
        // console.log(rate)
        // console.log(rate[5].rating)
        // console.log(c[0].innerHTML)
        // c[0].setAttribute("onmouseover", 'give_me_id(this)' );
        // console.log(c.lenght)
        for(let i=0;i<c.length;i++){
            // print('hi')
            c[i].innerHTML  = rate[i].rating
            
        }
        
    
    },2000)
    console.log('rate is ',rate)
}

function give_me_id(e){
    // console.log('helml')
    // console.log(e.id)

    // document.getElementById(e.id).style.background ="#00ff00"
    document.getElementById(e.id).style.opacity ="0.2"
    // $('td').html = '44'
    
}

function back_to_original(e){
    // console.log(e.id)

    // document.getElementById(e.id).style.background = "rgba(0,0,0,0.1)"
    document.getElementById(e.id).style.opacity ="1"
}


// c[0].setAttribute("onmouseover", "give_me_id(this)")

    // document.getElementsByTagName("img")[0].setAttribute("onmouseover", "give_me_id(this)");
    
    // function give_me_id(e){
    //     console.log(e.id)
    //     console.log('gi')
    // }



    
    

    
    


