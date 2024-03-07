import { lazy } from "react";
const Header = lazy(() => import("./Header/Header"));
const ContentPrivacy = lazy(() => import("./ContentPrivacy/ContentPrivacy"));

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
