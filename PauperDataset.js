/*When replacing this list, please make sure that the file format is as follows:-
const pauperDataset = [
  {
    "name": "card name here",
    "score": *number here*
  },
  {
    "name": "Lightning Bolt",
    "score": 0.4
  },
]
*/

const pauperDataset = [
  {
    "name": "Lórien Revealed",
    "score": 0.4
  },
  {
    "name": "Lightning Bolt",
    "score": 0.4
  },
  {
    "name": "Counterspell",
    "score": 0.4
  },
  {
    "name": "Cast Down",
    "score": 0.3
  },
  {
    "name": "Nihil Spellbomb",
    "score": 0.25
  },
  {
    "name": "Brainstorm",
    "score": 0.35
  },
  {
    "name": "Sneaky Snacker",
    "score": 0.35
  },
  {
    "name": "Ichor Wellspring",
    "score": 0.3
  },
  {
    "name": "Voldaren Epicure",
    "score": 0.3
  },
  {
    "name": "Refurbished Familiar",
    "score": 0.3
  },
  {
    "name": "Galvanic Blast",
    "score": 0.3
  },
  {
    "name": "Eviscerator's Insight",
    "score": 0.15
  },
  {
    "name": "Faithless Looting",
    "score": 0.25
  },
  {
    "name": "Krark-Clan Shaman",
    "score": 0.2
  },
  {
    "name": "Makeshift Munitions",
    "score": 0.05
  },
  {
    "name": "Generous Ent",
    "score": 0.2
  },
  {
    "name": "Blood Fountain",
    "score": 0.1
  },
  {
    "name": "Writhing Chrysalis",
    "score": 0.25
  },
  {
    "name": "Snuff Out",
    "score": 0.15
  },
  {
    "name": "Toxin Analysis",
    "score": 0.1
  },
  {
    "name": "Fiery Temper",
    "score": 0.2
  },
  {
    "name": "Grab the Prize",
    "score": 0.2
  },
  {
    "name": "Fanatical Offering",
    "score": 0.2
  },
  {
    "name": "Lembas",
    "score": 0.15
  },
  {
    "name": "Dispel",
    "score": 0.1
  },
  {
    "name": "Fireblast",
    "score": 0.15
  },
  {
    "name": "Highway Robbery",
    "score": 0.2
  },
  {
    "name": "Avenging Hunter",
    "score": 0.15
  },
  {
    "name": "Thraben Charm",
    "score": 0.15
  },
  {
    "name": "Reckoner's Bargain",
    "score": 0.15
  },
  {
    "name": "Nyxborn Hydra",
    "score": 0.1
  },
  {
    "name": "Sagu Wildling",
    "score": 0.1
  },
  {
    "name": "Tolarian Terror",
    "score": 0.2
  },
  {
    "name": "Ponder",
    "score": 0.1
  },
  {
    "name": "Thoughtcast",
    "score": 0.15
  },
  {
    "name": "Myr Enforcer",
    "score": 0.15
  },
  {
    "name": "Murmuring Mystic",
    "score": 0.05
  },
  {
    "name": "Lava Dart",
    "score": 0.15
  },
  {
    "name": "Utrom Monitor",
    "score": 0.15
  },
  {
    "name": "Malevolent Rumble",
    "score": 0.15
  },
  {
    "name": "Thought Scour",
    "score": 0.15
  },
  {
    "name": "Winding Way",
    "score": 0.15
  },
  {
    "name": "Bonder's Ornament",
    "score": 0.05
  },
  {
    "name": "Mental Note",
    "score": 0.15
  },
  {
    "name": "Prismatic Strands",
    "score": 0.1
  },
  {
    "name": "Guttersnipe",
    "score": 0.1
  },
  {
    "name": "Lead the Stampede",
    "score": 0.15
  },
  {
    "name": "Kessig Flamebreather",
    "score": 0.15
  },
  {
    "name": "Spellstutter Sprite",
    "score": 0.15
  },
  {
    "name": "Sewer-veillance Cam",
    "score": 0.05
  },
  {
    "name": "Masked Vandal",
    "score": 0.1
  },
  {
    "name": "Faerie Seer",
    "score": 0.15
  },
  {
    "name": "Spell Pierce",
    "score": 0.05
  },
  {
    "name": "Ninja of the Deep Hours",
    "score": 0.1
  },
  {
    "name": "Preordain",
    "score": 0.1
  },
  {
    "name": "Suffocating Fumes",
    "score": 0.05
  },
  {
    "name": "Quirion Ranger",
    "score": 0.1
  },
  {
    "name": "Deep Analysis",
    "score": 0.05
  },
  {
    "name": "Moon-Circuit Hacker",
    "score": 0.05
  },
  {
    "name": "Journey to Nowhere",
    "score": 0.05
  },
  {
    "name": "Troll of Khazad-dûm",
    "score": 0.05
  },
  {
    "name": "Cryptic Serpent",
    "score": 0.1
  },
  {
    "name": "Ephemerate",
    "score": 0.05
  },
  {
    "name": "Cleansing Wildfire",
    "score": 0.1
  },
  {
    "name": "Thraben Inspector",
    "score": 0.1
  },
  {
    "name": "Chain Lightning",
    "score": 0.05
  },
  {
    "name": "Clockwork Percussionist",
    "score": 0.1
  },
  {
    "name": "Goblin Tomb Raider",
    "score": 0.1
  },
  {
    "name": "Pulse of Murasa",
    "score": 0.05
  },
  {
    "name": "Sleep of the Dead",
    "score": 0.05
  },
  {
    "name": "Thorn of the Black Rose",
    "score": 0.05
  },
  {
    "name": "Expedition Map",
    "score": 0.1
  },
  {
    "name": "Kor Skyfisher",
    "score": 0.1
  },
  {
    "name": "Tithing Blade",
    "score": 0.05
  },
  {
    "name": "Breath Weapon",
    "score": 0.05
  },
  {
    "name": "Experimental Synthesizer",
    "score": 0.05
  },
  {
    "name": "Augur of Bolas",
    "score": 0.1
  },
  {
    "name": "Gatecreeper Vine",
    "score": 0.05
  },
  {
    "name": "Goblin Bushwhacker",
    "score": 0.1
  },
  {
    "name": "Novice Inspector",
    "score": 0.05
  },
  {
    "name": "Mulldrifter",
    "score": 0.05
  },
  {
    "name": "Land Grant",
    "score": 0.05
  },
  {
    "name": "Snap",
    "score": 0.05
  },
  {
    "name": "Weather the Storm",
    "score": 0.05
  },
  {
    "name": "Campfire",
    "score": 0.05
  },
  {
    "name": "Abandon Attachments",
    "score": 0.05
  },
  {
    "name": "Deem Inferior",
    "score": 0.05
  },
  {
    "name": "Prophetic Prism",
    "score": 0.05
  },
  {
    "name": "Utopia Sprawl",
    "score": 0.05
  },
  {
    "name": "Crop Rotation",
    "score": 0.05
  },
  {
    "name": "Lunarch Veteran",
    "score": 0.05
  },
  {
    "name": "Ghostly Flicker",
    "score": 0.05
  },
  {
    "name": "Cryogen Relic",
    "score": 0.05
  },
  {
    "name": "Leonardo, Big Brother",
    "score": 0.05
  },
  {
    "name": "Reckless Impulse",
    "score": 0.05
  },
  {
    "name": "Arbor Elf",
    "score": 0.05
  },
  {
    "name": "Burning-Tree Emissary",
    "score": 0.05
  },
  {
    "name": "Delver of Secrets",
    "score": 0.05
  },
  {
    "name": "Llanowar Elves",
    "score": 0.05
  },
  {
    "name": "Priest of Titania",
    "score": 0.05
  },
  {
    "name": "Rally at the Hornburg",
    "score": 0.05
  },
  {
    "name": "Sacred Cat",
    "score": 0.05
  },
  {
    "name": "Timberwatch Elf",
    "score": 0.05
  },
  {
    "name": "Alms of the Vein",
    "score": 0.05
  },
  {
    "name": "Archaeomancer",
    "score": 0.05
  },
  {
    "name": "Vampire's Kiss",
    "score": 0.05
  },
  {
    "name": "Candy Trail",
    "score": 0.05
  },
  {
    "name": "Extract a Confession",
    "score": 0.05
  },
  {
    "name": "Kitchen Imp",
    "score": 0.05
  },
  {
    "name": "Outlaw Medic",
    "score": 0.05
  },
  {
    "name": "Guardian of the Guildpact",
    "score": 0.05
  },
  {
    "name": "Skred",
    "score": 0.05
  },
  {
    "name": "Black Mage's Rod",
    "score": 0.05
  },
  {
    "name": "End the Festivities",
    "score": 0.05
  },
  {
    "name": "Moment's Peace",
    "score": 0.05
  },
  {
    "name": "Wild Growth",
    "score": 0.05
  },
  {
    "name": "Agony Warp",
    "score": 0.05
  },
  {
    "name": "Battle Screech",
    "score": 0.05
  },
  {
    "name": "Force Spike",
    "score": 0.05
  },
  {
    "name": "Fyndhorn Elves",
    "score": 0.05
  },
  {
    "name": "Overgrown Battlement",
    "score": 0.05
  },
  {
    "name": "Saruli Caretaker",
    "score": 0.05
  },
  {
    "name": "Armadillo Cloak",
    "score": 0.05
  },
  {
    "name": "Eldrazi Repurposer",
    "score": 0.05
  },
  {
    "name": "Prohibit",
    "score": 0.05
  },
  {
    "name": "Wrenn's Resolve",
    "score": 0.05
  },
  {
    "name": "Elvish Mystic",
    "score": 0.05
  },
  {
    "name": "Gixian Infiltrator",
    "score": 0.05
  },
  {
    "name": "Heritage Reclamation",
    "score": 0.05
  },
  {
    "name": "Dread Return",
    "score": 0.05
  },
  {
    "name": "Faerie Miscreant",
    "score": 0.05
  },
  {
    "name": "Lotleth Giant",
    "score": 0.05
  },
  {
    "name": "Mukotai Ambusher",
    "score": 0.05
  },
  {
    "name": "Raffine's Informant",
    "score": 0.05
  },
  {
    "name": "Unexpected Fangs",
    "score": 0.05
  },
  {
    "name": "Unfathomable Truths",
    "score": 0.05
  },
  {
    "name": "Boarding Party",
    "score": 0.05
  },
  {
    "name": "Bramble Wurm",
    "score": 0.05
  },
  {
    "name": "Crypt Rats",
    "score": 0.05
  },
  {
    "name": "Gurmag Angler",
    "score": 0.05
  },
  {
    "name": "Pinnacle Kill-Ship",
    "score": 0.05
  },
  {
    "name": "Wall of Roots",
    "score": 0.05
  },
  {
    "name": "Balustrade Spy",
    "score": 0.05
  },
  {
    "name": "Guardians' Pledge",
    "score": 0.05
  },
  {
    "name": "Negate",
    "score": 0.05
  },
  {
    "name": "Mystical Teachings",
    "score": 0.05
  },
  {
    "name": "Spider-Man, Web-Slinger",
    "score": 0.05
  },
  {
    "name": "Bedeck / Bedazzle",
    "score": 0.05
  },
  {
    "name": "Boulderbranch Golem",
    "score": 0.05
  },
  {
    "name": "Lotus Petal",
    "score": 0.05
  },
  {
    "name": "Of One Mind",
    "score": 0.05
  },
  {
    "name": "Terminate",
    "score": 0.05
  },
  {
    "name": "Mesmeric Fiend",
    "score": 0.05
  },
  {
    "name": "Pursue the Past",
    "score": 0.05
  },
  {
    "name": "Ancient Stirrings",
    "score": 0.05
  },
  {
    "name": "God-Pharaoh's Faithful",
    "score": 0.05
  },
  {
    "name": "Jewel Thief",
    "score": 0.05
  },
  {
    "name": "Maelstrom Colossus",
    "score": 0.05
  },
  {
    "name": "Sunscape Familiar",
    "score": 0.05
  },
  {
    "name": "Accursed Marauder",
    "score": 0.05
  },
  {
    "name": "Annoyed Altisaur",
    "score": 0.05
  },
  {
    "name": "Defile",
    "score": 0.05
  },
  {
    "name": "Energy Refractor",
    "score": 0.05
  },
  {
    "name": "Mwonvuli Acid-Moss",
    "score": 0.05
  },
  {
    "name": "Thermokarst",
    "score": 0.05
  },
  {
    "name": "Brinebarrow Intruder",
    "score": 0.05
  },
  {
    "name": "Elves of Deep Shadow",
    "score": 0.05
  },
  {
    "name": "Rancor",
    "score": 0.05
  },
  {
    "name": "Harrier Strix",
    "score": 0.05
  },
  {
    "name": "Ramosian Rally",
    "score": 0.05
  },
  {
    "name": "Sea Gate Oracle",
    "score": 0.05
  },
  {
    "name": "Visionary's Dance",
    "score": 0.05
  },
  {
    "name": "Witch's Cottage",
    "score": 0.05
  },
  {
    "name": "Barrels of Blasting Jelly",
    "score": 0.05
  },
  {
    "name": "Ram Through",
    "score": 0.05
  },
  {
    "name": "Thrilling Discovery",
    "score": 0.05
  },
  {
    "name": "Cauldron Familiar",
    "score": 0.05
  },
  {
    "name": "Chromatic Star",
    "score": 0.05
  },
  {
    "name": "Meeting of Minds",
    "score": 0.05
  },
  {
    "name": "Mnemonic Wall",
    "score": 0.05
  },
  {
    "name": "Unearth",
    "score": 0.05
  },
  {
    "name": "Aurora Eidolon",
    "score": 0.05
  },
  {
    "name": "Carrion Feeder",
    "score": 0.05
  },
  {
    "name": "Eagles of the North",
    "score": 0.05
  },
  {
    "name": "Glint Hawk",
    "score": 0.05
  },
  {
    "name": "Inventor's Axe",
    "score": 0.05
  },
  {
    "name": "Midnight Tilling",
    "score": 0.05
  },
  {
    "name": "Mortician Beetle",
    "score": 0.05
  },
  {
    "name": "Nutrient Block",
    "score": 0.05
  },
  {
    "name": "Relic of Progenitus",
    "score": 0.05
  },
  {
    "name": "Ride's End",
    "score": 0.05
  },
  {
    "name": "Sandstorm Eidolon",
    "score": 0.05
  },
  {
    "name": "Squadron Hawk",
    "score": 0.05
  },
  {
    "name": "Tangle",
    "score": 0.05
  },
  {
    "name": "The Modern Age",
    "score": 0.05
  },
  {
    "name": "Gingerbrute",
    "score": 0.05
  },
  {
    "name": "Pestilence",
    "score": 0.05
  },
  {
    "name": "Spirit Mascot",
    "score": 0.05
  },
  {
    "name": "Stonehorn Dignitary",
    "score": 0.05
  },
  {
    "name": "Stream of Thought",
    "score": 0.05
  },
  {
    "name": "Village Rites",
    "score": 0.05
  },
  {
    "name": "Abundant Growth",
    "score": 0.05
  },
  {
    "name": "Bloodthrone Vampire",
    "score": 0.05
  },
  {
    "name": "Crimson Fleet Commodore",
    "score": 0.05
  },
  {
    "name": "Fling",
    "score": 0.05
  },
  {
    "name": "Grim Bauble",
    "score": 0.05
  },
  {
    "name": "Heaped Harvest",
    "score": 0.05
  },
  {
    "name": "Infestation Sage",
    "score": 0.05
  },
  {
    "name": "Lose Focus",
    "score": 0.05
  },
  {
    "name": "Nested Shambler",
    "score": 0.05
  },
  {
    "name": "Rite of Consumption",
    "score": 0.05
  },
  {
    "name": "Shambling Ghast",
    "score": 0.05
  },
  {
    "name": "Supernatural Stamina",
    "score": 0.05
  },
  {
    "name": "Wellwisher",
    "score": 0.05
  },
  {
    "name": "Azure Fleet Admiral",
    "score": 0.05
  },
  {
    "name": "Ethereal Armor",
    "score": 0.05
  },
  {
    "name": "Inside Out",
    "score": 0.05
  },
  {
    "name": "Lightning Axe",
    "score": 0.05
  },
  {
    "name": "Manamorphose",
    "score": 0.05
  },
  {
    "name": "Militia Bugler",
    "score": 0.05
  },
  {
    "name": "Silhana Ledgewalker",
    "score": 0.05
  },
  {
    "name": "Tinder Wall",
    "score": 0.05
  },
  {
    "name": "Tireless Tribe",
    "score": 0.05
  },
  {
    "name": "Behold the Multiverse",
    "score": 0.05
  },
  {
    "name": "Bender's Waterskin",
    "score": 0.05
  },
  {
    "name": "Greatsword of Tyr",
    "score": 0.05
  },
  {
    "name": "Reckless Lackey",
    "score": 0.05
  },
  {
    "name": "Sentinel's Eyes",
    "score": 0.05
  },
  {
    "name": "Stormshriek Feral",
    "score": 0.05
  },
  {
    "name": "Ancestral Mask",
    "score": 0.05
  },
  {
    "name": "Corrupted Conviction",
    "score": 0.05
  },
  {
    "name": "First Day of Class",
    "score": 0.05
  },
  {
    "name": "Gladecover Scout",
    "score": 0.05
  },
  {
    "name": "Humbling Elder",
    "score": 0.05
  },
  {
    "name": "Impulse",
    "score": 0.05
  },
  {
    "name": "Melded Moxite",
    "score": 0.05
  },
  {
    "name": "Nezumi Linkbreaker",
    "score": 0.05
  },
  {
    "name": "Omen of the Dead",
    "score": 0.05
  },
  {
    "name": "Slippery Bogle",
    "score": 0.05
  },
  {
    "name": "Spinning Darkness",
    "score": 0.05
  },
  {
    "name": "Suplex",
    "score": 0.05
  },
  {
    "name": "Union of the Third Path",
    "score": 0.05
  },
  {
    "name": "Axebane Guardian",
    "score": 0.05
  },
  {
    "name": "Bannerhide Krushok",
    "score": 0.05
  },
  {
    "name": "Fanged Flames",
    "score": 0.05
  },
  {
    "name": "Fiery Cannonade",
    "score": 0.05
  },
  {
    "name": "Goldhound",
    "score": 0.05
  },
  {
    "name": "Oroku Saki, Shredder Rising",
    "score": 0.05
  },
  {
    "name": "Pactdoll Terror",
    "score": 0.05
  },
  {
    "name": "Reaping the Graves",
    "score": 0.05
  },
  {
    "name": "Vapor Snag",
    "score": 0.05
  },
  {
    "name": "Arcane Denial",
    "score": 0.05
  },
  {
    "name": "Ashnod's Altar",
    "score": 0.05
  },
  {
    "name": "Colossal Dreadmask",
    "score": 0.05
  },
  {
    "name": "Dark Ritual",
    "score": 0.05
  },
  {
    "name": "Elite Interceptor",
    "score": 0.05
  },
  {
    "name": "Glimpse the Impossible",
    "score": 0.05
  },
  {
    "name": "Grapple with Death",
    "score": 0.05
  },
  {
    "name": "Loran's Escape",
    "score": 0.05
  },
  {
    "name": "Respite",
    "score": 0.05
  },
  {
    "name": "Structural Distortion",
    "score": 0.05
  },
  {
    "name": "Artful Dodge",
    "score": 0.05
  },
  {
    "name": "Boomerang",
    "score": 0.05
  },
  {
    "name": "Cartouche of Solidarity",
    "score": 0.05
  },
  {
    "name": "Deprive",
    "score": 0.05
  },
  {
    "name": "Fog",
    "score": 0.05
  },
  {
    "name": "Mardu Devotee",
    "score": 0.05
  },
  {
    "name": "Mutagenic Growth",
    "score": 0.05
  },
  {
    "name": "Myr Retriever",
    "score": 0.05
  },
  {
    "name": "Rolling Thunder",
    "score": 0.05
  },
  {
    "name": "Sadistic Glee",
    "score": 0.05
  },
  {
    "name": "Scrapwork Mutt",
    "score": 0.05
  },
  {
    "name": "Seething Song",
    "score": 0.05
  },
  {
    "name": "Seize the Storm",
    "score": 0.05
  },
  {
    "name": "Tragic Slip",
    "score": 0.05
  },
  {
    "name": "World Map",
    "score": 0.05
  },
  {
    "name": "Big Score",
    "score": 0.05
  },
  {
    "name": "Cabal Ritual",
    "score": 0.05
  },
  {
    "name": "Crashing Drawbridge",
    "score": 0.05
  },
  {
    "name": "Drannith Healer",
    "score": 0.05
  },
  {
    "name": "Drannith Stinger",
    "score": 0.05
  },
  {
    "name": "Drown in Sorrow",
    "score": 0.05
  },
  {
    "name": "Duress",
    "score": 0.05
  },
  {
    "name": "Evolution Witness",
    "score": 0.05
  },
  {
    "name": "Goblin Anarchomancer",
    "score": 0.05
  },
  {
    "name": "Golem Foundry",
    "score": 0.05
  },
  {
    "name": "Horror of the Broken Lands",
    "score": 0.05
  },
  {
    "name": "Imposing Vantasaur",
    "score": 0.05
  },
  {
    "name": "Monstrous Carabid",
    "score": 0.05
  },
  {
    "name": "Mysidian Elder",
    "score": 0.05
  },
  {
    "name": "Nest Invader",
    "score": 0.05
  },
  {
    "name": "Page, Loose Leaf",
    "score": 0.05
  },
  {
    "name": "Perigee Beckoner",
    "score": 0.05
  },
  {
    "name": "Rowan's Grim Search",
    "score": 0.05
  },
  {
    "name": "Songs of the Damned",
    "score": 0.05
  },
  {
    "name": "Steadfast Unicorn",
    "score": 0.05
  },
  {
    "name": "Street Wraith",
    "score": 0.05
  },
  {
    "name": "Thermo-Alchemist",
    "score": 0.05
  },
  {
    "name": "Thornscape Familiar",
    "score": 0.05
  },
  {
    "name": "Vines of Vastwood",
    "score": 0.05
  },
  {
    "name": "Apostle's Blessing",
    "score": 0.05
  },
  {
    "name": "Drift of Phantasms",
    "score": 0.05
  },
  {
    "name": "Fangren Marauder",
    "score": 0.05
  },
  {
    "name": "Fire / Ice",
    "score": 0.05
  },
  {
    "name": "Foil",
    "score": 0.05
  },
  {
    "name": "Foot Ninjas",
    "score": 0.05
  },
  {
    "name": "Freed from the Real",
    "score": 0.05
  },
  {
    "name": "Galvanic Alchemist",
    "score": 0.05
  },
  {
    "name": "Hunter's Blowgun",
    "score": 0.05
  },
  {
    "name": "Jaspera Sentinel",
    "score": 0.05
  },
  {
    "name": "Muddle the Mixture",
    "score": 0.05
  },
  {
    "name": "Orochi Leafcaller",
    "score": 0.05
  },
  {
    "name": "Pirate's Pillage",
    "score": 0.05
  },
  {
    "name": "Rally the Peasants",
    "score": 0.05
  },
  {
    "name": "Remove Soul",
    "score": 0.05
  },
  {
    "name": "Retraction Helix",
    "score": 0.05
  },
  {
    "name": "Salt Road Packbeast",
    "score": 0.05
  },
  {
    "name": "Search Party Captain",
    "score": 0.05
  },
  {
    "name": "Shield-Wall Sentinel",
    "score": 0.05
  },
  {
    "name": "Tamiyo's Safekeeping",
    "score": 0.05
  },
  {
    "name": "Ulamog's Crusher",
    "score": 0.05
  },
  {
    "name": "Unable to Scream",
    "score": 0.05
  },
  {
    "name": "Unwind",
    "score": 0.05
  },
  {
    "name": "Anchovy & Banana Pizza",
    "score": 0.05
  },
  {
    "name": "Arboreal Grazer",
    "score": 0.05
  },
  {
    "name": "Ardent Recruit",
    "score": 0.05
  },
  {
    "name": "Blight Mamba",
    "score": 0.05
  },
  {
    "name": "Brave the Wilds",
    "score": 0.05
  },
  {
    "name": "Contentious Plan",
    "score": 0.05
  },
  {
    "name": "Dragon Wings",
    "score": 0.05
  }
]