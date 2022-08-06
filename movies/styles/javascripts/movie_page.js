let obj = new Date()
current_year = obj.getFullYear()
let sel_ele = document.getElementById('years')
for(i=1930;i<=current_year;i+=1){   
    let opt = document.createElement('option')
    opt.text = i
    opt.value = i
    sel_ele.appendChild(opt)

}

// console.log(document.getElementsByTagName('figcaption')[0])
// for(j=0;j<document.getElementsByTagName('figcaption').length;j++){
//     c = document.getElementsByTagName('figcaption')[j]
//     c.style.display = 'none'
// }
// document.getElementsByTagName('figcaption').style.display = 'none'

let max_pages = (data['total_pages']) // i'm getting this data from views.py  and i'm collecting it on html by jinja method and passign to this JS file
document.getElementById('current_page').innerHTML = `page 1 of ${max_pages}`
// console.log(data['results'])
$("img").mouseover(function(){
    // console.log(data['results'][parseInt(this.id)]['original_title'])
    // console.log(data['results'][parseInt(this.id)]['vote_average'])
    console.log(document.getElementById(this.id))
    document.getElementById(this.id).style.transitionDuration = "0.6s"
    document.getElementById(this.id).style.opacity = 0.2
    // console.log(document.getElementById(this.id).childNodes)
    // console.log(document.getElementById(`fig_caption${this.id}`))
    document.getElementById(`fig_caption${this.id}`).style.display = "block"
    
})
$("img").mouseout(function(){
    // console.log(data['results'][parseInt(this.id)]['original_title'])
    // console.log(data['results'][parseInt(this.id)]['vote_average'])
    // console.log(document.getElementById(this.id))
    document.getElementById(this.id).style.transitionDuration = "0.6s"
    document.getElementById(this.id).style.opacity = 1
    document.getElementById(`fig_caption${this.id}`).style.display = "none"
})


var token = config.tmdb_api;
// const data = JSON.parse(("{{data|escapejs}}"))
// console.log(data)
var page_number = 1
let base_url_poster = 'https://image.tmdb.org/t/p/original'
let my_url
function next_page(n,genre,ratings,years,search){
   if(search==''){
       my_url = `https://api.themoviedb.org/4/discover/movie?api_key=${token}&language=en-US&page=${n}&with_genres=${genre}&vote_average.gte=${ratings}&year=${years}`
   }
   else{
       
       my_url = `https://api.themoviedb.org/3/search/movie?api_key=${token}&language=en-US&query=${search}&include_adult=true`
       
   }
    $.ajax({
        type:'GET',
        url: my_url,
        dataType: "json",
        success : function(data){
            let max_pages = (data['total_pages'])
            console.log('these are ',max_pages)
            console.log(my_url)
            if (n>max_pages ){
                page_number =max_pages
                return
            }
            if(n<1){
                page_number = 1
                return
            }
            document.getElementById('page_number').value =  String(n)
            document.getElementById('page_numbero').value = String(n)
            document.getElementById('current_page').innerHTML = `page ${String(n)} of ${max_pages}`
            let height_of_div = document.querySelector('#list_of__pictures').offsetHeight
            document.getElementById('table_row').remove()
            document.getElementById('list_of__pictures').style.height = `${height_of_div}px`
            data = data['results']
            let new_table = document.createElement('table')
            new_table.id = 'table_row'
            console.log(data)
            document.getElementById('list_of__pictures').appendChild(new_table)
           
            for(i=0;i<data.length;i=i+2){
                try{
                    
                    let new_row = document.createElement('tr')
                    new_row.id = 'table_rows'
                    let new_td_1 = document.createElement('td')
                    let fig_1 = document.createElement('figure')
                    let new_img_1 = document.createElement('img')
                    new_img_1.className = 'poster'
                    new_img_1.src = base_url_poster + data[i]['poster_path']
                    new_img_1.alt = data[i]['original_title']
                    new_img_1.id = i
                    let a_tag_1 = document.createElement('a')
                    a_tag_1.href = `/movie_info/${data[i]['id']}`
                    let div_1 = document.createElement('div')
                    div_1.id = `fig_caption${i}`
                    div_1.style.display = 'none'
                    let fig_cap_1 = document.createElement('figcaption')
                    let fig_cap_1_text = document.createElement('h4')
                    fig_cap_1_text.innerHTML =`IMDB : ${data[i]['vote_average']}`
                    let fig_cap_1_text_1 = document.createElement('h4')
                    fig_cap_1_text_1.innerHTML = data[i]['original_title']
                    fig_cap_1.appendChild(fig_cap_1_text)
                    fig_cap_1.appendChild(fig_cap_1_text_1)
                    div_1.appendChild(fig_cap_1)
                    a_tag_1.appendChild(new_img_1)
                    fig_1.appendChild(a_tag_1)
                    fig_1.appendChild(div_1)
                    new_td_1.appendChild(fig_1)
                    new_row.appendChild(new_td_1)

                    let new_td_2 = document.createElement('td')
                    let fig_2 = document.createElement('figure')
                    let new_img_2 = document.createElement('img')
                    new_img_2.className = 'poster'
                    new_img_2.src = base_url_poster + data[i+1]['poster_path']
                    new_img_2.alt = data[i+1]['original_title']
                    new_img_2.id = i+1
                    let a_tag_2 = document.createElement('a')
                    a_tag_2.href = `/movie_info/${data[i+1]['id']}`
                    let div_2 = document.createElement('div')
                    div_2.id = `fig_caption${i+1}`
                    div_2.style.display = 'none'
                    let fig_cap_2 = document.createElement('figcaption')
                    let fig_cap_2_text = document.createElement('h4')
                    fig_cap_2_text.innerHTML =`IMDB : ${data[i+1]['vote_average']}`
                    let fig_cap_2_text_2 = document.createElement('h4')
                    fig_cap_2_text_2.innerHTML = data[i+1]['original_title']
                    fig_cap_2.appendChild(fig_cap_2_text)
                    fig_cap_2.appendChild(fig_cap_2_text_2)
                    div_2.appendChild(fig_cap_2)
                    a_tag_2.appendChild(new_img_2)
                    fig_2.appendChild(a_tag_2)
                    fig_2.appendChild(div_2)
                    new_td_2.appendChild(fig_2)
                    new_row.appendChild(new_td_2)
                    new_table.appendChild(new_row)}
                catch{
                    let new_row = document.createElement('tr')
                    new_row.id = 'table_rows'
                    let new_td_1 = document.createElement('td')
                    let fig_1 = document.createElement('figure')
                    let new_img_1 = document.createElement('img')
                    new_img_1.className = 'poster'
                    new_img_1.src = base_url_poster + data[i]['poster_path']
                    new_img_1.alt = data[i]['original_title']
                    new_img_1.id = i
                    let a_tag_1 = document.createElement('a')
                    a_tag_1.href = `/movie_info/${data[i]['id']}`
                    let div_1 = document.createElement('div')
                    div_1.id = `fig_caption${i}`
                    div_1.style.display = 'none'
                    let fig_cap_1 = document.createElement('figcaption')
                    let fig_cap_1_text = document.createElement('h4')
                    fig_cap_1_text.innerHTML =`imdb : ${data[i]['vote_average']}`
                    let fig_cap_1_text_1 = document.createElement('h4')
                    fig_cap_1_text_1.innerHTML = data[i]['original_title']
                    fig_cap_1.appendChild(fig_cap_1_text)
                    fig_cap_1.appendChild(fig_cap_1_text_1)
                    div_1.appendChild(fig_cap_1)
                    a_tag_1.appendChild(new_img_1)
                    fig_1.appendChild(a_tag_1)
                    fig_1.appendChild(div_1)
                    new_td_1.appendChild(fig_1)
                    new_row.appendChild(new_td_1)
                    new_table.appendChild(new_row)
                        
                }
                


            }
            $("img").mouseover(function(){
                // console.log(data['results'][parseInt(this.id)]['original_title'])
                // console.log(data['results'][parseInt(this.id)]['vote_average'])
                // console.log(document.getElementById(this.id))
                document.getElementById(this.id).style.transitionDuration = "0.6s";
                document.getElementById(this.id).style.opacity = 0.2
                // console.log(document.getElementById(this.id).childNodes)
                // console.log(document.getElementById(`fig_caption${this.id}`))
                document.getElementById(`fig_caption${this.id}`).style.display = "block"
                
            })
            $("img").mouseout(function(){
                // console.log(data['results'][parseInt(this.id)]['original_title'])
                // console.log(data['results'][parseInt(this.id)]['vote_average'])
                // console.log(document.getElementById(this.id))
                document.getElementById(this.id).style.transitionDuration = "0.6s";
                document.getElementById(this.id).style.opacity = 1
                document.getElementById(`fig_caption${this.id}`).style.display = "none"
            })
            
            
        }

    })

}



