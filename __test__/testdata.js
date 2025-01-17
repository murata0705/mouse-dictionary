import fs from "fs";
import json5 from "json5";
const jaRule = require("deinja/src/data");
import rule from "../src/main/rule";

const load = () => {
  rule.registerRuleData({
    letters: readJson("letters.json5"),
    noun: readJson("noun.json5"),
    phrase: readJson("phrase.json5"),
    pronoun: readJson("pronoun.json5"),
    spelling: readJson("spelling.json5"),
    trailing: readJson("trailing.json5"),
    verb: readJson("verb.json5"),
    ja: jaRule
  });
};

const readJson = fileName => {
  const json = fs.readFileSync(`rule/${fileName}`, "utf8");
  return json5.parse(json);
};

export default { load };
