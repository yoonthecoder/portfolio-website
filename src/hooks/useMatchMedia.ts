type MatchedQueries = boolean[];
import { useEffect, useState } from "react";

const useMatchMedia = (queries: string[]): MatchedQueries => {
  const [matches, setMatches] = useState<MatchedQueries>(
    Array(queries.length).fill(false)
  );

  useEffect(() => {
    if (typeof window === undefined) return;

    const mediaQueryLists = queries.map((q) => window.matchMedia(q));
    const getValue = (): MatchedQueries => {
      return mediaQueryLists.map((mql) => mql.matches);
    };
    const handler = (): void => setMatches(getValue);
    mediaQueryLists.forEach((mql) => mql.addEventListener("change", handler));

    // get the initial value
    setMatches(getValue);

    return () => {
      mediaQueryLists.forEach((mql) =>
        mql.removeEventListener("change", handler)
      );
    };
  }, [queries]);

  return matches;
};

export default useMatchMedia;
