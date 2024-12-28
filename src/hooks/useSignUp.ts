import { useSignUpMutation } from "@/store/api/authApi";
import { useToast } from "./use-toast";
import { SignUpCredentials } from "@/types";

const useSignUp = () => {
  const [signUp, options] = useSignUpMutation();
  const { toast } = useToast();

  const handleSignUp = async (credentials: SignUpCredentials) => {
    const { error } = await signUp(credentials);
    console.log(error);

    // if (error.data) {
    //   toaster.create({
    //     title: "Failed to sign up",
    //     description: error.data.message,
    //     type: "error",
    //   });
    //   return;
    // }

    toast({
      title: "Congratulations!",
      description: "You have successfully signed up",
    });
  };

  return [handleSignUp, options] as const;
};

export default useSignUp;
