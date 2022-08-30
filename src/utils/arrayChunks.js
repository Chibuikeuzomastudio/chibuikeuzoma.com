const shuffle = (arr)=>{
    let currentIndex = arr.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
    }
    return arr;
}

module.exports = (arr, num, balanced=false) => {
    arr = shuffle(arr)
    if (num < 2) return [arr]
    let len = arr.length
    let out = []
    let i = 0
    let size

    if (len % num === 0) {
        size = Math.floor(len / num);
        while (i < len) {
            out.push(arr.slice(i, i += size))
        }
    } else if (balanced) {
        while (i < len) {
            size = Math.ceil((len - i) / num--);
            out.push(arr.slice(i, i += size));
        }
    }else  {
        n--;
        size = Math.floor(len/num);
        if (len % size === 0 ) size --;
        while (i < size * num) {
            out.push(arr.slice(i, i += size))
        }
        out.push (arr.slice(size * num));
    }
    return out
}