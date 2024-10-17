import { MusicGameType } from "./types";

export const initialState: MusicGameType = {
  leadPlayer: "Peter",
  players: [
    {
      id: "sd;avjn;dbknf",
      playerName: "Peter",
      chosenSong: "youtube link Peter",
      playerGuesses: [
        "youtube link Radu B.",
        "youtube link Radu M.",
        "youtube link Alex",
        "youtube link Peter",
      ],
    },
    {
      id: "cm.nvvksjfnfzdb",
      playerName: "Alex",
      chosenSong: "youtube link Alex",
      playerGuesses: ["firstGuess", "secondGuess"],
    },
    {
      id: "vnalfbhakbzdzkn",
      playerName: "Radu B.",
      chosenSong: "youtube link Radu B.",
      playerGuesses: ["firstGuess", "secondGuess"],
    },
    {
      id: "xnvkjefbldavb.gdfqadS",
      playerName: "Radu M.",
      chosenSong: "youtube link Radu M.",
      playerGuesses: ["firstGuess", "secondGuess"],
    },
  ],
  weekNumber: 1,
  currentSongs: [],
};
