import fetchApi from "../lib/fetchApi";
const BUSINESS_ENDPOINT = "/business";
type BusinessAttr = {
  businessId: string;
  name: string;
};

type AddBusinessProps = Omit<BusinessAttr, "businessId">;

const getBusiness = async (): Promise<Array<BusinessAttr>> => {
  const response = await fetchApi.get<{ businesses: Array<BusinessAttr> }>(
    BUSINESS_ENDPOINT
  );
  return response.data.businesses;
};

const getBusinessData = async (businessId: string): Promise<BusinessAttr> => {
  const response = await fetchApi.get<BusinessAttr>(
    `${BUSINESS_ENDPOINT}/${businessId}`
  );
  return response.data;
};

const addBusiness = async (business: AddBusinessProps): Promise<void> => {
  await fetchApi.post(BUSINESS_ENDPOINT, business);
};

const updateBusiness = async (
  businessId: string,
  business: AddBusinessProps
): Promise<void> => {
  await fetchApi.put(`${BUSINESS_ENDPOINT}/${businessId}`, business);
};

const deleteBusiness = async (businessId: string): Promise<void> => {
  await fetchApi.delete(`${BUSINESS_ENDPOINT}/${businessId}`);
};

export {
  BUSINESS_ENDPOINT,
  getBusiness,
  getBusinessData,
  addBusiness,
  updateBusiness,
  deleteBusiness,
};
export type { BusinessAttr, AddBusinessProps };
