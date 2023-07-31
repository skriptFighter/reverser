// insert any value
let value = 123456789;

const reverse = function (value) {
  // declared this undefiend so i can use it outside of if statements
  let newValue;
  if (
    typeof value == "number" ||
    typeof value == "string" ||
    typeof value == "boolean"
  ) {
    newValue = value.toString();
    let array = [];

    //to insert the converted value to array
    let oldArray = Array.from(newValue);

    //i = the lenght of the given value ,
    // then we push the last index of value to array[]
    // then we push the index - 1 to array[] and so forth

    for (let i = oldArray.length - 1; i >= 0; i--) {
      array.push(oldArray[i]);
    }
    return array.join("");
  } else {
    return `your entered value: "${value}" can't be reversed`;
  }
};

console.log(reverse(value));
