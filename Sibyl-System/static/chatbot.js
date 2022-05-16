class Chatbox{
    constructor() {
        this.args = {
            textBox: document.querySelector('.text_box'),
            sendMessage: document.querySelector('.send_button')
        }

        this.message = [];
    }

    display() {
        const {textBox, sendMessage} = this.args;

        sendMessage.addEventListener('click', () => this.onSendButton(textBox)) // Checks if the send button is clicked

        const node = textBox.querySelector('input');
        node.addEventListener("keyup", ({key}) => {
            if (key == "Enter"){
                this.onSendButton(textBox)
            }
        })

    }

    onSendButton() {
        var textField = textBox.querySelector('input');
        let text1 = textField.value
        if(text1 === "") {
            return;
        }

        let msg1 = {name: "User", messgae: text1}
        this.messages.push(msg1)

        fetch($SCRIPT_ROOT + '/predict', {
            method: 'POST',
            body: JSON.stringify({messgae: text1}),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'            
            },
        })
        .then(r => r.json())
        .then(r => {
            let msg2 = {name: "Sibyl", message: r.answer};
            this.messages.push(msg2);
            this.updateChatText(chatbox)
            textField.value = ''
        }).catch((error) => {
            console.error('Error:', error);
            this.updateChatText(textBox)
            textField.value = ''
        });
    }

    updateChatText(textBox){
        var html = '';
        this.message.slice().reverse().forEach(function(item, index) {
            if(item.name === "Sibyl"){
                // continue from here
            }
        })    
    }

}