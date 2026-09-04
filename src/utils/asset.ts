// One module owns how an asset path becomes a URL: the `assets/` root and
// Vite's BASE_URL live here and nowhere else, so a sub-path deploy stays correct.
export const assetUrl = (path: string): string =>
  `${import.meta.env.BASE_URL}assets/${path}`;

export const projectAsset = (id: number, file: string | null): string =>
  assetUrl(`projects/project-${id}/${file}`);
