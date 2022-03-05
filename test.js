function solution(kind = "french") {
  let sorts = [],
    card_numbers = [],
    deck = [];

  switch (kind) {
    case "spanish":
      sorts = ["coins", "cups", "swords", "batons"];
      card_numbers = [
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
        "knave",
        "knight",
        "king",
      ];
      break;
    case "swiss":
      sorts = ["shields", "roses", "bells", "acorns"];
      card_numbers = [
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "knave",
        "knight",
        "king",
      ];
      break;
    default:
      sorts = ["hearts", "clubs", "diamonds", "spades"];
      card_numbers = [
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
        "jack",
        "queen",
        "king",
        "ace",
      ];
      break;
  }

  sorts.forEach((s) => {
    card_numbers.forEach((c) => {
      deck.push(`${c}_of_${s}`);
    });
  });
  return deck;
}

console.log(solution("swiss"));
