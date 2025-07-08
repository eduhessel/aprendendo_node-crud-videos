import { sql } from "./db.js";

// Apagar Tabela
// sql`DROP TABLE IF EXISTS videos`.then(() => {
//   console.log("Tabela apagada");
// });

// Criar Tabela
sql`
    CREATE TABLE videos (
        id              TEXT PRIMARY KEY,
        title           TEXT,
        description     TEXT,
        duration        INTEGER
    );
`.then(() => {
  console.log("Tabela criada");
});
