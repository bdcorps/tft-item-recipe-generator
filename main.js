function allowDrop(ev) {
  ev.preventDefault();
}

function addToInventory(ev) {
  ev.preventDefault();
  var data = ev.target.id;
  console.log(data);
  var nodeCopy = $("#" + data)
    .parent()
    .clone();

  nodeCopy.attr({
    id: "newnew",
    // class: "inventory-item",
    onClick: "removeFromInventory(event)"
  });
  $(".inventory").append(nodeCopy);
  inventory.push(data);
  console.log(nodeCopy);
}

function removeFromInventory() {
  console.log("removeing");
}

function drag(ev) {
  //   console.log(ev.target.id);
  //   ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  //   ev.preventDefault();
  //   var data = ev.dataTransfer.getData("text");
  //   //   ev.target.appendChild(document.getElementById(data));
  //   var nodeCopy = document.getElementById(data).cloneNode(true);
  //   nodeCopy.id = "newId";
  //   nodeCopy.class = "inventory-item";
  //   ev.target.appendChild(nodeCopy);
  //   inventory.push(data);
  //   console.log(inventory);
}

var items = {
  bfsword: {
    key: "bfsword",
    name: "B.F. Sword",
    type: "Offensive",
    bonus: "+20 Attack Damage.",
    tier: 1,
    depth: 1,
    stats: [
      {
        name: "attackDamage",
        title: "Attack Damage",
        amount: "+20"
      }
    ],
    kind: "basic",
    buildsInto: [
      "infinityedge",
      "hextechgunblade",
      "swordofthedivine",
      "spearofshojin",
      "guardianangel",
      "bloodthirster",
      "zekesherald",
      "youmuusghostblade"
    ],
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  needlesslylargerod: {
    key: "needlesslylargerod",
    name: "Needlessly Large Rod",
    type: "Offensive",
    bonus: "+20% Spell Damage",
    tier: 1,
    depth: 1,
    stats: [
      {
        name: "abilityPower",
        title: "Spell Damage",
        amount: "+20%"
      }
    ],
    kind: "basic",
    buildsInto: [
      "hextechgunblade",
      "rabadonsdeathcap",
      "guinsoosrageblade",
      "ludensecho",
      "locketoftheironsolari",
      "ionicspark",
      "morellonomicon",
      "yuumi"
    ],
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  recurvebow: {
    key: "recurvebow",
    name: "Recurve Bow",
    type: "Offensive",
    bonus: "+20% Attack Speed",
    tier: 1,
    depth: 1,
    stats: [
      {
        name: "attackSpeed",
        title: "Attack Speed",
        amount: "+20%"
      }
    ],
    kind: "basic",
    buildsInto: [
      "swordofthedivine",
      "guinsoosrageblade",
      "rapidfirecannon",
      "statikkshiv",
      "phantomdancer",
      "cursedblade",
      "titanichydra",
      "bladeoftheruinedking"
    ],
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  tearofthegoddess: {
    key: "tearofthegoddess",
    name: "Tear of the Goddess",
    type: "Utility",
    bonus: "+20 Starting Mana.",
    tier: 1,
    depth: 1,
    stats: [
      {
        name: "mana",
        title: "Starting Mana",
        amount: "+20"
      }
    ],
    kind: "basic",
    buildsInto: [
      "spearofshojin",
      "ludensecho",
      "statikkshiv",
      "seraphsembrace",
      "frozenheart",
      "hush",
      "redemption",
      "darkin"
    ],
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  chainvest: {
    key: "chainvest",
    name: "Chain Vest",
    type: "Defensive",
    bonus: "+20 Armor.",
    tier: 1,
    depth: 1,
    stats: [
      {
        name: "armor",
        title: "Armor",
        amount: "+20"
      }
    ],
    kind: "basic",
    buildsInto: [
      "guardianangel",
      "locketoftheironsolari",
      "phantomdancer",
      "frozenheart",
      "thornmail",
      "swordbreaker",
      "redbuff",
      "knightsvow"
    ],
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  negatroncloak: {
    key: "negatroncloak",
    name: "Negatron Cloak",
    type: "Defensive",
    bonus: "+20 Magic Resist.",
    tier: 1,
    depth: 1,
    stats: [
      {
        name: "magicResist",
        title: "Magic Resist",
        amount: "+20"
      }
    ],
    kind: "basic",
    buildsInto: [
      "bloodthirster",
      "ionicspark",
      "cursedblade",
      "hush",
      "swordbreaker",
      "dragonsclaw",
      "zephyr",
      "runaanshurricane"
    ],
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  giantsbelt: {
    key: "giantsbelt",
    name: "Giant's Belt",
    type: "Defensive",
    bonus: "+200 Health.",
    tier: 1,
    depth: 1,
    stats: [
      {
        name: "health",
        title: "Health",
        amount: "+200"
      }
    ],
    kind: "basic",
    buildsInto: [
      "zekesherald",
      "morellonomicon",
      "titanichydra",
      "redemption",
      "redbuff",
      "zephyr",
      "warmogsarmor",
      "frozenmallet"
    ],
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  spatula: {
    key: "spatula",
    name: "Spatula",
    type: "Utility",
    bonus: "It must do something...",
    tier: 1,
    depth: 1,
    stats: [
      {
        name: null,
        title: "It must do something...",
        amount: null
      }
    ],
    kind: "basic",
    buildsInto: [
      "youmuusghostblade",
      "yuumi",
      "bladeoftheruinedking",
      "darkin",
      "knightsvow",
      "runaanshurricane",
      "frozenmallet",
      "forceofnature"
    ],
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  forceofnature: {
    key: "forceofnature",
    name: "Force of Nature",
    type: "Utility",
    bonus: "Gain + team size.",
    tier: 1,
    depth: 2,
    buildsFrom: ["spatula", "spatula"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  bladeoftheruinedking: {
    key: "bladeoftheruinedking",
    name: "Blade of the Ruined King",
    type: "Offensive",
    bonus: "Wearer is also a Blademaster.",
    tier: 1,
    depth: 2,
    buildsFrom: ["spatula", "recurvebow"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  bloodthirster: {
    key: "bloodthirster",
    name: "Bloodthirster",
    type: "Defensive",
    bonus: "Attacks heal for 50% of damage.",
    tier: 1,
    depth: 2,
    buildsFrom: ["bfsword", "negatroncloak"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  cursedblade: {
    key: "cursedblade",
    name: "Cursed Blade",
    type: "Utility",
    bonus:
      "Attacks have a low chance to Shrink (-1 enemy star, down to level 0).",
    tier: 1,
    depth: 2,
    buildsFrom: ["negatroncloak", "recurvebow"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  darkin: {
    key: "darkin",
    name: "Darkin",
    type: "Utility",
    bonus: "Wearer is also a Demon.",
    tier: 1,
    depth: 2,
    buildsFrom: ["spatula", "tearofthegoddess"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  dragonsclaw: {
    key: "dragonsclaw",
    name: "Dragon's Claw",
    type: "Defensive",
    bonus: "83% resistance to magic damage.",
    tier: 1,
    depth: 2,
    buildsFrom: ["negatroncloak", "negatroncloak"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  frozenheart: {
    key: "frozenheart",
    name: "Frozen Heart",
    type: "Defensive",
    bonus: "Adjacent enemies lose 25% Attack Speed.",
    tier: 1,
    depth: 2,
    buildsFrom: ["tearofthegoddess", "chainvest"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  frozenmallet: {
    key: "frozenmallet",
    name: "Frozen Mallet",
    type: "Utility",
    bonus: "Wearer is also a Glacial.",
    tier: 1,
    depth: 2,
    buildsFrom: ["giantsbelt", "spatula"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  guardianangel: {
    key: "guardianangel",
    name: "Guardian Angel",
    type: "Utility",
    bonus: "Revives champ with 1000 HP after 2 seconds.",
    tier: 1,
    depth: 2,
    buildsFrom: ["bfsword", "chainvest"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  guinsoosrageblade: {
    key: "guinsoosrageblade",
    name: "Guinsoo's Rageblade",
    type: "Offensive",
    bonus: "Attacks give 4% Attack Speed. Stacks infinitely.",
    tier: 1,
    depth: 2,
    buildsFrom: ["needlesslylargerod", "recurvebow"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  hextechgunblade: {
    key: "hextechgunblade",
    name: "Hextech Gunblade",
    type: "Defensive",
    bonus: "Heal for 33% of all damage dealt.",
    tier: 1,
    depth: 2,
    buildsFrom: ["bfsword", "needlesslylargerod"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  hush: {
    key: "hush",
    name: "Hush",
    type: "Utility",
    bonus: "Attacks have a high chance to Silence.",
    tier: 1,
    depth: 2,
    buildsFrom: ["tearofthegoddess", "negatroncloak"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  infinityedge: {
    key: "infinityedge",
    name: "Infinity Edge",
    type: "Offensive",
    bonus: "Critical Strikes deal +100% damage.",
    tier: 1,
    depth: 2,
    buildsFrom: ["bfsword", "bfsword"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  ionicspark: {
    key: "ionicspark",
    name: "Ionic Spark",
    type: "Utility",
    bonus: "Whenever an enemy casts a spell they take 200 true damage.",
    tier: 1,
    depth: 2,
    buildsFrom: ["negatroncloak", "needlesslylargerod"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  knightsvow: {
    key: "knightsvow",
    name: "Knights Vow",
    type: "Utility",
    bonus: "Wearer is also a Knight.",
    tier: 1,
    depth: 2,
    buildsFrom: ["chainvest", "spatula"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  locketoftheironsolari: {
    key: "locketoftheironsolari",
    name: "Locket of the Iron Solari",
    type: "Defensive",
    bonus:
      "On start of combat, allies 2 spaces to the left and right gain <strong style='color: white;'>300 shield.</span>",
    tier: 1,
    depth: 2,
    buildsFrom: ["needlesslylargerod", "chainvest"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  ludensecho: {
    key: "ludensecho",
    name: "Luden's Echo",
    type: "Offensive",
    bonus: "Deal 200 splash damage on ability hit.",
    tier: 1,
    depth: 2,
    buildsFrom: ["needlesslylargerod", "tearofthegoddess"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  morellonomicon: {
    key: "morellonomicon",
    name: "Morellonomicon",
    type: "Offensive",
    bonus: "Spells burn for 15% of max HP over 5s and disable healing.",
    tier: 1,
    depth: 2,
    buildsFrom: ["needlesslylargerod", "giantsbelt"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  phantomdancer: {
    key: "phantomdancer",
    name: "Phantom Dancer",
    type: "Defensive",
    bonus: "Wearer dodges all Critical Strikes.",
    tier: 1,
    depth: 2,
    buildsFrom: ["chainvest", "recurvebow"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  rabadonsdeathcap: {
    key: "rabadonsdeathcap",
    name: "Rabadon's Deathcap",
    type: "Offensive",
    bonus: "Wearer's Ability Damage increased by 50%.",
    tier: 1,
    depth: 2,
    buildsFrom: ["needlesslylargerod", "needlesslylargerod"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  rapidfirecannon: {
    key: "rapidfirecannon",
    name: "Rapid Firecannon",
    type: "Offensive",
    bonus: "Attacks cannot be dodged. Attack Range is doubled.",
    tier: 1,
    depth: 2,
    buildsFrom: ["recurvebow", "recurvebow"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  redbuff: {
    key: "redbuff",
    name: "Red Buff",
    type: "Offensive",
    bonus: "Attacks burn for 13% of max HP over 5s and disable healing.",
    tier: 1,
    depth: 2,
    buildsFrom: ["chainvest", "giantsbelt"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  redemption: {
    key: "redemption",
    name: "Redemption",
    type: "Utility",
    bonus: "At 25% health heal all nearby allies for 1000 HP.",
    tier: 1,
    depth: 2,
    buildsFrom: ["tearofthegoddess", "giantsbelt"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  runaanshurricane: {
    key: "runaanshurricane",
    name: "Runaan's Hurricane",
    type: "Offensive",
    bonus:
      "Attacks hit 1 additional enemy. This extra hit does 25% damage and applies on-hit effects.",
    tier: 1,
    depth: 2,
    buildsFrom: ["spatula", "negatroncloak"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  seraphsembrace: {
    key: "seraphsembrace",
    name: "Seraph's Embrace",
    type: "Utility",
    bonus: "Regain 20 mana each time a spell is cast",
    tier: 1,
    depth: 2,
    buildsFrom: ["tearofthegoddess", "tearofthegoddess"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  spearofshojin: {
    key: "spearofshojin",
    name: "Spear of Shojin",
    type: "Utility",
    bonus: "After casting, gain 15% of max mana per attack.",
    tier: 1,
    depth: 2,
    buildsFrom: ["bfsword", "tearofthegoddess"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  statikkshiv: {
    key: "statikkshiv",
    name: "Statikk Shiv",
    type: "Offensive",
    bonus: "Every 3rd attack deals 100 splash magical damage to 3 enemies.",
    tier: 1,
    depth: 2,
    buildsFrom: ["recurvebow", "tearofthegoddess"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  swordbreaker: {
    key: "swordbreaker",
    name: "Sword Breaker",
    type: "Utility",
    bonus: "Attacks have a chance to disarm.",
    tier: 1,
    depth: 2,
    buildsFrom: ["chainvest", "negatroncloak"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  swordofthedivine: {
    key: "swordofthedivine",
    name: "Sword of the Divine",
    type: "Offensive",
    bonus: "Every 1s gain a 5% chance to gain 100% Critical Strike.",
    tier: 1,
    depth: 2,
    buildsFrom: ["recurvebow", "bfsword"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  thornmail: {
    key: "thornmail",
    name: "Thornmail",
    type: "Defensive",
    bonus: "Reflect 100% of of physical damage mitigated as True Damage.",
    tier: 1,
    depth: 2,
    buildsFrom: ["chainvest", "chainvest"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  titanichydra: {
    key: "titanichydra",
    name: "Titanic Hydra",
    type: "Offensive",
    bonus: "Attacks deal 10% of the wearer's max HP as splash.",
    tier: 1,
    depth: 2,
    buildsFrom: ["giantsbelt", "recurvebow"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  warmogsarmor: {
    key: "warmogsarmor",
    name: "Warmog's Armor",
    type: "Defensive",
    bonus:
      "Regenerate 6% max <strong style='color: #20995D;'>Health</strong> per second.",
    tier: 1,
    depth: 2,
    buildsFrom: ["giantsbelt", "giantsbelt"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  youmuusghostblade: {
    key: "youmuusghostblade",
    name: "Youmuu's Ghostblade",
    type: "Utility",
    bonus: "Wearer is also an Assassin.",
    tier: 1,
    depth: 2,
    buildsFrom: ["spatula", "bfsword"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  yuumi: {
    key: "yuumi",
    name: "Yuumi",
    type: "Utility",
    bonus: "Wearer is also a Sorcerer.",
    tier: 1,
    depth: 2,
    buildsFrom: ["spatula", "needlesslylargerod"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  zekesherald: {
    key: "zekesherald",
    name: "Zeke's Herald",
    type: "Utility",
    bonus:
      "On start of combat, allies 2 spaces to the left and right gain +15% Attack Speed.",
    tier: 1,
    depth: 2,
    buildsFrom: ["bfsword", "giantsbelt"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  },
  zephyr: {
    key: "zephyr",
    name: "Zephyr",
    type: "Utility",
    bonus: "On start of combat banish an enemy.",
    tier: 1,
    depth: 2,
    buildsFrom: ["negatroncloak", "giantsbelt"],
    kind: "advanced",
    champs: ["Ashe", "Yasuo", "Zed"]
  }
};

var recipes = {
  bfsword: {
    bfsword: "infinityedge",
    chainvest: "guardianangel",
    giantsbelt: "zekesherald",
    needlesslylargerod: "hextechgunblade",
    negatroncloak: "bloodthirster",
    recurvebow: "swordofthedivine",
    spatula: "youmuusghostblade",
    tearofthegoddess: "spearofshojin"
  },
  chainvest: {
    bfsword: "guardianangel",
    chainvest: "thornmail",
    giantsbelt: "redbuff",
    needlesslylargerod: "locketoftheironsolari",
    negatroncloak: "swordbreaker",
    recurvebow: "phantomdancer",
    spatula: "knightsvow",
    tearofthegoddess: "frozenheart"
  },
  giantsbelt: {
    bfsword: "zekesherald",
    chainvest: "redbuff",
    giantsbelt: "warmogsarmor",
    needlesslylargerod: "morellonomicon",
    negatroncloak: "zephyr",
    recurvebow: "titanichydra",
    spatula: "frozenmallet",
    tearofthegoddess: "redemption"
  },
  needlesslylargerod: {
    bfsword: "hextechgunblade",
    chainvest: "locketoftheironsolari",
    giantsbelt: "morellonomicon",
    needlesslylargerod: "rabadonsdeathcap",
    negatroncloak: "ionicspark",
    recurvebow: "guinsoosrageblade",
    spatula: "yuumi",
    tearofthegoddess: "ludensecho"
  },
  negatroncloak: {
    bfsword: "bloodthirster",
    chainvest: "swordbreaker",
    giantsbelt: "zephyr",
    needlesslylargerod: "ionicspark",
    negatroncloak: "dragonsclaw",
    recurvebow: "cursedblade",
    spatula: "runaanshurricane",
    tearofthegoddess: "hush"
  },
  recurvebow: {
    bfsword: "swordofthedivine",
    chainvest: "phantomdancer",
    giantsbelt: "titanichydra",
    needlesslylargerod: "guinsoosrageblade",
    negatroncloak: "cursedblade",
    recurvebow: "rapidfirecannon",
    spatula: "bladeoftheruinedking",
    tearofthegoddess: "statikkshiv"
  },
  spatula: {
    bfsword: "youmuusghostblade",
    chainvest: "knightsvow",
    giantsbelt: "frozenmallet",
    needlesslylargerod: "yuumi",
    negatroncloak: "runaanshurricane",
    recurvebow: "bladeoftheruinedking",
    spatula: "forceofnature",
    tearofthegoddess: "darkin"
  },
  tearofthegoddess: {
    bfsword: "spearofshojin",
    chainvest: "frozenheart",
    giantsbelt: "redemption",
    needlesslylargerod: "ludensecho",
    negatroncloak: "hush",
    recurvebow: "statikkshiv",
    spatula: "darkin",
    tearofthegoddess: "seraphsembrace"
  }
};

var mappings = {
  bfsword: "1",
  chainvest: "2",
  giantsbelt: "3",
  needlesslylargerod: "4",
  negatroncloak: "5",
  recurvebow: "6",
  spatula: "7",
  tearofthegoddess: "8"
};

//items currently stored in the player's inventory
var inventory = [];
/**
 * Returns the key from the given json mapping object for which the value matches the provided value
 *
 * @param {*} object
 * @param {*} value
 * @returns the key that contains the given value
 */
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

function encodeItem(id) {
  return mappings[id];
}
function decodeItem(name) {
  return getKeyByValue(mappings, name);
}

function combineItems(item1, item2) {
  return recipes[item1][item2];
}

function generatePairs(arr) {
  var pairs = [];
  for (var j = 0; j < arr.length; j++) {
    for (var i = j + 1; i < arr.length; i++) {
      pairs.push([arr[j], arr[i]]);
    }
  }
  return pairs;
}

function clearInventory() {
  $("#inventory").empty();
  inventory = [];
  $("#recipes").empty();
}

function generateRecipes() {
  var recipes = [];
  var itemPairs = generatePairs(inventory);

  for (var i = 0; i < itemPairs.length; i++) {
    var combinedItem = combineItems(itemPairs[i][0], itemPairs[i][1]);
    var recipe = {
      raw_items: [itemPairs[i][0], itemPairs[i][1]],
      combined_item: combinedItem
    };
    recipes.push(recipe);
  }

  updateRecipesUI(recipes);
}

function updateRecipesUI(recipes) {
  console.log(recipes);
  function supportsTemplate() {
    return $("#recipe-template").html();
  }
  if (supportsTemplate()) {
    $("#recipes").empty();
    for (var i = 0; i < recipes.length; i++) {
      var contents = $("#recipe-template").html();
      var entry = $($.parseHTML(contents));
      console.log(entry);
      contents = entry
        .find("#item1")
        .attr("src", "./images/" + recipes[i].raw_items[0] + ".png");
      contents = entry
        .find("#item2")
        .attr("src", "./images/" + recipes[i].raw_items[1] + ".png");
      contents = entry
        .find("#combined_item")
        .attr("src", "./images/" + recipes[i].combined_item + ".png");
      contents = entry
        .find("#combined_item_text")
        .text(items[recipes[i].combined_item].bonus);

      console.log(entry);
      $("#recipes").append(entry);
    }
  } else {
    console.log("No support for template tag.");
  }
}

function generateRawItemsUI() {
  Object.keys(mappings).forEach(function(entry) {
    var div = $("<div />", {
      class: "raw-item",
      draggable: true,
      onClick: "addToInventory(event)"
    });

    var img = $("<img />", {
      src: "../images/" + entry + ".png",
      alt: entry,
      id: entry,
      draggable: false
    });

    div.append(img);
    $(".raw-items").append(div);
    // console.log(entry);
  });
}

$(document).ready(function() {
  generateRawItemsUI();
  console.log(encodeItem("stone"));
  console.log(decodeItem("2"));
  console.log(combineItems("bfsword", "arrow"));
});
