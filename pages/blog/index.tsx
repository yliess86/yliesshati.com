import { InferGetStaticPropsType, GetStaticProps } from "next";

import { getPosts, IPostInfos } from "../../components/data/PostData";
import PostCard from "../../components/sections/PostCard";

export default function BlogPage (props: InferGetStaticPropsType<GetStaticProps>) {
  return (
    <section className="flex flex-col gap-4">
      {props.posts.map((infos: IPostInfos, index: number) => { return <PostCard key={index} infos={infos} />})}
    </section>
  );
};

export const getStaticProps: GetStaticProps<{ posts: IPostInfos[] }> = async () => {
  return { props: { posts: getPosts() } };
};