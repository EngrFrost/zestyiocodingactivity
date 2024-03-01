import { useEffect, useState } from "react";

export type FetchData = {
  data: Data[];
};

type Data = { content: { page_content: string } };

type FetchDataResult = FetchData | undefined;

type FetchError = string | null;

type FetchResult = {
  data: FetchDataResult;
  error: FetchError;
  isLoading: boolean;
};

const useFetchAboutData = (url: string): FetchResult => {
  const [data, setData] = useState<FetchDataResult>(undefined);
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

        const result: FetchData = await response.json();

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

export default useFetchAboutData;
