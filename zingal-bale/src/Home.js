import { useState} from "react";

export default function Home() {
    
    const emojiDictionary = {
        "🎄": "Christmas Tree",
        "🎅": "Santa Claus",
        "🦌": "Reindeer",
        "🎁": "Gift",
        "❄️": "Snowflake",
        "☃️": "Snowman",
        "🍪": "Cookie",
        "🕯️": "Candle",
        "🔔": "Bells",
        "🎀": "Ribbon",
        "🎉": "Party",
      };

      const [emoji, setEmoji] = useState('');
    //   const [message, setMessage] = useState('');

    /*const handleClick = event => {
        setMessage(emojiDictionary[event.target.getAttribute('value')])
        setEmoji(event.target.getAttribute('value'));
      };
      const items = Object.keys(emojiDictionary).map(key => (
        <li value={emojiDictionary[key]} key={key} onClick={handleClick}>{key}: {emojiDictionary[key]}</li>
      ));
      

        const handleChange = event => {
            // setMessage(event.target.value);
            setMessage(emojiDictionary[event.target.getAttribute('value')])
            setEmoji(event.target.getAttribute('value'));
        };*/

        function setEmojiEvent(imojiName){
            setEmoji(imojiName)
        }

    return (
        <div id="wrapper">
            <header>
                <h1>Jingle Bell</h1>
            </header>

            <main>
                <h2>Type your emoji here to know its meaning</h2>
                <div className="inputFrm">
                    <input type="text" id="message" name="message" onChange={(e) => setEmojiEvent(e.target.value)}  onPaste={(e) => setEmojiEvent(e.target.value)} value={emoji} />
                    <div id="meaning">{emojiDictionary[emoji]? emojiDictionary[emoji] : 'Emoji not found'}</div>
                    <p>Click on emoji to know its meaning</p>
                    <div className="imojis">
                        <ul>
                        {Object.keys(emojiDictionary).map(key => (
                            <li value={emojiDictionary[key]} key={key} onClick={()=>setEmojiEvent(key)}>{key}</li>
                        ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}