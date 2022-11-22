import { getPersonById } from "helpers/swapiResources";
import { useRouter } from "next/router";
import type { FunctionComponent } from "react";
import useSWR from "swr";
import { SWAPI_RESOURCES } from "utils/constants";
import { swrFetcher } from "utils/fetcher";

const PersonByIdContainer: FunctionComponent = () => {
  const { query } = useRouter();
  const { data } = useSWR([SWAPI_RESOURCES.people, query.id], () =>
    swrFetcher(getPersonById(query?.id as string))
  );
  return <div>{data?.name}</div>;
};

export default PersonByIdContainer;
