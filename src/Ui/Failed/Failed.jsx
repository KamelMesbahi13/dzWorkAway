import Icon from "../../assets/Failed.png";

const Failed = () => {
  const reload = () => {
    location.reload();
  };

  return (
    <div className="w-full md:w-2/4">
      <div className="container">
        <div className="p-8 border shadow-xl border-grey">
          <div>
            <div className="my-4 md:my-8">
              <div>
                <img className="w-12 h-12" src={Icon} alt="Failed" />
              </div>
            </div>
            <div>
              <div>
                <h6>Oops !!!</h6>
              </div>
              <div className="my-4 md:my-8">
                <p>Something Went Wrong</p>
              </div>
            </div>
            <div>
              <button
                onClick={reload}
                className="text-white simpleButton bg-[#F15249] duration-300 hover:bg-[#FF0000]"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Failed;
