const openLink = (url: string, newTab: boolean = false) => {
  if (newTab) return window.open(url, "_blank", "noreferrer");
  window.location.href = url;
};

export default openLink;
