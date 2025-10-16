export const HeroAbout = () => {
  return (
    <div className="w-[553px] min-h-[725px] flex flex-col justify-end gap-6 text-white">
      <h2 className="font-bold text-5xl leading-tight">The Witcher</h2>

      <p className="font-medium leading-relaxed opacity-90">
        Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his
        destiny in a turbulent world where people often prove more wicked than
        beasts
      </p>
      <div className="flex items-center gap-11 mt-4">
        <button className="w-[168px] h-[40px] flex items-center gap-2 bg-[#007bff] text-white px-5 py-3 rounded-full font-medium transition">
          <img src="/Rectangle.png" alt="" className="h-4" />
          Watch Movie
        </button>

        <button className=" w-[128px] h-[40px] flex items-center gap-2 rounded-3xl border-[#228ee5]  font-medium  flex-row-reverse">
          <img src="/arrow-down.png" alt="" className="h-4" />
          More Info
        </button>
      </div>
    </div>
  );
};
