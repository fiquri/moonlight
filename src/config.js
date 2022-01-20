const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Pepper Pawney";
const description = "Journey to moon";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 200,
    layersOrder: [
      { name: 'Universe' },
      { name: 'Zodiac' },
      { name: 'Cap'},
      { name: 'Skin Tone_listening' },
      { name: 'Tribe' },
      { name: 'Head_listening'},
      { name: 'Eyes' },
      { name: 'Mouth'},
      { name: 'Whiskers'},
      { name: 'Outfits' },
      { name: 'Accessories' },
      { name: 'Spaceship' },
    ],
  },{
    growEditionSizeTo: 400,
    layersOrder: [
      { name: 'Universe' },
      { name: 'Zodiac' },
      { name: 'Cap'},
      { name: 'Skin Tone_listening_normal' },
      { name: 'Tribe' },
      { name: 'Head_listening_normal'},
      { name: 'Eyes' },
      { name: 'Mouth'},
      { name: 'Whiskers'},
      { name: 'Outfits' },
      { name: 'Accessories' },
      { name: 'Spaceship' },
    ],
  },{
    growEditionSizeTo: 600,
    layersOrder: [
      { name: 'Universe' },
      { name: 'Zodiac' },
      { name: 'Cap'},
      { name: 'Skin Tone_listening_ripped' },
      { name: 'Tribe' },
      { name: 'Head_listening_ripped'},
      { name: 'Eyes' },
      { name: 'Mouth'},
      { name: 'Whiskers'},
      { name: 'Outfits' },
      { name: 'Accessories' },
      { name: 'Spaceship' },
    ],
  },{
    growEditionSizeTo: 800,
    layersOrder: [
      { name: 'Universe' },
      { name: 'Zodiac' },
      { name: 'Cap'},
      { name: 'Skin Tone_listening_sad' },
      { name: 'Tribe' },
      { name: 'Head_listening_sad'},
      { name: 'Eyes' },
      { name: 'Mouth'},
      { name: 'Whiskers'},
      { name: 'Outfits' },
      { name: 'Accessories' },
      { name: 'Spaceship' },
    ],
  },{
    growEditionSizeTo: 1000,
    layersOrder: [
      { name: 'Universe' },
      { name: 'Zodiac' },
      { name: 'Cap'},
      { name: 'Skin Tone_normal' },
      { name: 'Tribe' },
      { name: 'Head_normal'},
      { name: 'Eyes' },
      { name: 'Mouth'},
      { name: 'Whiskers'},
      { name: 'Outfits' },
      { name: 'Accessories' },
      { name: 'Spaceship' },
    ],
  },{
    growEditionSizeTo: 1200,
    layersOrder: [
      { name: 'Universe' },
      { name: 'Zodiac' },
      { name: 'Cap'},
      { name: 'Skin Tone_normal_listening' },
      { name: 'Tribe' },
      { name: 'Head_normal_listening'},
      { name: 'Eyes' },
      { name: 'Mouth'},
      { name: 'Whiskers'},
      { name: 'Outfits' },
      { name: 'Accessories' },
      { name: 'Spaceship' },
    ],
  },{
    growEditionSizeTo: 1400,
    layersOrder: [
      { name: 'Universe' },
      { name: 'Zodiac' },
      { name: 'Cap'},
      { name: 'Skin Tone_normal_ripped' },
      { name: 'Tribe' },
      { name: 'Head_normal_ripped'},
      { name: 'Eyes' },
      { name: 'Mouth'},
      { name: 'Whiskers'},
      { name: 'Outfits' },
      { name: 'Accessories' },
      { name: 'Spaceship' },
    ],
  },{
    growEditionSizeTo: 1600,
    layersOrder: [
      { name: 'Universe' },
      { name: 'Zodiac' },
      { name: 'Cap'},
      { name: 'Skin Tone_normal_sad' },
      { name: 'Tribe' },
      { name: 'Head_normal_sad'},
      { name: 'Eyes' },
      { name: 'Mouth'},
      { name: 'Whiskers'},
      { name: 'Outfits' },
      { name: 'Accessories' },
      { name: 'Spaceship' },
    ],
  },{
    growEditionSizeTo: 1800,
    layersOrder: [
      { name: 'Universe' },
      { name: 'Zodiac' },
      { name: 'Cap'},
      { name: 'Skin Tone_ripped' },
      { name: 'Tribe' },
      { name: 'Head_ripped'},
      { name: 'Eyes' },
      { name: 'Mouth'},
      { name: 'Whiskers'},
      { name: 'Outfits' },
      { name: 'Accessories' },
      { name: 'Spaceship' },
    ],
  },{
    growEditionSizeTo: 2000,
    layersOrder: [
      { name: 'Universe' },
      { name: 'Zodiac' },
      { name: 'Cap'},
      { name: 'Skin Tone_ripped_listening' },
      { name: 'Tribe' },
      { name: 'Head_ripped_listening'},
      { name: 'Eyes' },
      { name: 'Mouth'},
      { name: 'Whiskers'},
      { name: 'Outfits' },
      { name: 'Accessories' },
      { name: 'Spaceship' },
    ],
  },{
    growEditionSizeTo: 2200,
    layersOrder: [
      { name: 'Universe' },
      { name: 'Zodiac' },
      { name: 'Cap'},
      { name: 'Skin Tone_ripped_normal' },
      { name: 'Tribe' },
      { name: 'Head_ripped_normal'},
      { name: 'Eyes' },
      { name: 'Mouth'},
      { name: 'Whiskers'},
      { name: 'Outfits' },
      { name: 'Accessories' },
      { name: 'Spaceship' },
    ],
  },{
    growEditionSizeTo: 2400,
    layersOrder: [
      { name: 'Universe' },
      { name: 'Zodiac' },
      { name: 'Cap'},
      { name: 'Skin Tone_ripped_sad' },
      { name: 'Tribe' },
      { name: 'Head_ripped_sad'},
      { name: 'Eyes' },
      { name: 'Mouth'},
      { name: 'Whiskers'},
      { name: 'Outfits' },
      { name: 'Accessories' },
      { name: 'Spaceship' },
    ],
  },{
    growEditionSizeTo: 2600,
    layersOrder: [
      { name: 'Universe' },
      { name: 'Zodiac' },
      { name: 'Cap'},
      { name: 'Skin Tone_sad' },
      { name: 'Tribe' },
      { name: 'Head_sad'},
      { name: 'Eyes' },
      { name: 'Mouth'},
      { name: 'Whiskers'},
      { name: 'Outfits' },
      { name: 'Accessories' },
      { name: 'Spaceship' },
    ],
  },{
    growEditionSizeTo: 2800,
    layersOrder: [
      { name: 'Universe' },
      { name: 'Zodiac' },
      { name: 'Cap'},
      { name: 'Skin Tone_sad_listening' },
      { name: 'Tribe' },
      { name: 'Head_sad_listening'},
      { name: 'Eyes' },
      { name: 'Mouth'},
      { name: 'Whiskers'},
      { name: 'Outfits' },
      { name: 'Accessories' },
      { name: 'Spaceship' },
    ],
  },{
    growEditionSizeTo: 3000,
    layersOrder: [
      { name: 'Universe' },
      { name: 'Zodiac' },
      { name: 'Cap'},
      { name: 'Skin Tone_sad_normal' },
      { name: 'Tribe' },
      { name: 'Head_sad_normal'},
      { name: 'Eyes' },
      { name: 'Mouth'},
      { name: 'Whiskers'},
      { name: 'Outfits' },
      { name: 'Accessories' },
      { name: 'Spaceship' },
    ],
  },{
    growEditionSizeTo: 3200,
    layersOrder: [
      { name: 'Universe' },
      { name: 'Zodiac' },
      { name: 'Cap'},
      { name: 'Skin Tone_sad_ripped' },
      { name: 'Tribe' },
      { name: 'Head_sad_ripped'},
      { name: 'Eyes' },
      { name: 'Mouth'},
      { name: 'Whiskers'},
      { name: 'Outfits' },
      { name: 'Accessories' },
      { name: 'Spaceship' },
    ],
  }
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 200,
  height: 200,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
