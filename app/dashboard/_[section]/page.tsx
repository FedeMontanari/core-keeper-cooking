import React from "react";
import FoodDashbaord from "../_components/food-dashboard";
import BuffDashboard from "../_components/buff-dashboard";
import RarityDashboard from "../_components/rarity-dashboard";

export default function DashboardSectionPage({
  params,
}: {
  params: { section: "food" | "buff" | "rarity" };
}) {
  switch (params.section) {
    case "buff":
      return <BuffDashboard />;

    case "food":
      return <FoodDashbaord />;

    case "rarity":
      return <RarityDashboard />;

    default:
      break;
  }
}
