function toggleMenu() {
    var togglevar = document.getElementsByClassName('menu-block')[0];
    var boardcontainer = document.getElementsByClassName('board-container')[0];
    if(togglevar.style.display == 'none'){
        togglevar.style.display = '';
    }
    else{
        togglevar.style.display = 'none';
        boardcontainer.style.float = 'center';
    }
}
var projectListObject = [
    {
        name: 'Pro_JS'
    }
];

var idBoard=0;
var idProject=0;

function addBoard(id){
    idBoard++;
    console.log('idBoard in add Board func = '+ idBoard);

    var templateBoard = '<div class="board-name board-block" id=' + idBoard + '>' + id.value +
                            '<span class="button">'+
                                '<button class="add-project" type="submit" value="Add Project" onclick="addProject(idBoard)">Add Project</button>'+
                                '<button class="remove-board" type="submit" value="Remove Board" onclick="removeBoard(idBoard)">Remove Board</button>'+
                            '</span>'+
                        '</div>';
                        document.getElementById('board-block').innerHTML += templateBoard;
}

function addProject(idBoard){
    projectListObject.forEach(function(value, index){

        idProject++;
        console.log('idBoard in add Project func = '+ idBoard);
        console.log('idProject in add Project func = '+ idProject);
    
        var template = '<div class="project-card">'+
                            '<h4>' + value.name + '</h4>'+
                            '<ol>'+
                                '<li>Task One</li>'+
                                '<li>Task Two</li>'+
                            '</ol>'+
                        '</div>';
        document.getElementById(idBoard).innerHTML += template;
    });
}

function removeBoard(idBoard){

    document.getElementById('board-block').innerHTML = '';
    document.getElementById('projects').innerHTML = '';
}