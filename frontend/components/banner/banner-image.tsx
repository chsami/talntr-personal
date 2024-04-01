'use client'

import bannerImage from '@/public/images/banner-img-1.webp'
import Image from 'next/image'

export default function BannerImage() {
  return (
    <div className="">
      <Image src={bannerImage} alt="banner image" />
    </div>
  )
}
