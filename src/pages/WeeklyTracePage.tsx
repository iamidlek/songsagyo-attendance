import attendStamp from '../assets/attend-stamp.png';

export const WeeklyTracePage = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-amber-400 to-amber-500  rounded-lg py-3 px-2 font-bold">
        <div className="border-dotted border-[0.8rem] border-white">
          <div className="mx-auto flex flex-wrap max-w-[17.8rem] sm:max-w-[57rem] py-3 gap-y-3 justify-around items-center">
            <div className="relative w-24 h-24 rounded-full border-4 border-amber-300 bg-orange-100/90 flex justify-center items-center">
              <div className="opacity-60">3.5</div>
              <img className="absolute" src={attendStamp} />
            </div>
            <div className="w-24 h-24 rounded-full border-4 border-amber-300 bg-orange-100/90 flex justify-center items-center">
              3.12
            </div>
            <div className="w-24 h-24 rounded-full border-4 border-amber-300 bg-orange-100/90 flex justify-center items-center">
              3.19
            </div>
            <div className="relative w-24 h-24 rounded-full border-4 border-amber-300 bg-orange-100/90 flex justify-center items-center">
              <div className="opacity-60">3.26</div>
              <img className="absolute " src={attendStamp} />
            </div>
          </div>
        </div>
      </div>
      <div className="h-5 bg-orange-100/90"></div>
      <div className="bg-gradient-to-r from-red-200 to-pink-300 rounded-lg py-3 px-2 font-bold">
        <div className="border-dotted border-[0.8rem] border-white">
          <div className="mx-auto flex flex-wrap max-w-[17.8rem] sm:max-w-[57rem] py-3 gap-y-3 justify-around items-center">
            <div className="w-24 h-24 rounded-full border-4 border-red-300 bg-red-100/90 flex justify-center items-center">
              4.2
            </div>
            <div className="w-24 h-24 rounded-full border-4 border-red-300 bg-red-100/90 flex justify-center items-center">
              4.9
            </div>
            <div className="w-24 h-24 rounded-full border-4 border-red-300 bg-red-100/90 flex justify-center items-center">
              4.16
            </div>
            <div className="w-24 h-24 rounded-full border-4 border-red-300 bg-red-100/90 flex justify-center items-center">
              4.23
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
