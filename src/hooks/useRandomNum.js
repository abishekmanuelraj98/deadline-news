import { useState, useEffect } from "react";
const useRandomNum = () => {
  const [ranNum, setRanNum] = useState([]);
  const generateRandomNumbers = () => {
    const randomNumbers = new Array(5);
    for (let i = 0; i < randomNumbers.length; i++) {
      const random = Math.floor(Math.random() * 23 + 1);
      if (randomNumbers.includes(random) && !randomNumbers.includes(0)) {
        randomNumbers[i] = 0;
      } else {
        randomNumbers[i] = random;
      }
    }
    return randomNumbers;
  };
  useEffect(() => {
    const randomNumArr = generateRandomNumbers();
    setRanNum(randomNumArr);
  }, []);
  return ranNum;
};
export default useRandomNum;
