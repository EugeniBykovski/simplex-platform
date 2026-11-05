import { notFound } from "next/navigation";

/** Sends unknown paths to [locale]/not-found so 404s render inside the localised layout. */
export default function CatchAllPage() {
  notFound();
}
