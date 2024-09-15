import { Typography } from "@alfalab/core-components/typography";
import { List } from "@alfalab/core-components/list";
import { Divider } from "@alfalab/core-components/divider";
import { CustomButton } from "@alfalab/core-components/custom-button";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../constants";
import styles from "./styles.module.css";
import { Gap } from "@alfalab/core-components/gap";
import { variantApp } from "../../theme";

export const ConsentPage = () => {
  const navigate = useNavigate();

  const handleSign = () => {
    navigate(PATHS.success);
  };

  return (
    <div className={styles.wrap}>
      <Typography.TitleMobile tag="h1" view="medium" font="system">
        Согласие на передачу данных
      </Typography.TitleMobile>
      <Gap size="l" />
      <Typography.Text view="primary-medium">
        {variantApp.consentPage.text}
      </Typography.Text>
      <Gap size="s" />
      <List tag="ul" marker="•">
        {variantApp.consentPage.list.map((text, i) => (
          <List.Item key={i}>{text}</List.Item>
        ))}
      </List>
      <Gap size="xl" />
      <Divider />
      <Gap size="xl" />
      <Typography.TitleMobile tag="h3" view="medium" font="system">
        Ваши счета
      </Typography.TitleMobile>
      <Gap size="l" />
      {variantApp.consentPage.accounts}
      <Gap size="xl" />
      <Divider />
      <Gap size="xl" />
      <Typography.Text view="primary-small">
        Согласие действует 1 год и может быть отозвано в любой момент
      </Typography.Text>
      <Gap size="2xl" />
      <CustomButton
        {...variantApp.buttonStyleProps}
        size="m"
        block={true}
        className={styles.btn}
        onClick={handleSign}
      >
        Подписать
      </CustomButton>
      <Gap size="m" />
    </div>
  );
};
