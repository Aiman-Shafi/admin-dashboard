import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import BadgeOne from "@/components/Badges/BadgeOne";
import BadgeTwo from "@/components/Badges/BadgeTwo";
import BadgeThree from "@/components/Badges/BadgeThree";
import BadgeFour from "@/components/Badges/BadgeFour";

const Badge: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Badge" />

      <div className="flex flex-col gap-7.5">
        <BadgeOne />
        <BadgeTwo />
        <BadgeThree />
        <BadgeFour />
      </div>
    </>
  );
};

export default Badge;
