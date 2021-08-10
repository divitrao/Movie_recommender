


// console.log('hemlo')
let max_pages = (data['total_pages']) // i'm getting this data from views.py  and i'm collecting it on html by jinja method and passign to this JS file
var token = config.tmdb_api;
// const data = JSON.parse(("{{data|escapejs}}"))
// console.log(data)
let page_number = 1
let base_url_poster = 'https://image.tmdb.org/t/p/original'

function next_page(n){
    // let  offet_top = document.getElementById('button_2').offsetTop
    if (n>500 || n<1 ){
        
        return
    }
    // if(n>1){
    //     document.getElementById('previous__list').disabled = false
    // }

    // console.log(document.getElementById('table_row'))
    document.getElementById('page_number').value = String(n)
    document.getElementById('page_numbero').value = String(n)
    let height_of_div = document.querySelector('#list_of__pictures').offsetHeight
    console.log(height_of_div)
    document.getElementById('table_row').remove()
    document.getElementById('list_of__pictures').style.height = `${height_of_div}px`
    
    // console.log(token)
    $.ajax({
        type:'GET',
        url:`https://api.themoviedb.org/4/discover/movie?api_key=${token}&page=${n}`,
        dataType: "json",
        success : function(data){
            data = data['results']
            let new_table = document.createElement('table')
            new_table.id = 'table_row'
            console.log(data[0]['poster_path'])
            document.getElementById('list_of__pictures').appendChild(new_table)
            // document.getElementById('button_2').offsetTop = `${offet_top}px`
            for(i=0;i<data.length;i=i+2){
                let new_row = document.createElement('tr')
                new_row.id = 'table_rows'
                let new_td_1 = document.createElement('td')
                let new_img_1 = document.createElement('img')
                new_img_1.className = 'poster'
                new_img_1.src = base_url_poster + data[i]['poster_path']
                new_td_1.appendChild(new_img_1)
                let new_td_2 = document.createElement('td')
                let new_img_2 = document.createElement('img')
                new_img_2.className = 'poster'
                new_img_2.src = base_url_poster + data[i+1]['poster_path']
                new_td_2.appendChild(new_img_2)
                new_row.appendChild(new_td_1)
                new_row.appendChild(new_td_2)
                new_table.appendChild(new_row)


            }
            
        }

    })

}

// if (page_number==1){
//     document.getElementById('previous__list').disabled = true
// }

$('#next__list, #bottom_next__list').click(function(){
    // console.log(page_number)
    // if (page_number>=1){
    //     document.getElementById('previous__list').disabled = false
    // }
    // if(page_number==max_pages-1){
    //     document.getElementById('next__list').disabled = true
    // }
    next_page(page_number+=1)
}
)
$('#previous__list, #bottom_previous__list').click(function(){
    // console.log(page_number)
    // if (page_number<=2){
    //     document.getElementById('previous__list').disabled = true
    // }
    // if(page_number<max_pages+1){
    //     document.getElementById('next__list').disabled = false
    // }
    next_page(page_number-=1)
}
)

$('#by_page , #bottom_by_page').click(function(){
    console.log(this.id)
    if(this.id=='by_page'){
        let page_numbers= parseInt(document.getElementById('page_number').value)
   page_number = page_numbers
   
//    if(page_numbers==max_pages){
//     document.getElementById('next__list').disabled = true
//    }
//    if(page_numbers==1){
//     document.getElementById('previous__list').disabled = true

//     // next_page(page_numbers)
// }
next_page(page_numbers)

    }

    else{
        let page_numbers= parseInt(document.getElementById('page_numbero').value)
        page_number = page_numbers
   
//         if(page_numbers==max_pages){
//             document.getElementById('next__list').disabled = true
//    }
//    if(page_numbers==1){
//             document.getElementById('previous__list').disabled = true

//     // next_page(page_numbers)
// }
    next_page(page_numbers) 
    }
    // console.log(this.id)
   
})






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



    
    

    
    


