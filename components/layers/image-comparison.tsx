"use client";

import { Layer } from "@/lib/layer-store";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

// Helper function to replace 'http://' with 'https://'
const getSecureUrl = (url: string) => url.replace(/^http:\/\//i, 'https://');

export default function ImageComparison({ layers }: { layers: Layer[] }) {
  if (layers.length === 0) {
    return <div>No layers selected for comparison</div>;
  }
  if (layers.length === 1) {
    return (
      <div className="h-full">
        <ReactCompareSliderImage
          src={getSecureUrl(layers[0].url || "")}
          srcSet={getSecureUrl(layers[0].url || "")}
          alt={layers[0].name || "Single image"}
          className="rounded-lg object-contain"
        />
      </div>
    );
  }
  return (
    <ReactCompareSlider
      itemOne={
        <ReactCompareSliderImage
          src={getSecureUrl(layers[0].url || "")}
          srcSet={getSecureUrl(layers[0].url || "")}
          alt={layers[0].name || "Image one"}
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          src={getSecureUrl(layers[1].url || "")}
          srcSet={getSecureUrl(layers[1].url || "")}
          alt={layers[1].name || "Image two"}
        />
      }
    />
  );
}
