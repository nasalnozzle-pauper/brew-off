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
    "name": "Bojuka Bog",
    "score": 0.15
  },
  {
    "name": "Counterspell",
    "score": 0.4
  },
  {
    "name": "Cast Down",
    "score": 0.25
  },
  {
    "name": "Sneaky Snacker",
    "score": 0.35
  },
  {
    "name": "Baleful Strix",
    "score": 0.3
  },
  {
    "name": "Voldaren Epicure",
    "score": 0.3
  },
  {
    "name": "Snuff Out",
    "score": 0.25
  },
  {
    "name": "Brainstorm",
    "score": 0.25
  },
  {
    "name": "Plunder the Trollshaws",
    "score": 0.15
  },
  {
    "name": "Murmuring Mystic",
    "score": 0.15
  },
  {
    "name": "Nihil Spellbomb",
    "score": 0.15
  },
  {
    "name": "Galvanic Blast",
    "score": 0.25
  },
  {
    "name": "Generous Ent",
    "score": 0.2
  },
  {
    "name": "Great Furnace",
    "score": 0.2
  },
  {
    "name": "Nyxborn Hydra",
    "score": 0.15
  },
  {
    "name": "Fiery Temper",
    "score": 0.25
  },
  {
    "name": "Faithless Looting",
    "score": 0.2
  },
  {
    "name": "Dispel",
    "score": 0.1
  },
  {
    "name": "Thorn of the Black Rose",
    "score": 0.1
  },
  {
    "name": "Grab the Prize",
    "score": 0.25
  },
  {
    "name": "Fireblast",
    "score": 0.2
  },
  {
    "name": "Vault of Whispers",
    "score": 0.2
  },
  {
    "name": "Refurbished Familiar",
    "score": 0.2
  },
  {
    "name": "Contaminated Aquifer",
    "score": 0.0
  },
  {
    "name": "Highway Robbery",
    "score": 0.2
  },
  {
    "name": "Lead the Stampede",
    "score": 0.2
  },
  {
    "name": "Lava Dart",
    "score": 0.2
  },
  {
    "name": "Winding Way",
    "score": 0.2
  },
  {
    "name": "Guttersnipe",
    "score": 0.2
  },
  {
    "name": "Sagu Wildling",
    "score": 0.15
  },
  {
    "name": "Quirion Ranger",
    "score": 0.15
  },
  {
    "name": "Campfire",
    "score": 0.1
  },
  {
    "name": "Dimir Aqueduct",
    "score": 0.0
  },
  {
    "name": "Suffocating Fumes",
    "score": 0.05
  },
  {
    "name": "Extract a Confession",
    "score": 0.05
  },
  {
    "name": "Masked Vandal",
    "score": 0.15
  },
  {
    "name": "Blood Fountain",
    "score": 0.05
  },
  {
    "name": "Cut Down",
    "score": 0.05
  },
  {
    "name": "Seat of the Synod",
    "score": 0.15
  },
  {
    "name": "Giant's Boulder",
    "score": 0.15
  },
  {
    "name": "Ancient Den",
    "score": 0.15
  },
  {
    "name": "Avenging Hunter",
    "score": 0.1
  },
  {
    "name": "Malevolent Rumble",
    "score": 0.15
  },
  {
    "name": "Mistvault Bridge",
    "score": 0.15
  },
  {
    "name": "Preordain",
    "score": 0.15
  },
  {
    "name": "Augur of Bolas",
    "score": 0.1
  },
  {
    "name": "Dispatch",
    "score": 0.15
  },
  {
    "name": "Lembas",
    "score": 0.1
  },
  {
    "name": "Makeshift Munitions",
    "score": 0.05
  },
  {
    "name": "Thoughtcast",
    "score": 0.15
  },
  {
    "name": "Ichor Wellspring",
    "score": 0.15
  },
  {
    "name": "Bonder's Ornament",
    "score": 0.05
  },
  {
    "name": "Kessig Flamebreather",
    "score": 0.15
  },
  {
    "name": "Ninja of the Deep Hours",
    "score": 0.05
  },
  {
    "name": "Reckless Impulse",
    "score": 0.1
  },
  {
    "name": "Spellstutter Sprite",
    "score": 0.1
  },
  {
    "name": "Utopia Sprawl",
    "score": 0.15
  },
  {
    "name": "Utrom Monitor",
    "score": 0.1
  },
  {
    "name": "Faerie Seer",
    "score": 0.1
  },
  {
    "name": "Writhing Chrysalis",
    "score": 0.15
  },
  {
    "name": "Land Grant",
    "score": 0.1
  },
  {
    "name": "Melded Moxite",
    "score": 0.1
  },
  {
    "name": "Clockwork Percussionist",
    "score": 0.1
  },
  {
    "name": "Seething Landscape",
    "score": 0.0
  },
  {
    "name": "Myr Enforcer",
    "score": 0.1
  },
  {
    "name": "Ponder",
    "score": 0.1
  },
  {
    "name": "Spell Pierce",
    "score": 0.05
  },
  {
    "name": "Glint Hawk",
    "score": 0.1
  },
  {
    "name": "Drossforge Bridge",
    "score": 0.1
  },
  {
    "name": "Goblin Tomb Raider",
    "score": 0.1
  },
  {
    "name": "Reckoner's Bargain",
    "score": 0.1
  },
  {
    "name": "Saruli Caretaker",
    "score": 0.1
  },
  {
    "name": "Tolarian Terror",
    "score": 0.1
  },
  {
    "name": "Eviscerator's Insight",
    "score": 0.05
  },
  {
    "name": "Goblin Bushwhacker",
    "score": 0.1
  },
  {
    "name": "Mukotai Ambusher",
    "score": 0.05
  },
  {
    "name": "Thought Scour",
    "score": 0.1
  },
  {
    "name": "Fanatical Offering",
    "score": 0.1
  },
  {
    "name": "Mental Note",
    "score": 0.1
  },
  {
    "name": "Rally at the Hornburg",
    "score": 0.1
  },
  {
    "name": "Troll of Khazad-dûm",
    "score": 0.05
  },
  {
    "name": "Burning-Tree Emissary",
    "score": 0.1
  },
  {
    "name": "Overgrown Battlement",
    "score": 0.1
  },
  {
    "name": "Tithing Blade",
    "score": 0.05
  },
  {
    "name": "Wall of Roots",
    "score": 0.05
  },
  {
    "name": "Wrenn's Resolve",
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
    "name": "Urza's Mine",
    "score": 0.2
  },
  {
    "name": "Urza's Power Plant",
    "score": 0.2
  },
  {
    "name": "Urza's Tower",
    "score": 0.2
  },
  {
    "name": "Cryogen Relic",
    "score": 0.1
  },
  {
    "name": "Cryptic Serpent",
    "score": 0.1
  },
  {
    "name": "Krark-Clan Shaman",
    "score": 0.05
  },
  {
    "name": "Mulldrifter",
    "score": 0.05
  },
  {
    "name": "Sleep of the Dead",
    "score": 0.05
  },
  {
    "name": "Thraben Inspector",
    "score": 0.1
  },
  {
    "name": "Dread Return",
    "score": 0.05
  },
  {
    "name": "Lotleth Giant",
    "score": 0.05
  },
  {
    "name": "Crop Rotation",
    "score": 0.05
  },
  {
    "name": "Ephemerate",
    "score": 0.05
  },
  {
    "name": "Mesmeric Fiend",
    "score": 0.05
  },
  {
    "name": "Toxin Analysis",
    "score": 0.05
  },
  {
    "name": "Balustrade Spy",
    "score": 0.1
  },
  {
    "name": "Gatecreeper Vine",
    "score": 0.05
  },
  {
    "name": "Rancor",
    "score": 0.05
  },
  {
    "name": "Razortide Bridge",
    "score": 0.05
  },
  {
    "name": "Twinned Vision",
    "score": 0.05
  },
  {
    "name": "Abundant Growth",
    "score": 0.05
  },
  {
    "name": "Ancestral Mask",
    "score": 0.05
  },
  {
    "name": "Deem Inferior",
    "score": 0.05
  },
  {
    "name": "Deep Analysis",
    "score": 0.05
  },
  {
    "name": "Ethereal Armor",
    "score": 0.05
  },
  {
    "name": "Armadillo Cloak",
    "score": 0.05
  },
  {
    "name": "Gladecover Scout",
    "score": 0.05
  },
  {
    "name": "Llanowar Elves",
    "score": 0.05
  },
  {
    "name": "Novice Inspector",
    "score": 0.05
  },
  {
    "name": "Prismatic Strands",
    "score": 0.05
  },
  {
    "name": "Pursue the Past",
    "score": 0.05
  },
  {
    "name": "Silhana Ledgewalker",
    "score": 0.05
  },
  {
    "name": "Slippery Bogle",
    "score": 0.05
  },
  {
    "name": "Bramble Wurm",
    "score": 0.05
  },
  {
    "name": "Moon-Circuit Hacker",
    "score": 0.05
  },
  {
    "name": "Priest of Titania",
    "score": 0.05
  },
  {
    "name": "Arms of Hadar",
    "score": 0.05
  },
  {
    "name": "Chain Lightning",
    "score": 0.05
  },
  {
    "name": "Conduit Pylons",
    "score": 0.05
  },
  {
    "name": "Experimental Synthesizer",
    "score": 0.05
  },
  {
    "name": "Silverbluff Bridge",
    "score": 0.05
  },
  {
    "name": "Thraben Charm",
    "score": 0.05
  },
  {
    "name": "Cartouche of Solidarity",
    "score": 0.05
  },
  {
    "name": "Ice Tunnel",
    "score": 0.0
  },
  {
    "name": "Archaeomancer",
    "score": 0.05
  },
  {
    "name": "Black Mage's Rod",
    "score": 0.05
  },
  {
    "name": "Ghostly Flicker",
    "score": 0.05
  },
  {
    "name": "Khalni Garden",
    "score": 0.05
  },
  {
    "name": "Sewer-veillance Cam",
    "score": 0.05
  },
  {
    "name": "Timberwatch Elf",
    "score": 0.05
  },
  {
    "name": "Volatile Fjord",
    "score": 0.0
  },
  {
    "name": "Ash Barrens",
    "score": 0.0
  },
  {
    "name": "Leonardo, Big Brother",
    "score": 0.05
  },
  {
    "name": "Pulse of Murasa",
    "score": 0.05
  },
  {
    "name": "Barrels of Blasting Jelly",
    "score": 0.05
  },
  {
    "name": "Boros Garrison",
    "score": 0.0
  },
  {
    "name": "Delver of Secrets",
    "score": 0.05
  },
  {
    "name": "Inventor's Axe",
    "score": 0.05
  },
  {
    "name": "Breath Weapon",
    "score": 0.05
  },
  {
    "name": "Elvish Mystic",
    "score": 0.05
  },
  {
    "name": "Gingerbread Cabin",
    "score": 0.05
  },
  {
    "name": "Goldmire Bridge",
    "score": 0.05
  },
  {
    "name": "Lose Focus",
    "score": 0.05
  },
  {
    "name": "Sentinel's Eyes",
    "score": 0.05
  },
  {
    "name": "Wild Growth",
    "score": 0.05
  },
  {
    "name": "Arbor Elf",
    "score": 0.05
  },
  {
    "name": "Eldrazi Repurposer",
    "score": 0.05
  },
  {
    "name": "Elves of Deep Shadow",
    "score": 0.05
  },
  {
    "name": "Fyndhorn Elves",
    "score": 0.05
  },
  {
    "name": "Glimpse the Impossible",
    "score": 0.05
  },
  {
    "name": "Hickory Woodlot",
    "score": 0.0
  },
  {
    "name": "Cleansing Wildfire",
    "score": 0.05
  },
  {
    "name": "Manamorphose",
    "score": 0.05
  },
  {
    "name": "Rustvale Bridge",
    "score": 0.05
  },
  {
    "name": "Sandstone Needle",
    "score": 0.0
  },
  {
    "name": "Crossover Collaboration",
    "score": 0.05
  },
  {
    "name": "Desperate Ritual",
    "score": 0.05
  },
  {
    "name": "First Day of Class",
    "score": 0.05
  },
  {
    "name": "Geothermal Crevice",
    "score": 0.0
  },
  {
    "name": "Goblin Anarchomancer",
    "score": 0.05
  },
  {
    "name": "Heritage Reclamation",
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
    "name": "Thornscape Familiar",
    "score": 0.05
  },
  {
    "name": "Weather the Storm",
    "score": 0.05
  },
  {
    "name": "Boarding Party",
    "score": 0.05
  },
  {
    "name": "Lifelink",
    "score": 0.05
  },
  {
    "name": "Unfathomable Truths",
    "score": 0.05
  },
  {
    "name": "Jaspera Sentinel",
    "score": 0.05
  },
  {
    "name": "Jewel Thief",
    "score": 0.05
  },
  {
    "name": "Moment's Peace",
    "score": 0.05
  },
  {
    "name": "Glacial Floodplain",
    "score": 0.0
  },
  {
    "name": "Haunted Mire",
    "score": 0.0
  },
  {
    "name": "Kruphix's Insight",
    "score": 0.05
  },
  {
    "name": "Boulderbranch Golem",
    "score": 0.05
  },
  {
    "name": "Contaminated Landscape",
    "score": 0.0
  },
  {
    "name": "Salt Road Packbeast",
    "score": 0.05
  },
  {
    "name": "Skred",
    "score": 0.05
  },
  {
    "name": "Wind-Scarred Crag",
    "score": 0.0
  },
  {
    "name": "Ancient Stirrings",
    "score": 0.05
  },
  {
    "name": "Gingerbrute",
    "score": 0.05
  },
  {
    "name": "Kaervek's Torch",
    "score": 0.05
  },
  {
    "name": "Pinnacle Kill-Ship",
    "score": 0.05
  },
  {
    "name": "Annoyed Altisaur",
    "score": 0.05
  },
  {
    "name": "Crypt Rats",
    "score": 0.05
  },
  {
    "name": "Defile",
    "score": 0.05
  },
  {
    "name": "Maelstrom Colossus",
    "score": 0.05
  },
  {
    "name": "Perilous Landscape",
    "score": 0.0
  },
  {
    "name": "Ragged Short Spear",
    "score": 0.05
  },
  {
    "name": "Snap",
    "score": 0.05
  },
  {
    "name": "Witch's Cottage",
    "score": 0.0
  },
  {
    "name": "Lotus Petal",
    "score": 0.05
  },
  {
    "name": "Search Party Captain",
    "score": 0.05
  },
  {
    "name": "Accursed Marauder",
    "score": 0.05
  },
  {
    "name": "Desert",
    "score": 0.0
  },
  {
    "name": "Duress",
    "score": 0.05
  },
  {
    "name": "Haunted Fengraf",
    "score": 0.0
  },
  {
    "name": "Kabira Crossroads",
    "score": 0.0
  },
  {
    "name": "Prophetic Prism",
    "score": 0.05
  },
  {
    "name": "Agony Warp",
    "score": 0.05
  },
  {
    "name": "Big Score",
    "score": 0.05
  },
  {
    "name": "End the Festivities",
    "score": 0.05
  },
  {
    "name": "Golgari Rot Farm",
    "score": 0.0
  },
  {
    "name": "Slagwoods Bridge",
    "score": 0.05
  },
  {
    "name": "Stream of Thought",
    "score": 0.05
  },
  {
    "name": "Suplex",
    "score": 0.05
  },
  {
    "name": "Tangled Islet",
    "score": 0.0
  },
  {
    "name": "Twisted Landscape",
    "score": 0.0
  },
  {
    "name": "Artful Dodge",
    "score": 0.05
  },
  {
    "name": "Behold the Multiverse",
    "score": 0.05
  },
  {
    "name": "Candy Trail",
    "score": 0.05
  },
  {
    "name": "Force Spike",
    "score": 0.05
  },
  {
    "name": "Negate",
    "score": 0.05
  },
  {
    "name": "Ram Through",
    "score": 0.05
  },
  {
    "name": "Simic Growth Chamber",
    "score": 0.0
  },
  {
    "name": "Bender's Waterskin",
    "score": 0.05
  },
  {
    "name": "Bitter Reunion",
    "score": 0.05
  },
  {
    "name": "Ramosian Rally",
    "score": 0.05
  },
  {
    "name": "Rooftop Percher",
    "score": 0.05
  },
  {
    "name": "Tangle",
    "score": 0.05
  },
  {
    "name": "Molten Tributary",
    "score": 0.0
  },
  {
    "name": "Prohibit",
    "score": 0.05
  },
  {
    "name": "Ride's End",
    "score": 0.05
  },
  {
    "name": "Spider-Man, Web-Slinger",
    "score": 0.05
  },
  {
    "name": "Union of the Third Path",
    "score": 0.05
  },
  {
    "name": "Arcane Denial",
    "score": 0.05
  },
  {
    "name": "Basilisk Gate",
    "score": 0.1
  },
  {
    "name": "Growth Spiral",
    "score": 0.05
  },
  {
    "name": "Guardians' Pledge",
    "score": 0.05
  },
  {
    "name": "Journey to Nowhere",
    "score": 0.05
  },
  {
    "name": "Martyr's Soul",
    "score": 0.05
  },
  {
    "name": "Mortuary Mire",
    "score": 0.0
  },
  {
    "name": "Pestilence",
    "score": 0.05
  },
  {
    "name": "Sheltering Landscape",
    "score": 0.0
  },
  {
    "name": "Abandon Attachments",
    "score": 0.05
  },
  {
    "name": "Citadel Gate",
    "score": 0.05
  },
  {
    "name": "Crimson Fleet Commodore",
    "score": 0.05
  },
  {
    "name": "Escape Tunnel",
    "score": 0.05
  },
  {
    "name": "Faerie Miscreant",
    "score": 0.05
  },
  {
    "name": "Fling",
    "score": 0.05
  },
  {
    "name": "Fog",
    "score": 0.05
  },
  {
    "name": "Lunarch Veteran",
    "score": 0.05
  },
  {
    "name": "Of One Mind",
    "score": 0.05
  },
  {
    "name": "Outlaw Medic",
    "score": 0.05
  },
  {
    "name": "Tinder Wall",
    "score": 0.05
  },
  {
    "name": "Wooded Ridgeline",
    "score": 0.0
  },
  {
    "name": "Azorius Chancery",
    "score": 0.0
  },
  {
    "name": "Cauldron Familiar",
    "score": 0.05
  },
  {
    "name": "Embrace the Paradox",
    "score": 0.05
  },
  {
    "name": "God-Pharaoh's Faithful",
    "score": 0.05
  },
  {
    "name": "Grim Bauble",
    "score": 0.05
  },
  {
    "name": "Mnemonic Wall",
    "score": 0.05
  },
  {
    "name": "Radiant Fountain",
    "score": 0.05
  },
  {
    "name": "Relic of Progenitus",
    "score": 0.05
  },
  {
    "name": "Springleaf Drum",
    "score": 0.05
  },
  {
    "name": "Sunscape Familiar",
    "score": 0.05
  },
  {
    "name": "Vampire's Kiss",
    "score": 0.05
  },
  {
    "name": "Vision of Love",
    "score": 0.05
  },
  {
    "name": "Alms of the Vein",
    "score": 0.05
  },
  {
    "name": "Bannerhide Krushok",
    "score": 0.05
  },
  {
    "name": "Battle Screech",
    "score": 0.05
  },
  {
    "name": "Brinebarrow Intruder",
    "score": 0.05
  },
  {
    "name": "Harrier Strix",
    "score": 0.05
  },
  {
    "name": "Inside Out",
    "score": 0.05
  },
  {
    "name": "Jagged Barrens",
    "score": 0.0
  },
  {
    "name": "Kitchen Imp",
    "score": 0.05
  },
  {
    "name": "Loran's Escape",
    "score": 0.05
  },
  {
    "name": "Manor Gate",
    "score": 0.05
  },
  {
    "name": "Mystical Teachings",
    "score": 0.05
  },
  {
    "name": "Nutrient Block",
    "score": 0.05
  },
  {
    "name": "Ornithopter",
    "score": 0.05
  },
  {
    "name": "Reaping the Graves",
    "score": 0.05
  },
  {
    "name": "Rimewood Falls",
    "score": 0.0
  },
  {
    "name": "Sacred Cat",
    "score": 0.05
  },
  {
    "name": "Soul-Guide Lantern",
    "score": 0.05
  },
  {
    "name": "Thrilling Discovery",
    "score": 0.05
  },
  {
    "name": "Tireless Tribe",
    "score": 0.05
  },
  {
    "name": "Aurora Eidolon",
    "score": 0.05
  },
  {
    "name": "Cliffgate",
    "score": 0.05
  },
  {
    "name": "Cryoshatter",
    "score": 0.05
  },
  {
    "name": "Frogmite",
    "score": 0.05
  },
  {
    "name": "Fungal Infection",
    "score": 0.05
  },
  {
    "name": "Idyllic Beachfront",
    "score": 0.0
  },
  {
    "name": "Magmakin Artillerist",
    "score": 0.05
  },
  {
    "name": "Raffine's Informant",
    "score": 0.05
  },
  {
    "name": "Sandstorm Eidolon",
    "score": 0.05
  },
  {
    "name": "Spinning Darkness",
    "score": 0.05
  },
  {
    "name": "Temur Battle Rage",
    "score": 0.05
  },
  {
    "name": "Tuktuk Rubblefort",
    "score": 0.05
  },
  {
    "name": "Axebane Guardian",
    "score": 0.05
  },
  {
    "name": "Call Damage Control",
    "score": 0.05
  },
  {
    "name": "Energy Refractor",
    "score": 0.05
  },
  {
    "name": "Essence Warden",
    "score": 0.05
  },
  {
    "name": "Gigantosaurus",
    "score": 0.05
  },
  {
    "name": "Grapple with Death",
    "score": 0.05
  },
  {
    "name": "Gurmag Angler",
    "score": 0.05
  },
  {
    "name": "Highland Forest",
    "score": 0.0
  },
  {
    "name": "Mechanized Ninja Cavalry",
    "score": 0.05
  },
  {
    "name": "Mwonvuli Acid-Moss",
    "score": 0.05
  },
  {
    "name": "Mysidian Elder",
    "score": 0.05
  },
  {
    "name": "Navigator's Compass",
    "score": 0.05
  },
  {
    "name": "Phyrexian Walker",
    "score": 0.05
  },
  {
    "name": "Sazacap's Brew",
    "score": 0.05
  },
  {
    "name": "Thermokarst",
    "score": 0.05
  },
  {
    "name": "Tinder Farm",
    "score": 0.0
  },
  {
    "name": "Unwind",
    "score": 0.05
  },
  {
    "name": "Visionary's Dance",
    "score": 0.05
  },
  {
    "name": "Birchlore Rangers",
    "score": 0.05
  },
  {
    "name": "Clowning Around",
    "score": 0.05
  },
  {
    "name": "Dimension X",
    "score": 0.05
  },
  {
    "name": "Gene Pollinator",
    "score": 0.05
  },
  {
    "name": "Gixian Infiltrator",
    "score": 0.05
  },
  {
    "name": "Hidden Grotto",
    "score": 0.0
  },
  {
    "name": "Marauding Blight-Priest",
    "score": 0.05
  },
  {
    "name": "Orochi Leafcaller",
    "score": 0.05
  },
  {
    "name": "Remove Soul",
    "score": 0.05
  },
  {
    "name": "Shattered Landscape",
    "score": 0.0
  },
  {
    "name": "Terminate",
    "score": 0.05
  },
  {
    "name": "Thornwood Falls",
    "score": 0.0
  },
  {
    "name": "Unflinching Hortimancer",
    "score": 0.05
  },
  {
    "name": "Wellwisher",
    "score": 0.05
  },
  {
    "name": "Beastrider Vanguard",
    "score": 0.05
  },
  {
    "name": "Bedeck / Bedazzle",
    "score": 0.05
  },
  {
    "name": "Bloodthrone Vampire",
    "score": 0.05
  },
  {
    "name": "Carrion Feeder",
    "score": 0.05
  },
  {
    "name": "Cuombajj Witches",
    "score": 0.05
  },
  {
    "name": "Demand Answers",
    "score": 0.05
  },
  {
    "name": "Drift of Phantasms",
    "score": 0.05
  },
  {
    "name": "Freed from the Real",
    "score": 0.05
  },
  {
    "name": "Galvanic Alchemist",
    "score": 0.05
  }
]
