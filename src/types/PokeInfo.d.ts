export type AbilityInfo = {
    ability: Ability;
    is_hidden: boolean;
    slot: number;
};

export type Ability = {
    name: string;
    url: string;
};

export type PokeType = {
    slot: number;
    type: TypeDetails;
};

export type TypeDetails = {
    name: string;
    url: string;
}

export type SpritesInfo = {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: OtherSprites;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    version: any;
}

export type OtherSprites = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dream_world: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    home: any;
    'official-artwork': SpriteArtwork;
}

export type SpriteArtwork = {
    front_default: string;
    front_shiny: string;
}

export type MoveInfo = {
    move: MoveDetails;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    version_group_details : any;
}

export type MoveDetails = {
    name: string;
    url: string;
}
