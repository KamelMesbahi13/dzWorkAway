import { lazy } from "react";
const Header = lazy(() => import("./Header/Header"));
const ContentPrivacy = lazy(() => import("./ContentPrivacy/ContentPrivacy"));
import Title from "../../GeneralFunctions/Title";

const Privacy = () => {
  Title("Dz Work Away | Confidentialité");

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
