export function addResizeListener(callback: () => void): () => void {
  const handleResize = () => {
    callback();
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}
