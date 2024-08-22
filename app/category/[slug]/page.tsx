import CategoryHeader from "@/components/category-header";
import CategoryTable from "@/components/category-table";
import { foods } from "@/constants/food";

type FoodCategoryKey = keyof typeof foods;

export default function CategoryFoodPage({
  params,
}: {
  params: { slug: FoodCategoryKey };
}) {
  return (
    <main className="w-full flex items-center justify-start flex-col gap-5 pb-8">
      <CategoryHeader
        catName={`${params.slug[0].toUpperCase() + params.slug.slice(1)}`}
      />
      <section className="w-11/12 h-fit infocard-fancy mt-24">
        <CategoryTable category={foods[params.slug]} searchbar={true} />
      </section>
    </main>
  );
}
