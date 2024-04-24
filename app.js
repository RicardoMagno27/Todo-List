document.querySelector('#push').onclick = function(){
    if(document.querySelector('.form input').value.length == 0){
        alert("Digite alguma Coisa")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('.form input').value}
                </span>
                <button class="delete"> <img src="icon.png" alt="" srcset="">
                <i class="fa-sharp fa-solid fa-trash-xmark"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }


}