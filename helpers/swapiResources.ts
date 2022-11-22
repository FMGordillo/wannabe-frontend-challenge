import type { Person } from "types/Person";
import type { SwapiResponse } from "types/SwapiResponse";
import { SWAPI_RESOURCES } from "utils/constants";
import { getById, getByPage } from "./swapiHelper";

export const getPeopleByCriteria = (criteria?: string, page?: number) =>
  getByPage<SwapiResponse<Person>>(
    {
      url: SWAPI_RESOURCES.people,
      params: {
        search: criteria,
      },
    },
    page
  );

export const getPersonById = (id: string | undefined) =>
  getById<Person>(
    {
      url: SWAPI_RESOURCES.people,
    },
    id
  );
