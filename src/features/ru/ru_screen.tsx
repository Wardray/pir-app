import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { Button } from "../../core/ui/button/button";
import { StrokePanel, Typography } from "../../core/ui/typography/typography";
import { Select } from "../../core/ui/select/select";
import { Icon } from "../../core/ui/icon/icon";
import { useEffect, useRef, useState } from "react";
import { EnglishLocale, RussiaLocale, StoreLocale } from "./store";
import { Cart } from "../cart";

export const RuScreenPath = "/ru";
export const RuScreen = observer(() => {
  const youtubeClick = () => {
    window.open("https://www.youtube.com/@pir-innovation-platform", "_blank");
  };
  const gitClick = () => {
    window.open("https://gitlab.com/miru-pir", "_blank");
  };
  const ref = useRef<HTMLDivElement>(null);
  const refTeam = useRef<HTMLDivElement>(null);
  const refAboutUs = useRef<HTMLDivElement>(null);
  const refFooter = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   ref.current?.scrollIntoView();
  // }, []);

  // const scrollToPosition = (position: number) => {
  //   window.scrollTo({
  //     top: position,
  //     behavior: "smooth",
  //   });
  // };
  // document.getElementById("divFirst").scrollIntoView();

  const navigate = useNavigate();
  const [localeStore] = useState(new StoreLocale());
  const handleLanguageChange = (value: string) => {
    if (value === "en") {
      localeStore.setLocale(new RussiaLocale());
    } else {
      localeStore.setLocale(new EnglishLocale());
    }
  };

  return (
    <>
      <div
        ref={ref}
        className="header"
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          marginLeft: 120,
          marginTop: 64,
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <img
              style={{ width: 247, height: 68 }}
              src={localeStore.locale.logo}
              alt="logo"
            />
          </div>
          <div style={{ marginLeft: 130, display: "flex" }}>
            <Typography
              style={{ padding: 20 }}
              fontSize={20}
              strokePanel={StrokePanel.Regular}
              color={"#154E65"}
              text={localeStore.locale.mainHeader}
            />
            <Typography
              onClick={() =>
                refAboutUs.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              style={{ padding: 20 }}
              fontSize={20}
              strokePanel={StrokePanel.Regular}
              color={"#154E65"}
              text={localeStore.locale.aboutUsHeader}
            />
            <Typography
              onClick={() =>
                refTeam.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              style={{ padding: 20 }}
              fontSize={20}
              strokePanel={StrokePanel.Regular}
              color={"#154E65"}
              text={localeStore.locale.teamText}
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <Button
            onClick={() =>
              refFooter.current?.scrollIntoView({
                behavior: "smooth",
              })
            }
            background={"#154E65"}
            width={205}
            height={44}
            text={localeStore.locale.contacUsButton}
          />
          <Button background={"white"} width={97} height={44} text={"ru"} />
          <Select
            value={localeStore.locale.language}
            onChange={handleLanguageChange}
            options={[
              { value: "ru", label: "RU" },
              { value: "en", label: "EN" },
            ]}
          />
        </div>
      </div>

      <div
        className="body"
        style={{
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          marginTop: 64,
        }}
      >
        <div
          className="platform"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "calc(100% - 120px)",
            paddingLeft: 120,
          }}
        >
          <div style={{ marginTop: 30, width: 668, height: 485 }}>
            <Typography
              fontWeight={500}
              fontSize={70}
              strokePanel={StrokePanel.UltraBold}
              color={"#260C1A"}
              text={localeStore.locale.platformBoldText}
            />
            <div style={{ height: 50 }}></div>
            <Typography
              fontSize={40}
              strokePanel={StrokePanel.Regular}
              color={"#260C1A"}
              text={localeStore.locale.platformText}
            />
          </div>

          <img
            style={{
              width: 700,
            }}
            src={`${process.env.PUBLIC_URL}/platform.png`}
            alt="presentation"
          />
        </div>

        <div
          ref={refAboutUs}
          className="about us"
          style={{
            marginTop: 440,
            width: "100% - 100px",
            height: 580,
            backgroundColor: "#154E65",
            borderRadius: 40,
            marginRight: 50,
            marginLeft: 50,
          }}
        >
          <div style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                marginTop: 30,
                justifyContent: "center",
                marginBottom: 20,
              }}
            >
              <Icon icon={"BracketLeft"} />
              <Typography
                fontWeight={800}
                fontSize={40}
                strokePanel={StrokePanel.Regular}
                color={"white"}
                text={localeStore.locale.brieflyAboutUsHeading}
              />
              <Icon icon={"BracketRight"} />
            </div>
            <Typography
              style={{ marginLeft: 40, marginRight: 30 }}
              fontSize={24}
              strokePanel={StrokePanel.Regular}
              color={"white"}
              text={localeStore.locale.brieflyAboutUSText}
            />
            <div
              style={{
                width: "100% - 100px",
                marginTop: 40,
                display: "flex",
                paddingLeft: 20,
                paddingRight: 20,
                justifyContent: "space-between",
              }}
            >
              <img
                style={{
                  width: "90%",
                  height: 250,
                  borderRadius: 22,
                  paddingRight: 20,
                }}
                src={`${process.env.PUBLIC_URL}/1.png`}
                alt="about"
              />
              <img
                style={{
                  width: "90%",
                  height: 250,
                  borderRadius: 22,
                  paddingRight: 20,
                }}
                src={`${process.env.PUBLIC_URL}/2.png`}
                alt="about"
              />
              <img
                style={{
                  width: "90%",
                  height: 250,
                  borderRadius: 22,
                }}
                src={`${process.env.PUBLIC_URL}/3.png`}
                alt="about"
              />
            </div>
          </div>
        </div>
        <div className="advantages">
          <div
            style={{
              display: "flex",
              marginTop: 180,
              justifyContent: "center",
              marginLeft: 40,
            }}
          >
            <Icon icon={"BracketLeft"} />
            <Typography
              fontWeight={800}
              fontSize={40}
              strokePanel={StrokePanel.UltraBold}
              color={"black"}
              text={localeStore.locale.advantagesHeading}
            />
            <Icon icon={"BracketRight"} />
          </div>
          <div
            style={{
              marginTop: 100,
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div>
              <div style={{ display: "flex" }}>
                <Icon icon={"MoneyIcon"} />
                <div
                  style={{
                    marginLeft: 10,
                    width: 3,
                    height: 160,
                    backgroundColor: "#FFA400",
                  }}
                ></div>
                <div style={{ width: 498, height: 156 }}>
                  <Typography
                    style={{ marginLeft: 5 }}
                    text={localeStore.locale.moneyText}
                    fontSize={20}
                    strokePanel={StrokePanel.Regular}
                    color={"black"}
                  />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <Icon icon={"StudentIcon"} />
                <div
                  style={{
                    marginLeft: 10,
                    width: 3,
                    height: 120,
                    backgroundColor: "#FFA400",
                  }}
                ></div>
                <div style={{ width: 498, height: 104 }}>
                  <Typography
                    style={{ marginLeft: 5 }}
                    text={localeStore.locale.studentText}
                    fontSize={20}
                    strokePanel={StrokePanel.Regular}
                    color={"black"}
                  />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <Icon icon={"PurposeIcon"} />
                <div
                  style={{
                    marginLeft: 10,
                    width: 3,
                    height: 160,
                    backgroundColor: "#FFA400",
                  }}
                ></div>
                <div style={{ width: 498, height: 104 }}>
                  <Typography
                    style={{ marginLeft: 5 }}
                    text={localeStore.locale.purposeText}
                    fontSize={20}
                    strokePanel={StrokePanel.Regular}
                    color={"black"}
                  />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <Icon icon={"ProtectIcon"} />
                <div
                  style={{
                    marginLeft: 10,
                    width: 3,
                    height: 141,
                    backgroundColor: "#FFA400",
                  }}
                ></div>
                <div style={{ width: 498, height: 130 }}>
                  <Typography
                    style={{ marginLeft: 5 }}
                    text={localeStore.locale.protectText}
                    fontSize={20}
                    strokePanel={StrokePanel.Regular}
                    color={"black"}
                  />
                </div>
              </div>
            </div>
            <div>
              <div style={{ display: "flex" }}>
                <Icon icon={"ResponsibilityIcon"} />
                <div
                  style={{
                    marginLeft: 10,
                    width: 3,
                    height: 100,
                    backgroundColor: "#FFA400",
                  }}
                ></div>
                <div style={{ width: 498, height: 78 }}>
                  <Typography
                    style={{ marginLeft: 5 }}
                    text={localeStore.locale.responsibilityText}
                    fontSize={20}
                    strokePanel={StrokePanel.Regular}
                    color={"black"}
                  />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <Icon icon={"TransparencyIcon"} />
                <div
                  style={{
                    marginLeft: 10,
                    width: 3,
                    height: 130,
                    backgroundColor: "#FFA400",
                  }}
                ></div>
                <div style={{ width: 498, height: 130 }}>
                  <Typography
                    style={{ marginLeft: 5 }}
                    text={localeStore.locale.transparencyText}
                    fontSize={20}
                    strokePanel={StrokePanel.Regular}
                    color={"black"}
                  />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <Icon icon={"LockIcon"} />
                <div
                  style={{
                    marginLeft: 10,
                    width: 3,
                    height: 110,
                    backgroundColor: "#FFA400",
                  }}
                ></div>
                <div style={{ width: 498, height: 104 }}>
                  <Typography
                    style={{ marginLeft: 5 }}
                    text={localeStore.locale.lockText}
                    fontSize={20}
                    strokePanel={StrokePanel.Regular}
                    color={"black"}
                  />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <Icon icon={"EffectivenessIcon"} />
                <div
                  style={{
                    marginLeft: 10,
                    width: 3,
                    height: 120,
                    backgroundColor: "#FFA400",
                  }}
                ></div>
                <div style={{ width: 498, height: 120 }}>
                  <Typography
                    style={{ marginLeft: 5 }}
                    text={localeStore.locale.effectivenessText}
                    fontSize={20}
                    strokePanel={StrokePanel.Regular}
                    color={"black"}
                  />
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <Icon icon={"CopyrightIcon"} />
                <div
                  style={{
                    marginLeft: 10,
                    width: 3,
                    height: 120,
                    backgroundColor: "#FFA400",
                  }}
                ></div>
                <div style={{ width: 498, height: 104 }}>
                  <Typography
                    style={{ marginLeft: 5 }}
                    text={localeStore.locale.copyrightText}
                    fontSize={20}
                    strokePanel={StrokePanel.Regular}
                    color={"black"}
                  />
                </div>
              </div>
            </div>
          </div>
          ;
        </div>
        <div
          className="strategy"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              marginTop: 180,
              justifyContent: "center",
            }}
          >
            <Icon icon={"BracketLeft"} />
            <Typography
              fontWeight={800}
              fontSize={40}
              strokePanel={StrokePanel.UltraBold}
              color={"black"}
              text={localeStore.locale.strategyHeading}
            />
            <Icon icon={"BracketRight"} />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{
                display: "flex",
                justifyContent: "center",
                width: "80%",
                height: "80%",
                marginTop: 100,
              }}
              src={localeStore.locale.strategyPhoto}
              alt="advantages"
            />
          </div>
        </div>
        <div
          ref={refTeam}
          className="team"
          style={{
            marginTop: 180,
            boxSizing: "border-box",
            width: "100%",
            height: 2404,
            top: 3461,
            background: "rgba(38, 12, 26, 0.95)",
          }}
        >
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
          >
            <Icon icon={"BracketLeft"} />
            <Typography
              fontWeight={800}
              fontSize={40}
              strokePanel={StrokePanel.UltraBold}
              color={"white"}
              text={localeStore.locale.teamHeading}
            />
            <Icon icon={"BracketRight"} />
          </div>
          <div
            style={{
              marginTop: 190,
              width: "100%",
              height: 2086,
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-evenly",
              }}
            >
              <Cart
                imageCart={`${process.env.PUBLIC_URL}/suhonos.png`}
                nameTextCart={localeStore.locale.sukhonosNameText}
                middleTextCart={localeStore.locale.sukhonosMiddleText}
                mainTextCart={localeStore.locale.sukhonosMainText}
              />
              <Cart
                imageCart={`${process.env.PUBLIC_URL}/orlov.png`}
                nameTextCart={localeStore.locale.orlovNameText}
                middleTextCart={localeStore.locale.orlovMiddleText}
                mainTextCart={localeStore.locale.orlovMainText}
              />
              <Cart
                imageCart={`${process.env.PUBLIC_URL}/shvedov.png`}
                nameTextCart={localeStore.locale.shvedovNameText}
                middleTextCart={localeStore.locale.shvedovMiddleText}
                mainTextCart={localeStore.locale.shvedovMainText}
              />
            </div>
            <div
              style={{
                marginTop: 190,
                display: "flex",
                width: "100%",
                justifyContent: "space-evenly",
              }}
            >
              <Cart
                imageCart={`${process.env.PUBLIC_URL}/sherbakov.png`}
                nameTextCart={localeStore.locale.shcherbakovNameText}
                middleTextCart={localeStore.locale.shcherbakovMiddleText}
                mainTextCart={localeStore.locale.shcherbakovMainText}
              />
              <Cart
                imageCart={`${process.env.PUBLIC_URL}/vovk.png`}
                nameTextCart={localeStore.locale.vovkNameText}
                middleTextCart={localeStore.locale.vovkMiddleText}
                mainTextCart={localeStore.locale.vovkMainText}
              />
              <Cart
                imageCart={`${process.env.PUBLIC_URL}/savva.png`}
                nameTextCart={localeStore.locale.savvaNameText}
                middleTextCart={localeStore.locale.savvaMiddleText}
                mainTextCart={localeStore.locale.savvaMainText}
              />
            </div>
            <div
              style={{
                marginTop: 180,
                display: "flex",
                width: "100%",
                justifyContent: "space-evenly",
              }}
            >
              <Cart
                imageCart={`${process.env.PUBLIC_URL}/losev.png`}
                nameTextCart={localeStore.locale.losevNameText}
                middleTextCart={localeStore.locale.losevMiddleText}
                mainTextCart={localeStore.locale.losevMainText}
              />
              <Cart
                imageCart={`${process.env.PUBLIC_URL}/brylev.png`}
                nameTextCart={localeStore.locale.brylovNameText}
                middleTextCart={localeStore.locale.brylovMiddleText}
                mainTextCart={localeStore.locale.brylovMainText}
              />
              <Cart
                imageCart={`${process.env.PUBLIC_URL}/frolova.png`}
                nameTextCart={localeStore.locale.frolovaNameText}
                middleTextCart={localeStore.locale.frolovaMiddleText}
                mainTextCart={localeStore.locale.frolovaMainText}
              />
            </div>
          </div>
        </div>
        <div className="Cooperation">
          <div
            style={{
              display: "flex",
              marginTop: 80,
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Icon icon={"BracketLeft"} />
            <Typography
              fontWeight={800}
              fontSize={40}
              strokePanel={StrokePanel.UltraBold}
              color={"black"}
              text={localeStore.locale.cooperationHeading}
            />
            <Icon icon={"BracketRight"} />
          </div>
          <div
            style={{
              marginLeft: 50,
              display: "flex",
              marginTop: 80,
              justifyContent: "center",
            }}
          >
            <img
              style={{
                width: 368,
                height: 331,
              }}
              src={`${process.env.PUBLIC_URL}/Cooperation.png`}
              alt="Cooperation"
            />
            <div
              style={{
                width: 1200,
                height: 331,
                marginLeft: 50,
                marginTop: 50,
              }}
            >
              <div
                style={{ width: "100%", height: 1, background: " #FFA400B2" }}
              ></div>
              <Typography
                style={{ marginTop: 20, marginBottom: 20 }}
                fontSize={24}
                strokePanel={StrokePanel.Regular}
                color={"#260C1A"}
                text={localeStore.locale.cooperationText}
              />
              <div
                style={{ width: "100%", height: 1, background: " #FFA400B2" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Typography
        fontWeight={400}
        style={{ display: "flex", justifyContent: "center", marginBottom: 50 }}
        fontSize={32}
        strokePanel={StrokePanel.Regular}
        color={"black"}
        text={localeStore.locale.slogan}
      />

      <div
        ref={refFooter}
        className="footer"
        style={{
          marginLeft: 50,
          display: "flex",
          width: "95%",
          height: 225,
          background: "#154E65",
          borderRadius: 40,
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            marginLeft: 50,
            marginTop: 20,
            width: "100%",
          }}
        >
          <div>
            <img
              style={{ width: 247, height: 68 }}
              src={localeStore.locale.logoFooter}
              alt="logo"
            />
          </div>
          <div
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <Typography
              onClick={() =>
                ref.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              style={{ padding: 20 }}
              fontSize={20}
              strokePanel={StrokePanel.Regular}
              color={"white"}
              text={localeStore.locale.mainFooter}
            />
            <Typography
              onClick={() =>
                refAboutUs.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              style={{ padding: 20 }}
              fontSize={20}
              strokePanel={StrokePanel.Regular}
              color={"white"}
              text={localeStore.locale.aboutUsFooter}
            />
            <Typography
              onClick={() =>
                refTeam.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              style={{ padding: 20 }}
              fontSize={20}
              strokePanel={StrokePanel.Regular}
              color={"white"}
              text={localeStore.locale.teamFooter}
            />
            <div style={{ display: "flex", marginLeft: 250, marginTop: 10 }}>
              <Icon onClick={youtubeClick} icon={"YouTube"} />
              <Icon onClick={gitClick} icon={"Git"} />
            </div>
            <div style={{ display: "inline-block", position: "relative" }}>
              <button
                onClick={() =>
                  ref.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                style={{
                  marginTop: 30,
                  marginLeft: 230,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxSizing: "border-box",
                  width: 132,
                  height: 44,
                  border: "1px solid #154E65",
                  borderRadius: 40,
                  backgroundColor: "white",
                  padding: "5px 20px",
                  fontSize: "16px",
                  color: "#154E65",
                  cursor: "pointer",
                }}
              >
                <Typography
                  fontSize={20}
                  color={"#154E65"}
                  text={localeStore.locale.buttonUpTextFooter}
                  strokePanel={StrokePanel.Regular}
                />
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 20,
            marginLeft: 50,
            width: "78%",
            height: 1,
            backgroundColor: "#FFFFFF",
          }}
        ></div>
        <div style={{ display: "flex", marginLeft: 35 }}>
          <div>
            <div style={{ display: "flex" }}>
              <Icon icon={"Phone"} />
              <Typography
                style={{ marginTop: 10 }}
                text={"+7(499)745-09-12"}
                fontSize={20}
                strokePanel={StrokePanel.Regular}
                color={"white"}
              />
            </div>
            <div style={{ display: "flex" }}>
              <Icon icon={"Letter"} />
              <Typography
                style={{ marginTop: 10 }}
                fontSize={20}
                strokePanel={StrokePanel.Regular}
                color={"white"}
                text={"mailto:miru-pir@inbox.ru"}
              />
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", marginLeft: 50 }}
          >
            <div style={{ display: "flex" }}>
              <Icon icon={"Home"} />
              <Typography
                style={{ marginTop: 10 }}
                text={localeStore.locale.adressFooter}
                fontSize={20}
                strokePanel={StrokePanel.Regular}
                color={"white"}
              />
            </div>
            <div style={{ display: "flex" }}>
              <Icon icon={"Clock"} />
              <Typography
                style={{ marginTop: 10 }}
                fontSize={20}
                strokePanel={StrokePanel.Regular}
                color={"white"}
                text={localeStore.locale.workingHoursFooter}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
