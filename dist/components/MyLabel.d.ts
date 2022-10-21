/// <reference types="react" />
import "./mylabel.css";
export interface Props {
    /**
     * The text of the label
     */
    label: string;
    /**
     * The size of the label
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * Text in upper case or not
     */
    allCaps: boolean;
    /**
     * Color of the text
     */
    color: "primary" | "secondary" | "tertiary";
    /**
     * Custom color of the text
     */
    fontColor?: string;
    /**
     * Background color of the text
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor, }: Props) => JSX.Element;
