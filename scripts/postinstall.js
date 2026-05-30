const fs = require("fs");

if (!fs.existsSync(".claude/skills")) {
  console.log("");
  console.log("  \u26a0\ufe0f  Evergreen skills not found (.claude/skills/ is missing).");
  console.log("     Hidden dotfiles may not have been copied during setup.");
  console.log("     Run: git checkout -- .claude/");
  console.log("");
}
