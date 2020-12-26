export const listItemEnter = e =>{
    if(e.target.classList.contains('list-item')){
        if(e.target.classList.contains('active')){
        }else{
            e.target.className = 'list-item list-item-hover'
        }
    }else if(e.target.classList.contains('fas')){
        if(e.target.parentElement.parentElement.classList.contains('active')){
        }else{
            e.target.parentElement.parentElement.className = 'list-item list-item-hover'
        }
    }else{
        if(e.target.parentElement.classList.contains('active')){
        }else{
            e.target.parentElement.className = 'list-item list-item-hover'
        }
    }
}
export const listItemLeave = e =>{
    if(e.target.classList.contains('list-item')){
        if(e.target.classList.contains('active')){
            e.target.className = 'list-item active'
        }else{
            e.target.className = 'list-item'
        }
    }else if(e.target.classList.contains('fas')){
        if(e.target.parentElement.parentElement.classList.contains('active')){
            e.target.parentElement.parentElement.className = 'list-item active'
        }else{
            e.target.parentElement.parentElement.className = 'list-item'
        }
    }else{
        if(e.target.parentElement.classList.contains('active')){
            e.target.parentElement.className = 'list-item active'
        }else{
            e.target.parentElement.className = 'list-item'
        }
    }
}

export const makeActive = e => {
    const items = document.querySelectorAll('.list-item');
    items.forEach(item => {
        item.classList.remove('active');
    })
    if(e.target.classList.contains('list-item')){
        e.target.classList.add('active')
    }else if(e.target.classList.contains('fas')){
        e.target.parentElement.parentElement.classList.add('active')
    }else{
        e.target.parentElement.classList.add('active')
    }

}