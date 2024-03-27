export const getDataList = async (resource: string) => {
  return fetch(`https://jsonplaceholder.typicode.com/${resource}`, { cache: "no-store" }).then(
    (response) => response.json()
  );
};
export const getDataById = async (resource: string, userId: string) => {
  return fetch(`https://jsonplaceholder.typicode.com/${resource}/${userId}`, {
    cache: "no-store",
  }).then((response) => response.json());
};

export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
