import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// if the data is coming from the API, we can use createApi function from the RTK
export const doctorsListApi = createApi({
  reducerPath: "doctorsListApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getDoctorsList: builder.query({
      // add a wrong path to the url e.g /null to test the error and skeleton display
      query: () => `/`,
    }),
  }),
});

export const { useGetDoctorsListQuery } = doctorsListApi;
