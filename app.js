const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Good Morning Boss...")
    }

    else if(hour>12 && hour<17){
        speak("Good Afternoon Master...")
    }

    else{
        speak("Good Evenining Sir...")
    }

}

window.addEventListener('load', ()=>{
    speak("Initializing JARVIS..");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recognition.start();
})

const sites = [
    ["google", "https://www.google.com"],
    ["youtube", "https://www.youtube.com"],
    ["facebook", "https://www.facebook.com"],
    ["amazon", "https://www.amazon.com"],
    ["wikipedia", "https://www.wikipedia.org"],
    ["twitter", "https://www.twitter.com"],
    ["instagram", "https://www.instagram.com"],
    ["yahoo", "https://www.yahoo.com"],
    ["reddit", "https://www.reddit.com"],
    ["whatsapp", "https://www.whatsapp.com"],
    ["netflix", "https://www.netflix.com"],
    ["linkedin", "https://www.linkedin.com"],
    ["baidu", "https://www.baidu.com"],
    ["twitch", "https://www.twitch.tv"],
    ["microsoft", "https://www.microsoft.com"],
    ["zoom", "https://www.zoom.us"],
    ["ebay", "https://www.ebay.com"],
    ["pinterest", "https://www.pinterest.com"],
    ["apple", "https://www.apple.com"],
    ["quora", "https://www.quora.com"],
    ["imdb", "https://www.imdb.com"],
    ["stack overflow", "https://stackoverflow.com"],
    ["bing", "https://www.bing.com"],
    ["office", "https://www.office.com"],
    ["live", "https://www.live.com"],
    ["adobe", "https://www.adobe.com"],
    ["spotify", "https://www.spotify.com"],
    ["cnn", "https://www.cnn.com"],
    ["bbc", "https://www.bbc.com"],
    ["ny times", "https://www.nytimes.com"],
    ["trello", "https://www.trello.com"],
    ["canva", "https://www.canva.com"],
    ["dropbox", "https://www.dropbox.com"],
    ["wordpress", "https://www.wordpress.com"],
    ["github", "https://www.github.com"],
    ["fandom", "https://www.fandom.com"],
    ["udemy", "https://www.udemy.com"],
    ["coursera", "https://www.coursera.org"],
    ["khan academy", "https://www.khanacademy.org"],
    ["flipkart", "https://www.flipkart.com"],
    ["snapchat", "https://www.snapchat.com"],
    ["tiktok", "https://www.tiktok.com"],
    ["telegram", "https://web.telegram.org"],
    ["hulu", "https://www.hulu.com"],
    ["crunchyroll", "https://www.crunchyroll.com"],
    ["duckduckgo", "https://www.duckduckgo.com"],
    ["indeed", "https://www.indeed.com"],
    ["glassdoor", "https://www.glassdoor.com"],
    ["weather", "https://www.weather.com"],
    ["booking", "https://www.booking.com"],
    ["airbnb", "https://www.airbnb.com"],
    ["zillow", "https://www.zillow.com"],
    ["aliexpress", "https://www.aliexpress.com"],
    ["paypal", "https://www.paypal.com"],
    ["icici bank", "https://www.icicibank.com"],
    ["hdfc bank", "https://www.hdfcbank.com"],
    ["sbi", "https://www.onlinesbi.com"],
    ["irctc", "https://www.irctc.co.in"],
    ["myntra", "https://www.myntra.com"],
    ["jio", "https://www.jio.com"],
    ["airtel", "https://www.airtel.in"],
    ["speedtest", "https://www.speedtest.net"],
    ["w3schools", "https://www.w3schools.com"],
    ["geeksforgeeks", "https://www.geeksforgeeks.org"],
    ["hackerrank", "https://www.hackerrank.com"],
    ["leetcode", "https://www.leetcode.com"],
    ["codeforces", "https://codeforces.com"],
    ["codechef", "https://www.codechef.com"],
    ["replit", "https://www.replit.com"],
    ["gitlab", "https://www.gitlab.com"],
    ["notion", "https://www.notion.so"],
    ["medium", "https://www.medium.com"],
    ["naukri", "https://www.naukri.com"],
    ["times of india", "https://timesofindia.indiatimes.com"],
    ["hindustan times", "https://www.hindustantimes.com"],
    ["ndtv", "https://www.ndtv.com"],
    ["zee news", "https://zeenews.india.com"],
    ["moneycontrol", "https://www.moneycontrol.com"],
    ["tradingview", "https://www.tradingview.com"],
    ["investopedia", "https://www.investopedia.com"],
    ["coinmarketcap", "https://www.coinmarketcap.com"],
    ["binance", "https://www.binance.com"],
    ["coinbase", "https://www.coinbase.com"],
    ["openai", "https://www.openai.com"],
    ["chatgpt", "https://chat.openai.com"],
    ["discord", "https://www.discord.com"],
    ["opera", "https://www.opera.com"],
    ["brave", "https://www.brave.com"],
    ["tor", "https://www.torproject.org"],
    ["wayback machine", "https://archive.org/web"],
    ["archive", "https://www.archive.org"],
    ["ycombinator", "https://www.ycombinator.com"],
    ["product hunt", "https://www.producthunt.com"],
    ["crunchbase", "https://www.crunchbase.com"],
    ["angellist", "https://www.angel.co"],
    ["dribbble", "https://dribbble.com"],
    ["behance", "https://www.behance.net"],
    ["pixabay", "https://www.pixabay.com"],
    ["unsplash", "https://www.unsplash.com"],
    ["pexels", "https://www.pexels.com"],
    ["remove bg", "https://www.remove.bg"],
    ["photopea", "https://www.photopea.com"],
    ["kaggle", "https://www.kaggle.com"],
];

function takeCommand(message){
    if(message.includes('hey') || message.includes('hello')){
        speak("Hello Sir, How May I Help You?");
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }

    else if(message.includes("pakistan ka baap")){
        speak("No doubt, Pakistan ka baap Virat Kohli hai.");
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    }

    else if(message.includes('open ')) {
        // Extract the site name after "open "
        const siteName = message.replace('open ', '').trim();

        // Check against the sites list
        const matchedSite = sites.find(([name, url]) => siteName.includes(name));

        if(matchedSite){
            window.open(matchedSite[1], "_blank");
            speak("Opening " + matchedSite[0]);
        } else {
            window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
            const finalText = "I found some information for " + message + " on Google";
            speak(finalText);
        }
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}
