function waveSort(arr) {

    let arrayWave = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i % 2 === 0] >= arr[(i + 1) % 2]){
            arrayWave.push(arr[i]);
        } else{
            [arr[i], arr[(i + 1) % 2]] = [arr[(i + 1) % 2], arr[i]];
            arrayWave.push(arr[i]);
        }

    }


}