var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { addUser, deleteUser, getUser, getUserById, updateUser, } from "../sql3.data.js";
const userController = {
    getUsers: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield getUser();
        return res.status(200).send(data);
    }),
    addUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield addUser(req.body);
        return res.status(201).send(data);
    }),
    updateUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = Number(req.params.id);
        const data = yield updateUser(id, req.body);
        return res.send(data);
    }),
    findOneUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = Number(req.params.id);
        const data = yield getUserById(id);
        return res.send(data);
    }),
    deleteUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = Number(req.params.id);
        const data = yield deleteUser(id);
        return res.send(data);
    }),
};
export default userController;
