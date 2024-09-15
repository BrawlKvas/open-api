import { AccountsABM, AccountsAM } from "./components/accounts";
import { CardsBlue, CardsOrange } from "./components/cards";
import {
  BlueGradient,
  DarkBlueGradient,
  GreenGradient,
} from "./components/gradients";
import { Logo } from "./components/logo";

export const variantABM1 = {
  logo: <Logo fill="#FE9923" />,

  buttonStyleProps: {
    stateType: "static-lightening",
    contentColor: "white",
    backgroundColor: "#04819E",
  },

  loginPage: {
    title: "Вход в Банк-Партнёр 1",
    background: "linear-gradient(#04819E, #FFFFFF 50%)",
    loginInputValue: "Petr_Chichikov",
    cards: <CardsBlue />,
  },

  successPage: {
    superEllipseShapeGradient: <DarkBlueGradient id="xGradient" />,
  },

  consentPage: {
    text: (
      <>
        Уважаемый Петр Чичиков,
        <br />
        Вы поручаете <strong>Банку-Партнёру 1</strong> передать
        в&nbsp;АО&nbsp;«Альфа-Банк» данные в отношении ООО&nbsp;"Демо-компании":
      </>
    ),
    list: [
      <>о счетах компании в Банке-Партнёре 1;</>,
      <>об операциях и остатках по счетам компании в&nbsp;Банке-Партнёре 1.</>,
    ],
    accounts: <AccountsABM />,
  },
} as const;

export const variantABM2 = {
  logo: <Logo fill="#5E8716" />,

  buttonStyleProps: {
    stateType: "static-darkening",
    contentColor: "black",
    backgroundColor: "#BAF300",
  },

  loginPage: {
    title: "Вход в Банк-Партнёр 2",
    background: "linear-gradient(#BAF300, #FFFFFF 50%)",
    loginInputValue: "Petr_Chichikov",
    cards: <CardsOrange />,
  },

  successPage: {
    superEllipseShapeGradient: <GreenGradient id="xGradient" />,
  },

  consentPage: {
    text: (
      <>
        Уважаемый Петр Чичиков,
        <br />
        Вы поручаете <strong>Банку-Партнёру 2</strong> передать
        в&nbsp;АО&nbsp;«Альфа-Банк» данные в отношении ООО&nbsp;"Демо-компании":
      </>
    ),
    list: [
      <>о счетах компании в Банке-Партнёре 2;</>,
      <>об операциях и остатках по счетам компании в&nbsp;Банке-Партнёре 2.</>,
    ],
    accounts: <AccountsABM />,
  },
} as const;

export const variantABM3 = {
  logo: <Logo fill="black" />,

  buttonStyleProps: {
    stateType: "static-lightening",
    contentColor: "white",
    backgroundColor: "#2E6FFF",
  },

  loginPage: {
    title: "Вход в Банк-Партнёр 3",
    background: "linear-gradient(#2E6FFF -10% -5%, #91B6FC 20%, #FFFFFF 50%)",
    loginInputValue: "Petr_Chichikov",
    cards: <CardsBlue />,
  },

  successPage: {
    superEllipseShapeGradient: <BlueGradient id="xGradient" />,
  },

  consentPage: {
    text: (
      <>
        Уважаемый Петр Чичиков,
        <br />
        Вы поручаете <strong>Банку-Партнёру 3</strong> передать
        в&nbsp;АО&nbsp;«Альфа-Банк» данные в отношении ООО&nbsp;"Демо-компании":
      </>
    ),
    list: [
      <>о счетах компании в Банке-Партнёре 3;</>,
      <>об операциях и остатках по счетам компании в&nbsp;Банке-Партнёре 3.</>,
    ],
    accounts: <AccountsABM />,
  },
} as const;

export const variantAM = {
  logo: <Logo fill="black" />,

  buttonStyleProps: {
    stateType: "static-lightening",
    contentColor: "white",
    backgroundColor: "#2E6FFF",
  },

  loginPage: {
    title: "Вход в Банк Партнёр",
    background: "linear-gradient(#2E6FFF -10% -5%, #91B6FC 20%, #FFFFFF 50%)",
    loginInputValue: "Andrei_Zhukov",
    cards: <CardsBlue />,
  },

  successPage: {
    superEllipseShapeGradient: <BlueGradient id="xGradient" />,
  },

  consentPage: {
    text: (
      <>
        Уважаемый Андрей Иванович Жуков,
        <br />
        Вы&nbsp;поручаете Банк Партнёр (далее - Банк), передать в&nbsp;
        <strong>АО&nbsp;«Альфа-Банк»</strong> ваши данные:
      </>
    ),
    list: [
      <>
        о ваших счетах в Банке, в т.ч. номер счёта, ваши ФИО, моб. телефон, дата
        и место рождения, почтовый адрес;
      </>,
      <>об операциях по вашим счетам в Банке.</>,
    ],
    accounts: <AccountsAM />,
  },
} as const;

export const variantApp = variantABM1;
