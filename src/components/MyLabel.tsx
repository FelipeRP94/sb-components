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
}

export const MyLabel = ({
  allCaps = false,
  color = "primary",
  label = "No Label",
  size = "normal",
  fontColor,
}: Props) => (
  <span className={`label ${size} text-${color}`} style={{ color: fontColor }}>
    {allCaps ? label.toUpperCase() : label}
  </span>
);
