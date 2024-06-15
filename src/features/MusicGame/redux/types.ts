export type MusicPlayer = {
    id: string;
    playerName: string;
    chosenSong: string;
    playerGuesses: string[];
};

export type MusicGameType = {
    players: MusicPlayer[];
    leadPlayer: string;
    weekNumber: number;
    currentSongs: string[];
};
