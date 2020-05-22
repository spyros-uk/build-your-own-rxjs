import "./observable";
import { of, map, filter } from "./operators";

of([1, 2, 3, 4])
  .pipe(
      map(x => x * 10),
      map(x => x - 9),
      filter(x => x !== 11)
  )
  .subscribe({
    next(data) {
      console.log(data);
    }
  });
