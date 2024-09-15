import { Checkbox } from "@alfalab/core-components/checkbox";
import { Gap } from "@alfalab/core-components/gap";
import { Typography } from "@alfalab/core-components/typography";
import { FC, ReactNode } from "react";

import styles from "./styles.module.css";

export type AccountAMProps = {
  title: string;
  amount: string;
  card?: ReactNode;
};

export const AccountAM: FC<AccountAMProps> = ({ title, amount, card }) => (
  <div className={styles.plate}>
    <Checkbox boxClassName={styles.box} checked={true} size={24} />
    <Gap direction="horizontal" size={12} />
    <div>
      <Typography.Text view="primary-small" color="secondary">
        {title}
      </Typography.Text>
      <Gap direction="vertical" size={4} />
      <Typography.Text view="primary-medium">
        <strong>{amount}</strong>,00 ₽
      </Typography.Text>
    </div>
    {card}
  </div>
);
