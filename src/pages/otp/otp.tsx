import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../constants";
import { useEffect, useState } from "react";
import { Typography } from "@alfalab/core-components/typography";
import { Button } from "@alfalab/core-components/button";
import { Gap } from "@alfalab/core-components/gap";

export const OtpPage = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState(59);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  const handleContinue = () => {
    navigate(PATHS.consent);
  };

  return (
    <div className={styles.wrap} onClick={handleContinue}>
      <div className={styles.otp}>
        <Typography.TitleMobile tag="h3" view="small" font="system">
          Введите код из сообщения
        </Typography.TitleMobile>
        <Gap size={24} />
        <Typography.Text view="primary-medium">
          Код отправлен на +7 ··· ··· 12 34
        </Typography.Text>
        <Gap size={32} />
        <div className={styles.code}>
          {new Array(6).fill(0).map((_, i) => (
            <Typography.Title
              tag="div"
              view="medium"
              font="system"
              className={styles.codeInput}
              key={i}
            >
              0
            </Typography.Title>
          ))}
        </div>
        <Gap size={12} />
        {count <= 0 ? (
          <Button view="secondary" size="xs">
            Запросить код повторно
          </Button>
        ) : (
          <>
            <Typography.Text view="primary-small" className={styles.countdown}>
              Запросить повторно можно через 00:
              {count >= 10 ? count : `0${count}`}
            </Typography.Text>
            <Gap size={20} />
          </>
        )}
        <Gap size={12} />
        <Typography.Text view="primary-small" weight="medium">
          Не приходит сообщение?
        </Typography.Text>
      </div>
    </div>
  );
};
