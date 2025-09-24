const { exec } = require("node:child_process");

function checkPostgres() {
  exec("docker exec postgres-dev pg_isready --host localhost", handleReeturn);

  function handleReeturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write(".");
      checkPostgres();
      return;
    }

    console.log("\n🔵 Postgres pronto");
  }
}

process.stdout.write("\n\n🔴 Aguardando postgres...");

checkPostgres();
