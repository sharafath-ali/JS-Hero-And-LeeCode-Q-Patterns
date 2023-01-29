let userHeight = 1050;

if (userHeight===NaN) {
    throw new Error("notANumberError");
} else if (userHeight > 200) {
    throw new Error("hugeHeightError");
} else if (userHeight < 40) {
    throw new Error("tinyHeightError");
} else {
    console.log("Valid height");
}
