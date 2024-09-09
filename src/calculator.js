function add(numbers) {
  if (typeof numbers !== "string") {
    throw new Error("String not valid");
  }
  let delimeter = ",";
  if (numbers.length >= 3 && numbers.slice(0, 2) === "//") {
    delimeter = numbers.charAt(2);
    numbers = numbers.slice(3);
  }
  let re = new RegExp(`\\b${delimeter}|\n\\b`, "gi");
  const ArrayOfNumber = numbers.split(re);
  let sum = 0;
  let negativeNumberArray = [];
  for (let i = 0; i < ArrayOfNumber.length; i++) {
    let number = parseInt(ArrayOfNumber[i]);
    if (!number) {
      sum += 0;
    } else if (number < 0) {
      negativeNumberArray.push(number);
    } else {
      sum += number;
    }
  }
  if (negativeNumberArray.length > 0) {
    throw new Error(
      "negative numbers not allowed " + negativeNumberArray.join(",")
    );
  } else {
    console.log("sum", sum);
    return sum;
  }
}

add("//;\n1;2;");
