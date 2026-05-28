import { Book } from "./Book.js";
/**
 *
 * @returns A Book object with the "choose your own adventure" story of Sparky the Superhero.
 */
function constructBookSparky() {
    const adventureBook = new Book(18);
    console.log(adventureBook);
    const iconSnowball = "images/Snowball2.png";
    //const iconCloud = "images/cloud.png";
    const iconAir = "images/Air-wind.png";
    const iconWater = "images/Dew-drop.png";
    const iconEarth = "images/Earth.png";
    const iconFire = "images/Fire.png";
    const premadeDictionary = new Map();
    {
        premadeDictionary.set("[Protagonist]", "Jupiter");
        premadeDictionary.set("[Surname]", "Yggdrasil");
        premadeDictionary.set("[Eldest Brother]", "Pluton");
        premadeDictionary.set("[Second Brother]", "Neptune");
        premadeDictionary.set("[Friend 1]", "Alfred");
        premadeDictionary.set("[Enormous City]", "Mnemosyne City");
        premadeDictionary.set("[Friend 2]", "Dawei");
        premadeDictionary.set("[King]", "Jonathan");
        premadeDictionary.set("[Girl 1]", "Juni");
        premadeDictionary.set("[Animal Girl]", "Nami");
        premadeDictionary.set("[New Mayor]", "Mayor Sharkey");
        premadeDictionary.set("[Alter Ego]", "Sparky");
        premadeDictionary.set("[Girl 2]", "Vivian");
        premadeDictionary.set("[Girl 3]", "Susan");
        premadeDictionary.set("[Girl 4]", "Elayna");
        premadeDictionary.set("[Resturaunt]", "The Sixth Swan");
        premadeDictionary.set("[Big Gang]", "Sea Demons");
        premadeDictionary.set("[Big Gang Leader]", "Victor");
        premadeDictionary.set("[Baby]", "Vega");
        premadeDictionary.set("[Sidekick]", "Peacock");
        premadeDictionary.set("[Invasion Leader]", "Melanthios");
        premadeDictionary.set("[Angel Doctor]", "Doctor Feathervale");
        premadeDictionary.set("[Raven Angel]", "Fina");
        premadeDictionary.set("[Healing Hero]", "Moonlight");
    }
    adventureBook.setPremadeDictionary(premadeDictionary);
    //Volume 1
    {
        const button1Fire = { label: "Fire", path: "path2Fire", iconSrc: iconFire };
        const button1Water = { label: "Water", path: "path2Water", iconSrc: iconWater };
        const button1Air = { label: "Air", path: "path2Air", iconSrc: iconAir };
        const button1Earth = { label: "Earth", path: "path2Earth", iconSrc: iconEarth };
        adventureBook.constructChapter(1, "path1", ["This is the story of [Protagonist] [Surname], a brave young boy with superpowers.",
            "One day, [Protagonist]'s father pulls him and his two older brothers, [Eldest Brother] and [Second Brother], aside and brings him to the family's secret library. He shows them four books, each with hidden techniques on superpowers."], "Which book will [Protagonist] choose?", [button1Fire, button1Water, button1Air, button1Earth]);
    }
    //Volume 2
    {
        const commonStoryString2a = "[Protagonist] has a new problem now. He has tried to ignore the truth his entire childhood, but he can no longer ignore reality. His dad is a supervillain.";
        const question2 = "What should he do?";
        const button2Fight = { label: "Fight", path: "path3Fight", iconSrc: iconSnowball, badPath: "path3Water", clearConditions: ["path2Fire", "path2Earth", "path2Air"] };
        adventureBook.constructChapter(2, "path2Fire", ["[Protagonist] skeptically chose fire. The book claims that fire is the most powerful element, coveted even by the gods. but when he tried to spar against his brothers, he was easily overpowered. Dumb book was all talk, but his father told him to stick with it.",
            "After years of reluctant practice, he developed his own variation of the book's fire powers, lightning! This variation is much stronger. He can beat [Second Brother] now, but [Eldest Brother] is still the strongest.",
            commonStoryString2a], question2, [button2Fight]);
        adventureBook.constructChapter(2, "path2Water", ["[Protagonist] reluctantly picked up the book on water powers. But he has absolutely no talent for superpowers. His older brothers both laugh at him.",
            commonStoryString2a], question2, [button2Fight]);
        adventureBook.constructChapter(2, "path2Air", ["[Protagonist] felt drawn to the book on air related superpowers, almost as if he was destined to read it.",
            "After practicing for a few years, he developed his own specialty. Now he can generate his own lightning!",
            commonStoryString2a], question2, [button2Fight]);
        adventureBook.constructChapter(2, "path2Earth", ["[Protagonist] picked up the book on earth. It was a bit dry, but he did like the parts about controlling various metals.",
            "After years of practice, he develops his own variation of superpowers, magnetism.",
            commonStoryString2a], question2, [button2Fight]);
    }
    //Volume 3
    {
        const button3Friend = { label: "Friend", path: "path4Friend", iconSrc: iconWater };
        const button3Brother = { label: "Brother", path: "path4Brother", iconSrc: iconEarth };
        const button3Home = { label: "(Under Development)", path: "path4Home", iconSrc: iconFire };
        const button3Solo = { label: "Fly Solo", path: "path4Solo", iconSrc: iconAir };
        adventureBook.constructChapter(3, "path3Fight", ["[Protagonist] fights desperately to stand up against his father's supervillain reign of terror. [Eldest Brother] and some of their friends join him. Using a laser pistol developed by one of his father's minions, [Protagonist] manages to hit his father's leg, but ultimately, his father has superpowers and guns too. He also has a lot more experience than [Protagonist].",
            "[Protagonist] lost this battle, and in a panic, he and his allies scatter and flee."], "Who will he go with?", [button3Friend, button3Brother, button3Home, button3Solo]);
        adventureBook.constructChapter(3, "path3Water", ["[Protagonist] attempts to fight his father, but he loses badly. It wasn't even a contest. He is now grounded for life."], "The end.", []);
    }
    //Volume 4
    {
        const question4 = "How will [Protagonist] eat tonight?";
        const button4Job = { label: "Find Job", path: "path5Job", iconSrc: iconSnowball };
        const button4Steal = { label: "Steal Food", path: "path5Steal", iconSrc: iconSnowball };
        adventureBook.constructChapter(4, "path4Friend", ["[Protagonist] follows a friend, [Friend 1], west. Together, they cross the sea. Just as they are about to reach land, however, a sea monster attacks them, and he is separated from [Friend 1].",
            "After an epic battle against the sea monster, he eventually escapes its grasp and swims the rest of the way to the shore. He reaches a large city by the coast and starts to wander the streets. [Enormous City] is even bigger than his home city, but not very friendly. [Protagonist] has no food, and now he is starving."], question4, [button4Job]);
        adventureBook.constructChapter(4, "path4Brother", ["He follows [Eldest Brother] to the southeast. But as they flee, their father and [Second Brother] pursue them.",
            "[Eldest Brother] scowls. \"Why'd you follow me?! If we had split up, at least one of us could have gotten away!\"",
            "The two adolescent boys are swiftly captured and taken home. They get grounded for life."], "The end.", []);
        adventureBook.constructChapter(4, "path4Solo", ["[Protagonist] steals a small plane from his father's henchmen and escapes south. Eventually he reaches a desert city, and just in time, because the plane ran our of fuel! This place should be far beyond his father's reach!",
            "Almost immediately, however, he realizes his problems aren't over yet. He has no food, no shelter, and no money. He is a refugee in a strange land, and everyone views him with distrust.",
            "He manages to salvage his plane into a makeshift home, and he uses his powers to repair the plane's air conditioner.",
            "But he is still starving and broke."], question4, [button4Steal]);
        adventureBook.constructChapter(4, "path4Home", ["[Protagonist] surrenders and allows his father to catch him. He knows his father will punish him horribly, but if turning himself in distracts his father long enough for [Eldest Brother] and all of their friends to get away, then it's worth it.",], "(To be continued).", []);
    }
    //Volume 5
    {
        const button5TrainOcean = { label: "Work Out", path: "path6TrainOcean", iconSrc: iconSnowball };
        const button5TrainDessert = { label: "Work Out", path: "path6TrainDesert", iconSrc: iconSnowball };
        adventureBook.constructChapter(5, "path5Job", ["[Protagonist] tries looking for a job, but no one in [Enormous City] will hire him.",
            "Somehow, he survives for a couple weeks by eating scraps out of a dumptser. He isn't alone, though. The alleys are crawling with homeless children by day and gangsters by night.",
            "One day, a boy named [Friend 2] discovers [Protagonist] and takes him to a food kitchen run by his mother.",
            "[Friend 2]'s mother gives him a part time job at the food kitchen."], "[Protagonist] has a lot of free time on his hands now. How will he spend it?", [button5TrainOcean]);
        adventureBook.constructChapter(5, "path5Steal", ["[Protagonist] turns to thievery to get by. He feels guilty at first, but he slowly grows numb to it. His priority is to survive. He would look for honest work, but the locals already hate him."], "[Protagonist] has some free time on his hands now. How will he spend it?", [button5TrainDessert]);
    }
    //Volume 6
    {
        const commonStoryString6a = "A few years of diligent training pass in the blink of an eye, and now he is fourteen. He is very powerful, and now he wins most of his fights. He has become stronger just in time too; all is not well in the world around him.";
        const commonStoryString6b = "Just when all hope is lost, [Friend 1] arrives with reinforcements! The three boys take down [Protagonist]'s father and his minions. However, this doesn't solve everything.";
        const question6 = "Will he help the girl?";
        const button6Rescue = { label: "Obviously", path: "path7Rescue", iconSrc: iconSnowball };
        adventureBook.constructChapter(6, "path6TrainOcean", ["Although he is now hundreds of miles away from home, [Protagonist] still remembers his defeat at the hands of his father. In his free time, he anxiously practices his superpowers. And at night, when no one is watching, he prowls the streets and gets in fist fights with the local gang members.",
            commonStoryString6a,
            "Now, riots are breaking out throughout the local kingdom, and his father is making an ambitious bid to take it over.",
            "This time, our hero is ready. Together with [Eldest Brother], they prepare an ambush and intercept their father's invasion. It's a difficult battle, and they nearly lose.",
            commonStoryString6b,
            "The riots are still ongoing. The local king, King [King], ends up abdicating his throne to prevent a civil war. The kingdom divides into a loose confederation of city states, and [Enormous City] holds an election for a new mayor to adjust to the times.",
            "The riots slowly die down, but not everyone is appeased. A few weeks after defeating his father, our protagonist sees a girl his age being attacked by rioters."], question6, [button6Rescue]);
        adventureBook.constructChapter(6, "path6TrainDesert", ["Although he is now well over a thousand miles from home, [Protagonist] still remembers his defeat at the hands of his father. In his free time, he anxiously practices his superpowers. And at night, when no one is watching, he prowls the dessert and gets in fist fights with the local thieves.",
            commonStoryString6a,
            "Now, riots are breaking out throughout a distant kingdom across the ocean, and his father is sure to make an ambitious bid to take it over.",
            "This time, our hero decides to take advantage of this. Together with [Eldest Brother], he prepares an ambush and intercepts their father's invasion. It's a difficult battle, and they nearly lose.",
            commonStoryString6b,
            "[Second Brother] is nowhere to be seen. [Protagonist] gets an uneasy feeling that [Second Brother] is out there somewhere, trying to finish what their father started. He searches his brother's room, and finds clues leading to [Enormous City], the largest city in the world. It's on the coastline of the kingdom which their father was last trying to invade.",
            "[Protagonist] investigates further. While he and [Eldest Brother] had been intercepting their father, the local king, King [King], ended up abdicating his throne to prevent a civil war. The kingdom is now divided into a loose confederation of city states. [Enormous City] has held an election for a new mayor, which has helped calm the riots tremendously.",
            "[Protagonist] arrives in [Enormous City] just as the riots are dying down, but not everyone is appeased yet. The day he arrives, [Protagonist] sees a girl his age being attacked by rioters."], question6, [button6Rescue]);
    }
    //Volume 7
    {
        const button7Fight = { label: "Fight Back", path: "path8Fight", iconSrc: iconSnowball };
        const button7Run = { label: "Run Away", path: "path8Run", iconSrc: iconSnowball };
        const button7Feed = { label: "Feed", path: "path8Feed", iconSrc: iconEarth, hideConditions: ["path4Brother", "path4Home", "path4Solo"] };
        adventureBook.constructChapter(7, "path7Rescue", ["He saved the girl with ease! She is impressed by his act of heroism. And she isn't the only one who is impressed; [Protagonist] is smitten as he gets a closer look and realizes how beautiful she is. She says her name is [Girl 1]. In the near future, she wishes to repay him. [Protagonist] likes how this turned out. It feels good to be thanked.",
            "The next day, as he is thinking about his encounter with [Girl 1], he encounters a second girl, this one much younger, being attacked by angry rioters. But when he tries to rescue her, she swings her fist at him with startling strength! The rioters are all knocked back. Apparently, this young lady doesn't need any rescue from [Protagonist]. She angrily lunges at him."], "How will he defend himself?", [button7Fight, button7Run, button7Feed]);
    }
    //Volume 8
    {
        const button8Hero = { label: "Be a Hero", path: "path9Hero", iconSrc: iconSnowball };
        adventureBook.constructChapter(8, "path8Fight", ["He tries to fight back, but suddenly, this girl turns into a wolf! He's caught off guard and gets bitten badly. He adapts and starts to fights her off with his superpowers, when suddenly, she turns into an enourmous ape and knocks him aside! With a daze, [Protagonist] realizes that this girl can change into any animal at will. He feels a strange sense of deja vu, but he can't quite place it.",
            "He changes his strategy and creates some distance with her. After a few exchanges, she tranforms into an eagle and flies away. Though he is is bleeding from the bite, this was still much easier than fighting his father. [Protagonist] feels he's met her before. The name, [Animal Girl], comes to mind, but he can't remember where he met her.",
            "The local people witnessed this intense battle. By the end of the day, everyone in [Enormous City] begins to hail [Protagonist] as the hero who saved them from the emerging young supervillain. He's quite popular now!",
            "This popularity doesn't come without earning some grudges, though. The newly elected mayor, [New Mayor], hates him, and says that people don't need vigilantes when the police force is perfectly capable of protecting the people."], "What should [Protagonist] do?", [button8Hero]);
        adventureBook.constructChapter(8, "path8Run", ["[Protagonist] runs away in fear. Angry girls are even scarier than his dad."], "The end.", []);
        adventureBook.constructChapter(8, "path8Feed", ["[Protagonist] gets a sense of deja vu. He reaches into his backpack and offers up all of his snacks. The girl stops short and sniffs the back like a little animal. Her face breaks into a grin. She eats snacks happily. Apparently she was just hangry.",
            "Suddenly, [Protagonist] remembers. Her name is [Animal Girl], and she's a close friend of [Friend 1], as well as a fellow superhuman. He starts to ask her if she has seen [Friend 1], but the rioters have recovered from their shock. They start to chase after her again. With a smirk, [Animal Girl] suddenly transforms into an eagle and flies off dramatically.",
            "By the end of the day, everyone in [Enormous City] begins to hail [Protagonist] as the hero who managed to \"tame the young supervillain\". He decides it's too much work to correct the slight misunderstanding. Anyways, he's quite popular now!",
            "This popularity doesn't come without earning some grudges, though. The newly elected mayor, [New Mayor], hates him, and says that people don't need vigilantes when the police force is perfectly capable of protecting the people. Once again, [Protagonist] feels an odd sense of deja vu."], "What should [Protagonist] do?", [button8Hero]);
    }
    //Volume 9
    {
        const button9Date = { label: "Date", path: "path10Date", iconSrc: iconSnowball };
        const button9Reject = { label: "Decline", path: "path10Reject", iconSrc: iconSnowball };
        adventureBook.constructChapter(9, "path9Hero", ["As an official superhero, he quickly makes a name for himself as [Alter Ego]. [Alter Ego] has lots of fans, and is especially popular with the ladies, many of whom form the [Alter Ego] fan club. His biggest fans are [Girl 2], [Girl 3], and [Girl 4]",
            "[Girl 1] approaches [Protagonist] one day, and asks him on a date."], "What should he do?", [button9Date, button9Reject]);
    }
    //Volume 10
    {
        const button10Bribe = { label: "Cooperate", path: "path11Bribe", iconSrc: iconSnowball };
        adventureBook.constructChapter(10, "path10Date", ["[Protagonist] takes [Girl 1] to [Resturaunt], a new resturaunt that [Friend 2] just started. [Friend 2] gives him a friend's discount.",
            "While on the date, [Girl 1] opens up about her backstory. She's actually a duchess. Or at least, she's a former duchess. Her uncle is [King], the former king. [Girl 1] is incredibly greatful that [Protagonist] saved her life that day.",
            "[Girl 1] knows about his secret identity, but now she wants to know about his past. He is hesitant to tell her about his supervillain father, but he tells her everything. She is alarmed at first, but she still sees him for who he is, not as his father's son.",
            "After the date, [Alter Ego] is approached by [Big Gang], the biggest mafia in [Enormous City]. Their leader, [Big Gang Leader], wants him to look the other way when he sees them commiting crimes. In exchange, they promise to tip him off on any other criminals they see and to fund his superhero activities. [Alter Ego] can refuse, of course, but they warn that he may not like what they do next."], "For some reason, it feels like there isn't really a choice. Should he accept the funding?", [button10Bribe]);
        adventureBook.constructChapter(10, "path10Reject", ["He declines. [Girl 1] is a bit disappointed, but she says she understands. She walks off sadly.",
            "Moments later, [Alter Ego] is approached by [Big Gang], the biggest mafia in [Enormous City]. Their leader, [Big Gang Leader], wants him to look the other way when he sees them commiting crimes. In exchange, they promise to tip him off on any other criminals they see and to fund his superhero activities. [Alter Ego] can refuse, of course, but they warn that he may not like what they do next."], "For some reason, it feels like there isn't really a choice. Should he accept the funding?", [button10Bribe]);
    }
    //Volume 11
    {
        const button11Rescue = { label: "Rescue", path: "path12Rescue", iconSrc: iconSnowball, clearConditions: ["path10Date"], badPath: "path12SecondGirl" };
        adventureBook.constructChapter(11, "path11Bribe", ["[Alter Ego] reluctantly accepts the money. He tells himself he will use the money for good, but it still feels uncomfortable.",
            "The next day, he spots a group of superheroes fighting against [Big Gang]. He hopes they win, but he can't get involved directly because of his deal. Reluctantly, he watches from a nearby rooftop.",
            "Suddenly, one of the superheroes creates a massive fireball and tosses it at [Big Gang Leader]. The villain dodges, but the fireball hits one of the [Big Gang]'s warehouses. There is a small explosion, followed moments later by an even larger and deadlier one; the fireball hit the ammunition supply.",
            "The superheroes all retreat and vanish. Meanwhile, the fire spreads at a sickening rate."], "What should he do?", [button11Rescue] //Options will include confronting the heroes, saving the victims, or letting the villains suffer.
        );
    }
    //Volume 12
    {
        const commonStoryString12a = "Our hero chooses to search the building for survivors. Among the survivors, he discovers [Girl 2] shielding a baby. Her arms are horribly burned, but the baby is safe. He gets her out of the building and takes her to the hosipital as fast as he can.";
        const button12Sidekick = { label: "Accept", path: "path13Sidekick", iconSrc: iconSnowball };
        const button12TreatScientist = { label: "Mad Scientist", path: "path13TreatScientist", iconSrc: iconFire };
        const button12TreatVillain = { label: "Supervillain", path: "path13TreatVillain", iconSrc: iconSnowball };
        const button12TreatGirl = { label: "Rejected Girl", path: "path13TreatGirl", iconSrc: iconEarth };
        const button12TreatAnti = { label: "Antihero", path: "path13TreatAnti", iconSrc: iconAir };
        const button12TreatHero = { label: "Superhero", path: "path13TreatHero", iconSrc: iconWater };
        adventureBook.constructChapter(12, "path12Rescue", [commonStoryString12a,
            "While [Girl 2] is in the emergency room, [Alter Ego] is left watching the baby. After a while, [Big Gang Leader] rushes into the waiting room. He looks awful. He searches the room anxiously, then sees [Alter Ego]. He calms down somewhat once he sees the baby.",
            "\"She's safe!\" [Big Gang Leader] lets out a sigh of relief. The baby is his only daughter, [Baby]. [Big Gang Leader] is not completely at ease though. He looks everywhere for his little sister, [Girl 2].",
            "A doctor comes out and informs them that [Girl 2]'s burns are serious, and her arms need amputation. [Big Gang Leader] is stunned.",
            "[Alter Ego] decides to leave this man some space to grieve. He goes home and takes off his disguise for the day.",
            "At home, he barely gets any rest when he hears a knock at the door. It's [Girl 1]. She notices [Protagonist]'s expression and asks him what's wrong. He tells her everything.",
            "After a long pause, she quietly scolds him for taking the bribe. \"[Protagonist], if you needed money, you should have just asked me! My family is still the wealthiest in [Enormous City]!\" She confiscates the \"funding\" from [Big Gang] and turns it into a police box. [Protagonist] doesn't have the heart at the moment to tell her that he suspects the police are corrupt.",
            "When she gets back, [Girl 1] asks [Protagonist] to let her be his sidekick. She doesn't have any superpowers, but she feels [Protagonist] needs an accountability partner."], "Should he allow [Girl 1] become his sidekick?", [button12Sidekick] //Other choices could include quitting or rejecting her.
        );
        adventureBook.constructChapter(12, "path12SecondGirl", [commonStoryString12a,
            "While [Girl 2] is in the emergency room, [Alter Ego] is left watching the baby. A doctor comes out and informs him that [Girl 2]'s burns are serious, and her arms need amputation.",
            "Concerned, and feeling somewhat responsible, he takes the baby and walks over to [Girl 2]'s hospital bed. [Girl 2] is clearly in agonizing pain, but when she sees the baby, she looks grateful.",
            "\"That's my niece, [Baby]. I ended up raising her when her mother escaped from my older brother and left [Baby] behind.\" [Girl 2] tells him a long, ugly story about the tragedy of [Baby]'s birth. She doesn't seem to care about her own burns, but she is anxious about the baby's well being. \"Without my arms, my brother [Big Gang Leader] will have to take care of [Baby] by himself. I've failed her. I should have taken her and run when I had the chance.\" She bursts into tears.",
            "[Alter Ego] looks on in pity and guilt. But then he remembers someone who can help."], "Who can help [Girl 2]?", [button12TreatAnti, button12TreatGirl, button12TreatHero, button12TreatScientist, button12TreatVillain]);
    }
    //Volume 13
    {
        adventureBook.constructChapter(13, "path13Sidekick", ["[Protagonist] accepts [Girl 1]'s offer. She calls in some favors with some of her uncle [King]'s connections and after a year, she has a special powersuit to help her stay safe in battle. She becomes known as [Sidekick].",
            "Together, [Alter Ego] and [Sidekick] clean up the streets of [Enormous City]. [Big Gang] is furious at [Alter Ego]'s backing out, but they have their hands full with other problems at the moment, and have no time to retaliate against him.",
            "[New Mayor], on the other hand, launches a huge campaign against [Alter Ego]. It's somewhat effective against the populace, and the police are constantly chasing after the duo.",
            "One day, [Alter Ego] finds [Girl 3] and [Girl 4], members of his fan club, fighting over him. They each insist that they love him most."], "Who loves him most?", [{ label: "Sidekick", path: "path14Loyalty", iconSrc: iconSnowball }]);
        adventureBook.constructChapter(13, "path13TreatScientist", ["In [Protagonist]'s hometown, there was a genius mad scientist who worked for his father. Her name was [Angel Doctor], and she was well known in his father's syndicate for her amazing grasp of bioengineering. She could even regrow lost limbs for her patients!",
            "The catch is, [Protagonist] has no idea where to find her. After all, his father has already been defeated, so there is no reason for [Angel Doctor] to still be hanging out in his hometown."], "To be continued.", []);
        adventureBook.constructChapter(13, "path13TreatGirl", ["[Girl 1] still owes him a favor. [Alter Ego] hastily goes home, changes out of his superhero costume, and goes to her house as [Protagonist]. She isn't over being rejected yet, and she is visibly hurt when she sees he is cashing in the favor she owes him for another girl's sake. Nonetheless, [Girl 1] feels immense pity on hearing of [Girl 2]'s accident. She quickly calls in a favor with one of her cousin's friends, and a set of state of the art prosthetics are gifted to [Girl 2]. [Girl 2] feels conflicted about the charity, but vows to pay [Girl 1] back one day.",
            "Meanwhile, [Girl 2] asks [Alter Ego] out on a date.",
            "Later, [Girl 1] comes to [Protagonist]'s house in tears. She says she loves him, and begs him so reconsider his earlier rejection.",], "Who does he love most? (To be continued.)", []);
        adventureBook.constructChapter(13, "path13TreatVillain", [" once mentioned a new supervillain in [Enormous City] whose only ability was healing. Her name was [Raven Angel], and she is often seen hanging around [Animal Girl]."], "To be continued.", []);
        adventureBook.constructChapter(13, "path13TreatHero", ["One of the superheroes who was fighting [Big Gang] earlier can create an all purpose healing balm with a wave of her staff. Of course, there is a huge catch. She's one of the superheroes who caused this mess."], "To be continued.", []);
        adventureBook.constructChapter(13, "path13TreatAnti", ["[Friend 2] once mentioned a very unpopular superhero whose main powers were flight and healing. The reason she is so unpopular is that she heals everyone, hero and villain, police and gangsters. Most of the city hates her and calls her the \"Naive Enabler\", though her proper superhero name is [Healing Hero]. But she is exactly the kind of openheareted and unbiased person who would be willing to heal [Girl 2]"], "TO be continued", []);
    }
    //Volume 14
    {
        adventureBook.constructChapter(14, "path14Loyalty", ["[Alter Ego] says he is happiest with [Sidekick]. This leads to an even bigger fight, and it takes a while before everyone is calmed down.",
            "One day, a world domination organization calling itself the [Surname] Syndicate sends a letter to [Protagonist]. [Protagonist] is alarmed. [Surname] Syndicate was the reason he had fought against his father a few years ago. It should have been disbanded after his father's defeat. The letter invites him to a secret meeting to \"discuss the future of the world\".",
            "A second letter arrives as well, this one addressed to [Alter Ego]."], "Should he attend?", [{ label: "Attend As Self", path: "path15Self", iconSrc: iconSnowball }] //Other choices are to attend as a hero, or refuse.
        );
    }
    //Volume 15
    {
        adventureBook.constructChapter(15, "path15Self", ["He arrives as himself. At the meeting, he is greeted by several familiar faces, including [Eldest Brother], [Friend 1], and [Animal Girl].",
            "[Eldest Brother] reveals that he took over the [Surname] Syndicate after they defeated their father. He says that he did this because he discovered that an alien invasion was coming to earth. There are only a few more years left until the aliens arrive.",
            "In order to save Earth, [Eldest Brother] believes the best way is to conquer it, then unify it so they can stand together against the aliens. [Protagonist] isn't sure what to think of this plan."], "How will he respond to this news?", [{ label: "Do It His Own Way", path: "path16Hero", iconSrc: iconSnowball }] //Alternatively, he can join them.
        );
    }
    //Volume 16
    {
        adventureBook.constructChapter(16, "path16Hero", ["[Protagonist] decides to go back home and train harder. Together with [Girl 1], they brainstorm a better way to save Earth.",
            "[Girl 1] tells her Uncle [King], and he spreads the warning to his connections.",
            "[Eldest Brother] is irrate, but [Friend 1] and [Animal Girl] respect [Protagonist]'s decision and convince [Eldest Brother] to let [Protagonist] go.",
            "After years of training, the day comes, just as [Eldest Brother] warned. A huge portal opens in the arctic, and an army of aliens pours out! The leader, [Invasion Leader], is exceptionally powerful."], "What will he do?", [{ label: "Close Portal", path: "path17Portal", iconSrc: iconSnowball }, { label: "Fight Leader", path: "path17Leader", iconSrc: iconSnowball }]);
    }
    //Volume 17
    {
        adventureBook.constructChapter(17, "path17Leader", ["[Invasion Leader] laughs at humanity's feeble efforts to stop him. With a wave of his hand, a ball of fire appears, and the arctic starts to melt under everyone's feet. The steam is so thick, the entire sky gets covered in clouds, blocking what little starlight remained.",
            "But [Protagonist] does not give up. He tackles the invader head on with bolt after bolt of lightning!",
            "The battle rages for an unkkown amount of time. Eventually, the invader is exausted, and he retreats back through his portal."], "...", [{ label: "Proceed", path: "path18Victory", iconSrc: iconSnowball }, { label: "Retreat", path: "path18Mercy", iconSrc: iconSnowball }]);
        adventureBook.constructChapter(17, "path17Portal", ["[Invasion Leader] looks around the artic perimeter. He sees humans everywhere, heroes and villains alike, all gathered together for a commmon cause; to defeat him. He smirks. \"Is this all you earthlings have? No matter where I go, all humans are the same. You cannot stop me!\" With a wave of his hand, he generates an enormous fireball, and prepares to toss it into the ice beneath the heroes' feet.",
            "Suddenly, a bolt of lightning bursts past his head. [Invasion Leader] glances at [Alter Ego] quizically. \"You missed, Earthling.\"",
            "But [Alter Ego] was never aiming at [Invasion Leader]; his lighting bolt hits the edge of the portal. Suddenly, there is a violent shaking, and the portal collapses! [Invasion Leader] pales. \"No, anything but that! Run!\" The fireball flickes and vanishes. All of the aliens tremble, drop their weapons, and run.",
            "But before the people of Earth can cheer, they notice something is off. The aliens are running towards them, trying desperately to get past the perimeter. After a moment, it becomes clear why; the air where the portal was is now pulsing ominously. Breaking the portal by force has created an unstable spacetime rift. Everyone, human and alien alike, begins to flee."], "What will [Alter Ego] do? (To be continued)", [{ label: "Reopen Portal", path: "path18Reopen", iconSrc: iconSnowball }, { label: "Run", path: "path18Run", iconSrc: iconSnowball }, { label: "Close Portal Again", path: "path18Close", iconSrc: iconSnowball }]);
    }
    //Volume 18
    {
        //Note, since these are the final chapters in the book, there must be no more buttons. Always return an empty array in place of buttons when at the final chapter of a book.
        adventureBook.constructChapter(18, "path18Victory", ["[Protagonist] starts to chase the enemy through the portal, but it collapses with him in it.",
            "[Protagonist] wakes up at home in [Enormous City]. [Girl 1] is with him.",
            "\"I thought you died! You were missing for weeks, and then you just suddenly reappeared out of thin air in your bed!\"",
            "[Protagonist] cannot remember what happened during the last couple weeks. Strangely, his powers are weakened too. He continues his life as a superhero, but he is never again as strong as that day he fought [Invasion Leader].",
            "This is fine though. Earth is saved. [Protagonist] and [Girl 1] get married and live happily ever after."
        ], "The end! Congratulations!", []);
        adventureBook.constructChapter(18, "path18Mercy", ["[Alter Ego] lets [Invasion Leader] escape. He can feel himself reaching his limit. Quickly, he joins up with the other defenders of humanity and together they drive the remaining alien forces back through the portal.",
            "Today was successful. The aliens have learned that as long as [Alter Ego] is there, the Earth is not so easily invaded. [Alter Ego] heaves a sigh of relief and collapses into the artic sea. The last thing he remembers is [Sidekick] rushing over to pull him out.",
            "[Protagonist] wakes up at home in [Enormous City]. [Girl 1] is with him.",
            "\"Don't push yourself so hard! You were asleep for two days!\"",
            "[Protagonist] smiles and hugs her. He's just glad she's safe. Earth is saved, and [Protagonist] did it without relying on [Eldest Brother]'s radical world unification plan.",
            "[Protagonist] and [Girl 1] get married and live happily ever after."
        ], "The end! Congratulations!", []);
    }
    return adventureBook;
}
/**
 *
 * @param bookTitle
 *
 * @returns Returns the prewritten book.
 */
export default function constructBook(bookTitle) {
    switch (bookTitle) {
        case "Sparky": return constructBookSparky();
    }
    throw new Error(`${bookTitle} does not match any of the books in this file.`);
}
