import { SWAPI_RESOURCES } from "utils/constants";
import SearchByPeople from "containers/SearchByPeople";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { SWRConfig } from "swr";
import { getPeopleByCriteria } from "helpers/swapiResources";
import { SwapiResponse } from "types/SwapiResponse";
import { Person } from "types/Person";

export const getServerSideProps: GetServerSideProps = async (context) => {
  let peopleFound: SwapiResponse<Person> | [] = [];
  try {
    if (Array.isArray(context.params?.criteria)) {
      throw new Error("Parameter received as string[], expected a string");
    }
    const { data } = await getPeopleByCriteria(context.params?.criteria);
    peopleFound = data;
  } catch (error) {
    console.error("Error while getting people by criteria", error);
  } finally {
    return {
      props: {
        fallback: {
          [SWAPI_RESOURCES.people]: peopleFound,
        },
      },
    };
  }
};

const SearchByCriteriaPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ fallback }) => {
  return (
    <SWRConfig value={fallback}>
      <SearchByPeople />
    </SWRConfig>
  );
};

export default SearchByCriteriaPage;
