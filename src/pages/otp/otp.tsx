import {
  ConfirmationMobile,
  useConfirmation,
} from "@alfalab/core-components/confirmation/mobile";

import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../constants";
import { useEffect } from "react";

export const OtpPage = () => {
  const navigate = useNavigate();

  const { confirmationScreen, setConfirmationState, setConfirmationScreen } =
    useConfirmation();

  useEffect(() => {
    setTimeout(() => {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value"
      )!.set; 

      document.querySelectorAll("input").forEach((el) => {
        el.inputMode = 'none';
        nativeInputValueSetter!.call(el, "0");

        const event = new Event("input", { bubbles: true });

        el.dispatchEvent(event);
      });

      document.querySelectorAll("input")[5].blur();
    }, 100);
  }, []);

  const handleContinue = () => {
    navigate(PATHS.consent);
  };

  return (
    <div className={styles.wrap} onClick={handleContinue}>
      <ConfirmationMobile
        requiredCharAmount={6}
        alignContent="center"
        phone="+7 ··· ··· 12 34"
        className={styles.otp}
        screen={confirmationScreen}
        state={"INITIAL"}
        onChangeState={setConfirmationState}
        onChangeScreen={setConfirmationScreen}
        onInputFinished={() => {}}
        onSmsRetryClick={() => {}}
      />
    </div>
  );
};
