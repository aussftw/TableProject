export type LoginUserType = {
  login: string;
  password: string;
};

export type UserType = {
  userName: string;
  age: number;
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };

  location: any;
  email: string;
  login: any;
  dob: {
    date: string;
    age: number;
  };
  registred: any;
  phone: number;
  cell: number;
  picture: {
    large: string;
    medium: string;
    thmbnail: string;
  };
};
