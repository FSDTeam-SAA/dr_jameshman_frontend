import Image from "next/image";
import React from "react";
import { TreatmentGroup } from "../types/treatments-data-type";

const TreatmentCart = ({ item }: { item: TreatmentGroup }) => {
  return (
    <div>
      <Image
        src={"/assets/images/no-image.jpg"}
        // src={
        //   item?.treatments[0]?.image || "/assets/images/no-image.jpg"
        // }
        alt={item?.treatments[0]?.serviceName || ""}
        width={1000}
        height={1000}
        className="w-full h-[431px] rounded-[8px] object-cover"
      />
      <h3 className="text-base md:text-lg font-medium leading-[120%] text-[#2F2F2F] text-center bg-white rounded-b-[8px] py-2 md:py-3">
        {item?.treatments[0]?.serviceName}
      </h3>
    </div>
  );
};

export default TreatmentCart;
