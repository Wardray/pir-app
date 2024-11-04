import { StrokePanel, Typography } from "../core/ui/typography/typography";

interface ICartProps {
  imageCart: string;
  nameTextCart: string;
  middleTextCart: string;
  mainTextCart: string;
}
export const Cart = (props: ICartProps) => {
  return (
    <div style={{ width: 370 }}>
      <div style={{ position: "absolute" }}>
        <img
          style={{
            position: "relative",
            width: 193,
            bottom: 75,
            left: 89,
          }}
          src={props.imageCart}
          alt="img"
        />
      </div>
      <img
        style={{ width: 370 }}
        src={`${process.env.PUBLIC_URL}/0.png`}
        alt="img"
      />
      <div
        style={{
          position: "absolute",
        }}
      >
        ``
        <div
          style={{ width: 300, position: "relative", bottom: 420, left: 45 }}
        >
          <Typography
         
            fontWeight={500}
            text={props.nameTextCart}
            fontSize={32}
            strokePanel={StrokePanel.Regular}
            color={"black"}
          />
          <Typography
            style={{ marginTop: 30 }}
            text={props.middleTextCart}
            fontSize={20}
            strokePanel={StrokePanel.Regular}
            color={"black"}
          />
          <Typography
            style={{ marginTop: 30 }}
            text={props.mainTextCart}
            fontSize={16}
            strokePanel={StrokePanel.Regular}
            color={"black"}
          />
        </div>
      </div>
    </div>
  );
};
