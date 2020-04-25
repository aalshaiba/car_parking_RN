const i = 65;
const j = 91;
const codes = new Array(50);
const nums = new Array(10);
export const characters = () => {
  const chars = [];
  for (var k = i; k < j; k++) {
    const str = String.fromCharCode(k);
    chars.push({ value: str });
  }
  return chars;
};

export const codeNumbers = () => {
  const result = [];
  for (var i = 0; i < codes.length; i++) {
    result.push(i);
  }

  return result;
};

export const numbers = () => {
  const result = [];
  for (var i = 1; i < nums.length; i++) {
    result.push({ value: `${i}` });
  }

  return [...result, { value: "0" }];
};

export const customBlue = "#3498db";
export const mawaqifBlue = "#65A7C2";
export const FABColor = "#4894EC";
