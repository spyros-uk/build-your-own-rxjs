export default function ajax(url) {
  return {
    subscribe(observer) {
      fetch(url)
        .then(response => response.json())
        .then(observer.next)
        .catch(observer.error)
        .finally(observer.done);
    }
  };
}
