import PersonByIdContainer from "containers/PersonById";
import { getPersonById } from "helpers/swapiResources";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { SWRConfig } from "swr";
import type { Person } from "types/Person";
import type { SwapiResponse } from "types/SwapiResponse";
import { SWAPI_RESOURCES } from "utils/constants";

export const getServerSideProps: GetServerSideProps = async (context) => {
  let personData: Person | undefined = undefined;
  try {
    if (Array.isArray(context.params?.id)) {
      throw new Error("Parameter received as string[], expected a string");
    }
    const { data } = await getPersonById(context.params?.id);
    personData = data;
  } catch (error) {
    console.error("Error while getting people by id", error);
  } finally {
    return {
      props: {
        fallback: {
          [SWAPI_RESOURCES.people]: personData,
        },
      },
    };
  }
};

const PersonByIdPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ fallback }) => {
  return (
    <SWRConfig value={fallback}>
      <PersonByIdContainer />
    </SWRConfig>
  );
};

export default PersonByIdPage;
