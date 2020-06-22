function isNullOrUndefined(reference) {
  return reference == null;
}

function isNotObject(variable) {
  return typeof variable !== "object";
}

function deepEqual(firstObject, secondObject) {
  if (firstObject === secondObject) {
    return true;
  }

  if (
    isNullOrUndefined(firstObject) ||
    isNullOrUndefined(secondObject) ||
    isNotObject(firstObject) ||
    isNotObject(secondObject)
  ) {
    return false;
  }

  let propertiesCounterOfFirstObject,
    propertiesCounterOfSecondObject = 0;

  for (let property in firstObject) {
    propertiesCounterOfFirstObject++;
  }

  for (let propertyOfSecondObject in secondObject) {
    propertiesCounterOfSecondObject++;
    if (
      !(propertyOfSecondObject in firstObject) ||
      !deepEqual(
        firstObject[propertyOfSecondObject],
        secondObject[propertyOfSecondObject]
      )
    ) {
      return false;
    }

    return propertiesCounterOfFirstObject === propertiesCounterOfSecondObject;
  }
}
