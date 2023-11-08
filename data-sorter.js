import fs from "fs"
import path from "path"

const jsonContent = fs.readFileSync(path.join(__dirname, "data.json"))
const data = JSON.parse(jsonContent)

data.sort( (a, b) => b.aNumber - a.aNumber)

console.table(data)

//fs.writeFileSync(path.join(__dirname, "data-sorted.json"), JSON.stringify(data, null, 4))