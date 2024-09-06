export default function FoodByIdDashboardPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <div>{id}</div>;
}
