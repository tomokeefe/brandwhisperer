// Utility to prevent unwanted scroll behavior
export const preserveScrollPosition = () => {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  // Store scroll position
  sessionStorage.setItem('scrollPosition', scrollPosition.toString());
  
  return scrollPosition;
};

export const restoreScrollPosition = () => {
  const savedPosition = sessionStorage.getItem('scrollPosition');
  if (savedPosition) {
    const position = parseInt(savedPosition, 10);
    window.scrollTo(0, position);
    sessionStorage.removeItem('scrollPosition');
  }
};

export const preventAutoScroll = (event: Event) => {
  event.preventDefault();
  event.stopPropagation();
};

// Add this to components that need to prevent auto-scroll
export const useScrollPreservation = () => {
  const preserveScroll = () => {
    preserveScrollPosition();
  };

  const restoreScroll = () => {
    setTimeout(() => {
      restoreScrollPosition();
    }, 0);
  };

  return { preserveScroll, restoreScroll };
};
