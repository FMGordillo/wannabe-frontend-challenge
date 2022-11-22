import { getPeopleByCriteria } from "helpers/swapiResources";
import Link from "next/link";
import { useRouter } from "next/router";
import type { FunctionComponent } from "react";
import useSWR from "swr";
import { SWAPI_RESOURCES } from "utils/constants";
import { swrFetcher } from "utils/fetcher";

const SearchByPeople: FunctionComponent = () => {
  const { query } = useRouter();

  const { data, isValidating } = useSWR(
    [SWAPI_RESOURCES.people, undefined, query.criteria],
    () => swrFetcher(getPeopleByCriteria(query?.criteria as string))
  );

  const hasData = data?.results.length && data.results.length > 0;

  return (
    <main>
      {isValidating && <span>Loading...</span>}
      {hasData &&
        data.results.map((person) => {
          const id = person.url.split("/").at(-2);
          return (
            <Link href={`/person/${id}`} key={person.url}>
              <div>
                <p>{person.name}</p>
              </div>
            </Link>
          );
        })}
    </main>
  );
};

export default SearchByPeople;
