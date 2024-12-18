import fs from "fs/promises";

class FilesService {
  static async overwriteFile(filePath, newData) {
    try {
      await fs.writeFile(filePath, JSON.stringify(newData, null, 2), "utf-8");
      console.info("Дані успішно оновлено!");
    } catch (error) {
      console.error("Сталася помилка:", error.message);
    }
  }
}

export default FilesService;
