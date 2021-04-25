// This concept suggests . if there is a parent with numerous amount of childs which has a click functionality
// Then instead of attaching a click handler to every child we must attach only one to the parent and make use of e.target to perform operations

let selectedID;
document.getElementById('a').addEventListener('click',(e) =>{

    if(selectedID){
        selectedID.classList.remove('active');
    }
    selectedID = e.target;
    selectedID.classList.add('active');
  } );