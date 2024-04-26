import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import ProgramCard from "./ExploreProgramCards/ProgramCard"
import BgTextProgram from "../UI/BgText-program";

const Main = () => {
  return (
    <div className="relative z-10 bg-[#262626] px-24 py-16 min-w-full overflow-hidden main-container">
      <BgTextProgram></BgTextProgram>
      <div className="relative z-20 flex justify-between mb-14 align-middle title-explore-our-pro">
        <h1 className="font-bold text-4xl text-white">Explore Our programs</h1>
        <div className="cardBtn-next-previous">
          <button type="button" className="border-white hover:bg-[#699BF7] m-2 p-1 border rounded-full text-lg text-white">
            <GrLinkPrevious size={"2.5rem"}></GrLinkPrevious>
          </button>
          <button type="button" className="border-white hover:bg-[#699BF7] m-2 p-1 border rounded-full text-lg text-white">
            <GrLinkNext size={"2.5rem"}></GrLinkNext>
          </button>
        </div>
      </div>

      <div className="flex justify-evenly cards-container">
        <ProgramCard></ProgramCard>
        <ProgramCard></ProgramCard>
        <ProgramCard></ProgramCard>
        <ProgramCard></ProgramCard>
      </div>
    </div>
  );
};
export default Main;
