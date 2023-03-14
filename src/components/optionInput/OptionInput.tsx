import { useEffect, useState } from "react";
import type { OptionProps } from "../../types";
import ColorPicker from "../colorPicker/ColorPicker";
import './optionInput.css'

const OptionInput = (props: OptionProps) => {
    const {index, value, color='#bbb', onChange} = props;
    const [option, setOption] = useState<string>(value ? value : "");
    const [curColor, setCurColor] = useState<string>(color ? color : "");
    const [trueIndex, setTrueIndex] = useState<number>(index);
    useEffect(() => {
        setOption(value ? value : "");
        setCurColor(color ? color : color);
    }, [value, color]);

    useEffect(() => {
        let child = document.getElementById(`option-${index}`);
        let parent = child?.parentNode;
        let tIndex = Array.prototype.indexOf.call(parent?.children, child);
        setTrueIndex(tIndex);
    }, [index]);

    return (
        <div className="singleOption" id={`option-${index}`}>
            <input
                className="optionInput"
                type="text"
                name="option"
                onChange={(e) => {
                    setOption(e.target.value);
                    onChange(trueIndex, e.target.value, curColor);
                }}
                placeholder="Прекрасное!"
                value={option}
                />
            <ColorPicker
                background={color}
                onChange={(newColor: string) => {
                    setCurColor(newColor);
                    onChange(trueIndex, option, newColor);
                }}
            />
            <div className="cross" onClick={() => {
                document.getElementById(`option-${index}`)?.remove();
                onChange(trueIndex, undefined, undefined)
            }}/>
        </div>
    );
}

export default OptionInput;