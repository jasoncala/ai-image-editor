'use client'

import { ModeToggle } from "@/components/theme/mode-toggle"
import Layers from "./layers/layers"
import UploadImage from "./upload/upload-image"
import { useLayerStore } from "@/lib/layer-store"

export default function Editor() {
    const activeLayer = useLayerStore((state) => state.activeLayer)
    return(
        <div className="flex h-full ">
            <div className="py-6 px-4 basis-[240px] shrink-0">
                <div className="pb-12 text-center">
                    <ModeToggle/>
                </div>
            </div>
            <UploadImage/>
            <Layers/>
        </div>
    )
}