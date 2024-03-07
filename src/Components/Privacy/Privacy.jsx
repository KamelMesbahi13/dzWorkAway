import { lazy } from "react";
const ContentPrivacy = lazy(() => import("./ContentPrivacy/ContentPrivacy"));
const Header = lazy(() => import("./Header/Header"));

const Privacy = () => {
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
