import * as XLSX from "xlsx";
import path from "path";

export interface LoginUser {
    type: string;
    username: string;
    password: string;
    expectedMessage: string;
}

export function readExcelData(): LoginUser[] {

    const filePath = path.resolve(__dirname, "../test-data/DemoblazeLogin.xlsx");

    const workbook = XLSX.readFile(filePath);

    const sheet = workbook.Sheets["Login"];

    return XLSX.utils.sheet_to_json<LoginUser>(sheet, {defval: ""});
}