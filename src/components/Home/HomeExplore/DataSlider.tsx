import { ReactNode } from "react";

const DataSlider = ({
  currentItems,
  itemsNumber,
  children,
}: {
  currentItems: number;
  itemsNumber: number;
  children: ReactNode;
}) => {
  return (
    <div className="overflow-hidden w-full mt-8 lg:mt-15">
      <div
        style={{
          transform: `translateX(-${currentItems * (100 / itemsNumber)}%)`,
        }}
        className={`flex gap-[1.8732%] transition-transform ease-in-out duration-500 w-full`}
      >
        {children}
      </div>
    </div>
  );
};

export default DataSlider;
