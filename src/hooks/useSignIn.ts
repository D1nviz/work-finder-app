import { useDispatch } from "react-redux";
import { useToast } from "./use-toast";
import { SignInCredentials } from "@/types";
import { authenticate } from "@/store/features/userSlice";
import { useSignInMutation } from "@/store/api/authApi";

const useSignIn = () => {
  const [signIn, options] = useSignInMutation();
  const { toast } = useToast();
  const dispatch = useDispatch();

  const handleSignIn = async (credentials: SignInCredentials) => {
    const { data: userDetails } = await signIn(credentials);

    dispatch(authenticate({ token: userDetails?.accessToken }));

    toast({
      title: "Welcome!",
      description: "You have successfully signed in",
    });
  };

  return [handleSignIn, options] as const;
};

export default useSignIn;
