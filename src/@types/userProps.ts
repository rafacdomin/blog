export default interface UserProps {
  id: string;
  name: string;
  email: string;
  username: string;
  website: string;
  phone: string;
  company: {
    name: string;
    catchPhrase: string;
  };
  address: {
    city: string;
  };
}
