import { compareAsc, parse } from 'date-fns';

export const dateComparatorRev = (a, b, fieldName) =>
  compareAsc(
    parse(a[fieldName], 'yyyy-MM-dd', new Date()),
    parse(b[fieldName], 'yyyy-MM-dd', new Date())
  );
