import { userSigIn } from "../../types/login";

interface ILoginServices {
  login(userName: string, password: string): Promise<userSigIn>;
}

export default ILoginServices;