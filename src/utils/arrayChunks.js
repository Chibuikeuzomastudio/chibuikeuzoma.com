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
    let a = shuffle([...arr])

    const middleIndex = Math.ceil(a.length/num);
    const thirdHalf = a.splice(-middleIndex)
    const secondHalf =a.splice(-middleIndex)
    return [a, secondHalf, thirdHalf]
}