"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  FoodPartialWithRelations,
  FoodWithPartialRelationsSchema,
} from "@/prisma/zod/modelSchema/FoodSchema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { BuffWithPartialRelations } from "@/prisma/zod/modelSchema/BuffSchema";

const formSchema = z.object({
  ingOne: FoodWithPartialRelationsSchema,
  ingTwo: FoodWithPartialRelationsSchema,
});

export default function IngredientsForm({
  ingredients,
}: {
  ingredients: z.infer<typeof FoodWithPartialRelationsSchema>[];
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ingOne: {
        id: undefined,
      },
      ingTwo: {
        id: undefined,
      },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  function getMaxValue(
    val1: number | undefined | null,
    val2: number | undefined | null
  ) {
    const safeVal1 = val1 != null ? val1 : -Infinity;
    const safeVal2 = val2 != null ? val2 : -Infinity;
    return Math.max(safeVal1, safeVal2);
  }

  function calculateFood({ ingOne, ingTwo }: z.infer<typeof formSchema>) {
    console.log("Ingredient One: ", ingOne);
    console.log("Ingredient Two: ", ingTwo);
    const finalFood: FoodPartialWithRelations = {
      foodValue: getMaxValue(ingOne.foodValue, ingTwo.foodValue),
      hpBoost: getMaxValue(ingOne.hpBoost, ingTwo.hpBoost),
      hps: getMaxValue(ingOne.hps, ingTwo.hps),
      buffs: mergeBuffs(ingOne.buffs, ingTwo.buffs),
    };
    return finalFood;
  }

  function mergeBuffs(
    buffsOne: BuffWithPartialRelations[] | undefined,
    buffsTwo: BuffWithPartialRelations[] | undefined
  ) {
    const buffMap = new Map();

    if (buffsOne) {
      // Add buffs from the first ingredient
      for (const buff of buffsOne) {
        const { buffTypeId, value } = buff;
        buffMap.set(buffTypeId, getMaxValue(buffMap.get(buffTypeId), value));
      }
    }

    if (buffsTwo) {
      // Add buffs from the second ingredient
      for (const buff of buffsTwo) {
        const { buffTypeId, value } = buff;
        buffMap.set(buffTypeId, getMaxValue(buffMap.get(buffTypeId), value));
      }
    }

    // Convert map back to array format
    const mergedBuffs: BuffWithPartialRelations[] = [];
    buffMap.forEach((maxValue, buffTypeId) => {
      const buffTemplate = [...buffsOne, ...buffsTwo].find(
        (buff) => buff.buffTypeId === buffTypeId
      );

      if (buffTemplate) {
        mergedBuffs.push({
          ...buffTemplate, // keep the buff structure, but update the value
          value: maxValue,
        });
      }
    });

    return mergedBuffs;
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center justify-center flex-wrap gap-8"
        >
          <FormField
            control={form.control}
            name="ingOne"
            render={({ field }) => (
              <FormItem className="flex flex-col w-2/5">
                <FormLabel>Ingredient One</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "justify-between",
                          !field.value.id && "text-muted-foreground"
                        )}
                      >
                        {field.value.id ? (
                          <>
                            <Image
                              width={32}
                              height={32}
                              src={field.value.icon_url}
                              alt="Ingredient Icon"
                              className="mr-1"
                            />
                            <span>
                              {
                                ingredients.find(
                                  (ing) => ing.id === field.value.id
                                )?.name
                              }
                            </span>
                          </>
                        ) : (
                          "Select ingredient"
                        )}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="p-0">
                    <Command>
                      <CommandInput placeholder="Search Ingredient..." />
                      <CommandList>
                        <CommandEmpty>No Ingredient found.</CommandEmpty>
                        <CommandGroup>
                          {ingredients.map((ing) => (
                            <CommandItem
                              value={ing.name}
                              key={ing.id}
                              onSelect={() => {
                                form.setValue("ingOne", ing);
                              }}
                              className="p-0 py-2 text-center"
                            >
                              <Image
                                width={32}
                                height={32}
                                src={ing.icon_url}
                                alt="Ingredient Icon"
                                className="mr-1"
                              />
                              {ing.name}
                              <Check
                                className={cn(
                                  "ml-1 h-4 w-4",
                                  ing.name === field.value.name
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ingTwo"
            render={({ field }) => (
              <FormItem className="flex flex-col w-2/5">
                <FormLabel>Ingredient Two</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "justify-between",
                          !field.value.id && "text-muted-foreground"
                        )}
                      >
                        {field.value.id ? (
                          <>
                            <Image
                              width={32}
                              height={32}
                              src={field.value.icon_url}
                              alt="Ingredient Icon"
                              className="mr-1"
                            />
                            <span>
                              {
                                ingredients.find(
                                  (ing) => ing.id === field.value.id
                                )?.name
                              }
                            </span>
                          </>
                        ) : (
                          "Select ingredient"
                        )}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="p-0">
                    <Command>
                      <CommandInput placeholder="Search Ingredient..." />
                      <CommandList>
                        <CommandEmpty>No Ingredient found.</CommandEmpty>
                        <CommandGroup>
                          {ingredients.map((ing) => (
                            <CommandItem
                              value={ing.name}
                              key={ing.id}
                              onSelect={() => {
                                form.setValue("ingTwo", ing);
                              }}
                              className="p-0 py-2 text-center"
                            >
                              <Image
                                width={32}
                                height={32}
                                src={ing.icon_url}
                                alt="Ingredient Icon"
                                className="mr-1"
                              />
                              {ing.name}
                              <Check
                                className={cn(
                                  "ml-1 h-4 w-4",
                                  ing.name === field.value.name
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Calculate</Button>
        </form>
      </Form>
      <div></div>
    </>
  );
}
