import Image from "next/image"
import profileImg from "@/assets/images/profile.png"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { createClient } from "contentful"
import { IHomePage, IHomePageFields, IHomePageSkeleton } from "@/types"

const client = createClient({
  space: process.env.SPACE_ID ?? "",
  accessToken: process.env.CONTENT_DELIVERY_TOKEN ?? "", // delivery API key for the space \
})

export const getStaticProps = async () => {
  const response = await client.getEntry<IHomePageSkeleton>(
    "5uXKARgsS4d3skB1vXQVb3"
  )

  return {
    props: response,
  }
}

export default function Home({
  fields,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <section className="flex flex-col items-center gap-8 md:flex-row md:gap-20">
        <div className="flex  aspect-square w-full max-w-[354px] items-center">
          <figure className="flr flex aspect-square  w-full max-w-[354px] animate-fade items-center rounded-full bg-pink">
            <picture className=" Header aspect-square max-w-[84%] animate-fade overflow-hidden rounded-full bg-dark">
              <Image src={profileImg} alt="It's me" className="" />
            </picture>
          </figure>
        </div>
        <div className="">
          <h1 className=" font-Mont text-4xl font-bold text-light">
            {fields.title}
          </h1>
          <h2 className="font-Mont text-2xl  text-light">{fields.subtitle}</h2>
        </div>
      </section>
    </>
  )
}
