// AUTO GENERATED FILE - DO NOT EDIT

const assetData = {
  'favicon.svg': '/assets/favicon.svg'
} as const;

export type AssetName = (keyof typeof assetData);

export function useAsset(assetName: AssetName): string {
  return assetData[assetName];
}

