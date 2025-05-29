import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const Backend_URL="http://localhost:8000";

export const api = createApi({
    reducerPath: "api",
   baseQuery: fetchBaseQuery({
    baseUrl: `${Backend_URL}/api/`,
    prepareHeaders: async (headers, { getState }) => {
      const token = await window?.Clerk?.session?.getToken();
      console.log(token);
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
    }
  }),
  
    endpoints: (builder) => ({
       
  }),
});

export const { 
  
   } = api; 