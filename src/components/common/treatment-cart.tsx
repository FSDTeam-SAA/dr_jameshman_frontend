import Image from "next/image";
import React from "react";
import Link from "next/link";
import { TreatmentCategory } from "../types/treatments-data-type";

const TreatmentCart = ({ item }: { item: TreatmentCategory }) => {
  return (
    <div>
      <Link href={`/treatments/${item?._id}`}>
        <Image
          src={item?.image || "/assets/images/no-image.jpg"}
          alt={item?.name || ""}
          width={1000}
          height={1000}
          className="w-full h-[300px] md:h-[400px] lg:h-[431px] rounded-[8px] object-cover"
        />
        <h3 className="text-base md:text-lg font-medium leading-[120%] text-[#2F2F2F] text-center bg-white rounded-b-[8px] py-2 md:py-3">
          {item?.name}
        </h3>
      </Link>
    </div>
  );
};

export default TreatmentCart;
