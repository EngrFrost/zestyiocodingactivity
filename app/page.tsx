"use client";

import useFetchHomeData from "@/hooks/useFetchHomeData";

export default function Home() {
  const {
    data: content = [],
    error,
    isLoading,
  } = useFetchHomeData("https://www.zesty.io/-/gql/platform_section.json");

  if (isLoading) {
    return <h1 className="text-3xl">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-3xl">Error loading data</h1>;
  }

  if (content && content.length < 0) {
    return <h1 className="text-3xl">There is no content available</h1>;
  }

  return (
    <section className="container w-full">
      {content.map((item) => (
        <div key={item.title} className="container mb-20">
          <h1 className="text-3xl">{item.title}</h1>

          <div className="contentContainer">
            <div
              className="container mt-2"
              dangerouslySetInnerHTML={{ __html: item.text_content }}
            />
          </div>
        </div>
      ))}
    </section>
  );
}
