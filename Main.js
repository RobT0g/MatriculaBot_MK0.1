import { create, Whatsapp } from 'venom-bot';               //API
import { TextSender } from './API_Utils.js';                //Funcionalidade para API
import { Message, DataBase, User } from './IA/Utils.js';    //Funcinalidades próprias

var data = new DataBase()               //Onde os usuários são mantidos🙂

create({                                //Criação do cliente (rever como exportar o qr code depois)
    session: 'Bot-Matrícula', 
    multidevice: false 
  }).then((client) => start(client)).catch((erro) => {
    console.log(erro);
  });

async function start(client) {
    client.onMessage((message) => {         //Executada sempre que é recebido uma mensagem
        try{
            let id = message.from
            if (!(data.users[id])){               //Confere se é um usuário novo e dá as boas vindas
                data.registerUser = new User(id)
                TextSender.delivText(data.newMessage(new Message(message.body, message.type), id, true), id, client)
                return
            }
            if (TextSender.notText(message, id, client)){                           //Avisa o usuário se receber não texto
                return
            }
            TextSender.delivText(data.newMessage(new Message(message.body, message.type), id), id, client)    //Localiza o usário dentro do fluxo e o guia
        } catch(err){
            console.log(err)
            console.log(message.body)
        }
    });
}