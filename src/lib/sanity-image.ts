import { client, urlFor } from "./sanity";
import type { SanityImageSource } from "@sanity/image-url";

export function imageUrl(source: SanityImageSource) {
  return urlFor(source).url();
}

export function imageBuilder(source: SanityImageSource) {
  return urlFor(source);
}

export { client };
