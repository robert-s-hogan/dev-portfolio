exports.handler = async function (event, context) {
    const db = {
        human: {
            male: {
                firstName: [
                    { name: "Anlow" },
                    { name: "Arando" },
                    { name: "Bram" },
                    { name: "Cale" },
                    { name: "Dalkon" },
                    { name: "Daylen" },
                    { name: "Dodd" },
                    { name: "Dungarth" },
                    { name: "Dyrk" },
                    { name: "Eandro" },
                    { name: "Falken" },
                    { name: "Feck" },
                    { name: "Fenton" },
                    { name: "Gryphero" },
                    { name: "Hagar" },
                    { name: "Jeras" },
                    { name: "Krynt" },
                    { name: "Lavant" },
                    { name: "Leyten" },
                    { name: "Madian" },
                    { name: "Malfier" },
                    { name: "Markus" },
                    { name: "Meklan" },
                    { name: "Namen" },
                    { name: "Navaren" },
                    { name: "Nerle" },
                    { name: "Nilus" },
                    { name: "Ningyan" },
                    { name: "Norris" },
                    { name: "Quentin" },
                    { name: "Semil" },
                    { name: "Sevenson" },
                    { name: "Steveren" },
                    { name: "Talfen" },
                    { name: "Tamond" },
                    { name: "Taran" },
                    { name: "Tavon" },
                    { name: "Tegan" },
                    { name: "Vanan" },
                    { name: "Vincent" },
                ],
            },
            female: {
                firstName: [
                    { name: "Azura" },
                    { name: "Brey" },
                    { name: "Hallan" },
                    { name: "Kasaki" },
                    { name: "Lorelei" },
                    { name: "Mirabel" },
                    { name: "Pharana" },
                    { name: "Remora" },
                    { name: "Rosalyn" },
                    { name: "Sachil" },
                    { name: "Saidi" },
                    { name: "Tanika" },
                    { name: "Tura" },
                    { name: "Tylsa" },
                    { name: "Vencia" },
                    { name: "Xandrilla" },
                ],
            },
            lastName: [
                { name: "Arkalis" },
                { name: "Armanci" },
                { name: "Bilger" },
                { name: "Blackstrand" },
                { name: "Brightwater" },
                { name: "Carnavon" },
                { name: "Caskajaro" },
                { name: "Coldshore" },
                { name: "Coyle" },
                { name: "Cresthill" },
                { name: "Cuttlescar" },
                { name: "Daargen" },
                { name: "Dalicarlia" },
                { name: "Danamark" },
                { name: "Donoghan" },
                { name: "Drumwind" },
                { name: "Dunhall" },
                { name: "Ereghast" },
                { name: "Falck" },
                { name: "Fallenbridge" },
                { name: "Faringray" },
                { name: "Fletcher" },
                { name: "Fryft" },
                { name: "Goldrudder" },
                { name: "Grantham" },
                { name: "Graylock" },
                { name: "Gullscream" },
                { name: "Hindergrass" },
                { name: "Iscalon" },
                { name: "Kreel" },
                { name: "Kroft" },
                { name: "Lamoth" },
                { name: "Leerstrom" },
                { name: "Lynchfield" },
                { name: "Moonridge" },
                { name: "Netheridge" },
                { name: "Oakenheart" },
                { name: "Pyncion" },
                { name: "Ratley" },
                { name: "Redraven" },
                { name: "Revenmar" },
                { name: "Roxley" },
                { name: "Sell" },
                { name: "Seratolva" },
                { name: "Shanks" },
                { name: "Shattermast" },
                { name: "Shaulfer" },
                { name: "Silvergraft" },
                { name: "Stavenger" },
                { name: "Stormchapel" },
                { name: "Strong" },
                { name: "Swiller" },
                { name: "Talandro " },
                { name: "Targana" },
                { name: "Towerfall" },
                { name: "Umbermoor" },
                { name: "Van Devries" },
                { name: "Van Gandt" },
                { name: "Van Hyden" },
                { name: "Varcona" },
                { name: "Varzand" },
                { name: "Voortham" },
                { name: "Vrye" },
                { name: "Webb" },
                { name: "Welfer" },
                { name: "Wilxes" },
                { name: "Wintermere" },
                { name: "Wygarthe" },
                { name: "Zatchet" },
                { name: "Zethergyll" },
            ],
            ageRange: {
                startAge: "0",
                maxAge: "100",
                measurement: "years",
            },
            classes: [
                {
                    artificer: [
                        {
                            female: [{ image: "" }],
                            male: [{ image: "" }],
                        },
                    ],
                },
                {
                    barbarian: [
                        {
                            female: [
                                {
                                    image: "https://i.pinimg.com/236x/de/5b/b2/de5bb282abb9c92d9154d0bdf762469c.jpg",
                                },
                            ],
                            male: [{ image: "" }],
                        },
                    ],
                },
                {
                    bard: [
                        {
                            female: [
                                {
                                    image: "",
                                },
                            ],
                            male: [
                                {
                                    image: "",
                                },
                            ],
                        },
                    ],
                },
                {
                    cleric: [
                        {
                            female: [
                                {
                                    image: "",
                                },
                            ],
                            male: [
                                {
                                    image: "",
                                },
                            ],
                        },
                    ],
                },
                {
                    druid: [
                        {
                            female: [
                                {
                                    image: "https://i.pinimg.com/236x/e7/b1/fe/e7b1fe130b8c0c34db1d924e0e3bbb00.jpg",
                                },
                            ],
                            male: [
                                {
                                    image: "",
                                },
                            ],
                        },
                    ],
                },
                {
                    fighter: [
                        {
                            female: [
                                {
                                    image: "https://i.pinimg.com/236x/28/f9/87/28f98770ac035c542db57772e45da63f.jpg",
                                },
                            ],
                            male: [
                                {
                                    image: "",
                                },
                            ],
                        },
                    ],
                },
                {
                    monk: [
                        {
                            female: [
                                {
                                    image: "",
                                },
                            ],
                            male: [
                                {
                                    image: "",
                                },
                            ],
                        },
                    ],
                },
                {
                    paladin: [
                        {
                            female: [
                                {
                                    image: "",
                                },
                            ],
                            male: [
                                {
                                    image: "",
                                },
                            ],
                        },
                    ],
                },
                {
                    ranger: [
                        {
                            female: [
                                {
                                    image: "",
                                },
                            ],
                            male: [
                                {
                                    image: "https://i.pinimg.com/236x/c3/09/e7/c309e733c9eaa05347081adcb875e71c.jpg",
                                },
                            ],
                        },
                    ],
                },
                {
                    rogue: [
                        {
                            female: [
                                {
                                    image: "",
                                },
                            ],
                            male: [
                                {
                                    image: "https://i.pinimg.com/236x/a1/f9/ae/a1f9ae547af9952831d8eb02fb3fb3fd.jpg",
                                },
                            ],
                        },
                    ],
                },
                {
                    sorcerer: [
                        {
                            female: [
                                {
                                    image: "",
                                },
                            ],
                            male: [
                                {
                                    image: "",
                                },
                            ],
                        },
                    ],
                },
                {
                    warlock: [
                        {
                            female: [
                                {
                                    image: "",
                                },
                            ],
                            male: [
                                {
                                    image: "",
                                },
                            ],
                        },
                    ],
                },
                {
                    wizard: [
                        {
                            female: [
                                {
                                    image: "",
                                },
                            ],
                            male: [
                                {
                                    image: "",
                                },
                            ],
                        },
                    ],
                },
            ],
            occupation: {
                agricultureAnimalHusbandryForestry: [
                    {
                        "Animal/Monster Handler":
                            "responsible for the safe keeping, dietary care, and exercise of animals or monsters.",
                    },
                    {
                        Arborist:
                            "maintains and cares for trees, often by surgically removing dying limbs.",
                    },
                    {
                        Baler: "bales hay, or in the mills, wool and cotton goods.",
                    },
                    {
                        Beekeeper:
                            "owns and breeds bees, especially for their honey.",
                    },
                    { Breeder: "breeds livestock, animals, or monsters." },
                    { Cowherd: "supervises grazing cattle." },
                    {
                        "Dairyboy/Dairymaid":
                            "milks cows and makes cheese and butter.",
                    },
                    {
                        Falconer:
                            "keeps, trains, and hunts with falcons, hawks, or other birds of prey.",
                    },
                    { Farmer: "operates a farm or cultivates land." },
                    { Fisher: "catches fish." },
                    { Florist: "grows and arranges plants and cut flowers." },
                    { Forager: "searches for food in the wild." },
                    { Forester: "supervises the wellbeing of a forest." },
                    { Fowler: "catches or ensnares birds." },
                    {
                        Gamekeeper:
                            "breeds and protects game, typically for a large estate.",
                    },
                    {
                        Groom: "cleans and brushes the coats horses, dogs, or other animals.",
                    },
                    {
                        Herder: "supervises a herd of livestock or makes a living from keeping livestock, especially in open country.",
                    },
                    {
                        "Horse Trainer":
                            "tends to horses and teaches them different disciplines.",
                    },
                    { Hunter: "hunts game or other wild animals." },
                    {
                        Lumberjack:
                            "fells trees, cuts them into logs, and transports them to a sawmill.",
                    },
                    {
                        "Master-of-Horses":
                            "supervises and commands all horses under a jurisdiction.",
                    },
                    {
                        "Master-of-Hounds":
                            "maintains a pack of hounds and their associated staff, equipment, and hunting arrangements.",
                    },
                    { Miller: "owns or works in a grain mill." },
                    {
                        Miner: "works underground in mines in order to obtain minerals such as coal, diamonds, or gold.",
                    },
                    {
                        Pathfinder:
                            "scouts ahead and discovers a path or way for others.",
                    },
                    { Plumer: "hunts birds for their plumes." },
                    {
                        Prospector:
                            "searches for mineral deposits, especially by drilling and excavation.",
                    },
                    {
                        Ranger: "wanders or ranges over a particular area or domain.",
                    },
                    {
                        Renderer:
                            "converts waste animal tissue into usable materials.",
                    },
                    { Shepherd: "herds, tends, and guards sheep." },
                    { Stablehand: "works in a stable." },
                    { Thresher: "separates grain from the plants by beating." },
                    {
                        Trapper:
                            "traps wild animals, especially for their fur.",
                    },
                    {
                        Vintner:
                            "engages in winemaking, especially with monitoring and harvesting the grapes.",
                    },
                    {
                        Zookeeper:
                            "maintains and cares for animals or monsters in a zoo.",
                    },
                ],
            },
            ideal: [
                {
                    Faith: "I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful)",
                },
                {
                    Tradition:
                        " The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)",
                },
                {
                    Charity:
                        "I always try to help those in need, no matter what the personal cost. (Good)",
                },
                {
                    Change: "We must help bring about the changes the gods are constantly working in the world. (Chaotic)",
                },
                {
                    Power: "I hope to one day rise to the top of my faith's religious hierarchy. (Lawful)",
                },
                {
                    Aspiration:
                        "I seek to prove my self worthy of my god's favor by matching my actions against his or her teachings. (Any)",
                },
                {
                    Independence:
                        "I am a free spirit--no one tells me what to do. (Chaotic)",
                },
                {
                    Fairness:
                        "I never target people who can't afford to lose a few coins. (Lawful)",
                },
                {
                    Charity:
                        "I distribute money I acquire to the people who really need it. (Good)",
                },
                { Creativity: "I never run the same con twice. (Chaotic)" },
                {
                    Friendship:
                        "Material goods come and go. Bonds of friendship last forever. (Good)",
                },
                {
                    Aspiration:
                        "I'm determined to make something of myself. (Any)",
                },
                { Honor: "I don't steal from others in the trade. (Lawful)" },
                {
                    Freedom:
                        "Chains are meant to be broken, as are those who would forge them. (Chaotic)",
                },
                {
                    Charity:
                        "I steal from the wealthy so that I can help people in need. (Good)",
                },
                {
                    Greed: "I will do whatever it takes to become wealthy. (Evil)",
                },
                {
                    People: "I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)",
                },
                { Redemption: "There's a spark of good in everyone. (Good)" },
                {
                    Beauty: "When I perform, I make the world better than it was. (Good)",
                },
                {
                    Tradition:
                        "The stories, legends, and songs of the past must never be forgotten. (Lawful)",
                },
                {
                    Creativity:
                        "The world is in need of new ideas and bold action. (Chaotic)",
                },
                { Greed: "I'm only in it for the money and fame. (Evil)" },
                {
                    People: "I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)",
                },
                {
                    Honesty:
                        "Art should reflect the soul; it should come from within and reveal who we really are. (Any)",
                },
                {
                    Respect:
                        "People deserve to be treated with dignity and respect. (Good)",
                },
                {
                    Fairness:
                        "No one should get preferential treatment before the law, and no one is above the law. (Lawful)",
                },
                {
                    Freedom:
                        "Tyrants must not be allowed to oppress the people. (Chaotic)",
                },
                {
                    Might: "If I become strong, I can take what I want--what I deserve. (Evil)",
                },
                {
                    Sincerity:
                        "There's no good pretending to be something I'm not. (Neutral)",
                },
                {
                    Destiny:
                        "Nothing and no one can steer me away from my higher calling. (Any)",
                },
                {
                    Community:
                        "It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)",
                },
                {
                    Generosity:
                        "My talents were given to me so that I could use them to benefit the world. (Good)",
                },
                {
                    Freedom:
                        "Everyone should be free to pursue his or her livelihood. (Chaotic)",
                },
                { Greed: "I'm only in it for the money. (Evil)" },
                {
                    People: "I'm committed to the people I care about, not to ideals. (Neutral)",
                },
                {
                    Aspiration:
                        "I work hard to be the best there is at my craft. (Any)",
                },
                {
                    "Greater Good":
                        "My gifts are meant to be shared with all, not used for my own benefit. (Good)",
                },
                {
                    Logic: "Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)",
                },
                {
                    "Free Thinking":
                        "Inquiry and curiosity are the pillars of progress. (Chaotic)",
                },
                {
                    Power: "Solitude and contemplation are paths toward mystical or magical power. (Evil)",
                },
                {
                    "Live and Let Live":
                        "Meddling in the affairs of others only causes trouble. (Neutral)",
                },
                {
                    "Self-Knowledge":
                        "If you know yourself, there's nothing left to know. (Any)",
                },
                {
                    Respect:
                        "Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)",
                },
                {
                    Responsibility:
                        "It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)",
                },
                {
                    Independence:
                        "I must prove that I can handle myself without the coddling of my family. (Chaotic)",
                },
                {
                    Power: "If I can attain more power, no one will tell me what to do. (Evil)",
                },
                { Family: "Blood runs thicker than water. (Any)" },
                {
                    "Noble Obligation":
                        "It is my duty to protect and care for the people beneath me. (Good)",
                },
                {
                    Change: "Life is like the seasons, in constant change, and we must change with it. (Chaotic)",
                },
                {
                    "Greater Good":
                        "It is each person's responsibility to make the most happiness for the whole tribe. (Good)",
                },
                {
                    Honor: "If I dishonor myself, I dishonor my whole clan. (Lawful)",
                },
                { Might: "The strongest are meant to rule. (Evil)" },
                {
                    Nature: "The natural world is more important than all the constructs of civilization. (Neutral)",
                },
                {
                    Glory: "I must earn glory in battle, for myself and my clan. (Any)",
                },
                {
                    Knowledge:
                        "The path to power and self-improvement is through knowledge. (Neutral)",
                },
                {
                    Beauty: "What is beautiful points us beyond itself toward what is true. (Good)",
                },
                {
                    Logic: "Emotions must not cloud our logical thinking. (Lawful)",
                },
                {
                    "No Limits":
                        "Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)",
                },
                {
                    Power: "Knowledge is the path to power and domination. (Evil)",
                },
                {
                    "Self-improvement":
                        "The goal of a life of study is the betterment of oneself.",
                },
                {
                    Respect:
                        "The thing that keeps a ship together is mutual respect between captain and crew. (Good)",
                },
                {
                    Fairness:
                        "We all do the work, so we all share in the rewards. (Lawful)",
                },
                {
                    Freedom:
                        "The sea is freedom--the freedom to go anywhere and do anything. (Chaotic)",
                },
                {
                    Master: "I'm a predator, and the other ships on the sea are my prey. (Evil)",
                },
                {
                    People: "I'm committed to my crewmates, not to ideals. (Neutral)",
                },
                {
                    Aspiration:
                        "Someday I'll own my own ship and chart my own destiny. (Any)",
                },
                {
                    "Greater Good":
                        "Our lot is to lay down our lives in defense of others. (Good)",
                },
                {
                    Responsibility:
                        "I do what I must and obey just authority. (Lawful)",
                },
                {
                    Independence:
                        "When people follow orders blindly they embrace a kind of tyranny. (Chaotic)",
                },
                { Might: "In life as in war, the stronger force wins. (Evil)" },
                {
                    Neutral:
                        "Ideals aren't worth killing for or going to war for. (Neutral)",
                },
                {
                    Nation: "My city, nation, or people are all that matters. (Any)",
                },
                {
                    Respect:
                        "All people, rich or poor, deserve respect. (Good)",
                },
                {
                    Community:
                        "We have to take care of each other because no one else is going to do it. (Lawful)",
                },
                {
                    Change: "The low is lifted up, and the high and mighty are brought down. Change is the nature of things. (Chaotic)",
                },
                {
                    Retribution:
                        "The rich need to be shown what life and death are like in the gutters. (Evil)",
                },
                {
                    People: "I help people who help me--that's what keeps us alive. (Neutral)",
                },
                {
                    Aspiration:
                        "I'm going to prove that I'm worthy of a better life. (Any)",
                },
            ],
            backstory: [
                {
                    description:
                        "You served as a squire to the younger son of a local lord, a minor political figure. Two years ago he moved to the city, to study magic and indulge in debauchery, and released you from your service (and your salary). You've heard that Bordertown has uses for someone with skill of arms, and so you've hopped onto the first coach available.",
                },
                {
                    description:
                        "You've always wanted to be an adventurer. You sat on your pappy's lap as he told and retold the tales of your uncle Algar Spiderspear, and your great uncle Kenway Fireheart, and your great great aunt Thea Earthforger. You didn't understand that those were meant to be cautionary tales, and that there's a reason you don't have any cousins.",
                },
                {
                    description:
                        "You never really liked the family dye business. As the first born you were always expected to take over. After lamenting one night drunkenly at the tavern you met a gnome who promised to help. On returning home your family did not recognize you and your younger sibling was set to inherit. They drove you off their land to homelessness. You never saw the gnome again.",
                },
                {
                    description:
                        "You were a normal farmer, nothing special about you. Over the years, your farm started losing money and you had to let more and more of your staff go until it was just you left. One day when you are at the local inn drinking your problems away and adventurer walks through and buy the entire inn several rounds of drinks from his large sack of golden coins. Since that day you have sold your farm and used the money to buy some basic adventuring supplies and head out to build your fortune.",
                },
                {
                    description:
                        "You were a squire for the local knight and Lord of your province. One day while cleaning his library you come across and gold handle behind some dusty books. As you turned the handle it felt as if your brain was opening like a door. When you turned the handle back a a dusty grimore fell into your hands and you heard a voice inside your head, you decided to name the voice Greg.",
                },
                {
                    description:
                        "You grew up as a milk maid, over the course of your child hood you realised that you had a special connection with all animals and nature. One day on your way back from town bandits jumped out from the side of the road and attacked you. Startled, you this your hands out towards them and magic shot out from your finger tips. The next day you packed your things and headed out to learn more about what you had just done and how to control it.",
                },
                {
                    description:
                        "Your father was a miner, your mother and innkeeper, you spent your childhood poking the ashes in the fireplace waiting for something to happen. One day a halfling fell down your chimney and talk you into hiding him in your room, his only name that he gave you was Miro, but he taught you many thing over a few nights, once he felt 'it' had blown over he packed his things and invited you to join him. He trained you to be a master thief and became almost a second father to you over the course of 2 years. Until one day he set you up, and ran away with the treasure leaving you to rot in the king's jail.",
                },
                {
                    description:
                        "You always had anger problems, then again most sailors do, yours were a bit different though. One day you were fishing off the side of your ship when you caught something very heavy on your line. When you finally reeled it in you found a gold ring, but the gold was almost blood red, and in you hand it felt like it had almost no weight. Your crew members wanted to see the ring, but they only saw it as normal gold, you saw it for something much more incredible. When they tried to take it from you you flew into a rage beating them senseless until you jumped into a rowboat and made your way back to shore. You know that they will probably come after you, but none of that matters, you know that you must go to the mountains. You just don't know where or what a mountain is.",
                },
                {
                    description:
                        "You grew up on a small farm. Your family was poor, but you managed. You idolized your older brother as a child, even though he wasn’t always nice to you in return. Then one day your brother was conscripted into the army, and you haven’t heard from him since - none of the money he promised to send home, not even a letter. You have finally come of age yourself and set out to find him, or at least find out what happened to him.",
                },
                {
                    description:
                        "When you were a teenager, you stopped by a fortune teller’s stall at a festival, just out of idle curiosity. The fortune teller performed her rites and examined you, and promptly burst out laughing. She refunded your money and refused to tell you what she had seen. All she told you was, “Good luck!”",
                },
                {
                    description:
                        "You were a middle-aged craftsman/woman with a successful business, several children, and a happy life. One day you came home to discover your spouse was cheating on you. Newly divorced, you had a bit of a mid-life crisis and spent all of your savings on a [book of magic/set of shiny armor/fencing lessons/musical instrument/etc]. Gosh darn it, you want to have an adventure!",
                },
                {
                    description:
                        "Your parents are scholars, historians specifically, and you've been raised on countless trips to archaeological digs, libraries, and lectures with them. You may or may not have taken to the studies as much as they'd like, but when the restless need to spread your wings and get away from home took hold, they were excited to request that you document all the things you discover on your adventures and bring them home to share.",
                },
                {
                    description:
                        "You were the oldest child of a prosperous peasant. You had a life of beer, bread and barn dances to look forward to. Then, you went into the big town on a religious pilgrimage, and were knocked out and press-ganged into the army. Turns out, you loved it and never looked back. Your dad had other kids. Too bad the Goblin Wars are over now and your lord disbanded his army.",
                },
                {
                    description:
                        "You were a slave, on a big estate. One day, a charismatic leader got the slaves to rise in rebellion. You're pretty sure there are others who didn't end up crucified, but you've never met any of them. Here in the city, nobody has any idea the rebellion even happened.",
                },
                {
                    description:
                        "You were a village priest. Births, deaths, rites of passage. Holy cow, was it boring. You renounced your vows and moved on. You've never suffered from this: the gods have never wrought revenge upon you. You get the feeling they don't care, or they're not there. Some of the things you learned (healing, counseling) have proved pretty useful.",
                },
                {
                    description:
                        "You were a wealthy playboy, the son of a rich merchant. He got murdered; you lost what was left gambling. Turns out you're pretty good in a fight. You still have expensive tastes.",
                },
                {
                    description:
                        "You were trained as a courtesan. You got blamed for breaking up a marriage among nobles. Some of them still like you; others want you dead. Sometimes, it's hard to tell.",
                },
                {
                    description:
                        "You were conscripted to join the army, but it was a sham. You and a couple others were lured into an ambush by bandits. Though outnumbered, your group managed to fend them off. Unfortunately, only you survived the ordeal and managed to escape before the bandits got any more reinforcements, though not without taking a valuable item the bandits were after. Now you're on the run hoping to lure the bandits away from home.",
                },
                {
                    description:
                        "You are transported to another plane of existence where everything and everyone from your past life has occurred just the same, except you. In this plane you died early in life/never been born/had rose as a crime lord that went missing as his reign fell/whatever else you can up with.",
                },
                {
                    description:
                        "Your family has been guarding an ancient artifact for generations that has been said to hold immense power. It is stolen under your watch but you track it down JUST as it is about to be used for evil. It's a dud. Now you journey around to find the real artifact that your family should've been guarding/ find the reason why they've been given such a fool's errand to follow for so long.",
                },
                {
                    description:
                        "A warlock finds out they're not the only user of their patron's magic. Others share the same pact they made with it and now the patron desires them all to find each other and fight to the death. The winner shall be granted the true power the patron split between them/wish/ immortality/ whatever else.",
                },
                {
                    description:
                        "Your mother carried your little body through the woods, with her dying breath she brought you to the wise man of the forest and collapsed as soon as she told him your name. He raised you in her stead until he died of ...",
                },
                {
                    description:
                        "Despite being cheerful and righteous, you can't remember anything before you're 25th birthday. Every time you kill something evil, you get a small memory back. Every quest returns to you a piece of your former self...and the more you see, the more you suspect you were not a good person.",
                },
                {
                    description:
                        "On a mission to buy some new clothes you were mistaken for an adventurer who had already orders some. You were thus outfitted and always one to role with with what life throws at you decided to run with it. Somewhere there is an underdressed adventurer looking for her clothes and wondering who stole her identity.",
                },
                {
                    description:
                        "Your parents always said that reading would be the death of you. Despite this you taught yourself how to read behind their back. You then discovered the will and testament of your real parents and realize you are being raised by your uncle who controls all the family wealth. Fearful for your life and feeling betrayed you abandon the household to make your own name and find out what really happened to your parents. Your uncle may or may not know that you know about the deception.",
                },
                {
                    description:
                        "Once, you belonged into a wealthy and noble family, who unofficially ruled the city, due to your wealth and power. You were enjoying your time in the sun and were proud of your family name, until you discovered your father is a vampire, who works with evil necromancers and together turn civilians into monsters. Conflicted on your hatred, feelings of betrayal, sense of duty and love for your house, you grabbed your dearest friends and hit the road, forsaking your family name and keeping the secrets of your family hidden.",
                },
                {
                    description:
                        "You were raised by travelling merchants, going with them wherever they went. As you got older, they started teaching you the ways of the trade, and you planned to travel and trade with them your whole life. One day, your caravan was attacked by bandits, who killed everyone, and would have killed you, if you didn't get away. Since then, you abandoned your dream, and have been making a living out of adventures.",
                },
                {
                    description:
                        "You were trained by a master of your skill, like many others, in an appropriate organisation. One day, they set each of the students on a quest for retrieving a mythical item. The thing your character was supposed to find though, was simply a myth. When you told the master the story, they didn't believe you, and expelled you from the order.",
                },
                {
                    description:
                        "Your parents were retired adventurers, who told you their epic tales, and probably expected you to follow their steps. When you reached adulthood, you set out to do even more epic deeds than them, despite having no training at all.",
                },
                {
                    description:
                        "The first thing your remember is being rescued from rubble by a good-hearted noble, who then patched you up and offered his help in trying to find who you are. The only clue you have are your class abilities (which are like muscle memory to you), and the knowledge of whatever the collapsed building was.",
                },
                {
                    description:
                        "You grew up as a normal city kid, and never really did anything interesting with your life. You had a decent job and was going to get married soon, until the day you got lost in the wilderness. That was years ago, and you have never been able to find your way back to your hometown, because nobody seems to know about it.",
                },
                {
                    description:
                        "You grew up with nothing, cheating and stealing where you could. All you’ve ever earned was a target on your back and bad reputation. Eventually you found yourself on the run from the wrong kind of people. In a tavern you met a wizard that promised a way out. With nowhere else to turn, you reluctantly agreed. The wizard took you to his study and performed a ritual to switch your face with the face of another person of similar build. Now you go off into the world with a new identity and a chance to start over. Or so you thought... (The face you wear has it's history too).",
                },
                {
                    description:
                        "You are the child of a single woman taken in by a traveling caravan of performers while pregnant. She never described your father to you, and she changes the subject when you ask. Those in the caravan are your substitute family. You have several 'grandparents,' 'aunts,' 'uncles,' and 'cousins.' You took part in the caravan's entertainment for coin, whether as a performer or someone behind the scenes. When you felt the need, you left the caravan of your own free will to pursue your journey. You were given a special crest with the performers' symbol so you would be welcomed back if you returned.",
                },
                {
                    description:
                        "You are an experiment, either made or modified for a reason you cant even remember. with so many genetic changes and magical 'enhancements' that you cant even count the amount of places where they're from. A lab rat from a man who seemed to want to do good, and claims to try to have done so but never told what he was doing specifically, never said what his end goal was and just kept going, and going and going. The doctor was put to death for his experiments. Whatever purpose you had been made for is now lost to you, as is just about everything you used to know. You don't know who you were, assuming you were anything other than this.",
                },
                {
                    description:
                        "You fell into life threatening trouble one day exploring some ruins close to town. There you found a strange altar with and old woman sitting behind it. She said she could help you escape, if you promise to serve her. You're pretty sure she's a god, but she won't tell you her name, or what she's the god of. She shows up sometimes and points, and whatever she points at you must somehow acquire and leave behind in certain ruins. Her tastes are getting kind of extravagant.",
                },
                {
                    description:
                        "You were once the son of a wealthy merchant who traveled more than average compared to other merchants at the time. Your father would often take you and your younger sister on some of his shorter journeys, exposing you to a dangers of sailing across the seas. On one advantage your father's ship was attacked by pirates killing everyone on board. Because of the tragic death of your father you desire revenge, and will do anything to kill them.",
                },
                {
                    description:
                        "Your an anti-social person who lives a quiet life in a rural part of the kingdom. In your quiet life you discovered a interest in ancient artifacts left over from the last civilization. Known most of your down time is sent studying these artifacts through reading ancient texts, and practicing your magic.",
                },
                {
                    description:
                        "You sold vegetables from a street cart you were still making payments on. A wild street chase broke out and one of the escapees upended your cart to delay some guards, shattering it badly. Reeling from the financial loss of your vegetables and blocked from setting up another shop by overzealous debt-collector harassment, you left town with all you had hoping to put your life back together.",
                },
                {
                    description:
                        "You were once a wicked individual who took pleasure in the misery of others. You were then struck by powerful cursed magic that turned your entire outlook on life around, so that you now are a force for good who brings happiness to others. Your dark past still haunts you, and sometimes your old friends try to call you back.",
                },
                {
                    description:
                        "You were a simple bed-and-breakfast inn owner. One of your guests left for a night of carousing and never returned. Among their left-behind possessions was an ornate locked box with no key. Hoping to find the owner or their organization, you took the box to a local bush-wizard to get it identified. While you were away, your inn was ransacked and burned to the ground. Word got around you had the box and you were being hunted, so you fled in terror.",
                },
                {
                    description:
                        "When you were young, you found a diary that would message back to you if you wrote in it. It taught you many mysterious skills and spells. One day, the diary told you that it couldn't write to you anymore, and it went silent. You set off when you got older to explore some of the places the diary mentioned and uncover the identity of your mysterious penpal.",
                },
                {
                    description:
                        "When you were young, you were polymorphed into a flying horse by a malfunctioning spell. Some explorers promised to help you, and you taken on many harrowing adventures. The help never came, as the explorers preferred a flying horse. Decades pass, you were lost and sold many times. Eventually a kindly witch made you whole again, picking up human life at the age you were changed. (Can substitute for flying carpet if you aren't a horse person.)",
                },
                {
                    description:
                        "A lonely child found a ring of wishing. They wished for their imaginary friend, you, to become real. The child soon became sick and died, and their parents blamed you and ran you out of town. Using the powers that the child imagined you to have, you have begun to search for a purpose.",
                },
                {
                    description:
                        "You were born dumb to a wealthy family with an estate. Ashamed and not knowing what else to do with you, your family used you as a slave, setting you to all the most awful and menial tasks. Not knowing any better, you became strong with a smile. One evening, you showed kindness to an old woman who turned out to be a fairy queen in disguise. She blessed you with intelligence. Disgusted with the way you were treated, you left home, hoping to learn to read, study, and start life anew.",
                },
                {
                    description:
                        "After your town was razed and everyone you knew died, you woke up in the middle of the ashes. Something, for some reason, kept you alive, and a life of adventure might give you the opportunity to find out what and why.",
                },
                {
                    description:
                        "The bandits thought they left nothing of value in your village, and maybe they were right because that night you lost your arm and way of life.",
                },
                {
                    description:
                        "You grew up as the region's stereotype, a poor farmer with a passion for whittling. After inheriting the farm prospectors found gold in the river and you sold the farm for more money than you thought was in circulation. Unsure of how to spend money and unwilling to save it, you purchased an abandoned adventurer's guild with plans to turn it into a wooden toy shop before finding it not quite as abandoned as you thought.",
                },
                {
                    description:
                        "You are a farmer who found a talking rock which only you could hear, in the middle of your own farm. Everyone thinks you lost your mind, which eventually leads to an unwanted embargo, and you go bankrupt.",
                },
                {
                    description:
                        "You lead a relatively normal life as a tailor in a small town until your infant daughter started showing signs of sorcerous abilities and was stolen in the night.",
                },
                {
                    description:
                        "You were the student of the greatest bard in the land, until you murdered him.",
                },
                {
                    description:
                        "You were trapped in a cloud giant's castle for years living of of giant crumbs. Only recently were you able to escape.",
                },
                {
                    description:
                        "You were an orphan taken in by the local butcher. You were a loner bug dilligent and you loved your adoptive father. One day the village is attacked by bandits, who kill your adoptive father. You get your revenge on the bandits but the brutality of your vengeance alienates you even more to the rest of the village.",
                },
                {
                    description:
                        "You grew up watching the pit fighters in the capital city, marveling at their strength and ability. You spent years training on your own in both armed and hand fighting, with the ultimate goal of entering the pit and becoming a legend in your own right. As you are about to enter for your first match, your opponent and the announcer come over to lay out the match, revealing all of the fights are pre-determined and set up so no one is really injured. You walked away and now are trying to find your place in the world.",
                },
                {
                    description:
                        "For your entire life up to now you have watched others perform magic, they were few, but fantastical and filled your heart with wonder. Practice and study as you may, you were never able to recreate even simple cantrips that the local wizard has tried to teach you. Distraught, you ran to the woods to a secret clearing to cry for a bit. That day something incredible happens, magic shot from you fingertips, and shortly after a man in a suit and tie walk up from the edge of the clearing and sets his briefcase down on a large flat rock that you had never seen sitting there before. “It seems we have some paperwork to go over,” he said with a smile.",
                },
                {
                    description:
                        "You met and joined a errant knight and his small court that traveled searching for riches and a new home for this lord and his barren town after the war. After years of service and being brought to be loyal to this cause, the knight died in his sleep all the sudden and his attendants looted the caravan and ran off, leaving you to bury your teacher, pack what gear he had and was left behind and pick up the quest of Knighthood to this unknown lord as he was show.",
                },
                {
                    description:
                        "Character [C] was a demon hunter on the desert planet Derach. C fought alongside their small battalion and this group was revered for their efficiency and kept to themselves. One day a strange rift opened and pulled the group apart banishing each of the soldiers to different corners of the universe. C’s only goal once reaching a strange green planet was to find a way to portal back to the demon’s world and find their companions. Unfortunately C was captured by the planets inhabitants and forced into slavery.",
                },
                {
                    description:
                        "You only remember the last 5-10 years of your live. Before that it is all blank. Your parents/caretakers/close ones tell you that you had a terrible accident and lost all memory after the accident. But then you find written agreements of your adoption, detailing that you were selected for an experimental form of adoption. This meant that your memory was wiped and your biological parents wiped out. You have been engineered by wizards/scientists to be the perfect human. You then find a note that the amnesia can be reversed if [plot hook] is done. A warning is written in big letters that reversing the amnesia spell might have unforeseen effects.",
                },
                {
                    description:
                        "You spent most of your childhood and early adulthood as a farmer, the difficulty of your daily work offset by the amazing times you've had with friends and family. One day, you hit your head on a rock. When you next awoke, you were in leather armor, on a sailing ship as part of an adventuring party. An entire life of adventure, riches, and excitement unfolded, and as you lay down for the last time, surrounded by your allies and loved ones, you woke back up with a pain in your temple, 3 seconds after hitting your head. You can't feel comfortable any more as a farmhand, you need a blade in your hand and a bag of loot at your side.",
                },
                {
                    description:
                        "You're a wandering conman, appearing trustworthy as you bend others around your finger, making yourself invaluable to them with the hard work and amazing success you provide. Every time you leave to fulfill your life's dream of finding a perfect spouse, you leave behind a trail of heartbreak, impossible upkeep, and new businesses doomed to fail.",
                },
                {
                    description:
                        "You'd probably say that you're about 605-615 now. The years go by in an instant. When you were young you devoted your life to meditation. Recently, you were visited by a boy, who you began to talk with, and would do anything for. He lived, trained with you, and eventually succumbed to age. You, now unquestionably ancient, you have no clue how to interact socially or succeed in anything else, but you want to see what world the boy left behind for you.",
                },
                {
                    description:
                        "You've spent your entire life underground, in the same building. Every day, a music box played you a lesson. You learned languages, numbers, history, how to act properly in society, how to assassinate the high king. Now, the doors finally open and you see the outside for the first time. It's time to use all that you've learned.",
                },
                {
                    description:
                        "You've always been able to talk to the trees. They tell you interesting things. How they are, what they feel, how those who pass through and around them respect or disrespect them. Recently, the trees have been quieter and quieter. You need to find out why, for their sake... and yours.",
                },
                {
                    description:
                        "You were drunk. Your low marks in Thermo meant you wouldn't be on the dean's roll this semester. Your parents were going to lynch you. You spend the night weeping, stumbling into a dark part of campus you didn't recognize. You made a deal. You thought they were going to intimidate your professor for you. You woke up in a hay bale, with no phone poles in sight. You get a strange feeling that you won't be graduating this year.",
                },
                {
                    description:
                        "You were an orphan. Your parents died in a plague that went through when you were small and, to care for you, the town council apprenticed you to the local gravedigger. For years you served, learning the ins and outs of the physical and spiritual side of dealing with death. You learned about your god, the patron of death, from the gravedigger, but his worship always seemed a bit hollow, a little too rote. One night you picked up the sacred text he kept on the small shrine in your shared chambers and read it. You became shocked and dismayed at the disparity between the soft platitudes your guardian parrots and the dire truths uncovered in your god's scriptures. That night the gravedigger, his home, your entire life burned to the ground as you set off to become the god of death's most faithful servant ever.",
                },
                {
                    description:
                        "Born to caravan guards, as a child you traveled with merchants and learned to sort goods, haggle, fix wagons, spot danger, and cook meals on the road. You met all sorts of interesting people who paid to be guarded by a convoy. Now that you have come of age, you want to explore some of places you heard about.",
                },
                {
                    description:
                        "You are the 11th child of 14 siblings. Instead of hanging around your cramped home, you spent your waking hours in a nearby library, learning, sorting books, and doing sums for others for small fee you brought home to your parents. You have come of age and hope to write a book one day that will sell tens of thousands of copies.",
                },
                {
                    description:
                        "You were raised in a dragon's den. One of your parents was a dragon's favorite and the dragon allowed your family to take up residence in his/her home. They, and you once you were old enough, provided services such as greeting guests, expelling uninvited intruders, maintaining inventory, cleaning, and cooking fine meals. You have fond memories of playing in a piles of gold, stirring a 2000 gallon stew pot, donning magic clothing and weapons, leafing through esoteric books of powerful magic to look at the pictures, and attempting to outwit your draconic landlord with whatever puzzles and games you could think of. You left on good terms at the same time the dragon's youngling left to establish its own territory, and you hope to carve out a bit of the world for yourself as well.",
                },
                {
                    description:
                        "You were raised in an abandoned necromancer's lab by intelligent skeletons and various other undead. You ran a lot of errands, being tolerant of sunlight and unlikely to send the whole town fleeing for the hills. Your main mentor was a flamboyant skeleton with a hat of disguise and a penchant for long-winded but thrilling tales of ages past. Armed with ancient weapons, some minor alchemy materials, the lost necromancer's notes, and the skills your undead family taught you, you now walk the earth. You are quite open-minded about creatures of the dark and undeath, but having seen the goodness they are capable of, you are intolerant of undead who would exist at the expense of others and visit cruelty on the living.",
                },
                {
                    description:
                        "You were born into a clan that viewed those born with magical power as evil. During your coming of age ceremony your powers awakened and you found yourself surrounded in arcane power. Fearful of you, the clan leader cast you out. Now you roam as an exile from your clan trying to understand your powers.",
                },
                {
                    description:
                        "Your birth was a summoning deep in the forest, and you recall the face of your first parental figure was sheer disappointment. Summoned as a readymade adult, your memory of childhood is non-existent, and less helpful, your summoner teleported away the moment you arrived nude on the mossy floor.",
                },
                {
                    description:
                        "You don't remember your father at all, but your mother says that they were the most handsome and talented bard in all the land. Each day you wonder what adventures he must be on, as your village has nothing for you but chickens to pluck and hogs to hang. With nothing but pitchfork and hoe in hand you set out, determined to find your father, or at least bring back a story for the folks back home.",
                },
                {
                    description:
                        "Your father was a blacksmith, but he's not truly your father. Your mother cheated on him years ago and he knows it. Whether it's true or not you'll never know. He hates you for it nonetheless. He did the bare minimum a father needed to do until you were old enough then kicked you out despite your mother's plea's. You stole the greataxe(or preferred weapon) he was withholding until the customer paid and left your old life behind.",
                },
                {
                    description:
                        "You were orphaned at the church of (insert God of Strength, War, Valor here) where you were raised from a young age to become a fierce warrior for your God.",
                },
                {
                    description:
                        "When you were young, you had a thing for fire. It was pretty, destructive, and alluring. One night as your family slept you were playing with it and accidentally set the family home ablaze. Your mother awoke to the inferno and using every once of power she had saved you from the blaze before succumbing and burning up right in front of your eyes. It was the most beautiful thing you ever saw, and if only the world understood, then maybe they wouldn't be so afraid of fire.",
                },
                {
                    description:
                        "Mistress tells you that you used to be a great Paladin. A sworn warrior of good, bringing justice and light to a terrible land. Then you came to her and Mistress may be the strongest enchantress there is, maybe stronger. Now you are Mistress's defender, a (insert Warforged, Golem here).",
                },
                {
                    description:
                        "You are ... were a member of the city watch. Now, you suppose that you've likely lost that position. Just like your father, you were signed up and joined their ranks at quite a young age. You were far too low of a rank to call your job fulfilling or exciting, but you didn't really mind it all that much. After work you'd spend about half a day's pay drowning your boredom in booze. You've always had a love for a good brew, but you never thought it much of a problem. Until recently. It seems one night you decided to go on a week long binge. What few memories you have are too fuzzy and disorienting to make any sense of. How you're alive, you don't know. During your blackout, you seem to have somehow made it to somewhere you don't even recognize. You're wearing equipment you don't remember acquiring. You accidentally set off a cantrip, despite the fact you've never even seen magic at work, let alone use it. Some guy just told you that you asked him to get you up so you could go meet with someone about a new job. You decide that you need to figure out what happened and that maybe you really do have a drinking problem.",
                },
                {
                    description:
                        "You grew up alone in a rather large and well kept house, no parents that you can remember, or relatives you visited, but food would always appear out of nowhere in the pantry, as did gold in the sofa and water in the well. One day, you woke up on the ground, the house having completely disappeared from existence. In its place, a note remained, reading 'Stay Strong!' Of course, you began adventuring from there.",
                },
                {
                    description:
                        "You narrowly escaped  your home city after a nasty plague was set upon it. The man who helped you escape was a high nobleman, and you later heard that he was culled along with much of the city. That city was your home, you loved it, and now it is all but gone.",
                },
                {
                    description:
                        "You were a member of minor nobility that got wiped out by a conspiracy, so you fled to a monastery. But then you got kicked out for tricky one of the priest(ess)es into breaking their vows of chastity.",
                },
                {
                    description:
                        "You were part of a desert caravan that ran out of water. But a vision appeared leading to an unknown oasis ... and commanding you to go to the city of (Plot starts here).",
                },
                {
                    description:
                        "You were raised by a lovely mother and a father that turned out to be a true polymorphic gorilla. As a result, some of your beliefs and habits are a bit ape-ish.",
                },
                {
                    description:
                        "You were born in a tribe of nomadic people. In your young age you and your parents got captured in a raid and sold as slaves. Your family got lucky because you have been sold to a noble. His castle was in a cold region with hard winters. He was a brutal leader but fair to everybody who did as he told. You learned the etiquette of the royal court and got along very well. As you became an adult he gave you to another lord to become a soldier. Their kingdom was at war. On the way to your new owner your caravan got raided by their enemy. You somehow escaped. A few days later you found out that your former lord has been attacked and everyone including your parents were murdered. You left the kingdom and never came back till today.",
                },
                {
                    description:
                        "Born an orphan, you were adopted by a wealthy family at a young age to be raised as help. (How the family treated you growing up is up to the player.) Shortly after your 18th birthday the entire estate is burned to the ground and you are the only known survivor. You are suspect and wanted by the local, kingdom for questioning and crimes against the family. Can you clear your name before the kingdom picks you up, are you to blame for the fire, or are you innocent and wrongly accused? Will you be able to find the villain in time?",
                },
                {
                    description:
                        "A retired member of the army, you have been jaded by war, seen far more than any one person aught to see in a hundred life times. After settling down and manning an inn for some years, you've gotten the itch for adventure, and now ready to strike out on your own and see the good in the world.",
                },
                {
                    description:
                        "Given up as sacrifice at a young age by a small village to insure their harvest, you were picked up by a band of traveling performers. Growing up with them you traveled the country side. Upon reaching adulthood, your adopted parents told you the truth of where you came from. Do you venture off for revenge? Do you forgive and forget?",
                },
                {
                    description:
                        "Sold into slavery at young age, you where set free by traveling adventures early in your teen years. Since then you have always dreamed of becoming one yourself. Not wanting to waste away your life tending to home and hearth you've set out for the call of the wild.",
                },
                {
                    description:
                        "Daughter of a diplomat, you traveled the world's capitals with your father. You grew bored of the stuffy and bureaucratic business and roamed the foreign streets and markets. It is here you fell in with a dashing rogue who stole your heart and taught you the secrets of his world over one glorious summer. You resolved to embark on a career of your own choosing, not your father's.",
                },
                {
                    description:
                        "A radiant portal spit you out. The last words you remember were 'Penance'. Aasimar know who you are, but won't disclose it even under torture.",
                },
                {
                    description:
                        "Raised by pirates you raided the wrong temple and you were the sole surviver.",
                },
                {
                    description:
                        "Raised by ogres they always threatened to eat you growing up. You payed them tribute and grew above the goblin ranks. Eventually you made your bid for freedom by poisoning all their dinner. You are a legend amongst the goblins and ogres.",
                },
                {
                    description:
                        "You had a normal childhood in the city. Schooling, family, friends, playing on the large stone walls...but all that was taken away in an instant when 200 hollow-core Warforged self destructed... leveling the city you once called home. Their master and her apprentice long dead you hunt down the last of their demented toys to honor your loss and make the burn marks on your back hurt a little less.",
                },
                {
                    description:
                        "Taken in by a pack of traveling werewolves you were given a silver necklace and acted as their cover. You outed them in a city and you were finally liberated. Their daughter still hunts you... waiting to find you alone.",
                },
                {
                    description:
                        "As an orphan you were taken in by a sweet, old, good-natured necromancer. You fetched goods from the nearby city, helped dig up parts, played with his creations... You left on good terms and you have no fear of the undead.",
                },
                {
                    description:
                        "Your heart opens a portal to the Nine Hells... according to the prophecy.",
                },
                {
                    description:
                        "Your family is known amongst all Dragonborn...and loved for your ancestors deeds. Which was promised in blood oath to never be disclosed to you.",
                },
                {
                    description:
                        "You grew up seeing visions of battle in your dreams. Horrible, cruel visions of a war far away. You share a soul with a Warforged on another continent...and you are seeking each other out.",
                },
                {
                    description:
                        "You were raised by giant eagles. You learned to flush out prey and perform menial tasks in service to your sky lords. Eventually you got too heavy to carry and they all abandoned you...all except your rookmate Kyla. She was the runt, left to die, and always keeps an eye out for you.",
                },
                {
                    description:
                        "Raised by dwarves in a mountain hold it's no wonder you have such a surly disposition. You know the runes for entry into most dwarf fortresses and can drink ale with the best of them. Switch this background to 'Halfling' and 'farm' if PC is a dwarf.",
                },
                {
                    description:
                        "Raised in a lighthouse on a lone island you would danger the rocks to salvage whatever you could from the unfortunate ships scuttled on the rocks. This made you a strong swimmer. Be it pirate or merchant your family name is well known and appreciated for the work they do.",
                },
                {
                    description:
                        "You were forced to murder your family when they became vampires. The town didn't believe you and now you are on the run. Rumor is one of your family survived your gruesome attack...",
                },
            ],
        },
    };
    return {
        statusCode: 200,
        body: JSON.stringify(db),
    };
};
