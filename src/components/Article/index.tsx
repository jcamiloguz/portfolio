import { IArticle } from "@/types"
import React from "react"

function Article({ article }: { article: IArticle }) {
  return (
    <article key={article.id} className="border-b-2 border-b-light pb-8">
      <div className="flex flex-wrap justify-between">
        <h1 className="font-Mont text-2xl font-bold text-light md:max-w-[85%]">
          {article.title}
        </h1>
        <p className="text-xl text-light">{article.readable_publish_date}</p>
      </div>
      <ul className="my-3 flex gap-2">
        {article.tag_list.map((tag) => (
          <li key={tag} className="rounded-full bg-light py-[2px] px-4">
            <span className="text-lg capitalize text-dark">{tag}</span>
          </li>
        ))}
      </ul>
      <p
        className="
        text-xl text-light
      "
      >
        {article.description}{" "}
        <a
          className="cursor-pointer text-xl text-pink underline"
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </p>
    </article>
  )
}

export default Article
