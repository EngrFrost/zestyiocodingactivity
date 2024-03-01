import { useEffect, useState } from "react";

type FetchData = {
  lang_id: string;
  layout: string;
  media_content: string;
  meta_description: string;
  meta_keywords: string | null;
  meta_title: string;
  rich_media: string | null;
  sort_order: string;
  sub_parent: string;
  text_content: string;
  title: string;
  uri: string | null;
};

type FetchDataResult = FetchData[] | undefined;

type FetchError = string | null;

type FetchResult = {
  data: FetchDataResult | [];
  error: FetchError;
  isLoading: boolean;
};

const useFetchHomeData = (url: string): FetchResult => {
  const [data, setData] = useState<FetchDataResult>();
  const [error, setError] = useState<FetchError>(null);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          setIsloading(false);
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: FetchData[] = await response.json();

        if (!Array.isArray(result) || result.length === 0) {
          setIsloading(false);
          throw new Error("Response is empty or not in the expected format");
        }

        setIsloading(false);
        setData(result);
      } catch (e) {
        setError(e instanceof Error ? e.message : "An unknown error occurred");
      }
    };
    setIsloading(true);
    fetchData();
  }, [url]);

  return { data, error, isLoading };
};

export default useFetchHomeData;
