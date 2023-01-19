import { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";

import { getPosts, getPost, IPost } from "../../components/data/PostData";
import Post from "../../components/sections/Post";

export default function PostPage (props: InferGetStaticPropsType<GetStaticProps>) {
  return <Post post={props.post} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPosts().map(post => { return `/blog/${post.slug}`; });
  return { paths, fallback: false };
};

interface ISlug extends ParsedUrlQuery { slug: string };

export const getStaticProps: GetStaticProps<{ post: IPost }> = async (context) => {
  const { slug } = context.params as ISlug;
  return { props: { post: getPost(slug) } };
};