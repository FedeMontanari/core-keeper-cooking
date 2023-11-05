import ToolHeader from "@/components/ToolHeader";
import React from "react";

export default function Calculator() {
  return (
    <main className="w-full h-full flex items-center justify-start flex-col gap-5">
      <ToolHeader toolName="Calculator" />
      <section className="w-11/12 h-fit pb-5 infocard-fancy mt-24">
        <div className="flex justify-center items-center flex-col">
          <h3 className="text-xl font-bold">Work in Progress :)</h3>
        </div>
      </section>
    </main>
  );
}
