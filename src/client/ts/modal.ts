const hideModal = function () {
  const modal = document.querySelector("#modal") as HTMLDivElement | null;
  if (!modal) return
  if (modal!.hasAttribute("hide")) return;
  modal!.setAttribute("hide", "");
};

const hideInfoIfDisplayed = function () {
  const infoDetails = document.getElementById(
      "info__details"
  ) as HTMLDivElement | null;
  if (!infoDetails?.hasAttribute("hide")){
    infoDetails?.toggleAttribute("hide");
  }
}

const closeModal = function () {
  const closeModalBtn = document.querySelector(
    "#close"
  ) as HTMLDivElement | null;
  if (!closeModalBtn) return
  closeModalBtn!.addEventListener("click", function () {
    hideModal();
  });
};

const handleModal = function () {
  closeModal();
  const modal = document.getElementById("modal") as HTMLDivElement | null;
  const works = document.querySelectorAll(
    ".work__wrapper"
  ) as NodeListOf<HTMLDivElement> | null;
  if (!modal) return
  works?.forEach(function (work: HTMLDivElement) {
    work!.addEventListener("click", function () {
      hideInfoIfDisplayed()
      let imgModal = modal!.querySelector(
        ".m__img img"
      ) as HTMLImageElement | null;
      let imgPicture = work!.querySelector(".work picture source[type='image/jpeg']") as HTMLSourceElement | null;
      let src = imgPicture?.srcset.split(",").at(-1)?.trim()?.split(" ")[0]
      let capWork = work!.querySelector(
        ".caption p"
      ) as HTMLParagraphElement | null;
      let capModal = modal!.querySelector(
        ".m__caption p"
      ) as HTMLParagraphElement | null;

      imgModal!.src = src || "";
      capModal!.textContent = capWork!.textContent;
      modal!.removeAttribute("hide");

    });
  });
};

export { handleModal, hideModal };
