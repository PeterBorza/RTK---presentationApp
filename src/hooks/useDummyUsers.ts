import { useCallback, useEffect, useState } from "react";

const DUMMY_USERS = "http://dummyjson.com/users";

export type UserType = {
  firstName: string;
  lastName: string;
  birthDate: string;
  image: string;
  gender: string;
  height: number;
  id: number;
};

const useDummyUsers = (): [boolean, UserType[]] => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<UserType[]>([]);

  const userConverter = useCallback(
    (users: UserType[]) =>
      users.map(user => ({
        firstName: user.firstName,
        lastName: user.lastName,
        birthDate: user.birthDate,
        image: user.image,
        gender: user.gender,
        height: user.height,
        id: user.id,
      })),
    [],
  );

  useEffect(() => {
    const getUsers = async (): Promise<void> => {
      try {
        await fetch(DUMMY_USERS)
          .then(res => res.json())
          .then(data => {
            const myUsers = userConverter(data.users);
            setUsers(myUsers);
          });
      } catch (err) {
        console.log(`error in app, cannot fetch users from ${DUMMY_USERS}`, err);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, [userConverter]);

  return [loading, users];
};

export default useDummyUsers;
