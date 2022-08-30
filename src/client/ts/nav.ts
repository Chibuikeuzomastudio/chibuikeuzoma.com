import type { IButtonMap } from "../types/button";
import { hideModal } from "./modal";
// Footer

const toggleInfo = function () {
  const infoDetails = document.getElementById(
      "info__details"
  ) as HTMLDivElement | null;
  infoDetails?.toggleAttribute("hide");
}


const handleInfo = function () {
  const infoButton = document.getElementById(
    "info__btn"
  ) as HTMLDivElement | null;
  infoButton?.addEventListener("click", toggleInfo);
};


const handleYear = function () {
  const yearSpan = document.getElementById("year") as HTMLSpanElement | null;
  const currentYear: number = new Date().getFullYear();
  if (!yearSpan) return;
  yearSpan!.textContent = currentYear.toString();
};

const handleCV = function () {
  const cv = document.getElementById("cv__btn") as HTMLDivElement | null;
  const cvTextContainer = document.querySelector(
    "#cv__btn h1"
  ) as HTMLHeadingElement | null;
  cv?.addEventListener("mouseenter", function () {
    if (!cvTextContainer) return;
    cvTextContainer!.textContent = "Upon request";
    cvTextContainer!.classList.add("over")
  });
  cv?.addEventListener("mouseleave", function () {
    if (!cvTextContainer) return;
    cvTextContainer!.textContent = "CV";
    cvTextContainer!.classList.remove("over")
  });
};

// Header
interface FlexReturn {
  hide: {
    (position?: string ): void;
  };
}

const flexHeight = function (): FlexReturn {
  const flexDivs = document.querySelectorAll(
    ".flex__height"
  ) as NodeListOf<HTMLDivElement> | null;
  flexDivs?.forEach(function (flexDiv) {
    const randomHeight: number = Math.random() * 5;
    if (!flexDiv) return;
    flexDiv!.style.height = `${randomHeight}rem`;
  });
  return {
    hide: function (position?: string) {
      if (!position) return
      flexDivs?.forEach(function (flexDiv) {
        if (!flexDiv) return;
        const parent = flexDiv?.parentNode?.parentNode as HTMLDivElement;
        if (parent?.classList.contains(position))
          flexDiv?.toggleAttribute("hide");
      });
    },
  };
};

const scrollToTopCol = function (position?: string) {
  if(!position) return
  const column = document.querySelector(
    `.col.${position} .col__wrapper`
  ) as HTMLDivElement | null;
  column!.scrollTop = 0;
};

const handleHeader = function () {
  const flexDivs = flexHeight();
  const buttonMap: IButtonMap[] = [
    {
      id: "bio__btn",
      content: "bio",
      position: "first",
    },
    {
      id: "da__btn",
      content: "dear__audience",
      position: "second",
    },
    {
      id: "archive__btn",
      content: "archive",
      position: "third",
    },
    {
      id: "da__btn__mobile",
      content: "dear__audience__mobile",
    },
    {
      id: "archive__btn__mobile",
      content: "archive__mobile",
    },
  ];

  buttonMap.forEach(function (btn) {
    let btnEl = document.getElementById(btn.id) as HTMLDivElement | null;
    let contentEl = document.getElementById(
      btn.content
    ) as HTMLDivElement | null;
    if (!contentEl) return

    btnEl?.addEventListener("click", function () {
      contentEl?.toggleAttribute("hide");
      btn?.position || flexDivs.hide(btn?.position);
      !contentEl?.hasAttribute("hide") ? scrollToTopCol(btn?.position) : null;
      hideModal();
    });
  });
};

export { handleInfo, handleYear, handleCV, handleHeader };
