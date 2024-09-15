import { Gap } from "@alfalab/core-components/gap";
import { FC } from "react";
import { AccountAM } from "./account";
import { Card } from "./card";
import { SecondCard } from "./second-card";

export const AccountsAM: FC = () => (
  <>
    <AccountAM title="Мастер-счет *9453" amount="3500" card={<Card />} />
    <Gap direction="vertical" size={8} />
    <AccountAM
      title="Текущий счет *4793"
      amount="10 500"
      card={<SecondCard />}
    />
    <Gap direction="vertical" size={8} />
    <AccountAM title="Текущий счет *3785" amount="58 000" />
    <Gap direction="vertical" size={8} />
    <AccountAM title="Текущий счет *0001" amount="25 000" />
  </>
);
