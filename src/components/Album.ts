export interface IAlbum {
    name: string;
    author: IAuthor;
    year: string | number;
    duration: string | number;
    cover: string;
    link?: string;
}

export interface IAuthor {
    name: string;
    band?: IBand;
    link?: string;
}

export interface IBand {
    voice: string;
    guitar: string;
    guitar2: string;
    bass: string;
    drums: string;
    keyboards: string;
}