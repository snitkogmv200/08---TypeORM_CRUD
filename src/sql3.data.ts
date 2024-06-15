import { AppDataSource } from "./data-source.js";
import { User } from "./User.js";

const userRepository = AppDataSource.getRepository(User);

export const getUser = async () => {
  try {
    const users = await userRepository.find();
    return users;
  } catch (err) {
    return null;
  }
};

export const addUser = async (user: { name: string; age: number }) => {
  const newUser = userRepository.create(user);
  await userRepository.save(newUser);
  return newUser;
};

export const updateUser = async (
  id: number,
  updateData: { name: string; age: number }
) => {
  const user = await userRepository.findOneBy({ id });
  if (!user) {
    return null;
  }
  userRepository.merge(user, updateData);
  await userRepository.save(user);
  return user;
};

export const deleteUser = async (id: number) => {
  const result = await userRepository.delete(id);
  return (result.affected ?? 0) > 0;
};

export const getUserById = async (id: number) => {
  const user = await userRepository.findOneBy({ id });
  return user;
};
