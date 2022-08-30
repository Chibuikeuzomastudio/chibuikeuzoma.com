const shuffle = (array: Node[]): Node[]=>{
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }
  return array;
}

const randomiseImages = function () {
  const artworks = document.querySelectorAll(
    ".artworks"
  ) as NodeListOf<HTMLDivElement> | null;
  artworks?.forEach(function (artwork) {
    if (!artwork) return;
    const artworkChildren: Node[] = Array.from(artwork?.children);
    const shuffledChildren = shuffle(artworkChildren)
    shuffledChildren.forEach(aw => {
      artwork.append(aw)
    })
  });
};


export { randomiseImages };
