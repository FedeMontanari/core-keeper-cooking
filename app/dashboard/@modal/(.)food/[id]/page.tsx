export default function FoodModal({
  params: { id: foodId },
}: {
  params: { id: string };
}) {
  return <div>{foodId}</div>;
}
