export type ANIMAL_TYPES = keyof typeof animals

export const animals = {
  //list of ocean animals comes from https://owlcation.com/stem/list-of-ocean-animals
  ocean: [
    'Acantharea',
    'Anemone',
    'Angelfish King',
    'Ahi Tuna',
    'Albacore',
    'American Oyster',
    'Anchovy',
    'Armored Snail',
    'Arctic Char',
    'Atlantic Bluefin Tuna',
    'Atlantic Cod',
    'Atlantic Goliath Grouper',
    'Atlantic Trumpetfish',
    'Atlantic Wolffish',
    'Baleen Whale',
    'Banded Butterflyfish',
    'Banded Coral Shrimp',
    'Banded Sea Krait',
    'Barnacle',
    'Barndoor Skate',
    'Barracuda',
    'Basking Shark',
    'Bass',
    'Beluga Whale',
    'Bluebanded Goby',
    'Bluehead Wrasse',
    'Bluefish',
    'Bluestreak Cleaner-Wrasse',
    'Blue Marlin',
    'Blue Shark',
    'Blue Spiny Lobster',
    'Blue Tang',
    'Blue Whale',
    'Broadclub Cuttlefish',
    'Bull Shark',
    'Chambered Nautilus',
    'Chilean Basket Star',
    'Chilean Jack Mackerel',
    'Chinook Salmon',
    'Christmas Tree Worm',
    'Clam',
    'Clown Anemonefish',
    'Clown Triggerfish',
    'Cod',
    'Coelacanth',
    'Cockscomb Cup Coral',
    'Common Fangtooth',
    'Conch',
    'Cookiecutter Shark',
    'Copepod',
    'Coral',
    'Corydoras',
    'Cownose Ray',
    'Crab',
    'Crown-of-Thorns Starfish',
    'Cushion Star',
    'Cuttlefish',
    'California Sea Otters',
    'Dolphin',
    'Dolphinfish',
    'Dory',
    'Devil Fish',
    'Dugong',
    'Dumbo Octopus',
    'Dungeness Crab',
    'Eccentric Sand Dollar',
    'Edible Sea Cucumber',
    'Eel',
    'Elephant Seal',
    'Elkhorn Coral',
    'Emperor Shrimp',
    'Estuarine Crocodile',
    'Fathead Sculpin',
    'Fiddler Crab',
    'Fin Whale',
    'Flameback',
    'Flamingo Tongue Snail',
    'Flashlight Fish',
    'Flatback Turtle',
    'Flatfish',
    'Flying Fish',
    'Flounder',
    'Fluke',
    'French Angelfish',
    'Frilled Shark',
    'Fugu (also called Pufferfish)',
    'Gar',
    'Geoduck',
    'Giant Barrel Sponge',
    'Giant Caribbean Sea Anemone',
    'Giant Clam',
    'Giant Isopod',
    'Giant Kingfish',
    'Giant Oarfish',
    'Giant Pacific Octopus',
    'Giant Pyrosome',
    'Giant Sea Star',
    'Giant Squid',
    'Glowing Sucker Octopus',
    'Giant Tube Worm',
    'Goblin Shark',
    'Goosefish',
    'Great White Shark',
    'Greenland Shark',
    'Grey Atlantic Seal',
    'Grouper',
    'Grunion',
    'Guineafowl Puffer',
    'Haddock',
    'Hake',
    'Halibut',
    'Hammerhead Shark',
    'Hapuka',
    'Harbor Porpoise',
    'Harbor Seal',
    'Hatchetfish',
    'Hawaiian Monk Seal',
    'Hawksbill Turtle',
    "Hector's Dolphin",
    'Hermit Crab',
    'Herring',
    'Hoki',
    'Horn Shark',
    'Horseshoe Crab',
    'Humpback Anglerfish',
    'Humpback Whale',
    'Icefish',
    'Imperator Angelfish',
    'Irukandji Jellyfish',
    'Isopod',
    'Ivory Bush Coral',
    'Japanese Spider Crab',
    'Jellyfish',
    'John Dory',
    'Juan Fernandez Fur Seal',
    'Killer Whale',
    'Kiwa Hirsuta',
    'Krill',
    'Lagoon Triggerfish',
    'Lamprey',
    'Leafy Seadragon',
    'Leopard Seal',
    'Limpet',
    'Ling',
    'Lionfish',
    'Lions Mane Jellyfish',
    'Lobe Coral',
    'Lobster',
    'Loggerhead Turtle',
    'Longnose Sawshark',
    'Longsnout Seahorse',
    'Lophelia Coral',
    'Marrus Orthocanna',
    'Manatee',
    'Manta Ray',
    'Marlin',
    'Megamouth Shark',
    'Mexican Lookdown',
    'Mimic Octopus',
    'Moon Jelly',
    'Mollusk',
    'Monkfish',
    'Moray Eel',
    'Mullet',
    'Mussel',
    'Megaladon',
    'Napoleon Wrasse',
    'Nassau Grouper',
    'Narwhal',
    'Nautilus',
    'Needlefish',
    'Northern Seahorse',
    'North Atlantic Right Whale',
    'Northern Red Snapper',
    'Norway Lobster',
    'Nudibranch',
    'Nurse Shark',
    'Oarfish',
    'Ocean Sunfish',
    'Oceanic Whitetip Shark',
    'Octopus',
    'Olive Sea Snake',
    'Orange Roughy',
    'Ostracod',
    'Otter',
    'Oyster',
    'Pacific Angelshark',
    'Pacific Blackdragon',
    'Pacific Halibut',
    'Pacific Sardine',
    'Pacific Sea Nettle Jellyfish',
    'Pacific White Sided Dolphin',
    'Pantropical Spotted Dolphin',
    'Patagonian Toothfish',
    'Peacock Mantis Shrimp',
    'Pelagic Thresher Shark',
    'Penguin',
    'Peruvian Anchoveta',
    'Pilchard',
    'Pink Salmon',
    'Pinniped',
    'Plankton',
    'Porpoise',
    'Polar Bear',
    "Portuguese Man o' War",
    'Pycnogonid Sea Spider',
    'Quahog',
    'Queen Angelfish',
    'Queen Conch',
    'Queen Parrotfish',
    'Queensland Grouper',
    'Ragfish',
    'Ratfish',
    'Rattail Fish',
    'Ray',
    'Red Drum',
    'Red King Crab',
    'Ringed Seal',
    "Risso's Dolphin",
    'Ross Seals',
    'Sablefish',
    'Salmon',
    'Sand Dollar',
    'Sandbar Shark',
    'Sawfish',
    'Sarcastic Fringehead',
    'Scalloped Hammerhead Shark',
    'Seahorse',
    'Sea Cucumber',
    'Sea Lion',
    'Sea Urchin',
    'Seal',
    'Shark',
    'Shortfin Mako Shark',
    'Shovelnose Guitarfish',
    'Shrimp',
    'Silverside Fish',
    'Skipjack Tuna',
    'Slender Snipe Eel',
    'Smalltooth Sawfish',
    'Smelts',
    'Sockeye Salmon',
    'Southern Stingray',
    'Sponge',
    'Spotted Porcupinefish',
    'Spotted Dolphin',
    'Spotted Eagle Ray',
    'Spotted Moray',
    'Squid',
    'Squidworm',
    'Starfish',
    'Stickleback',
    'Stonefish',
    'Stoplight Loosejaw',
    'Sturgeon',
    'Swordfish',
    'Tan Bristlemouth',
    'Tasseled Wobbegong',
    'Terrible Claw Lobster',
    'Threespot Damselfish',
    'Tiger Prawn',
    'Tiger Shark',
    'Tilefish',
    'Toadfish',
    'Tropical Two-Wing Flyfish',
    'Tuna',
    'Umbrella Squid',
    'Velvet Crab',
    'Venus Flytrap Sea Anemone',
    'Vigtorniella Worm',
    'Viperfish',
    'Vampire Squid',
    'Vaquita',
    'Wahoo',
    'Walrus',
    'West Indian Manatee',
    'Whale',
    'Whale Shark',
    'Whiptail Gulper',
    'White-Beaked Dolphin',
    'White-Ring Garden Eel',
    'White Shrimp',
    'Wobbegong',
    'Wrasse',
    'Wreckfish',
    'Xiphosura',
    'Yellowtail Damselfish',
    'Yelloweye Rockfish',
    'Yellow Cup Black Coral',
    'Yellow Tube Sponge',
    'Yellowfin Tuna',
    'Zebrashark',
    'Zooplankton',
  ],
  //list of desert, grassland, and forest animals comes from http://www.skyenimals.com/
  desert: [
    'Aardwolf',
    'Addax',
    'African Wild Ass',
    'Ant',
    'Antelope',
    'Armadillo',
    'Baboon',
    'Badger',
    'Bat',
    'Bearded Dragon',
    'Beetle',
    'Bird',
    'Black-footed Cat',
    'Boa',
    'Brown Bear',
    'Bustard',
    'Butterfly',
    'Camel',
    'Caracal',
    'Caracara',
    'Caterpillar',
    'Centipede',
    'Cheetah',
    'Chipmunk',
    'Chuckwalla',
    'Climbing Mouse',
    'Coati',
    'Cobra',
    'Cotton Rat',
    'Cougar',
    'Courser',
    'Crane Fly',
    'Crow',
    'Dassie Rat',
    'Dove',
    'Dunnart',
    'Eagle',
    'Echidna',
    'Elephant',
    'Emu',
    'Falcon',
    'Fly',
    'Fox',
    'Frogmouth',
    'Gecko',
    "Geoffroy's Cat",
    'Gerbil',
    'Grasshopper',
    'Guanaco',
    'Gundi',
    'Hamster',
    'Hawk',
    'Hedgehog',
    'Hyena',
    'Hyrax',
    'Jackal',
    'Kangaroo',
    'Kangaroo Rat',
    'Kestrel',
    'Kowari',
    'Kultarr',
    'Leopard',
    'Lion',
    'Macaw',
    'Meerkat',
    'Mouse',
    'Oryx',
    'Ostrich',
    'Owl',
    'Pronghorn',
    'Python',
    'Rabbit',
    'Raccoon',
    'Rattlesnake',
    'Rhinoceros',
    'Sand Cat',
    'Spectacled Bear',
    'Spiny Mouse',
    'Starling',
    'Stick Bug',
    'Tarantula',
    'Tit',
    'Toad',
    'Tortoise',
    'Tyrant Flycatcher',
    'Viper',
    'Vulture',
    'Waxwing',
    'Xerus',
    'Zebra',
  ],
  grassland: [
    'Aardvark',
    'Aardwolf',
    'Accentor',
    'African Buffalo',
    'African Wild Dog',
    'Alpaca',
    'Anaconda',
    'Ant',
    'Anteater',
    'Antelope',
    'Armadillo',
    'Baboon',
    'Badger',
    'Bandicoot',
    'Barbet',
    'Bat',
    'Bee',
    'Bee-eater',
    'Beetle',
    'Bird',
    'Bison',
    'Black-footed Cat',
    'Black-footed Ferret',
    'Bluebird',
    'Boa',
    'Bowerbird',
    'Brown Bear',
    'Bush Dog',
    'Bushshrike',
    'Bustard',
    'Butterfly',
    'Buzzard',
    'Caracal',
    'Caracara',
    'Cardinal',
    'Caterpillar',
    'Cheetah',
    'Chipmunk',
    'Civet',
    'Climbing Mouse',
    'Clouded Leopard',
    'Coati',
    'Cobra',
    'Cockatoo',
    'Cockroach',
    'Common Genet',
    'Cotton Rat',
    'Cougar',
    'Courser',
    'Coyote',
    'Crane',
    'Crane Fly',
    'Cricket',
    'Crow',
    'Culpeo',
    'Death Adder',
    'Deer',
    'Deer Mouse',
    'Dingo',
    'Dinosaur',
    'Dove',
    'Drongo',
    'Duck',
    'Duiker',
    'Dunnart',
    'Eagle',
    'Echidna',
    'Elephant',
    'Elk',
    'Emu',
    'Falcon',
    'Finch',
    'Flea',
    'Fly',
    'Flying Frog',
    'Fox',
    'Frog',
    'Frogmouth',
    'Garter Snake',
    'Gazelle',
    'Gecko',
    "Geoffroy's Cat",
    'Gerbil',
    'Giant Tortoise',
    'Giraffe',
    'Grasshopper',
    'Grison',
    'Groundhog',
    'Grouse',
    'Guanaco',
    'Guinea Pig',
    'Hamster',
    'Harrier',
    'Hartebeest',
    'Hawk',
    'Hedgehog',
    'Helmetshrike',
    'Hippopotamus',
    'Hornbill',
    'Hyena',
    'Hyrax',
    'Impala',
    'Jackal',
    'Jaguar',
    'Jaguarundi',
    'Kangaroo',
    'Kangaroo Rat',
    'Kestrel',
    'Kultarr',
    'Ladybug',
    'Leopard',
    'Lion',
    'Macaw',
    'Meerkat',
    'Mouse',
    'Newt',
    'Oryx',
    'Ostrich',
    'Owl',
    'Pangolin',
    'Pheasant',
    'Prairie Dog',
    'Pronghorn',
    "Przewalski's Horse",
    'Python',
    'Quoll',
    'Rabbit',
    'Raven',
    'Rhinoceros',
    'Shelduck',
    'Sloth Bear',
    'Spectacled Bear',
    'Squirrel',
    'Starling',
    'Stick Bug',
    'Tamandua',
    'Tasmanian Devil',
    'Thornbill',
    'Thrush',
    'Toad',
    'Tortoise',
  ],
  forest: [
    'Agouti',
    'Anaconda',
    'Anoa',
    'Ant',
    'Anteater',
    'Antelope',
    'Armadillo',
    'Asian Black Bear',
    'Aye-aye',
    'Babirusa',
    'Baboon',
    'Badger',
    'Bandicoot',
    'Banteng',
    'Barbet',
    'Basilisk',
    'Bat',
    'Bearded Dragon',
    'Bee',
    'Bee-eater',
    'Beetle',
    'Bettong',
    'Binturong',
    'Bird-of-paradise',
    'Bongo',
    'Bowerbird',
    'Bulbul',
    'Bush Dog',
    'Bushbaby',
    'Bushshrike',
    'Butterfly',
    'Buzzard',
    'Caecilian',
    'Cardinal',
    'Cassowary',
    'Caterpillar',
    'Centipede',
    'Chameleon',
    'Chimpanzee',
    'Cicada',
    'Civet',
    'Clouded Leopard',
    'Coati',
    'Cobra',
    'Cockatoo',
    'Cockroach',
    'Colugo',
    'Cotinga',
    'Cotton Rat',
    'Cougar',
    'Crane Fly',
    'Cricket',
    'Crocodile',
    'Crow',
    'Cuckoo',
    'Cuscus',
    'Death Adder',
    'Deer',
    'Dhole',
    'Dingo',
    'Dinosaur',
    'Drongo',
    'Duck',
    'Duiker',
    'Eagle',
    'Echidna',
    'Elephant',
    'Finch',
    'Flat-headed Cat',
    'Flea',
    'Flowerpecker',
    'Fly',
    'Flying Frog',
    'Fossa',
    'Frog',
    'Frogmouth',
    'Gaur',
    'Gecko',
    'Gorilla',
    'Grison',
    'Hawaiian Honeycreeper',
    'Hawk',
    'Hedgehog',
    'Helmetshrike',
    'Hornbill',
    'Hyrax',
    'Iguana',
    'Jackal',
    'Jaguar',
    'Jaguarundi',
    'Kestrel',
    'Ladybug',
    'Lemur',
    'Leopard',
    'Lion',
    'Macaw',
    'Mandrill',
    'Margay',
    'Monkey',
    'Mouse',
    'Mouse Deer',
    'Newt',
    'Okapi',
    'Old World Flycatcher',
    'Orangutan',
    'Owl',
    'Pangolin',
    'Peafowl',
    'Pheasant',
    'Possum',
    'Python',
    'Quokka',
    'Rabbit',
    'Raccoon',
    'Red Panda',
    'Red River Hog',
    'Rhinoceros',
    'Sloth Bear',
    'Spectacled Bear',
    'Squirrel',
    'Starling',
    'Stick Bug',
    'Sun Bear',
    'Tamandua',
    'Tamarin',
    'Tapir',
    'Tarantula',
    'Thrush',
    'Tiger',
    'Tit',
    'Toad',
    'Tortoise',
    'Toucan',
    'Trogon',
    'Trumpeter',
    'Turaco',
    'Turtle',
    'Tyrant Flycatcher',
    'Viper',
    'Vulture',
    'Wallaby',
    'Warbler',
    'Wasp',
    'Waxwing',
    'Weaver',
    'Weaver-finch',
    'Whistler',
    'White-eye',
    'Whydah',
    'Woodswallow',
    'Worm',
    'Wren',
    'Xenops',
    'Yellowjacket',
    'Accentor',
    'African Buffalo',
    'American Black Bear',
    'Anole',
    'Bird',
    'Bison',
    'Boa',
    'Brown Bear',
    'Chipmunk',
    'Common Genet',
    'Copperhead',
    'Coyote',
    'Deer Mouse',
    'Dormouse',
    'Elk',
    'Emu',
    'Fisher',
    'Fox',
    'Garter Snake',
    'Giant Panda',
    'Giant Tortoise',
    'Groundhog',
    'Grouse',
    'Guanaco',
    'Himalayan Tahr',
    'Kangaroo',
    'Koala',
    'Numbat',
    'Quoll',
    'Raccoon dog',
    'Tasmanian Devil',
    'Thornbill',
    'Turkey',
    'Vole',
    'Weasel',
    'Wildcat',
    'Wolf',
    'Wombat',
    'Woodchuck',
    'Woodpecker',
  ],
  //list of farm animals comes from https://www.buzzle.com/articles/farm-animals-list.html
  farm: [
    'Alpaca',
    'Buffalo',
    'Banteng',
    'Cow',
    'Cat',
    'Chicken',
    'Carp',
    'Camel',
    'Donkey',
    'Dog',
    'Duck',
    'Emu',
    'Goat',
    'Gayal',
    'Guinea',
    'Goose',
    'Horse',
    'Honey',
    'Llama',
    'Pig',
    'Pigeon',
    'Rhea',
    'Rabbit',
    'Sheep',
    'Silkworm',
    'Turkey',
    'Yak',
    'Zebu',
  ],
  //list of pet animals comes from https://www.dogbreedinfo.com/pets/pet.htm
  pet: [
    'Bearded Dragon',
    'Birds',
    'Burro',
    'Cats',
    'Chameleons',
    'Chickens',
    'Chinchillas',
    'Chinese Water Dragon',
    'Cows',
    'Dogs',
    'Donkey',
    'Ducks',
    'Ferrets',
    'Fish',
    'Geckos',
    'Geese',
    'Gerbils',
    'Goats',
    'Guinea Fowl',
    'Guinea Pigs',
    'Hamsters',
    'Hedgehogs',
    'Horses',
    'Iguanas',
    'Llamas',
    'Lizards',
    'Mice',
    'Mule',
    'Peafowl',
    'Pigs and Hogs',
    'Pigeons',
    'Ponies',
    'Pot Bellied Pig',
    'Rabbits',
    'Rats',
    'Sheep',
    'Skinks',
    'Snakes',
    'Stick Insects',
    'Sugar Gliders',
    'Tarantula',
    'Turkeys',
    'Turtles',
  ],
  //list of zoo animals comes from https://bronxzoo.com/animals
  zoo: [
    'Aardvark',
    'African Wild Dog',
    'Aldabra Tortoise',
    'American Alligator',
    'American Bison',
    'Amur Tiger',
    'Anaconda',
    'Andean Condor',
    'Asian Elephant',
    'Baby Doll Sheep',
    'Bald Eagle',
    'Barred Owl',
    'Blue Iguana',
    'Boer Goat',
    'California Sea Lion',
    'Caribbean Flamingo',
    'Chinchilla',
    'Collared Lemur',
    "Coquerel's Sifaka",
    'Cuban Amazon Parrot',
    'Ebony Langur',
    'Fennec Fox',
    'Fossa',
    'Gelada',
    'Giant Anteater',
    'Giraffe',
    'Gorilla',
    'Grizzly Bear',
    "Henkel's Leaf-tailed Gecko",
    'Indian Gharial',
    'Indian Rhinoceros',
    'King Cobra',
    'King Vulture',
    'Komodo Dragon',
    "Linne's Two-toed Sloth",
    'Lion',
    'Little Penguin',
    'Madagascar Tree Boa',
    'Magellanic Penguin',
    'Malayan Tapir',
    'Malayan Tiger',
    'Matschies Tree Kangaroo',
    'Mini Donkey',
    'Monarch Butterfly',
    'Nile crocodile',
    'North American Porcupine',
    'Nubian Ibex',
    'Okapi',
    'Poison Dart Frog',
    'Polar Bear',
    'Pygmy Marmoset',
    'Radiated Tortoise',
    'Red Panda',
    'Red Ruffed Lemur',
    'Ring-tailed Lemur',
    'Ring-tailed Mongoose',
    'Rock Hyrax',
    'Small Clawed Asian Otter',
    'Snow Leopard',
    'Snowy Owl',
    'Southern White-faced Owl',
    'Southern White Rhinocerous',
    'Squirrel Monkey',
    'Tufted Puffin',
    'White Cheeked Gibbon',
    'White-throated Bee Eater',
    'Zebra',
  ],
}
