import Image from "next/image";
import React from "react";
import { Treatment } from "../types/treatments-data-type";
import Link from "next/link";

const TreatmentCart = ({ item }: { item: Treatment }) => {
  return (
    <div>
      <Link href="#">
        <Image
          src={item?.category?.image || "/assets/images/no-image.jpg"}
          alt={item?.category?.name || ""}
          width={1000}
          height={1000}
          className="w-full h-[431px] rounded-[8px] object-cover"
        />
        <h3 className="text-base md:text-lg font-medium leading-[120%] text-[#2F2F2F] text-center bg-white rounded-b-[8px] py-2 md:py-3">
          {item?.category?.name}
        </h3>
      </Link>
    </div>
  );
};

export default TreatmentCart;
