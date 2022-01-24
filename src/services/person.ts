import fetchApi from "../lib/fetchApi";
import { BUSINESS_ENDPOINT } from "./business";

const PERSON_ENDPOINT = "/persons";

type PersonAttr = {
  personId: string;
  email: string;
  name: string;
  phone: string;
  role: string;
  join_date: string;
};

type AddPersonProps = Omit<PersonAttr, "personId">;

const getPersons = async (businessId: string): Promise<Array<PersonAttr>> => {
  const { data } = await fetchApi.get<{ persons: Array<PersonAttr> }>(
    `${BUSINESS_ENDPOINT}/${businessId}${PERSON_ENDPOINT}`
  );
  return data.persons;
};

const addPerson = async (
  businessId: string,
  person: AddPersonProps
): Promise<void> => {
  await fetchApi.post(
    `${BUSINESS_ENDPOINT}/${businessId}${PERSON_ENDPOINT}`,
    person
  );
};
const updatePerson = async (
  personId: string,
  businessId: string,
  person: AddPersonProps
): Promise<void> => {
  await fetchApi.put(
    `${BUSINESS_ENDPOINT}/${businessId}${PERSON_ENDPOINT}/${personId}`,
    person
  );
};
const deletePerson = async (
  personId: string,
  businessId: string
): Promise<void> => {
  await fetchApi.delete(
    `${BUSINESS_ENDPOINT}/${businessId}${PERSON_ENDPOINT}/${personId}`
  );
};

export { getPersons, addPerson, updatePerson, deletePerson };
export type { PersonAttr, AddPersonProps };
