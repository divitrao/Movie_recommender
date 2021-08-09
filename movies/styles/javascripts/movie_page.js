


console.log('hemlo')
console.log(data)
// const data = JSON.parse(("{{data|escapejs}}"))
// console.log(data)

$('#next__list').click(function(){
    console.log('hi i am clicked')
}
)

// $(document).on('submit','#task_form',function(e){
//     e.preventDefault();
//     $.ajax({
//         type: 'POST',
//         url :'/search_func' ,
//         data:{
//             page:$('#next__list').val(),
//             csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()

//         },
//         success:function(){
//             document.getElementById('next__list').value = parseInt(document.getElementById('next__list').value) + 1
//             console.log(document.getElementById('next__list').value)
//             let get_height = document.querySelector('#list_of__pictures')
//             let height = get_height.offsetHeight
//             let my_obj = document.getElementById('table_row')
//             // my_obj.remove()
//             document.getElementById('list_of__pictures').style.height = `${height}px`
//             console.log(my_obj,height)
//         }
//     })
// })






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



    
    

    
    


