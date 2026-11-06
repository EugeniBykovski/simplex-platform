"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

export function CopyLink({ label, copied }: { label: string; copied: string }) {
  const [done, setDone] = useState(false);
  return (
    <Button
      variant="ghost"
      onClick={async () => {
        await navigator.clipboard.writeText(window.location.href);
        setDone(true);
      }}
    >
      <Icon name="link" />
      <span aria-live="polite">{done ? copied : label}</span>
    </Button>
  );
}
