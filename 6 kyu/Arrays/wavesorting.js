function waveSort(arr) {
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 1; i += 2) {

        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

    }

    console.log(arr);
}

//EJEMPLOS:
/**
 * 
 * function waveSort(arr) {
  arr.sort((a,b) => b - a);
  
  for(let i = 0; i < Math.floor(arr.length / 2); i++) {
    arr.splice((i *2 +1), 0, arr.pop());
  }
  

}
 * 
 */

/**
 * 
 * function ascending(a, b) {
	return a - b;
}

function waveSort(arr) {
  arr.sort(ascending);
  for (var i = 0; i < arr.length - 1; i += 2) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
  }
}
 * 
 */

//BUSCAR EL PATRÓN