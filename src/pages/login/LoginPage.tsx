import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useSignIn from "@/hooks/useSignIn";
import {
  SignInCredentialsValiador,
  TSignInCredentialsValiador,
} from "@/lib/validationScemes";
import { useIsAuthenticated } from "@/store/features/userSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import AuthBanner from "@/assets/auth_banner.png";

const LoginPage = () => {
  const [handleSignIn, { isLoading }] = useSignIn();
  const isAuthenticated = useIsAuthenticated();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignInCredentialsValiador>({
    resolver: zodResolver(SignInCredentialsValiador),
  });

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  const onSubmit = async ({
    username,
    password,
  }: TSignInCredentialsValiador) => {
    await handleSignIn({ username, password });
  };

  return (
    <div className="flex items-center justify-between h-screen">
      <img src={AuthBanner} alt="auth banner" className="max-w-[500px]" />
      <div className="w-[500px] h-full flex flex-col justify-center gap-5">
        <h1 className="text-center text-4xl font-bold">Увійти</h1>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input type="text" placeholder="ПІБ" {...register("username")} />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>
          <div>
            <Input
              type="password"
              placeholder="Пароль"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <Button type="submit" disabled={isLoading} size="lg">
            Увійти
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
