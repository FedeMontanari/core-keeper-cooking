"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
    const body = document.getElementsByTagName("body").item(0);
    if (body) {
      body.style.overflowY = "hidden";
    }
  }, []);

  function onDismiss() {
    router.back();
    const body = document.getElementsByTagName("body").item(0);
    if (body) {
      body.style.overflowY = "auto";
    }
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="absolute h-screen w-screen bg-black/70"
      onClose={onDismiss}
    >
      {children}
      <Button
        className="absolute top-5 right-5 rounded-full"
        variant="ghost"
        onClick={onDismiss}
      >
        <X />
      </Button>
    </dialog>,
    document.getElementById("modal-root")!
  );
}
