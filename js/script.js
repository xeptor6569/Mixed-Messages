const quotes = {
    quote_1: {
        quote: '“Every time you are tempted to react in the same old way, ask if you want to be a prisoner of the past or a pioneer of the future.”',
        author: 'Thich Nhat Hanh',
    },
}
const firstMessage = [
    "“Every time you are tempted to react in the same old way, ask if you want to be a prisoner of the past or a pioneer of the future.” – Deepak Chopra",
    "“Smile, breathe, and go slowly.” – Thich Nhat Hanh",
    "“You don’t have to control your thoughts. You just have to stop letting them control you.” – Dan Millman",
    "“Nothing diminishes anxiety faster than action.” – Walter Anderson",
    "“P.S. You’re not going to die. Here’s the white-hot truth: if you go bankrupt, you’ll still be okay. If you lose the gig, the lover, the house, you’ll still be okay. If you sing off-key, get beat by the competition, have your heart shattered, get fired…it’s not going to kill you. Ask anyone who’s been through it.” – Danielle LaPorte",
    "“You wouldn’t worry so much about what others think of you if you realized how seldom they do.” – Olin Miller",
    "“You can’t always control what goes on outside. But you can always control what goes on inside.” – Wayne Dyer",
    "“Don’t worry if people think you’re crazy. You are crazy. You have that kind of intoxicating insanity that lets other people dream outside of the lines and become who they’re destined to be.” – Jennifer Elisabeth",
    "“Do not let your difficulties fill you with anxiety; after all it is only in the darkest nights that stars shine more brightly.” – Ali Ibn Abi Talib",
    "“It’s OKAY to be scared. Being scared means you’re about to do something really, really brave.” – Mandy Hale"
];
const secondMessage = [
    "Get outside. Spend a few moments in nature getting fresh air and soaking up vitamin D.",
    "Stretch. Spending long hours sitting is not great for physical and mental health. This helps body tension and reduce stress you're feeling from work itself",
    // maybe change this one
    "Invest in a new pillow or set of bedsheets. Sleep and recovery are important",
    "Stay curious. The mind enjoys exploring new territory. Shake up your rotuine, for example, listen to some new music or read a new book.",
    "Take the stairs instead of elevator or escalotr.",
    "Do pushups or hold a plank during commercial breaks when you're watching TV.",
    "Walk or bike to coffee, brunch or work instead of driving.",
    "15-minute walk before or after work",
];
const thirdMessage = [
    "Aim to go to bed at the same time on the weekends. Then extend that to weeknights. Then try to wake up at the same time each morning until your sleep schedule is the same most nights.",
    "Set your bedroom temperature to 65–68ºF each night to sleep.",
    "Put your phone and computer to sleep an hour before you head to bed yourself.",
    "Practice mindful breathing, and/or gratitude breaths. You don’t have to full-on meditate. You can even just begin your day with a few grateful breaths, thinking about the things you’re grateful for with every breath. Even 5–10 breaths a day helps you get centered.",
    "Use small breaks in the workday to do squats, a few pushups or another quick-and-easy, no-equipment-required activity you can still do in your work clothes",
    "Set a calendar reminder to get up every hour then get up and walk, even if you just do a lap around the office. Think of it as an old-fashioned smoke break, except it’s good for you.",
    "Drink plenty of water. It's good for physical and mental health."
];

var message = {
    first: "",
    second: "",
    third: ""
}

function setMessage() {
    let random = Math.floor(Math.random() * firstMessage.length);   
    message.first = "Todays Quote: " + firstMessage[random];

    random = Math.floor(Math.random() * secondMessage.length);
    message.second = "Todays Goal: " + secondMessage[random];

    random = Math.floor(Math.random() * thirdMessage.length);
    message.third = "Remember to: " + thirdMessage[random];

    //console.log(message.first);
}

function displayMessage() {
    setMessage();

    var text = "<p>";

    text += message.first;
    text += "</p><br><p>";
    text += message.second;
    text += "</p><br><p>";  
    text += message.third;
    text += "</p>";
    
    //document.write(message);
    document.getElementById("mes").innerHTML = text;
}

// Test
//displayMessage();