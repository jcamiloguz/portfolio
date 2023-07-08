import Image from "next/image"
import profileImg from "@/assets/images/profile.png"

export default function Home() {
  return (
    <>
      <section className="flex items-center gap-20">
        <div className="flex  aspect-square w-full max-w-[354px] items-center">
          <figure className="flr flex aspect-square  w-full max-w-[354px] animate-fade items-center rounded-full bg-pink">
            <picture className=" Header aspect-square max-w-[84%] animate-fade overflow-hidden rounded-full bg-dark">
              <Image src={profileImg} alt="It's me" className="" />
            </picture>
          </figure>
        </div>
        <div className="">
          <h1 className=" text-4xl font-bold text-light">
            Hi! I’m Juan Guzman.
          </h1>
          <h2 className="text-2xl font-normal text-light">
            I’m software developer, focused in web technologies.{" "}
          </h2>
        </div>
      </section>
      <section></section>
      <section></section>
    </>
  )
}
