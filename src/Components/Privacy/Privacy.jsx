import { lazy } from "react";
const Header = lazy(() => import("./Header/Header"));
const ContentPrivacy = lazy(() => import("./ContentPrivacy/ContentPrivacy"));
import Title from "../../GeneralFunctions/Title";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t } = useTranslation();

  Title(`Dz Work Away | ${t("privacy")}`);

  return (
    <>
      <div>
        <Header />
        <ContentPrivacy />
      </div>
    </>
  );
};

export default Privacy;
