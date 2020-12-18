console.log(dayjs())
var events = document.querySelectorAll('.container')
console.log(events)
// events.forEach(container function(){
//     console.log(events)
// })

//save txtarea input local storage ..
function SaveBtn(){
    var input_textarea = document.querySelector('#result');
    var save_button = document.querySelector('#SaveBtn');

    console.log(save_button)
    console.log(input_textarea)
    
    save_button.addEventListener('click', updateOutput);
    
    input_textarea.textContent = localStorage.getItem('content');
    input_textarea.value = localStorage.getItem('content');
    
    function updateOutput() {
         Del();
        localStorage.setItem('content', input_textarea.value);
        input_textarea.textContent = input_textarea.value;
    }
    }