import { useEffect } from "react";
import { SystemMessageMobile } from "@alfalab/core-components/system-message/mobile";
import { CheckmarkCircleMIcon } from "@alfalab/icons-glyph/CheckmarkCircleMIcon";
import { SuperEllipse } from "@alfalab/core-components/icon-view/super-ellipse";
import { Spinner } from "@alfalab/core-components/spinner";

import styles from "./styles.module.css";
import { SuperEllipseShapeGradient } from "./gradient";

export const SuccessPage = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href =
        "abm://multibank_cb?organizationId=demo1&bank_code=tbank_jp#code=10e5ded165a96d423aaa42a678cb9c09460963245&id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkQwM0I4NkE4MEJBNjBCQjM0&scope=openid%20accounts%20offline_access&state=98d6691382344e7fb03c853739d0a988&session_state=G6rAVS56SipMpkdgSH-ZM3nJggTXo9MQ74sK8VE3n3o29c1bf0fa";
    }, 2000);
  }, []);

  return (
    <>
      <SystemMessageMobile className={styles.systemMessage}>
        <SystemMessageMobile.Graphic>
          <SuperEllipse size={80} shapeClassName={styles.superEllipseShape}>
            <CheckmarkCircleMIcon color="white" />
          </SuperEllipse>
        </SystemMessageMobile.Graphic>
        <SystemMessageMobile.Title>
          Согласие подписано
        </SystemMessageMobile.Title>
        <SystemMessageMobile.Subtitle>
          Переводим вас обратно
          <br />в приложение
        </SystemMessageMobile.Subtitle>
        <SystemMessageMobile.Controls>
          <Spinner visible={true} size={48} />
        </SystemMessageMobile.Controls>
      </SystemMessageMobile>

      <SuperEllipseShapeGradient />
    </>
  );
};
