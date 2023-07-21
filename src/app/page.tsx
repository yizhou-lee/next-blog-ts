import Posts from "@/components/Posts";
export default function Home() {
  return (
    <main className="px-6 mx-auto max-w-3xl">
      <p className="mt-12 mb-6 text-3xl text-center dark:text-white">
        Hello 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Yeezo</span>.&nbsp;
        </span>
        <span>I'm a software engineer.</span>
      </p>
      <p className="mb-12 text-3xl text-center dark:text-white">
        This blog website is my creative space where I document and share my
        thoughts, experiences and insights.
      </p>
      <Posts />
    </main>
  );
}
