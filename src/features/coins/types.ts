export interface ICoinDetails {
    front: string;
    back: string;
    storyLink: string;
}

export interface CoinsInterface {
    id: string;
    count: number;
    selected: boolean;
    released: number;
    celebrating: number | null;
    theme: string;
    details: ICoinDetails;
}
