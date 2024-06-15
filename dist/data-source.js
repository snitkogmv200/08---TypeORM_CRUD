var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DataSource } from "typeorm";
import * as path from "path";
import { User } from "./User.js";
import { getGlobals } from "common-es";
const { __dirname } = getGlobals(import.meta.url);
const databasePath = path.join(__dirname, "..", "yourdatabase.db");
export const AppDataSource = new DataSource({
    type: "sqlite",
    database: databasePath,
    synchronize: true,
    entities: [User],
});
export const initDataSource = () => __awaiter(void 0, void 0, void 0, function* () {
    yield AppDataSource.initialize();
    console.log("Database connected and initialized");
});
initDataSource().catch((error) => console.log("Database connection error", error));
