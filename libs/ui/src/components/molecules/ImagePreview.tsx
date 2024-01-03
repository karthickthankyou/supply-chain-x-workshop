import { Trash } from 'lucide-react'
import { ReactNode } from 'react'
import Image from 'next/image'

export interface IImageUploadProps {
  src?: Blob | MediaSource
  clearImage: () => void
  children: ReactNode
}

export const ImagePreview = ({
  src,
  clearImage,
  children,
}: IImageUploadProps) => {
  if (src) {
    return (
      <div className="relative flex items-center justify-center w-full h-full min-h-[12rem]">
        <button onClick={clearImage} className="z-10 p-1 text-white bg-red/50">
          <Trash />
        </button>
        <Image
          className="absolute object-cover h-full z-full "
          alt=""
          width={300}
          height={300}
          src={URL.createObjectURL(src)}
        />
      </div>
    )
  }
  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-100">
      {children}
    </div>
  )
}
