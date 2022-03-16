export const getLocalStorageForPage = () => {
  let page = localStorage.getItem('page');

  if (page) {
    return JSON.parse(localStorage.getItem('page'));
  } else {
    return 0;
  }
};
