import React, {useEffect, useState} from 'react'

export default function MiniGame() {
    function timeout(delay) { return new Promise( res => setTimeout(res, delay) ); }
    const [message, setMessage] = useState('');
    const [result, setResult] = useState("")

    useEffect(() => {
        const startGame = async () => {
            console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
            console.log("%cYou finally came here.\nI've been waiting for you for x.\nWe have little bit problem, someone sole important code from this website, can you please help us?", "color: #0daad1; font-size: 15px")
            console.log("%cFirst of all, you have to find hidden input and enter this code: \"Njk0MjAg\" it wont be easy so I allowed you developer tools.\nGood luck. :D", "color: #0daad1; font-size: 15px")
        }
        startGame()
    }, [])


    useEffect(() => {
        if (message === "Njk0MjAg") {
            console.log("%cOK, I can give you your code back.\nBUT it will be encrypted.\nHere is it: \"3c68313e436f6e67726174756c6174696f6e733c2f68313e3c68333e5468616e6b20796f7520666f722068656c70696e6720757320746f20676574207468697320636f64653c2f68333e3c703e4e6f7720707574207468697320636f646520696e20746f2074686520696e70757420626f78207468617420796f7520666f756e64206265666f72652e596f757220746f6d6969732e3c2f703e\"\nYou thought it will be easy to get your code back, right?\n     -Your hacker Kyngpin", "color: #09ff00; font-size: 15px" )
        }

    })
    
    const checkEnd = (event) => {        
        setMessage(event.target.value);

        if (message == "<h1>Congratulations</h1><h3>Thank you for helping us to get this code</h3><p>Now put this code in to the input box that you found before.Your tomiis.</p>") {
            console.log("%cThank you so much for playing this \"minigame\":D\nIf you are reading this. You can screenshot it and send it to me. Have nice day. ;D", "color: yellow; font-size: 15px")

            setResult(
                <div className="win-corner">
                    <img src="https://i.pinimg.com/originals/41/36/16/41361625cc44df07f81a620eac766468.png" alt="cup" />
                </div>
            )
        }
    }

    return (
        <>
            <input type="text" name="Hidden Text :P" id="hidden-input-eyes" onInput={checkEnd} value={message} />
            {result}
        </>
    )
}
