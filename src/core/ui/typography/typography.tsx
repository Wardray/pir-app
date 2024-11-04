export enum StrokePanel {
  Regular = "Regular",
  UltraBold = "UltraBold",
}
interface IPropsText {
  fontSize: number;
  strokePanel: StrokePanel;
  color: string;
  text?: string | number;
  style?: React.CSSProperties;
  contentEditable?: boolean;
  onClick?: Function;
  fontWeight?: number;
}

export const Typography = (props: IPropsText) => {
  return (
    <div
      onClick={() => {
        if (props.onClick) props.onClick();
      }}
      suppressContentEditableWarning={true}
      contentEditable={props.contentEditable ? "true" : "false"}
      style={Object.assign(
        {
          fontFamily: "Ubuntu, sans-self",
          fontStyle: "normal",
          fontWeight: props.fontWeight ?? 100,
          fontSize: props.fontSize,
          color: props.color,
        },
        props.style
      )}
    >
      {props.text}
    </div>
  );
};
