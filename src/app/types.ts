export type Projekt = {
    id: number;
    Name: string;
    Ort: string;
    Personinnen: Person[];
    Beschreibung_1: string;
    Beschreibung_2: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    documentId: string;
    Titelbild: Bild;
    Weitere_Bilder: Bild[];
    Untertitel: string;
};

export type Person = {
    id: number;
    Person: string;
};

export type Bild = {
    alternativeText: string;
    caption: string;
    createdAt: string;
    documentId: string;
    ext: string;
    formats: {
        small: {
            url: string;
        };
        medium: {
            url: string;
        };
        large: {
            url: string;
        };
        thumbnail: {
            url: string;
        };
    };
    hash: string;
    height: number;
    id: number;
    mime: string;
    name: string;
    previewUrl: string;
    provider: string;
    provider_metadata: string;
    size: number;
    publishedAt: "string";
    updatedAt: "string";
    width: number;
    url: string;
};