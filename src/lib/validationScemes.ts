import { z } from "zod";

export const SignUpCredentialsValiador = z.object({
  username: z
    .string()
    .min(3, { message: "ПІБ має складатись мінімум з 3 символів" }),
  email: z
    .string()
    .email({ message: "Будь ласка, введіть дійсну електронну адресу" }),
  password: z
    .string()
    .min(8, { message: "Пароль має бути мінімум 8 символів" }),
});

export const SignInCredentialsValiador = z.object({
  username: z
    .string()
    .min(3, { message: "Ім'я користувача має бути мінімум 3 символи" }),
  password: z
    .string()
    .min(8, { message: "Пароль має бути мінімум 8 символів" }),
});

export type TSignUpCredentialsValiador = z.infer<
  typeof SignUpCredentialsValiador
>;

export type TSignInCredentialsValiador = z.infer<
  typeof SignInCredentialsValiador
>;