$('#next__list, #bottom_next__list').click(function(){
    let genre_id= $('#imdb__genre option:selected').val()
    let rate= $('.ratings option:selected').val()
    let year = $('#years option:selected').val()
    let search_query =  $('#specific_movie').val()
    next_page(page_number+=1,genre_id,rate,year,search_query)
}
)
$('#previous__list, #bottom_previous__list').click(function(){
    let genre_id= $('#imdb__genre option:selected').val()
    let rate= $('.ratings option:selected').val()
    let year = $('#years option:selected').val()
    let search_query =  $('#specific_movie').val()
    next_page(page_number-=1,genre_id,rate,year,search_query)
}
)

$('#by_page , #bottom_by_page').click(function(){
    let genre_id= $('#imdb__genre option:selected').val()
    let rate= $('.ratings option:selected').val()
    let year = $('#years option:selected').val()
    let search_query =  $('#specific_movie').val()
    if(this.id=='by_page'){
        let page_numbers= parseInt(document.getElementById('page_number').value)
        // console.log(page_numbers,rate,year)
        page_number = page_numbers
   

next_page(page_numbers,genre_id,rate,year,search_query)

    }

    else{
        let page_numbers= parseInt(document.getElementById('page_numbero').value)
        page_number = page_numbers
   

    next_page(page_numbers,genre_id,rate,year,search_query) 
    }
   
   
})





$('#search_movie').click(function(){
    page_number = 1
    
        
        let genre_id= ($('#imdb__genre option:selected').val())
        let rate= $('.ratings option:selected').val()
        let year = $('#years option:selected').val()
        let search_query =  $('#specific_movie').val()
        next_page(page_number,genre_id,rate,year,search_query)

    })

    
// $('.genre').change(function(){
//     // console.log(this.id)
//     console.log($(this).val())
//     // console.log($(this).text())
//     console.log($('#imdb__genre option:selected').text())
// })




function give_me_id(e){
   
   
    document.getElementById(e.id).style.opacity ="0.2"
    
    
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



    
    

    
    


