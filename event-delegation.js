// This concept suggests . if there is a parent with numerous amount of childs which has a click functionality
// Then instead of attaching a click handler to every child we must attach only one to the parent and make use of e.target to perform operations

//DEFINITIOn : The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.
let selectedID;
document.getElementById('a').addEventListener('click',(e) =>{

    if(selectedID){
        selectedID.classList.remove('active');
    }
    selectedID = e.target;
    selectedID.classList.add('active');
  } );