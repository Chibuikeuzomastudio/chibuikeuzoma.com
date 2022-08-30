let timeoutId: number | undefined = undefined;
const documentHeight = function () {
    clearTimeout(timeoutId);
    timeoutId= setTimeout(()=>{
        const doc = document.documentElement
        doc.style.setProperty('--vh', `${window.innerHeight}px`)
    }, 200);
}

export {documentHeight}