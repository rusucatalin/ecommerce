import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a type for the slice state
// interface CounterState {
//   value: number;
// }
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query<void, void>({
      query: () => `users`,
      providesTags: ["Users"],
    }),
    getUsersById: builder.mutation<any, number>({
      query: (id: number) => {
        return `users/${id}`;
      },
      invalidatesTags: ["Users"],
    }),
    userLogin: builder.mutation<void, { email: string; password: string }>({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: user,
      }),
    }),
  }),
});
export const {
  useUserLoginMutation,
  useGetUsersQuery,
  useLazyGetUsersQuery,
  useGetUsersByIdMutation,
} = usersApi;
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// Define the initial state using that type

// const initialState: CounterState = {
//   value: 0,
// };

// export const counterSlice = createSlice({
//   name: "counter",
//   // `createSlice` will infer the state type from the `initialState` argument
//   // initialState,

//   reducers: {},
// });

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

// export const counterReducer = counterSlice.reducer;
