export const HOST = 'http://localhost:3000/api/v1'
export const API_ROOT = 'http://localhost:3000/api/v1';
export const API_V1 = 'http://localhost:3000/api/v1';
export const API_WS_ROOT = 'ws://localhost:3000/api/v1/cable';
export const HEADERS = {
    'Content_Type': 'application/json', 
    Accept: 'application/json',
}

export const SUN = 'http://localhost:3000/api/v1/zodiac'
export const MOON = 'https://cors-anywhere.herokuapp.com/https://zodiacal.herokuapp.com/moon'
export const RISING = 'https://cors-anywhere.herokuapp.com/https://zodiacal.herokuapp.com/rising'
export const SIGN_IMAGES = [
    {
        id: "1", 
        name: "Aries",
        the: "The Ram",
        img: "https://www.horoscope.com/images-US/signs/profile-aries.png",
        element: "Fire", 
        cardinality: "Cardinal",
        symbol: "https://i.pinimg.com/originals/a6/84/75/a684751f25557b249f08f50755551a41.png",
        spiritColor: "Red", 
        luckyGem: "Diamond", 
        sunDates: "March 21 - April 19", 
        about: "Aries are strong and determined. They are ambitious, assertive, driven, impulsive and loyal and they can achieve whatever they put their mind to."
    }, 
    {
        id: "2", 
        name: "Taurus",
        the: "The Bull",
        img: "https://www.astrorudrani.com/images/taurus.png",
        element: "Earth", 
        cardinality: "Fixed",
        symbol: "https://www.helloastrology.com/wp-content/uploads/taurus.jpg",
        spiritColor: "Pink", 
        luckyGem: "Emerald", 
        sunDates: "April 20 - May 20", 
        about: "Taurus are known for their stability. They are reliable, focused, deliberate and calm and they are known for their inner strength, you can never tell if a Taurus is going through a hard time because they never show it."

    },  
    {
        id: "3", 
        name: "Gemini",
        the: "The Twins", 
        img: "https://www.pngarts.com/files/1/Gemini-PNG-Download-Image-1.png",
        element: "Air", 
        cardinality: "Mutable",
        symbol: "https://www.helloastrology.com/wp-content/uploads/gemini-zodiacsign-ink.jpg",
        spiritColor: "Yellow", 
        luckyGem: "Tiger's Eye", 
        sunDates: "May 21 - June 20",
        about: "Gemini is probably the most sociable and friendliest of all zodiac signs. They are fun, expressive, flexible and affable. Being around them is always delightful and people are always drawn to their bubbly personality."

    }, 
    {
        id: "4", 
        name: "Cancer",
        the: "The Crab",
        img: "https://grabrightnews.com/wp-content/uploads/2018/08/profile-cancer.png",
        element: "Water", 
        cardinality: "Cardinal",
        symbol: "https://www.stenudd.com/art/images/ink/cancer-zodiacsign-symbol-ink-BIG.jpg",
        spiritColor: "Violet", 
        luckyGem: "Ruby and Pearl", 
        sunDates: "June 21 - July 22", 
        about: "Emotional, sentimental and nurturing, they are known for their kind and gentle hearts and their ability to take the high road in challenging situations. They are wise and honest and they forgive all the time."

    }, 
    {
        id: "5", 
        name: "Leo",
        the: "The Lion",
        img: "https://www.horoscope.com/images-US/signs/profile-leo.png",
        element: "Fire", 
        cardinality: "Fixed",
        symbol: "https://www.stenudd.com/art/images/ink/leo-zodiacsign-symbol-ink-BIG.jpg",
        spiritColor: "Gold", 
        luckyGem: "Carnelian", 
        sunDates: "July 23 - Aug 22", 
        about: "Leos are born to rule the world. They are confident, charismatic, fearless and love being the center of attention. They know they are the best and are determined enough to prove it to the whole world. They know how to shine no matter how many people try to bring them down."

    }, 
    {
        id: "6", 
        name: "Virgo",
        the: "The Virgin",
        img: "https://images.ctfassets.net/nonm77rtn1g8/5H43vn3wbZkLyiGuvkOB4m/2713f4a19fd54e67f369b192b5ebf69a/Virgo_Sign.png",
        element: "Earth", 
        cardinality: "Mutable",
        symbol: "https://t4.ftcdn.net/jpg/02/65/13/29/360_F_265132944_thnDiuoSxtQlrCNpZ15cpkVyw0aJgbzP.jpg",
        spiritColor: "Silver", 
        luckyGem: "Peridot", 
        sunDates: "Aug 23 - Sept 22", 
        about: "Virgos are very perceptive and analytical. They are very practical and they like to solve problems. They know that they can help those who can’t help themselves and they try their best to be there for everyone because they know that they will find the solution to any problem."

    }, 
    {
        id: "7", 
        name: "Libra",
        the: "The Scales",
        img: "https://www.psychhub.com.au/wp-content/uploads/2018/08/profile-libra.1-150x150.png",
        element: "Air", 
        cardinality: "Cardinal",
        symbol: "https://www.pngkit.com/png/detail/431-4313764_transparent-background-libra-symbol-png.png",
        spiritColor: "Blue", 
        luckyGem: "Sapphire", 
        sunDates: "Sept 23 - Oct 22", 
        about: "Libras are peaceful, loving, caring and affectionate. They are well-balanced, diplomatic and cooperative. They definitely make others feel at ease around them and they are always looking out for those they love and see the best in people."

    }, 
    {
        id: "8", 
        name: "Scorpio",
        the: "The Scorpion",
        img: "https://www.psychhub.com.au/wp-content/uploads/2018/08/profile-scorpio.1-150x150.png",
        element: "Water", 
        cardinality: "Fixed",
        symbol: "https://www.completehoroscope.org/images/scorpio-zodiacsign-ink-big.png",
        spiritColor: "Black", 
        luckyGem: "Topaz and Opal", 
        sunDates: "Oct 23 - Nov 21", 
        about: "Scorpios are super intelligent, intuitive and ambitious. They are very attractive passionate, and intense individuals. They know how to succeed in life and they always leave an impact wherever they go. They truly have it all."

    }, 
    {
        id: "9", 
        name: "Sagittarius",
        the: "The Centaur or Archer",
        img: "https://www.pngarts.com/files/2/Sagittarius-PNG-Transparent-Image.png",
        element: "Fire", 
        cardinality: "Mutable",
        symbol: "https://i.pinimg.com/originals/d8/86/d5/d886d554a409824aa901c6bd7d2ab98e.png",
        spiritColor: "Light Blue", 
        luckyGem: "Topaz", 
        sunDates: "Nov 22 - Dec 21", 
        about: "Sagittarians are energetic, adventurous and exciting. They like to live to the fullest and are not afraid of taking risks. They love traveling and learning and hate being trapped in one place."
        
    }, 
    {
        id: "10", 
        name: "Capricorn",
        the: "The Sea-Goat",
        img: "https://www.psychhub.com.au/wp-content/uploads/2018/09/profile-capricorn.1-150x150.png",
        element: "Earth", 
        cardinality: "Cardinal",
        symbol: "https://www.stenudd.com/art/images/ink/capricorn-zodiacsign-symbol-ink-BIG.jpg",
        spiritColor: "Dark Blue", 
        luckyGem: "Lapis Lazuli", 
        sunDates: "Dec 22 - Jan 19", 
        about: "Capricorns are patient, hard-working, shrewd, and sophisticated. They appreciate the finer things in life and they love to surround themselves with a few close friends. They are very devoted and faithful."
        
    }, 
    {
        id: "11", 
        name: "Aquarius",
        the: "Water-Bearer",
        img: "https://www.psychhub.com.au/wp-content/uploads/2018/09/profile-aquarius-150x150.png",
        element: "Air", 
        cardinality: "Fixed",
        symbol: "https://www.helloastrology.com/wp-content/uploads/aquarius.jpg",
        spiritColor: "Sky Blue", 
        luckyGem: "Amethyst", 
        sunDates: "Jan 20 - Feb 18",
        about: "Aquarians are creative, witty, and revolutionary. They are unconventional and dynamic and they are fixers. They are always trying to fix people, fix themselves or fix the world. They have big hearts and they care about the world and healing people."
        
    }, 
    {
        id: "12", 
        name: "Pisces",
        the: "The Fish",
        img: "https://www.pngkey.com/png/full/82-826985_pisces-facts-pisces-zodiac-sign.png",
        element: "Water", 
        cardinality: "Mutable",
        symbol: "https://cdn11.bigcommerce.com/s-cw8stjd2g1/product_images/uploaded_images/pisces-zodiacsign-ink-big.png",
        spiritColor: "Sea Green", 
        luckyGem: "Moonstone", 
        sunDates: "Feb 19 - March 20", 
        about: "They are imaginative, sensual and romantic. They are also sensitive to the needs of others and are very compassionate. They always feel things so deeply and they are always giving without expecting anything in return. They are easily moved by stories and inspired by people."
        
    }
  ]

