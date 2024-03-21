import Icon from "../../assets/Failed.png";
import Data from "../../data.json";
import { useTranslation } from "react-i18next";

const Failed = () => {
  const { i18n } = useTranslation();

  const reload = () => {
    location.reload();
  };

  const modifiedData = Data.Failed.map((data) => {
    if (i18n.language === "ar") {
      return {
        id: data.id,
        Header: data.Header_ar,
        Content: data.Content_ar,
        Content_Two: data.Content_Two_ar,
      };
    }

    if (i18n.language === "fr") {
      return {
        id: data.id,
        Header: data.Header_fr,
        Content: data.Content_fr,
        Content_Two: data.Content_Two_fr,
      };
    }
    return data;
  });

  const FailedData = modifiedData.map(
    ({ id, Header, Content, Content_Two }) => {
      return (
        <div key={id}>
          <div className="my-4 md:my-8">
            <div>
              <img className="w-12 h-12" src={Icon} alt={Header} />
            </div>
          </div>
          <div>
            <div>
              <h6>{Header}</h6>
            </div>
            <div className="my-4 md:my-8">
              <p>{Content}</p>
            </div>
          </div>
          <div>
            <button
              onClick={reload}
              className="text-white simpleButton bg-[#F15249] duration-300 hover:bg-[#FF0000]"
            >
              {Content_Two}
            </button>
          </div>
        </div>
      );
    }
  );

  return (
    <div className="w-full md:w-2/4">
      <div className="container">
        <div className="p-8 border shadow-xl border-grey bg-white z-[999999999] bottom-[15rem] relative">
          {FailedData}
        </div>
      </div>
    </div>
  );
};

export default Failed;
