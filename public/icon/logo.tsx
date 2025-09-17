import Image from "next/image"
import { assets } from '..'
export default function Logo() {
  return (
    <div>
      <Image src={assets.logo} alt="logo"></Image>
    </ div>
  )
}
