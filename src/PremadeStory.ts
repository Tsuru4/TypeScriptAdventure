import {Book} from "./Book.js";
import type {button} from "./Button.js";

/**
 * 
 * @returns A Book object with the "choose your own adventure" story of Sparky the Superhero.
 */
function constructBookSparky():Book
{
    const adventureBook = new Book(18);
    console.log(adventureBook);

    const iconSnowball = "images/Snowball2.png";
    //const iconCloud = "images/cloud.png";
    const iconAir = "images/Air-wind.png";
    const iconWater = "images/Dew-drop.png";
    const iconEarth = "images/Earth.png";
    const iconFire = "images/Fire.png";

    const premadeDictionary = new Map<string,string>();
    {
        premadeDictionary.set("[Protagonist]","Jupiter");
        premadeDictionary.set("[Surname]","Yggdrasil");
        premadeDictionary.set("[Eldest Brother]","Pluton");
        premadeDictionary.set("[Second Brother]","Neptune");
        premadeDictionary.set("[Boy 1]","Alfred");
        premadeDictionary.set("[Enormous City]","Mnemosyne City");
        premadeDictionary.set("[Boy 2]","Dawei");
        premadeDictionary.set("[King]","Jonathan");
        premadeDictionary.set("[Girl 1]","Juni");
        premadeDictionary.set("[Animal Girl]","Nami");
        premadeDictionary.set("[New Mayor]","Mayor Sharkey");
        premadeDictionary.set("[Alter Ego]","Sparky");
        premadeDictionary.set("[Girl 2]","Vivian");
        premadeDictionary.set("[Girl 3]","Susan");
        premadeDictionary.set("[Girl 4]","Elayna");
        premadeDictionary.set("[Resturaunt]","The Sixth Swan");
        premadeDictionary.set("[Big Gang]","Sea Demons");
        premadeDictionary.set("[Big Gang Leader]","Victor");
        premadeDictionary.set("[Baby]","Vega");
        premadeDictionary.set("[Sidekick]","Peacock");
        premadeDictionary.set("[Invasion Leader]","Melanthios");
        premadeDictionary.set("[Angel Doctor]","Doctor Feathervale");
        premadeDictionary.set("[Raven Angel]","Fina");
        premadeDictionary.set("[Healing Hero]", "Moonlight");
        premadeDictionary.set("[Copycat]", "Eclipse");
        premadeDictionary.set("[Phantom Thief]", "Duckling");
        premadeDictionary.set("[Superhero Team]", "Starlight");
        premadeDictionary.set("[Light Villain]", "Anni");
        premadeDictionary.set("[Flying Girl]","Sora");
        premadeDictionary.set("[Esper]", "Zoey");
        premadeDictionary.set("[Angry Gang]", "Dark Valkryie");
        premadeDictionary.set("[Earth Girl]", "Violet");
        premadeDictionary.set("[Water Girl]", "Blue");
        premadeDictionary.set("[Fire Girl]", "Red");
        premadeDictionary.set("[Air Girl]", "Green");
    }
    adventureBook.setPremadeDictionary(premadeDictionary);

    //Volume 1
    {
        const button1Fire:button = {label:"Fire", path:"path2Fire", iconSrc:iconFire};
        const button1Water:button = {label:"Water", path:"path2Water", iconSrc:iconWater};
        const button1Air:button = {label:"Air", path:"path2Air", iconSrc:iconAir};
        const button1Earth:button = {label:"Earth", path:"path2Earth", iconSrc:iconEarth};

        adventureBook.constructChapter(
            1, "path1", 
            ["This is the story of [Protagonist] [Surname], a brave young boy with superpowers.",
                "One day, [Protagonist]'s father pulls him and his two older brothers, [Eldest Brother] and [Second Brother], aside and brings him to the family's secret library. He shows them four books, each with hidden techniques on superpowers."],
            "Which book will [Protagonist] choose?",
            [button1Fire,button1Water,button1Air,button1Earth]
        );
    }
    //Volume 2
    {
        const commonStoryString2a:string = "[Protagonist] has a new problem now. He has tried to ignore the truth his entire childhood, but he can no longer ignore reality. His dad is a supervillain.";
        const question2:string = "What should he do?"
        const button2Fight:button = {label:"Fight",path:"path3Fight", iconSrc:iconSnowball, badPath:"path3Water", clearConditions:["path2Fire","path2Earth","path2Air"]}

        adventureBook.constructChapter(
            2, "path2Fire", 
            ["[Protagonist] skeptically chose fire. The book claims that fire is the most powerful element, coveted even by the gods. but when he tried to spar against his brothers, he was easily overpowered. Dumb book was all talk, but his father told him to stick with it.",
                "After years of reluctant practice, he developed his own variation of the book's fire powers, lightning! This variation is much stronger. He can beat [Second Brother] now, but [Eldest Brother] is still the strongest.",
                commonStoryString2a],
            question2,
            [button2Fight]
        );
        
        adventureBook.constructChapter(
            2, "path2Water", 
            ["[Protagonist] reluctantly picked up the book on water powers. But he has absolutely no talent for superpowers. His older brothers both laugh at him.",
                commonStoryString2a],
            question2,
            [button2Fight]
        );
            
        adventureBook.constructChapter(
            2, "path2Air", 
            ["[Protagonist] felt drawn to the book on air related superpowers, almost as if he was destined to read it.",
                "After practicing for a few years, he developed his own specialty. Now he can generate his own lightning!",
                commonStoryString2a],
            question2,
            [button2Fight]
        );
            
        adventureBook.constructChapter(
            2, "path2Earth", 
            ["[Protagonist] picked up the book on earth. It was a bit dry, but he did like the parts about controlling various metals.",
                "After years of practice, he develops his own variation of superpowers, magnetism.",
                commonStoryString2a],
            question2,
            [button2Fight]
        );
    }
    //Volume 3
    {
        const button3Friend:button = {label:"Friend",path:"path4Friend", iconSrc:iconWater};
        const button3Brother:button = {label:"Brother",path:"path4Brother", iconSrc:iconEarth};
        const button3Home:button = {label:"(Under Development)",path:"path4Home", iconSrc:iconFire};
        const button3Solo:button = {label:"Fly Solo",path:"path4Solo", iconSrc:iconAir};

        adventureBook.constructChapter(
            3, "path3Fight",
            ["[Protagonist] fights desperately to stand up against his father's supervillain reign of terror. [Eldest Brother] and some of their friends join him. Using a laser pistol developed by one of his father's minions, [Protagonist] manages to hit his father's leg, but ultimately, his father has superpowers and guns too. He also has a lot more experience than [Protagonist].",
                "[Protagonist] lost this battle, and in a panic, he and his allies scatter and flee."],
            "Who will he go with?",
            [button3Friend,button3Brother,button3Home,button3Solo]
        );

        adventureBook.constructChapter(
            3, "path3Water",
            ["[Protagonist] attempts to fight his father, but he loses badly. It wasn't even a contest. He is now grounded for life."],
            "The end.",
            []
        );
    }
    //Volume 4
    {
        const question4:string = "How will [Protagonist] eat tonight?"
        const button4Job:button = {label:"Find Job",path:"path5Job", iconSrc:iconSnowball};
        const button4Steal:button = {label:"Steal Food",path:"path5Steal", iconSrc:iconSnowball};

        adventureBook.constructChapter(
            4, "path4Friend",
            ["[Protagonist] follows a friend, [Boy 1], west. Together, they cross the sea. Just as they are about to reach land, however, a sea monster attacks them, and he is separated from [Boy 1].",
                "After an epic battle against the sea monster, he eventually escapes its grasp and swims the rest of the way to the shore. He reaches a large city by the coast and starts to wander the streets. [Enormous City] is even bigger than his home city, but not very friendly. [Protagonist] has no food, and now he is starving."],
            question4,
            [button4Job]
        );

        adventureBook.constructChapter(
            4, "path4Brother",
            ["He follows [Eldest Brother] to the southeast. But as they flee, their father and [Second Brother] pursue them.",
                "[Eldest Brother] scowls. \"Why'd you follow me?! If we had split up, at least one of us could have gotten away!\"",
                "The two adolescent boys are swiftly captured and taken home. They get grounded for life."],
            "The end.",
            []
        );

        adventureBook.constructChapter(
            4, "path4Solo",
            ["[Protagonist] steals a small plane from his father's henchmen and escapes south. Eventually he reaches a desert city, and just in time, because the plane ran our of fuel! This place should be far beyond his father's reach!",
                "Almost immediately, however, he realizes his problems aren't over yet. He has no food, no shelter, and no money. He is a refugee in a strange land, and everyone views him with distrust.",
                "He manages to salvage his plane into a makeshift home, and he uses his powers to repair the plane's air conditioner.",
                "But he is still starving and broke."],
            question4,
            [button4Steal],
        );

        adventureBook.constructChapter(
            4, "path4Home",
            ["[Protagonist] surrenders and allows his father to catch him. He knows his father will punish him horribly, but if turning himself in distracts his father long enough for [Eldest Brother] and all of their friends to get away, then it's worth it.",],
            "(To be continued).",
            []
        );
    }
    //Volume 5
    {
        const button5TrainOcean:button = {label:"Work Out", path:"path6TrainOcean", iconSrc:iconWater};
        const button5TrainDessert:button = {label:"Work Out", path:"path6TrainDesert", iconSrc:iconAir};
        adventureBook.constructChapter(
            5, "path5Job",
            ["[Protagonist] tries looking for a job, but no one in [Enormous City] will hire him.",
                "Somehow, he survives for a couple weeks by eating scraps out of a dumptser. He isn't alone, though. The alleys are crawling with homeless children by day and gangsters by night.", 
                "One day, a boy named [Boy 2] discovers [Protagonist] and takes him to a food kitchen run by his mother.",
                "[Boy 2]'s mother gives him a part time job at the food kitchen."],
            "[Protagonist] has a lot of free time on his hands now. How will he spend it?",
            [button5TrainOcean]
        );

        adventureBook.constructChapter(
            5, "path5Steal",
            ["[Protagonist] turns to thievery to get by. He feels guilty at first, but he slowly grows numb to it. His priority is to survive. He would look for honest work, but the locals already hate him."],
            "[Protagonist] has some free time on his hands now. How will he spend it?",
            [button5TrainDessert]
        );
    }
    //Volume 6
    {
        const commonStoryString6a = "A few years of diligent training pass in the blink of an eye, and now he is fourteen. He is very powerful, and now he wins most of his fights. He has become stronger just in time too; all is not well in the world around him.";
        const commonStoryString6b = "Just when all hope is lost, [Boy 1] arrives with reinforcements! The three boys take down [Protagonist]'s father and his minions. However, this doesn't solve everything."
        const question6:string = "Will he help the girl?"
        const button6Rescue:button = {label:"Obviously",path:"path7Rescue", iconSrc:iconSnowball};

        adventureBook.constructChapter(
            6, "path6TrainOcean",
            ["Although he is now hundreds of miles away from home, [Protagonist] still remembers his defeat at the hands of his father. In his free time, he anxiously practices his superpowers. And at night, when no one is watching, he prowls the streets and gets in fist fights with the local gang members.",
                commonStoryString6a,
                "Now, riots are breaking out throughout the local kingdom, and his father is making an ambitious bid to take it over.",
                "This time, our hero is ready. Together with [Eldest Brother], they prepare an ambush and intercept their father's invasion. It's a difficult battle, and they nearly lose.",
                commonStoryString6b,
                "The riots are still ongoing. The local king, King [King], ends up abdicating his throne to prevent a civil war. The kingdom divides into a loose confederation of city states, and [Enormous City] holds an election for a new mayor to adjust to the times.",
                "The riots slowly die down, but not everyone is appeased. A few weeks after defeating his father, our protagonist sees a girl his age being attacked by rioters."],
            question6,
            [button6Rescue]
        );

        adventureBook.constructChapter(
            6, "path6TrainDesert",
            ["Although he is now well over a thousand miles from home, [Protagonist] still remembers his defeat at the hands of his father. In his free time, he anxiously practices his superpowers. And at night, when no one is watching, he prowls the dessert and gets in fist fights with the local thieves.",
                commonStoryString6a,
                "Now, riots are breaking out throughout a distant kingdom across the ocean, and his father is sure to make an ambitious bid to take it over.",
                "This time, our hero decides to take advantage of this. Together with [Eldest Brother], he prepares an ambush and intercepts their father's invasion. It's a difficult battle, and they nearly lose.",
                commonStoryString6b,
                "[Second Brother] is nowhere to be seen. [Protagonist] gets an uneasy feeling that [Second Brother] is out there somewhere, trying to finish what their father started. He searches his brother's room, and finds clues leading to [Enormous City], the largest city in the world. It's on the coastline of the kingdom which their father was last trying to invade.",
                "[Protagonist] investigates further. While he and [Eldest Brother] had been intercepting their father, the local king, King [King], ended up abdicating his throne to prevent a civil war. The kingdom is now divided into a loose confederation of city states. [Enormous City] has held an election for a new mayor, which has helped calm the riots tremendously.",
                "[Protagonist] arrives in [Enormous City] just as the riots are dying down, but not everyone is appeased yet. The day he arrives, [Protagonist] sees a girl his age being attacked by rioters."],
            question6,
            [button6Rescue]
        );
    }
    //Volume 7
    {
        const button7Fight:button = {label:"Fight Back",path:"path8Fight", iconSrc:iconAir};
        const button7Run:button = {label:"Run Away",path:"path8Run", iconSrc:iconSnowball};
        const button7Feed:button = {label:"Feed", path:"path8Feed", iconSrc:iconEarth, hideConditions:["path4Brother", "path4Home", "path4Solo"]};

        adventureBook.constructChapter(
            7, "path7Rescue",
            ["He saved the girl with ease! She is impressed by his act of heroism. And she isn't the only one who is impressed; [Protagonist] is smitten as he gets a closer look and realizes how beautiful she is. She says her name is [Girl 1]. In the near future, she wishes to repay him. [Protagonist] likes how this turned out. It feels good to be thanked.",
                "The next day, as he is thinking about his encounter with [Girl 1], he encounters a second girl, this one much younger, being attacked by angry rioters. But when he tries to rescue her, she swings her fist at him with startling strength! The rioters are all knocked back. Apparently, this young lady doesn't need any rescue from [Protagonist]. She angrily lunges at him."],
            "How will he defend himself?",
            [button7Fight,button7Run,button7Feed]
        );
    }
    //Volume 8
    {
        const button8Hero:button = {label:"Be a Hero",path:"path9Hero", iconSrc:iconSnowball};

        adventureBook.constructChapter(
            8, "path8Fight",
            ["He tries to fight back, but suddenly, this girl turns into a wolf! He's caught off guard and gets bitten badly. He adapts and starts to fights her off with his superpowers, when suddenly, she turns into an enourmous ape and knocks him aside! With a daze, [Protagonist] realizes that this girl can change into any animal at will. He feels a strange sense of deja vu, but he can't quite place it.",
                "He changes his strategy and creates some distance with her. After a few exchanges, she tranforms into an eagle and flies away. Though he is is bleeding from the bite, this was still much easier than fighting his father. [Protagonist] feels he's met her before. The name, [Animal Girl], comes to mind, but he can't remember where he met her.",
                "The local people witnessed this intense battle. By the end of the day, everyone in [Enormous City] begins to hail [Protagonist] as the hero who saved them from the emerging young supervillain. He's quite popular now!",
                "This popularity doesn't come without earning some grudges, though. The newly elected mayor, [New Mayor], hates him, and says that people don't need vigilantes when the police force is perfectly capable of protecting the people."],
            "What should [Protagonist] do?",
            [button8Hero]
        );
    
        adventureBook.constructChapter(
            8, "path8Run",
            ["[Protagonist] runs away in fear. Angry girls are even scarier than his dad."],
            "The end.",
            []
        );

        adventureBook.constructChapter(
            8, "path8Feed",
            ["[Protagonist] gets a sense of deja vu. He reaches into his backpack and offers up all of his snacks. The girl stops short and sniffs the back like a little animal. Her face breaks into a grin. She eats snacks happily. Apparently she was just hangry.",
                "Suddenly, [Protagonist] remembers. Her name is [Animal Girl], and she's a close friend of [Boy 1], as well as a fellow superhuman. He starts to ask her if she has seen [Boy 1], but the rioters have recovered from their shock. They start to chase after her again. With a smirk, [Animal Girl] suddenly transforms into an eagle and flies off dramatically.",
                "By the end of the day, everyone in [Enormous City] begins to hail [Protagonist] as the hero who managed to \"tame the young supervillain\". He decides it's too much work to correct the slight misunderstanding. Anyways, he's quite popular now!",
                "This popularity doesn't come without earning some grudges, though. The newly elected mayor, [New Mayor], hates him, and says that people don't need vigilantes when the police force is perfectly capable of protecting the people. Once again, [Protagonist] feels an odd sense of deja vu."],
            "What should [Protagonist] do?",
            [button8Hero]
        )
    }
    //Volume 9
    {
        const button9Date:button = {label:"Date",path:"path10Date", iconSrc:iconWater};
        const button9Reject:button = {label:"Decline",path:"path10Reject", iconSrc:iconFire}
        adventureBook.constructChapter(
            9, "path9Hero",
            ["As an official superhero, he quickly makes a name for himself as [Alter Ego]. [Alter Ego] has lots of fans, and is especially popular with the ladies, many of whom form the [Alter Ego] fan club. His biggest fans are [Girl 2], [Girl 3], and [Girl 4].",
                "[Girl 1] approaches [Protagonist] one day, and asks him on a date."],
            "What should he do?",
            [button9Date,button9Reject]
        );
    }
    //Volume 10
    {
        const button10Bribe:button = {label:"Cooperate",path:"path11Bribe", iconSrc:iconSnowball};

        adventureBook.constructChapter(
            10, "path10Date",
            ["[Protagonist] takes [Girl 1] to [Resturaunt], a new resturaunt that [Boy 2] just started. [Boy 2] gives him a friend's discount.",
                "While on the date, [Girl 1] opens up about her backstory. She's actually a duchess. Or at least, she's a former duchess. Her uncle is [King], the former king. [Girl 1] is incredibly greatful that [Protagonist] saved her life that day.",
                "[Girl 1] knows about his secret identity, but now she wants to know about his past. He is hesitant to tell her about his supervillain father, but he tells her everything. She is alarmed at first, but she still sees him for who he is, not as his father's son.",
                "After the date, [Alter Ego] is approached by [Big Gang], the biggest mafia in [Enormous City]. Their leader, [Big Gang Leader], wants him to look the other way when he sees them commiting crimes. In exchange, they promise to tip him off on any other criminals they see and to fund his superhero activities. [Alter Ego] can refuse, of course, but they warn that he may not like what they do next."],
            "For some reason, it feels like there isn't really a choice. Should he accept the funding?",
            [button10Bribe]
        );

        adventureBook.constructChapter(
            10, "path10Reject",
            ["He declines. [Girl 1] is a bit disappointed, but she says she understands. She walks off sadly.",
                "Moments later, [Alter Ego] is approached by [Big Gang], the biggest mafia in [Enormous City]. Their leader, [Big Gang Leader], wants him to look the other way when he sees them commiting crimes. In exchange, they promise to tip him off on any other criminals they see and to fund his superhero activities. [Alter Ego] can refuse, of course, but they warn that he may not like what they do next."],
            "For some reason, it feels like there isn't really a choice. Should he accept the funding?",
            [button10Bribe]
        );
    }
    //Volume 11
    {
        const button11Rescue:button = {label:"Rescue",path:"path12Rescue", iconSrc:iconSnowball, clearConditions:["path10Date"],badPath:"path12SecondGirl"};

        adventureBook.constructChapter(
            11, "path11Bribe",
            ["[Alter Ego] reluctantly accepts the money. He tells himself he will use the money for good, but it still feels uncomfortable.",
                "The next day, he spots a group of superheroes fighting against [Big Gang]. He hopes they win, but he can't get involved directly because of his deal. Reluctantly, he watches from a nearby rooftop.",
                "Suddenly, one of the superheroes creates a massive fireball and tosses it at [Big Gang Leader]. The villain dodges, but the fireball hits one of the [Big Gang]'s warehouses. There is a small explosion, followed moments later by an even larger and deadlier one; the fireball hit the ammunition supply.",
                "The superheroes all retreat and vanish. Meanwhile, the fire spreads at a sickening rate."],
            "What should he do?",
            [button11Rescue]//Options will include confronting the heroes, saving the victims, or letting the villains suffer.
        );
    }
    //Volume 12
    {
        const commonStoryString12a:string = "Our hero chooses to search the building for survivors. Among the survivors, he discovers [Girl 2] shielding a baby. Her arms are horribly burned, but the baby is safe. He gets her out of the building and takes her to the hosipital as fast as he can.";
        const button12Sidekick:button = {label:"Accept", path:"path13Sidekick", iconSrc:iconSnowball};
        const button12TreatScientist:button = {label:"Mad Scientist", path:"path13TreatScientist", iconSrc:iconFire};
        const button12TreatVillain:button = {label:"Supervillain", path:"path13TreatVillain", iconSrc:iconSnowball};
        const button12TreatGirl:button = {label:"Rejected Girl", path:"path13TreatGirl", iconSrc:iconEarth};
        const button12TreatAnti:button = {label:"Antihero", path:"path13TreatAnti", iconSrc:iconAir};
        const button12TreatHero:button = {label:"Superhero", path:"path13TreatHero", iconSrc:iconWater};

        adventureBook.constructChapter(
            12, "path12Rescue",
            [commonStoryString12a,
                "While [Girl 2] is in the emergency room, [Alter Ego] is left watching the baby. After a while, [Big Gang Leader] rushes into the waiting room. He looks awful. He searches the room anxiously, then sees [Alter Ego]. He calms down somewhat once he sees the baby.",
                "\"She's safe!\" [Big Gang Leader] lets out a sigh of relief. The baby is his only daughter, [Baby]. [Big Gang Leader] is not completely at ease though. He looks everywhere for his little sister, [Girl 2].",
                "A doctor comes out and informs them that [Girl 2]'s burns are serious, and her arms need amputation. [Big Gang Leader] is stunned.",
                "[Alter Ego] decides to leave this man some space to grieve. He goes home and takes off his disguise for the day.",
                "At home, he barely gets any rest when he hears a knock at the door. It's [Girl 1]. She notices [Protagonist]'s expression and asks him what's wrong. He tells her everything.",
                "After a long pause, she quietly scolds him for taking the bribe. \"[Protagonist], if you needed money, you should have just asked me! My family is still the wealthiest in [Enormous City]!\" She confiscates the \"funding\" from [Big Gang] and turns it into a police box. [Protagonist] doesn't have the heart at the moment to tell her that he suspects the police are corrupt.",
                "When she gets back, [Girl 1] asks [Protagonist] to let her be his sidekick. She doesn't have any superpowers, but she feels [Protagonist] needs an accountability partner."],
            "Should he allow [Girl 1] become his sidekick?",
            [button12Sidekick]//Other choices could include quitting or rejecting her.
        );

        adventureBook.constructChapter(
            12, "path12SecondGirl",
            [commonStoryString12a,
                "While [Girl 2] is in the emergency room, [Alter Ego] is left watching the baby. A doctor comes out and informs him that [Girl 2]'s burns are serious, and her arms need amputation.",
                "Concerned, and feeling somewhat responsible, he takes the baby and walks over to [Girl 2]'s hospital bed. [Girl 2] is clearly in agonizing pain, but when she sees the baby, she looks grateful.",
                "\"That's my niece, [Baby]. I ended up raising her when her mother escaped from my older brother and left [Baby] behind.\" [Girl 2] tells him a long, ugly story about the tragedy of [Baby]'s birth. She doesn't seem to care about her own burns, but she is anxious about the baby's well being. \"Without my arms, my brother [Big Gang Leader] will have to take care of [Baby] by himself. I've failed her. I should have taken her and run when I had the chance.\" She bursts into tears.",
                "[Alter Ego] looks on in pity and guilt. But then he remembers someone who can help."],
            "Who can help [Girl 2]?",
            [button12TreatAnti, button12TreatGirl, button12TreatHero, button12TreatScientist, button12TreatVillain]
        )

    }
    //Volume 13
    {
        adventureBook.constructChapter(
            13, "path13Sidekick",
            ["[Protagonist] accepts [Girl 1]'s offer. She calls in some favors with some of her uncle [King]'s connections and after a year, she has a special powersuit to help her stay safe in battle. She becomes known as [Sidekick].",
                "Together, [Alter Ego] and [Sidekick] clean up the streets of [Enormous City]. [Big Gang] is furious at [Alter Ego]'s backing out, but they have their hands full with other problems at the moment, and have no time to retaliate against him.",
                "[New Mayor], on the other hand, launches a huge campaign against [Alter Ego]. It's somewhat effective against the populace, and the police are constantly chasing after the duo.",
                "One day, [Alter Ego] finds [Girl 3] and [Girl 4], members of his fan club, fighting over him. They each insist that they love him most."],
            "Who loves him most?",
            [{label:"Sidekick",path:"path14Loyalty", iconSrc:iconSnowball}]
        );

        adventureBook.constructChapter(
            13, "path13TreatScientist",
            ["In [Protagonist]'s hometown, there was a genius mad scientist who worked for his father. Her name was [Angel Doctor], and she was well known in his father's syndicate for her amazing grasp of bioengineering. She could even regrow lost limbs for her patients!",
                "The catch is, [Protagonist] has no idea where to find her. After all, his father has already been defeated, so there is no reason for [Angel Doctor] to still be hanging out in his hometown."],
            "To be continued.",
            []
        );

        adventureBook.constructChapter(
            13, "path13TreatGirl",
            ["[Girl 1] still owes him a favor. [Alter Ego] hastily goes home, changes out of his superhero costume, and goes to her house as [Protagonist]. She isn't over being rejected yet, and she is visibly hurt when she sees he is cashing in the favor she owes him for another girl's sake. Nonetheless, [Girl 1] feels immense pity on hearing of [Girl 2]'s accident. She quickly calls in a favor with one of her cousin's friends, and a set of state of the art prosthetics are gifted to [Girl 2]. [Girl 2] feels conflicted about the charity, but vows to pay [Girl 1] back one day.",
                "Meanwhile, [Girl 2] asks [Alter Ego] out on a date.",
                "Later, [Girl 1] comes to [Protagonist]'s house in tears. She says she loves him, and begs him so reconsider his earlier rejection.",],
            "Who does he love most? (To be continued.)",
            []
        );

        adventureBook.constructChapter(
            13, "path13TreatVillain",
            ["There is rumor of a new supervillain in [Enormous City] whose only ability is healing. Her name is [Raven Angel], and she is often seen hanging around [Animal Girl]."],
            "To be continued.",
            []
        );

        adventureBook.constructChapter(
            13, "path13TreatHero",
            ["One of the superheroes who was fighting [Big Gang] earlier, [Water Hero], can create an all purpose healing balm with a wave of her staff. Of course, there is a huge catch. She's one of the superheroes who caused this mess."],
            "To be continued.",
            []
        );

        adventureBook.constructChapter(
            13, "path13TreatAnti",
            ["[Boy 2] once mentioned a very unpopular superhero whose main powers were flight and healing. The reason she is so unpopular is that she heals everyone, hero and villain, police and gangsters. Most of the city hates her and calls her the \"Naive Enabler\", though her proper superhero name is [Healing Hero]. But she is exactly the kind of openheareted and unbiased person who would be willing to heal [Girl 2]"],
            "TO be continued",
            []
        );

    }
    //Volume 14
    {
        const button14Self:button = {label:"Attend As Self",path:"path15Self", iconSrc:iconSnowball};
        adventureBook.constructChapter(
            14, "path14Loyalty",
            ["[Alter Ego] says he is happiest with [Sidekick]. This leads to an even bigger fight, and it takes a while before everyone is calmed down.",
                "One day, a world domination organization calling itself the [Surname] Syndicate sends a letter to [Protagonist]. [Protagonist] is alarmed. [Surname] Syndicate was the reason he had fought against his father a few years ago. It should have been disbanded after his father's defeat. The letter invites him to a secret meeting to \"discuss the future of the world\".",
                "A second letter arrives as well, this one addressed to [Alter Ego]."],
            "Should he attend?",
            [button14Self]//Other potential choices are to attend as a hero, or refuse.
        );
    }
    //Volume 15
    {
        const button15Hero:button = {label:"Do It His Own Way",path:"path16Hero", iconSrc:iconAir};
        const button15Villain:button = {label:"Do It Brother's Way", path:"path16Villain", iconSrc:iconEarth}

        adventureBook.constructChapter(
            15, "path15Self",
            ["He arrives as himself. At the meeting, he is greeted by several familiar faces, including [Eldest Brother], [Boy 1], and [Animal Girl].",
                "[Eldest Brother] reveals that he took over the [Surname] Syndicate after they defeated their father. He says that he did this because he discovered that an alien invasion was coming to earth. There are only a few more years left until the aliens arrive.",
                "In order to save Earth, [Eldest Brother] believes the best way is to conquer it, then unify it so they can stand together against the aliens. [Protagonist] isn't sure what to think of this plan."],
            "How will he respond to this news?",
            [button15Hero,button15Villain]
        );
    }
    //Volume 16
    {
        const button16Portal:button = {label:"Close Portal",path:"path17Portal", iconSrc:iconAir};
        const button16Leader:button = {label:"Fight Leader",path:"path17Leader", iconSrc:iconFire};
        const button17Fight:button = {label:"Fight Her", path:"path17FightGirl", iconSrc:iconFire};
        const button18Apologize:button = {label:"Apologize", path:"path17Apologize", iconSrc:iconWater};

        adventureBook.constructChapter(
            16, "path16Villain",
            ["[Protagonist] decides to join his brother in the [Surname] Syndicate, abandoning his role as the hero [Alter Ego]. Immediately, however, [Girl 1] confronts him. He tries to explain to her, but she doesn't see his reasoning as justified.",
                "\"[Protagonist], don't do this! If you try to take over the world, then you will be no different than your father! It doesn't matter if you mean well, it just isn't right! People should be free! Even if you save the world this way, is this worth it?\"",
                "\"There has to be another way! My parents once said that this world is always protected by a beautiful goddess of light and water! They say she saved the earth the last time there was a global catastrophe. We don't need to rely on ourselves for everything! It's more important to stick to doing the right thing!\"",
                "Tearfully, she begs him to rethink his choice. \"Please, please don't do this. We are supposed to be heroes together. I don't want to have to fight you!\""],
            "What how will [Protagonist] deal with his sidekick and girlfriend?",
            [button17Fight,button18Apologize]
        );

        adventureBook.constructChapter(
            16, "path16Hero",
            ["[Protagonist] decides to go back home and train harder. Together with [Girl 1], they brainstorm a better way to save Earth.",
                "[Girl 1] tells her Uncle [King], and [King] spreads the warning through his connections.",
                "[Eldest Brother] is irrate, but [Boy 1] and [Animal Girl] respect [Protagonist]'s decision and convince [Eldest Brother] to let [Protagonist] go.",
                "[Protagonist] trains for fourteen years.",
                "[Protagonist] and [Girl 1] have become very powerful. [Alter Ego] is now considered by many to be the strongest superhero in the world. They make many superhuman allies, such as [Healing Hero]. They also cross paths with again with the team of girls calling themselves [Superhero Team]. It's a girls only team, so [Alter Ego] is not invited. [Sidekick] doesn't like them because their leader, [Earth Girl], is always flirting with [Alter Ego]. She gets furious whenever [Alter Ego] flirts back.",
                "[Baby] has grown too; now she's a teenager. She discovers she has her own superpowers, so she runs away from home and joins [Superhero Team]. She has a short fuse, but [Water Girl] is already used to [Fire Girl]'s short fuse at this point, so she takes [Baby] under her wing.",
                "They encounter many strange enemies too. [Phantom Thief], for example, only steals books. But they are usually rare and priceless books, so the upperclass of [Enormous City] are always afraid of being targeted by him. Another villain, [Copycat], can mimic the abilities of nearly any superhero he faces. He seems to hate [Alter Ego] in particular for some reason.",
                "In addition to [Big Gang], there is also [Angry Gang]. [Angry Gang] claims that all of the city's problems can mostly be attributed to five men: [Big Gang Leader], Mayor [New Mayor], [Alter Ego], [King], and [Eldest Brother] [Surname]. Only women have authority in this gang, and none of them seem to like [Alter Ego]. They respect [Sidekick], however, so they are willing to divert most of their rage against [Alter Ego] to the other four men.",
                "Then there is [Animal Girl]. Most of [Surname] Syndicate is focused on conquering other parts of the world, but [Animal Girl] and [Boy 1] organize a branch of minions in [Enormous City] on [Eldest Brother]'s behalf. [Animal Girl] has a friend, [Light Villain], who is completely immune to all of [Alter Ego]'s powers and can shoot lasers from her fingernails. Together with [Flying Girl], [Esper], and [Raven Angel], these girls constantly wreck havoc through [Enormous City], trying to conquer it for the ever growing [Surname] Syndicate. Everyone hates these whimsical supervillainesses. The only bright side is, though they love picking fights with heroes and their rival villains alike, they seem keen on avoiding civilian casualties; they hold to an ideology that world domination is pointless if there are no surviving subjects.",
                "Then, the day comes, just as [Eldest Brother] warned. A huge portal opens in the arctic, and an army of aliens pours out! All of the forces of Earth, heroes and villains alike, band together to fight off their common enemy. [Invasion Leader], king of the aliens, is exceptionally powerful."],
            "What will he do?",
            [button16Leader,button16Portal]
        );
    }
    //Volume 17
    {
        const button17Victory:button = {label:"Proceed", path:"path18Victory", iconSrc:iconFire};
        const button17Mercy:button = {label:"Retreat", path:"path18Mercy", iconSrc:iconWater};
        const button17Reopen:button = {label:"Reopen Portal", path:"path18Reopen", iconSrc:iconFire};
        const button17Run:button = {label:"Run", path:"path18Run", iconSrc:iconEarth};
        const button17Close:button = {label:"Close Portal Again", path:"path18Close", iconSrc:iconAir};
        const button17Doom:button = {label:"Reap What You Have Sown",path:"path18Doom", iconSrc:iconWater, clearConditions:["path2Fire"], badPath:"path18Stripped"};

        adventureBook.constructChapter(
            17, "path17Leader",
            ["[Invasion Leader] laughs at humanity's feeble efforts to stop him. With a wave of his hand, a ball of fire appears, and the arctic starts to melt under everyone's feet. The steam is so thick, the entire sky gets covered in clouds, blocking what little starlight remained.",
                "But [Protagonist] does not give up. He tackles the invader head on with bolt after bolt of lightning!",
                "The battle rages for an unkkown amount of time. Eventually, the invader is exausted, and he retreats back through his portal."],
            "...",
            [button17Victory,button17Mercy]
        );

        adventureBook.constructChapter(
            17, "path17Portal",
            ["[Invasion Leader] looks around the arctic perimeter. He sees humans everywhere, heroes and villains alike, all gathered together for a commmon cause; to defeat him. He smirks. \"Is this all you earthlings have? No matter where I go, all humans are the same. You cannot stop me!\" With a wave of his hand, he generates an enormous fireball, and prepares to toss it into the ice beneath the heroes' feet.",
                "Suddenly, a bolt of lightning bursts past his head. [Invasion Leader] glances at [Alter Ego] quizically. \"You missed, Earthling.\"",
                "But [Alter Ego] was never aiming at [Invasion Leader]; his lighting bolt hits the edge of the portal. Suddenly, there is a violent shaking, and the portal collapses! [Invasion Leader] pales. \"No, anything but that! Run!\" The fireball flickes and vanishes. All of the aliens tremble, drop their weapons, and run.",
                "But before the people of Earth can cheer, they notice something is off. The aliens are running towards them, trying desperately to get past the perimeter. After a moment, it becomes clear why; the air where the portal was is now pulsing ominously. Breaking the portal by force has created an unstable spacetime rift. Everyone, human and alien alike, begins to flee."],
            "What will [Alter Ego] do? (To be continued)",
            [button17Close, button17Reopen, button17Run]
        );

        adventureBook.constructChapter(
            17, "path17FightGirl",
            ["[Protagonist] steels his heart and begins to fight. He doesn't want to hurt her, just knock her out so she can't get in his way. Her powersuit is vulnerable [Protagonist]'s lightning and magnetism, so there really isn't much of a contest. Without power in her suit, it becomes dead weight and she falls to the ground, unable to get up. He lets out a sigh, relieved that he defeated her without hurting her.",
                "But he is wrong.",
                "[Protagonist] feels a chill down his spine. He turns around and sees a woman, just as beautiful and captivating as [Girl 1], but she's glowing. Her face is blindfolded, but her anger is clear from her posture. Her voice is quiet, like the calm before the storm. \"Do you have any idea what you have done, boy?\"",
                "[Protagonist] prepares another lightning bolt. The woman laughs coldly. \"Using lightning to attack ME? How ignorant!\""],
            "[Protagonist] seems to have made a terrible mistake. There is only one choice this time.",
            [button17Doom]
        );

        adventureBook.constructChapter(
            17, "path17Apologize",
            ["[Protagonist] apologizes to [Girl 1]. They go back home together brainstorm a way to solve the probelm without using [Eldest Brother]'s plan.",
                "[Girl 1] tells her Uncle [King], and [King] spreads the warning through his connections. Then, they tell all of their superhero asscociates.",
                "[Eldest Brother] is furious at [Protagonist] for backing out, and launches an attack on [Enormous City]",
                ""],
            "To be continued.",
            []
        );
    }
    //Volume 18
    {
        //Note, since these are the final chapters in this book, there must be no more buttons. Always return an empty array in place of buttons when at the final chapter of a book.
        adventureBook.constructChapter(
            18, "path18Victory",
            ["[Protagonist] starts to chase the enemy through the portal, but it collapses with him in it.",
                "[Protagonist] wakes up at home in [Enormous City]. [Girl 1] is with him.",
                "\"I thought you died! You were missing for weeks, and then you just suddenly reappeared out of thin air in your bed!\"",
                "[Protagonist] cannot remember what happened during the last couple weeks. Strangely, his powers are weakened too. He continues his life as a superhero, but he is never again as strong as that day he fought [Invasion Leader].",
                "This is fine though. Earth is saved. [Protagonist] and [Girl 1] get married and live happily ever after."
            ],
            "The end! Congratulations!",
            []
        );

        adventureBook.constructChapter(
            18, "path18Mercy",
            ["[Alter Ego] lets [Invasion Leader] escape. He can feel himself reaching his limit. Quickly, he joins up with the other defenders of humanity and together they drive the remaining alien forces back through the portal.",
                "Today was successful. The aliens have learned that as long as [Alter Ego] is there, the Earth is not so easily invaded. [Alter Ego] heaves a sigh of relief and collapses into the arctic sea. The last thing he remembers is [Sidekick] rushing over to pull him out.",
                "[Protagonist] wakes up at home in [Enormous City]. [Girl 1] is with him.",
                "\"Don't push yourself so hard! You were asleep for two days!\"",
                "[Protagonist] smiles and hugs her. He's just glad she's safe. Earth is saved, and [Protagonist] did it without relying on [Eldest Brother]'s radical world unification plan.",
                "[Protagonist] and [Girl 1] get married and live happily ever after."
            ],
            "The end! Congratulations!",
            []
        );

        adventureBook.constructChapter(
            18, "path18Run",
            ["[Alter Ego] flees as fast as he can. Unfortunately, not everyone can move as fast as he can. The spacetime rift crushes the arctic ice, and nearly all of the armies of the world perish together with the aliens. Needless to say, none of the ordinary humans survived. Even among the superhumans, there are very few survivors. Even [Flying Girl], [Light Villain], and [Animal Girl], who all had means to fly and could be considered faster than most superhumans, are missing.",
                "Worse yet, [Eldest Brother] and [Girl 1] are among those confirmed dead.",
                "[Protagonist] goes back to [Enormous City] in mourning. Meanwhile, the side effects of the spacetime rift cause persistent damage to the enviornment all over the globe, not just the arctic. Scientists speculate that the Earth will never be the same again. It's not certain if humanity will survive the fallout over the following centuries. Only time will tell."],
            "And thus, [Protagonist]'s story ends in tragedy. Thank you for reading. Better luck next time.",
            []
        );

        adventureBook.constructChapter(
            18, "path18Reopen",
            ["[Alter Ego] sends a surge of electricity into the portal. He's no physicist, but clearly attacking the portal was riskier than he thought. [Sidekick] rushes to his aide and gives him guidance on how to repair the portal. Together, they manage to keep it from collapsing it until people who actually know what they are doing are able to stabilize it.",
                "The aliens, once they see the portal is now stable, finally calm down. Until they remember that they had dropped their weapons in a panic, that is. The forces of Earth swiftly capture their invaders, all except [Invasion Leader], who is too powerful to be taken down, even without weapons. [Eldest Brother] and [Alter Ego] work together and force him back to the portal he came from.",
                "The portal remains open. No one is sure how to close it safely, so it just stays there, as a permanant pathway between Earth and the alien world. But the enemy's main army has been captured with minimal casualties, and now Earth has gotten its hands on their weapons. The problem isn't completely solved, but its highly unlikely that Earth will be invaded anytime soon.",
                "Meanwhile, [Alter Ego] gets the lecture of his life from nearly everyone who knows him. \"Didn't you learn anything in school?! Two thousand years ago, the first apocolype was caused when some idiot scientist who was messing around with spacetime and nearly blew up the planet! Why would you attack a spacetime portal with a lighting bolt?! At that point, we would have been better off surrendering!\" [Alter Ego], is stunned. He always had heard about the apoclypse, but because he ran away from home and dropped out of school, so he had no idea what had caused it.",
                "Fortunately, the world is saved. [Protagonist] and [Girl 1] get married, and the Earth is mostly at peace. [Invasion Leader] is still out there, but now he's learned that the Earth can't be invaded as long as [Alter Ego] and [Eldest Brother] are around. Similarly, [Eldest Brother] and the [Surname] Syndicate cannot take over the world either as long as [Alter Ego] is around. The biggest crisises have been averted."],
            "The end. Thank you for reading.",
            []
        );

        adventureBook.constructChapter(
            18, "path18Close",
            ["[Alter Ego] decides to go all or nothing. He blasts the portal with even more lightning. It still trembles dangerously, but slowly shrinks until it disappears.",
                "Meanwhile, the aliens have dropped all of their weapons. Their superpowers seem to have weakened with the collapse of the portal too. Aparrently they can't use their powers as freely when they are farther from their homeworld. They are smoothly captured, and Earth is saved.",
                "In the aftermath, [Alter Ego] notices that his own abilities seem to have dropped to nearly half. Maybe he pushed himself too hard? He tries to act natural; there is no need to let everyone know; it would be a huge blow to Earth's morale. None of the other earthling superhumans seem to be affected by this, but he can't tell whether they are tyring to hide it too, or if he's the only one. Either way, he's still probably one of the strongest superheroes. He's just not nearly as strong as he used to be.",
                "[Eldest Brother] insists on continuing his world domination scheme, even though the alien invasion has been taken care of. He insists that they never know when more aliens might arrive. [Alter Ego] disagrees. As long as he is around, [Eldest Brother] will never be able to take over the world.",
                "Finally, [Protagonist] returns to [Enormous City] and proposes to [Girl 1]. They live happily ever after for the rest of their lives."],
            "The end. Thank you for reading.",
            []
        );

        adventureBook.constructChapter(
            18, "path18Doom",
            ["[Protagonist] launches a lightning bolt at the mysterious woman. She smirks at first, but her expression is suddenly contorted in pain when [Protagonist] launches a follow up attack; a move he hasn't relied on in years. She writhes uncomfortably and screams. \"This isn't lightning! What is this?!\"",
                "Against a foe with a superior mastery of light, [Protagonist] has abandoned his usual lightning attacks and reverted back to the form of his orginal powers: Fire! It's more affective than he expected. The woman is immediately ablaze. He takes the chance to run.",
                "But before he can get far, a heavry rain abruptly falls, extinguishing the flames.",
                "\"Foolish child. You may have tricked me once, but I've touched hotter flames.\" Her ruined blindfold falls to the ground, revealing piercing red eyes. They are the last thing [Protagonist] ever sees. But the last thing he hears is [Girl 1] crying his name. His last thoughts are not of fear, but of guilt."],
            "How could you allow [Protagonist] to be so cruel to [Girl 1]?! Any monster who attacks his own girlfriend will face the wrath of an angry goddess.",
            []
        );

        adventureBook.constructChapter(
            18, "path18Stripped",
            ["[Protagonist] launches a lightning bolt at the mysterious woman, but it has no affect whatsoever. She smirks. A staff materializes in her hand, and she strikes the ground with it. [Protagonist] feels off.",
            "Suddenly, he realizes what happened. His powers have been drastically weakened!",
            "The woman smiles coldly. \"You silly boy. You never considered where your powers came from, did you? Without me, you are nothing but a pathetic mortal. It's a shame that humanity must lose such a strong hero, but you did this to yourself.\"",
            "She raises her staff to finish [Protagonist] off, but [Girl 1] leaps in the way. She managed to get out of her powersuit just in time. The woman stops at the last moment. \"This boy broke your heart, [Girl 1]. Do you really wish to stand up for him?\" She walks around [Girl 1] to strike [Protagonist] again, but [Girl 1] persists.",
            "The woman scoffs and turns away. \"Whatever. I suppose sealing up your power was punishment enough for now. I have other people to save.\" She starts to walk off, but pauses again. \"Also, tell your brother that his silly world domination scheme is unnecessary. I already have everything under control.\" The woman is never seen again.",
            "[Girl 1] drags [Protagonist] home. She knows that deep down, he wasn't trying to hurt her, but it will still take her a long time to fully forgive him. She is very relieved that he's still alive though. There are still a lot of problems in the world, but [Girl 1] refuses to allow [Protagonist] to get involved in superhero activities ever again."],
            "Thank you for reading. P.S. Next time, please let [Protagonist] be better to his girlfriend.",
            []
        );
    }

    return adventureBook;
}


/**
 * 
 * @param bookTitle 
 * 
 * @returns Returns the prewritten book. 
 */
export default function constructBook(bookTitle:string):Book
{
    switch(bookTitle)
    {
        case "Sparky": return constructBookSparky();
    }
    throw new Error(`${bookTitle} does not match any of the books in this file.`)
}