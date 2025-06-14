export function findByKey<T>(arr: T[], item: T, key: string = "_id") {
  return arr.find((x) => x[key] === item[key]);
}

export function findIndexByKey<T>(arr: T[], item: T, key: string = "_id") {
  return arr.findIndex((x) => x[key] === item[key]);
}

export function hasByKey<T>(arr: T[], item: T, key: string = "_id") {
  return !(findByKey(arr, item, key) == null);
}

export function mapToKey<T>(arr: T[], key: string) {
  return arr.map((x) => x[key]);
}

export function toParams(obj: any) {
  const params = new URLSearchParams();

  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      // For arrays, we push each element individually as key=value pairs
      obj[key].forEach((value) => params.append(key, value));
    } else {
      // For strings, just set the key=value pair
      params.set(key, obj[key]);
    }
  }

  return params;
}
