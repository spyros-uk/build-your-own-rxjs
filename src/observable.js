export function createObservable(subscribe) {
  return {
    subscribe,
    pipe(operation) {
      return operation(this);
    }
  };
}
