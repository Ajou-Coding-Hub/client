import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export const SectionFirst = ({ data }: any) => {
  return (
    <div className="pt-24 pb-6 md:pb-12 px-6 flex flex-col items-center text-center">
      <h1
        className="text-7xl text-center font-extrabold leading-tight"
        dangerouslySetInnerHTML={{ __html: data.title }}
      ></h1>
      <p className="text-gh-secondary text-xl mt-5">
        개발 및 배포를 지원하는 Cloud IDE를 몇초만에 만들어줄게요 !
      </p>
      <div className="mt-6 md:mt-10 mb-6">
        <Link to="/workspace" className="get-started-button">
          Get started <IoIosArrowForward className="-mb-[3px]" />
        </Link>
      </div>
    </div>
  );
};
