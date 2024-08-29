import { Typography } from "@alfalab/core-components/typography";
import { List } from "@alfalab/core-components/list";
import { Divider } from "@alfalab/core-components/divider";
import { Checkbox } from "@alfalab/core-components/checkbox";
import { CustomButton } from "@alfalab/core-components/custom-button";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../constants";

import styles from "./styles.module.css";
import { Gap } from "@alfalab/core-components/gap";

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
        Уважаемый Иванов Иван Иванович, Вы&nbsp;поручаете Банк-Партнёр (далее -
        Банк),&nbsp;передать в <strong>АО «Альфа-Банк»</strong> ваши данные:
      </Typography.Text>
      <Gap size="s" />
      <List tag="ul" marker="•">
        <List.Item>
          о ваших счетах в Банке, в т.ч. номер счёта, ваши ФИО, моб. телефон,
          дата и место рождения, почтовый адрес;
        </List.Item>
        <List.Item>об операциях по вашим счетам в Банке.</List.Item>
      </List>
      <Gap size="xl" />
      <Divider />
      <Gap size="xl" />
      <Typography.TitleMobile tag="h3" view="medium" font="system">
        Выберите счет
      </Typography.TitleMobile>
      <Gap size="l" />
      <Checkbox
        size={24}
        label="40702810102300000001"
        checked={true}
        boxClassName={styles.box}
      />
      <Gap size="m" />
      <Checkbox size={24} label="40702810402300000002" checked={false} />
      <Gap size="xl" />
      <Divider />
      <Gap size="xl" />
      <Typography.Text view="primary-small">
        Согласие действует 1 год и может быть отозвано в любой момент
      </Typography.Text>
      <CustomButton
        stateType="static-darkening"
        contentColor="black"
        backgroundColor="#BAF300"
        size="m"
        block={true}
        className={styles.btn}
        onClick={handleSign}
      >
        Подписать
      </CustomButton>
    </div>
  );
};
