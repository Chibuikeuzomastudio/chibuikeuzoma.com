let timeoutId: number | undefined | ReturnType<typeof setTimeout> = undefined;
const documentHeight = function () {
    clearTimeout(timeoutId);
    timeoutId= setTimeout(()=>{
        const doc = document.documentElement
        doc.style.setProperty('--vh', `${window.innerHeight}px`)
    }, 200);
}

export {documentHeight}