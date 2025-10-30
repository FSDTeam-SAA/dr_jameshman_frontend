"use client";
import { AppTopBar } from "@/app/(dashboard)/dashboard/_component/shared/app-topbar";
import AddEditPriceListForm from "../../_components/add-edit-price-list-form";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

export const dynamic = "force-dynamic";

const Page = () => {
  const { id } = useParams();

  const { data: priceListDetails = {} } = useQuery({
    queryKey: ["all-price-list"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/treatmentfees/${id}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const data = await res.json();
      return data?.data;
    },
  });

  return (
    <div>
      <div className="mb-10 mt-10">
        <AppTopBar />
      </div>

      <div>
        <AddEditPriceListForm
          priceListDetails={priceListDetails}
          id={id as string}
        />
      </div>
    </div>
  );
};

export default Page;
