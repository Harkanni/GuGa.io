export const handleNavigationScrolling = (setcurrentSection) => {
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    const sectionTopOffset = section.offsetTop;
    // const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTopOffset) {
      setcurrentSection(section.id);
    } else if (window.scrollY < 100) {
      setcurrentSection(false);
    }
  });
};
