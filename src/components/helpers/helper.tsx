import { NUMBER } from "../../constants/number";

export const scrollToBottomOfSection = (selectorId: string) => {
  const targetDiv = document.getElementById(selectorId);
  if (targetDiv) {
    // Scroll to the bottom of the target element directly
    window.scrollTo({
      top: targetDiv.offsetTop - NUMBER.ONE_HUNDRED,
      behavior: 'smooth', // Optional: Adds smooth scrolling effect
    });
  }
};

export const scrollToTopOfPage = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};