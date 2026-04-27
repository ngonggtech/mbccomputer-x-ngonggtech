const fs = require('fs');

const categories = [
  "Online + Co-op + Multiplayer", "Hành động", "Phiêu lưu", "Thế giới mở", "Anime",
  "Kinh dị", "Bắn súng", "Chặt chém", "Nhập vai", "Sinh tồn",
  "Đối kháng", "Thể thao", "Bóng đá", "Giải đố", "Mô phỏng",
  "Chiến thuật", "Visual Novel", "Giả lập", "FPS góc nhìn thứ nhất", "TPS góc nhìn thứ ba"
];

const mockGamesData = {
  "Online + Co-op + Multiplayer": ["Dota 2", "CS2", "Valorant", "Apex Legends", "PUBG", "Left 4 Dead 2", "It Takes Two", "Overcooked! 2", "Among Us", "Fall Guys"],
  "Hành động": ["God of War", "Devil May Cry 5", "Sekiro", "Sifu", "Bayonetta", "Nier Automata", "Hades", "Doom Eternal", "Monster Hunter World", "Batman Arkham Knight"],
  "Phiêu lưu": ["Tomb Raider", "Uncharted 4", "The Last of Us", "Journey", "Outer Wilds", "Stray", "Firewatch", "A Plague Tale", "Control", "Alan Wake 2"],
  "Thế giới mở": ["GTA V", "Red Dead Redemption 2", "The Witcher 3", "Cyberpunk 2077", "Skyrim", "Zelda BotW", "Horizon Zero Dawn", "Ghost of Tsushima", "Elden Ring", "Fallout 4"],
  "Anime": ["Genshin Impact", "Honkai Star Rail", "Persona 5", "Tales of Arise", "Scarlet Nexus", "DBZ Kakarot", "Naruto Storm 4", "Ni no Kuni", "Nier Replicant", "Guilty Gear Strive"],
  "Kinh dị": ["Resident Evil 4 Remake", "Dead Space", "Outlast", "Amnesia", "Silent Hill 2", "Phasmophobia", "Alien Isolation", "The Evil Within", "Little Nightmares", "FNAF"],
  "Bắn súng": ["Call of Duty", "Battlefield 1", "Halo Infinite", "Destiny 2", "Rainbow Six", "Overwatch 2", "Titanfall 2", "Borderlands 3", "Far Cry 6", "Metro Exodus"],
  "Chặt chém": ["Devil May Cry 5", "Metal Gear Rising", "Ninja Gaiden", "Bayonetta", "God of War 3", "Darksiders", "Hi-Fi Rush", "Nier Automata", "Dynasty Warriors", "Hades"],
  "Nhập vai": ["Baldur's Gate 3", "The Witcher 3", "Cyberpunk 2077", "Persona 5", "Final Fantasy VII", "Mass Effect", "Skyrim", "Dragon Age", "Yakuza Like a Dragon", "Diablo IV"],
  "Sinh tồn": ["Minecraft", "Rust", "Ark", "The Forest", "Subnautica", "Don't Starve", "Terraria", "Valheim", "DayZ", "Raft"],
  "Đối kháng": ["Street Fighter 6", "Tekken 8", "Mortal Kombat 1", "Smash Bros", "DB FighterZ", "Guilty Gear Strive", "Injustice 2", "KoF XV", "Soulcalibur VI", "Brawlhalla"],
  "Thể thao": ["NBA 2K24", "WWE 2K24", "Madden NFL", "PGA Tour", "F1 23", "Riders Republic", "Tony Hawk's Pro Skater", "Rocket League", "Steep", "UFC 5"],
  "Bóng đá": ["EA FC 24", "eFootball", "Football Manager", "FIFA 23", "FIFA 22", "PES 2021", "Mario Strikers", "Captain Tsubasa", "Rocket League", "Inazuma Eleven"],
  "Giải đố": ["Portal 2", "The Witness", "Tetris Effect", "Baba Is You", "The Talos Principle", "Limbo", "Inside", "Monument Valley", "Braid", "Superliminal"],
  "Mô phỏng": ["The Sims 4", "Cities Skylines", "Flight Simulator", "Euro Truck Sim 2", "Stardew Valley", "Planet Coaster", "Farming Simulator", "PC Building Sim", "House Flipper", "Animal Crossing"],
  "Chiến thuật": ["Civilization VI", "Age of Empires IV", "XCOM 2", "StarCraft II", "Total War", "Crusader Kings 3", "Stellaris", "Company of Heroes", "Anno 1800", "Warcraft III"],
  "Visual Novel": ["Danganronpa", "Phoenix Wright", "Steins;Gate", "DDLC", "Clannad", "VA-11 Hall-A", "Zero Escape", "Fate/stay night", "Muv-Luv", "Fata Morgana"],
  "Giả lập": ["Yuzu", "PCSX2", "RPCS3", "Cemu", "Dolphin", "RetroArch", "PPSSPP", "Ryujinx", "Xenia", "Citra"],
  "FPS góc nhìn thứ nhất": ["CS2", "Valorant", "Doom Eternal", "Half-Life 2", "Left 4 Dead 2", "Cyberpunk 2077", "Overwatch 2", "Rainbow Six", "Destiny 2", "Bioshock Infinite"],
  "TPS góc nhìn thứ ba": ["Gears 5", "The Division 2", "Control", "Max Payne 3", "Uncharted 4", "The Last of Us", "Remnant 2", "Returnal", "Warframe", "Ghost Recon"]
};

// Just some cool gaming unsplash images
const images = [
  "https://images.unsplash.com/photo-1552824801-081ba798670d",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420",
  "https://images.unsplash.com/photo-1550745165-9bc0b252723f",
  "https://images.unsplash.com/photo-1614027164847-1b2809eb189d",
  "https://images.unsplash.com/photo-1509198397868-475647b2a1e5",
  "https://images.unsplash.com/photo-1542751371-adc38448a05e",
  "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd",
  "https://images.unsplash.com/photo-1588698188-4c28f1cc4306"
];

let out = `import { Game } from './types';\n\nexport const GAME_CATEGORIES = ${JSON.stringify(categories, null, 2)};\n\nexport const ALL_GAMES: Game[] = [\n`;

let idCounter = 1;
for (const [cat, games] of Object.entries(mockGamesData)) {
  for (let i = 0; i < games.length; i++) {
    const title = games[i];
    const image = images[Math.floor(Math.random() * images.length)] + "?q=80&w=800&auto=format&fit=crop";
    const game = {
      id: `game-${idCounter++}`,
      title: title,
      description: `Một tựa game tuyệt vời thuộc thể loại ${cat}. Đồ họa cực đỉnh và lối chơi cuốn hút.`,
      genre: cat,
      rating: (Math.random() * 2 + 8).toFixed(1) + '/10', // 8.0 - 10.0
      image: image,
      tags: [cat, 'Phổ biến', 'Hấp dẫn']
    };
    out += `  ${JSON.stringify(game)},\n`;
  }
}

out += `];\n`;

fs.writeFileSync('src/gamesDb.ts', out);
console.log('Successfully generated src/gamesDb.ts');
