import { FC, useLayoutEffect } from "react";
import { Typography } from "@alfalab/core-components/typography";
import { InputMobile } from "@alfalab/core-components/input/mobile";
import { Gap } from "@alfalab/core-components/gap";
import { PasswordInput } from "@alfalab/core-components/password-input";
import { CustomButton } from "@alfalab/core-components/custom-button";
import { LogoIcon } from "./logo";
import { Cards } from "./cards";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../constants";

import styles from "./styles.module.css";

export const LoginPage: FC = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    document.body.classList.add(styles.body);

    return () => document.body.classList.remove(styles.body);
  }, []);

  const handleSubmit = () => {
    navigate(PATHS.otp);
  };

  return (
    <div className={styles.wrap}>
      <LogoIcon />
      <Cards className={styles.cards} />
      <div className={styles.form}>
        <Typography.TitleMobile tag="h1" view="medium" font="system">
          Вход в Банк Партнёр
        </Typography.TitleMobile>
        <Gap size="xl" />
        <InputMobile
          label="Логин"
          size="m"
          value="Ivanov_Ivan"
          block={true}
          defaultValue="1"
        />
        <Gap size="m" />
        <PasswordInput
          label="Пароль"
          size="m"
          type="password"
          value="123456789123456"
          block={true}
        />
        <Gap size="xl" />
        <CustomButton
          stateType="static-darkening"
          contentColor="black"
          backgroundColor="#BAF300"
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
