export function orderByProps(obj, arrArgs) {
  const arr1 = [];
  const arr2 = [];
  for (const key in obj) {
    const val = obj[key];

    if (arrArgs.includes(key)) {
      arr1[arrArgs.indexOf(key)] = { key, value: val };
    } else {
      arr2.push({ key, value: val });
    }
  }

  arr2.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    return -1;
  });

  const needArr = arr1.concat(arr2);

  return needArr;
}
