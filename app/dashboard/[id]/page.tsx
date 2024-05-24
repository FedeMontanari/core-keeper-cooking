import React from "react";
import FoodDashbaord from "../_components/FoodDashbaord";
import BuffDashboard from "../_components/BuffDashboard";
import RarityDashboard from "../_components/RarityDashboard";

export default function DashboardSectionPage({
  params,
}: {
  params: { id: "food" | "buff" | "rarity" };
}) {
  switch (params.id) {
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
