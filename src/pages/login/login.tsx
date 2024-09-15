import { FC, useLayoutEffect } from "react";
import { Typography } from "@alfalab/core-components/typography";
import { InputMobile } from "@alfalab/core-components/input/mobile";
import { Gap } from "@alfalab/core-components/gap";
import { PasswordInput } from "@alfalab/core-components/password-input";
import { CustomButton } from "@alfalab/core-components/custom-button";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../constants";
import { variantApp } from "../../theme";

import styles from "./styles.module.css";

export const LoginPage: FC = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    document.body.style.background = variantApp.loginPage.background;

    return () => {
      document.body.style.background = "";
    };
  }, []);

  const handleSubmit = () => {
    navigate(PATHS.otp);
  };

  return (
    <div className={styles.wrap}>
      {variantApp.logo}
      <div className={styles.cards}>{variantApp.loginPage.cards}</div>
      <div className={styles.form}>
        <Typography.TitleMobile tag="h1" view="medium" font="system">
          {variantApp.loginPage.title}
        </Typography.TitleMobile>
        <Gap size="xl" />
        <InputMobile
          label="Логин"
          size="m"
          value={variantApp.loginPage.loginInputValue}
          block={true}
          defaultValue="1"
        />
        <Gap size="m" />
        <PasswordInput
          label="Пароль"
          size="m"
          type="password"
          value="12345678912345"
          block={true}
        />
        <Gap size="xl" />
        <CustomButton
          {...variantApp.buttonStyleProps}
          size="m"
          block={true}
          onClick={handleSubmit}
        >
          Продолжить
        </CustomButton>
      </div>
    </div>
  );
};
