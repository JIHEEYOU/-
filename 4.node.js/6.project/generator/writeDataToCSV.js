import fs from "fs";

function writeDataToCSV(data, filePath, header) {
  const rows = data.map((row) => row.join(","));
  const csvContent = [header, ...rows].join("\n");
  fs.writeFileSync(filePath, csvContent, "utf8");
}

export default writeDataToCSV;
