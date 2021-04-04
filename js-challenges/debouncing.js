let i = 0;
function getData(name){
    console.log('Fetching Data', ++i, name.value);
}

const betterFetch = debounce(getData,500, true);

function debounce(func, wait, immediate) {
    
    let timeout;
    console.log('Ye hai timeout', timeout)
    return function executedFunction() {
      let context = this;
      let args = arguments;
          
      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
  
      let callNow = immediate && !timeout;
  
      console.log('Timeout value before clear', timeout);
      clearTimeout(timeout);
      
      timeout = setTimeout(later, wait);
      console.log('Timeout value after settimeout', timeout);
      
      if (callNow) func.apply(context, args);
    };
  };