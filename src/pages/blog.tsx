import Article from "@/components/Article"
import { IArticle } from "@/types"
import axios from "axios"
import { InferGetStaticPropsType } from "next"

export const getStaticProps = async () => {
  const response = await axios.get<IArticle[]>(
    "https://dev.to/api/articles?username=guzcode"
  )

  return {
    props: {
      articles: response.data,
    },
  }
}

const Blog = ({ articles }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <h1 className="mb-16 mt-[52px] font-Mont text-4xl font-bold text-light">
        Blog
      </h1>
      <div className="flex flex-col gap-[74px]">
        {articles.map((article) => {
          return <Article article={article} key={article.id} />
        })}
      </div>
    </>
  )
}

export default Blog
