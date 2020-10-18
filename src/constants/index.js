export const API_ROOT = 'http://localhost:3000/api/v1';
export const API_V1 = 'http://localhost:3000/api/v1';
export const API_WS_ROOT = 'ws://localhost:3000/api/v1/cable';
export const HEADERS = {
    'Content_Type': 'application/json', 
    Accept: 'application/json',
}

export const PROXY = ''
export const SUN = 'http://localhost:3000/api/v1/zodiac'
export const MOON = 'https://cors-anywhere.herokuapp.com/https://zodiacal.herokuapp.com/moon'
export const RISING = 'https://cors-anywhere.herokuapp.com/https://zodiacal.herokuapp.com/rising'
export const SIGN_IMAGES = [
    {
        id: "1", 
        name: "Aries",
        img: "https://www.horoscope.com/images-US/signs/profile-aries.png",
        element: "Fire", 
        cardinality: "Cardinal",
        symbol: "https://i.pinimg.com/originals/a6/84/75/a684751f25557b249f08f50755551a41.png",
        spiritColor: "Red", 
        luckyGem: "Diamond", 
        sunDates: "March 21 - April 19"
    }, 
    {
        id: "2", 
        name: "Taurus",
        img: "https://www.astrorudrani.com/images/taurus.png",
        element: "Earth", 
        cardinality: "Fixed",
        symbol: "https://www.helloastrology.com/wp-content/uploads/taurus.jpg",
        spiritColor: "Pink", 
        luckyGem: "Emerald", 
        sunDates: "April 20 - May 20"

    },  
    {
        id: "3", 
        name: "Gemini",
        img: "https://www.pngarts.com/files/1/Gemini-PNG-Download-Image-1.png",
        element: "Air", 
        cardinality: "Mutable",
        symbol: "https://www.helloastrology.com/wp-content/uploads/gemini-zodiacsign-ink.jpg",
        spiritColor: "Yellow", 
        luckyGem: "Tiger's Eye", 
        sunDates: "May 21 - June 20"

    }, 
    {
        id: "4", 
        name: "Cancer",
        img: "https://grabrightnews.com/wp-content/uploads/2018/08/profile-cancer.png",
        element: "Water", 
        cardinality: "Cardinal",
        symbol: "https://www.stenudd.com/art/images/ink/cancer-zodiacsign-symbol-ink-BIG.jpg",
        spiritColor: "Violet", 
        luckyGem: "Ruby and Pearl", 
        sunDates: "June 21 - July 22"

    }, 
    {
        id: "5", 
        name: "Leo",
        img: "https://www.horoscope.com/images-US/signs/profile-leo.png",
        element: "Fire", 
        cardinality: "Fixed",
        symbol: "https://www.stenudd.com/art/images/ink/leo-zodiacsign-symbol-ink-BIG.jpg",
        spiritColor: "Gold", 
        luckyGem: "Carnelian", 
        sunDates: "July 23 - Aug 22"

    }, 
    {
        id: "6", 
        name: "Virgo",
        img: "https://images.ctfassets.net/nonm77rtn1g8/5H43vn3wbZkLyiGuvkOB4m/2713f4a19fd54e67f369b192b5ebf69a/Virgo_Sign.png",
        element: "Earth", 
        cardinality: "Mutable",
        symbol: "https://t4.ftcdn.net/jpg/02/65/13/29/360_F_265132944_thnDiuoSxtQlrCNpZ15cpkVyw0aJgbzP.jpg",
        spiritColor: "Silver", 
        luckyGem: "Peridot", 
        sunDates: "August 23 - September 22"

    }, 
    {
        id: "7", 
        name: "Libra",
        img: "https://www.psychhub.com.au/wp-content/uploads/2018/08/profile-libra.1-150x150.png",
        element: "Air", 
        cardinality: "Cardinal",
        symbol: "https://www.pngkit.com/png/detail/431-4313764_transparent-background-libra-symbol-png.png",
        spiritColor: "Blue", 
        luckyGem: "Sapphire", 
        sunDates: "September 23 - October 22"

    }, 
    {
        id: "8", 
        name: "Scorpio",
        img: "https://www.psychhub.com.au/wp-content/uploads/2018/08/profile-scorpio.1-150x150.png",
        element: "Water", 
        cardinality: "Fixed",
        symbol: "https://www.completehoroscope.org/images/scorpio-zodiacsign-ink-big.png",
        spiritColor: "Black", 
        luckyGem: "Topaz and Opal", 
        sunDates: "October 23 - November 21"

    }, 
    {
        id: "9", 
        name: "Sagittarius",
        img: "https://www.pngarts.com/files/2/Sagittarius-PNG-Transparent-Image.png",
        element: "Fire", 
        cardinality: "Mutable",
        symbol: "https://i.pinimg.com/originals/d8/86/d5/d886d554a409824aa901c6bd7d2ab98e.png",
        spiritColor: "Light Blue", 
        luckyGem: "Topaz", 
        sunDates: "November 22 - December 21"
        
    }, 
    {
        id: "10", 
        name: "Capricorn",
        img: "https://www.psychhub.com.au/wp-content/uploads/2018/09/profile-capricorn.1-150x150.png",
        element: "Earth", 
        cardinality: "Cardinal",
        symbol: "https://www.stenudd.com/art/images/ink/capricorn-zodiacsign-symbol-ink-BIG.jpg",
        spiritColor: "Dark Blue", 
        luckyGem: "Lapis Lazuli", 
        sunDates: "December 22 - January 19"
        
    }, 
    {
        id: "11", 
        name: "Aquarius",
        img: "https://www.psychhub.com.au/wp-content/uploads/2018/09/profile-aquarius-150x150.png",
        element: "Air", 
        cardinality: "Fixed",
        symbol: "https://www.helloastrology.com/wp-content/uploads/aquarius.jpg",
        spiritColor: "Sky Blue", 
        luckyGem: "Amethyst", 
        sunDates: "January 20 - February 18"
        
    }, 
    {
        id: "12", 
        name: "Pisces",
        img: "https://www.pngkey.com/png/full/82-826985_pisces-facts-pisces-zodiac-sign.png",
        element: "Water", 
        cardinality: "Mutable",
        symbol: "https://cdn11.bigcommerce.com/s-cw8stjd2g1/product_images/uploaded_images/pisces-zodiacsign-ink-big.png",
        spiritColor: "Sea Green", 
        luckyGem: "Moonstone", 
        sunDates: "February 19th - March 20th"
        
    }
  ]

