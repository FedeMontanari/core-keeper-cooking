"use client";

import { ChevronUp } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function ScrollUpButton({
  height = 500,
  className,
}: {
  height?: number;
  className?: string[] | string;
}) {
  const [showButton, setShowButton] = useState<boolean>(false);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    if (typeof window == "undefined") return;

    function checkScrollHeight() {
      if (window.scrollY > height) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener("scroll", checkScrollHeight);

    return () => {
      window.removeEventListener("scroll", checkScrollHeight);
    };
  }, []);

  return (
    <Button
      className={cn(
        "fixed bottom-5 right-5 hover:cursor-pointer",
        `${showButton ? "" : "hidden"}`,
        className
      )}
      onClick={scrollToTop}
      size="icon"
      variant="outline"
    >
      <ChevronUp />
    </Button>
  );
}
