interface ILoginServices {
  login(userName: string, password: string): Promise<string>;
}

export default ILoginServices;