import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();

  // here we'll use Mutation to handle the login. It's a Mutation because actually something changes on the server (basically, user gets authenticated), and also it's a lot easier to handle the success and error states if this is a Mutation.
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: () => {
      navigate("/dashboard");
    },

    onError: (error) => {
      console.log(`ERROR`, error);
      toast.error(`Provided password or email is incorrect`);
    },
  });

  return { login, isLoading };
}
