function solution(kind = "french") {
  let result = [];
  let numbers = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];
  let plus = ["jack", "queen", "king", "ace", "knave", "knight", "king"];
  let decks = {
    french: ["hearts", "clubs", "diamons", "spades"],
    spanish: ["coins", "cups", "swords", "batons"],
    swiss: ["shields", "roses", "bells", "acorns"],
  };

  decks[kind].forEach((item) => {
    let from = kind === "swiss" ? 5 : 0;
    let to = 9;

    for (let i = from; i <= to; i++) {
      result.push(`${numbers[i]}_of_${item}`);
    }

    from = kind === "french" ? 0 : 4;
    to = kind === "french" ? 3 : 6;

    for (let i = from; i <= to; i++) {
      result.push(`${plus[i]}_of_${item}`);
    }
  });
  return result;
}

console.log(solution("swiss"));
