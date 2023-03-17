import { useEffect, useState } from "react";

type MatchedQueries = boolean[];

const useMatchMedia = (queries: string[]): MatchedQueries => {
  const [matches, setMatches] = useState<MatchedQueries>(
    Array(queries.length).fill(false)
  );

  useEffect(() => {
    if (typeof window === undefined) return;

    const mediaQueryLists = queries.map((q) => window.matchMedia(q));
    const getValues = (): any=> {
      return mediaQueryLists.map((mql) =>
        mql.addEventListener("change", handler)
      );
    };
    const handler = (): void => setMatches(getValues);
    mediaQueryLists.forEach((mql) => mql.addEventListener("change", handler));

    // get the initial value
    // setMatches(getValues);

    return () => {
      mediaQueryLists.forEach((mql) =>
        mql.removeEventListener("change", handler)
      );
    };
  }, [queries]);

  return matches;
};

export default useMatchMedia;
