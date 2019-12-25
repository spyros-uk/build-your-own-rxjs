import { createObservable } from "./observable";

export function of(value) {
  if (Array.isArray(value))
    return createObservable(observer => {
      for (let x of value) {
        observer.next && observer.next(x);
      }
      observer.complete && observer.complete();
    });
}

export function map(f) {
  return inputObservable =>
    createObservable(outputObserver => {
      inputObservable.subscribe({
        next(value) {
          outputObserver.next(f(value));
        },
        error(error) {
          outputObserver.error(error);
        },
        complete() {
          outputObserver.complete && outputObserver.complete();
        }
      });
    });
}

export function filter(f) {
  return inputObservable =>
    createObservable(outputObserver => {
      inputObservable.subscribe({
        next(value) {
          if (f(value)) outputObserver.next(value);
        },
        error(error) {
          outputObserver.error(error);
        },
        complete() {
          outputObserver.complete && outputObserver.complete();
        }
      });
    });
}
