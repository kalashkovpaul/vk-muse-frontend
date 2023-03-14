export type MiniSlideData = {
    i: number;
    src: string;
}

export type SideBarData = {
    slides: Array<MiniSlideData>;
}

export type OptionProps = {
    index: number;
    key: number;
    value?: string;
    color?: string;
    onChange: Function;
}

export type OptionData = {
    option: string;
    votes: number;
    color: string;
}

export type SingleSlideData = {
    index: number;
    src: string;
    kind: "slide" | "question";
    questionKind: "" | "verticalbar";
    question: string;
    options: Array<OptionData>;
    background: string;
    fontColor: string;
    graphColor: string;
}

export type PresData = {
    slides: Array<SingleSlideData>;
};

type ColorPickerProps = {
    background: string;
    onChange: Function;
    position?: "left" | "right";
}

type ColorPickerState = {
    background: string;
    visibility: boolean;
    isShown: boolean;
}