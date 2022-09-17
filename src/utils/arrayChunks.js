const shuffle = (arr)=>{
    let currentIndex = arr.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
    }
    return arr;
}

module.exports = (arr, num = 3) => {
    arr = shuffle(arr)

    const middleIndex = Math.ceil(arr.length/num);
    const thirdHalf = arr.splice(-middleIndex)
    const secondHalf = arr.splice(-middleIndex)
    const firstHalf = arr

    return [firstHalf, secondHalf, thirdHalf]
}