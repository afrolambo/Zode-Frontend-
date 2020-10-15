import React from 'react'
import CompatibleSigns from './CompatibleSigns'
import {SUN} from '../constants'
import {Redirect} from 'react-router-dom'



class SignInfo extends React.Component {
    
    state ={
        currentSign: {},
        signs: [], 
        compatibility: [],
        zodiacImg: [
            {
                id: "1", 
                name: "Aries",
                img: "https://www.horoscope.com/images-US/signs/profile-aries.png",
            }, 
            {
                id: "2", 
                name: "Taurus",
                img: "https://www.astrorudrani.com/images/taurus.png",
            },  
            {
                id: "3", 
                name: "Gemini",
                img: "https://www.pngarts.com/files/1/Gemini-PNG-Download-Image-1.png",
            }, 
            {
                id: "4", 
                name: "Cancer",
                img: "https://grabrightnews.com/wp-content/uploads/2018/08/profile-cancer.png",
            }, 
            {
                id: "5", 
                name: "Leo",
                img: "https://www.horoscope.com/images-US/signs/profile-leo.png",
            }, 
            {
                id: "6", 
                name: "Virgo",
                img: "https://images.ctfassets.net/nonm77rtn1g8/5H43vn3wbZkLyiGuvkOB4m/2713f4a19fd54e67f369b192b5ebf69a/Virgo_Sign.png",
            }, 
            {
                id: "7", 
                name: "Libra",
                img: "https://www.psychhub.com.au/wp-content/uploads/2018/08/profile-libra.1-150x150.png",
            }, 
            {
                id: "8", 
                name: "Scorpio",
                img: "https://www.psychhub.com.au/wp-content/uploads/2018/08/profile-scorpio.1-150x150.png",
            }, 
            {
                id: "9", 
                name: "Sagittarius",
                img: "https://www.pngarts.com/files/2/Sagittarius-PNG-Transparent-Image.png",
            }, 
            {
                id: "10", 
                name: "Capricorn",
                img: "https://www.psychhub.com.au/wp-content/uploads/2018/09/profile-capricorn.1-150x150.png",
            }, 
            {
                id: "11", 
                name: "Aquarius",
                img: "https://www.psychhub.com.au/wp-content/uploads/2018/09/profile-aquarius-150x150.png",
            }, 
            {
                id: "12", 
                name: "Pisces",
                img: "https://www.pngkey.com/png/full/82-826985_pisces-facts-pisces-zodiac-sign.png",
            }
          ]
    
    }

    async componentDidMount(){
        fetch(SUN)
        .then(resp => resp.json())
        .then(data => 

            this.setState({
                signs: data,
                currentSign: data.find(sign => sign.name.toLowerCase() === this.props.match.params.zodiacName),
            })
        
            )
    }

    findImg = () => {
        let image = this.state.zodiacImg.find(img => this.props.match.params.zodiacName === img.name.toLowerCase())
        return image
    }

    getCompatibility = () => {
        [this.state.currentSign.compatibility].map((sign, index) => <CompatibleSigns key={index} sign={sign} image={this.state.zodiacImg}/>)
    }
    

    render() {
        let sign = this.state.currentSign
        let image = this.findImg()

        // let compatibility = this.state.currentSign.compatibility
        // console.log(this.props.match.params)
        console.log(sign)
//bad_traits, body_parts, cardinality: compatibility: element: famous_people: 
    // favorites: good_traits: hates: how_to_spot: keywords: mental_traits: 
    // name: "Taurus"physical_traits: ruling_planet: secret_wish: sun_dates: 
    // symbol: vibe: 
        return (
            <div>
                <h1>{image.name} </h1>
                <div>
                    <img src={image.img} />
                </div>

                <h2>Element: {sign.element}</h2>
                <div>
                Compatible Signs: 
                {this.getCompatibility()}
                </div>
                <button>Back to Signs</button>
            </div>
        )
    }
}

export default SignInfo