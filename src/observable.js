export function createObservable(subscribe) {
  return {
    subscribe,
    pipe(...operations) {
      if (!operations) return this;
      return operations.reduce((res, op) => op(res), this);
    }
  };
}
