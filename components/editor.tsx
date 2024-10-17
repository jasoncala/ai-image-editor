"use client"
import UploadForm from "./upload/upload-form"
import ActiveImage from "./active-image"
import { useLayerStore } from "@/lib/layer-store"
import Layers from "./layers/layers"
import ImageTools from "./toolbar/image-toolbar"
import { ModeToggle } from "./theme/mode-toggle"
import Loading from "./loading"

export default function Editor() {
  const activeLayer = useLayerStore((state) => state.activeLayer)

  return (
    <div className="flex h-full ">
      <div className="py-6 px-4  min-w-48 ">
        <div className="pb-12 text-center">
          <ModeToggle />
        </div>
        <div className="flex flex-col gap-4 ">
          {activeLayer.resourceType === "image" ? <ImageTools /> : null}
        </div>
      </div>
      <Loading />
      <ActiveImage />
      <UploadForm />
      <Layers />
    </div>
  )
}