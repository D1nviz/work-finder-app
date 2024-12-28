import { SignInCredentials, SignInResponse, SignUpCredentials } from "@/types";
import { appApi } from "./appApi";

export const authApi = appApi.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation<SignInResponse, SignInCredentials>({
      query: (credentials) => ({
        url: "auth/signin",
        method: "POST",
        body: credentials,
      }),
    }),
    signUp: build.mutation<void, SignUpCredentials>({
      query: (credentials) => ({
        url: "auth/signup",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
