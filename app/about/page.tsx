"use client";

import useFetchAboutData, { FetchData } from "@/hooks/useFetchAboutData";

const About = () => {
  const {
    data: content,
    error,
    isLoading,
  } = useFetchAboutData(
    "https://www.zesty.io/-/instant/7-e93178-vqvclgsss.json"
  );

  if (isLoading) {
    return <h1 className="text-3xl">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-3xl">Error loading data</h1>;
  }

  const pageContent = content?.data?.[0]?.content?.page_content;

  return (
    <section className="w-full">
      {pageContent ? (
        <div className="mt-3">
          <div dangerouslySetInnerHTML={{ __html: pageContent }} />
        </div>
      ) : (
        <div className="flex-center">
          <h1 className="text-3xl">No content available</h1>
        </div>
      )}
    </section>
  );
};

export default About;
