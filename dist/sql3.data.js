var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AppDataSource } from "./data-source.js";
import { User } from "./User.js";
const userRepository = AppDataSource.getRepository(User);
export const getUser = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userRepository.find();
        return users;
    }
    catch (err) {
        return null;
    }
});
export const addUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = userRepository.create(user);
    yield userRepository.save(newUser);
    return newUser;
});
export const updateUser = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userRepository.findOneBy({ id });
    if (!user) {
        return null;
    }
    userRepository.merge(user, updateData);
    yield userRepository.save(user);
    return user;
});
export const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const result = yield userRepository.delete(id);
    return ((_a = result.affected) !== null && _a !== void 0 ? _a : 0) > 0;
});
export const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userRepository.findOneBy({ id });
    return user;
});
