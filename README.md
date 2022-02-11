# MatriculaBot_MK0.1
 Earliest functional version of the Whatsapp chatbot. All the conversation is set on Brazilian Portuguese.
 This chatbot uses the API venom-bot to connect to Whatsapp, and simulates a conversation wich aims to collect data for registration at IFMA - Campus Santa Inês (academic   institution). 
 
 The API documentation can be found here: https://orkestral.github.io/venom/index.html
 
 To run the project simply use 'node MatriculaBot_MK0.1' through the terminal on the folder you downloaded this repositorie. Make sure you have the updated node version installed, so it can use the import instead of require.
 
 //-------- How the chatbot works --------//
 
 The API venom is used to connect to Whatsapp only, so it is installed on the main folder, where it is used on the Main.js file.
 The IA folder contains my developed chatting system. This is the earlieast functional version, so note that it has to be improved a lot. The system basically breaks all the conversation, wich has to be planned on all the details (this chatbot does not use machine learning to improve), on blocks and steps.
 A block contains multiple steps, and each step can proceed to the next untill the block is finished, which is when the next block is called.
 
 This chatbot also uses a tags system, wich basically refers to a key info that can be found within a received message. All the tags are symbolized by \~tag\~, which holds the tag name. For instance, the tag \~cpf\~ represents a 11 digit code that every Brazilian citizen has, it means the equivalent of individual registration.
 
 On this 0.1 version, the system is working fully sequential, so a step cannot have multiple paths (YET). The registered steps are also very limited for now, althoguh the system is prepared for some minor expansion. You can add your own steps following the example:
 
 chat.chatBlocks[num].fullSteps = ([new ChatStep(msg, fullfill, act, comesFrom, defans, final)])
 
 ChatStep paramaters:
 - msg: It's an array of strings, refers to the messages that are sent as soon as the step is reached;
 - fullfill: Tag that specify how this step can progress, how it can be fullfilled;
 - comesFrom: Tells the id of the previous step;
 - defans: Default response, it's the message the bot sends when it can't understand what the user said. If not specified for a given step, the bot sends another default answer, wich can found on the messages.js file;
 - final: Boolean, if it's true, it symbolizes that the given step is the last of the block it is on.
 
 Note that the parameter for the fullSteps is an array, so you can add multiple steps at once.
 
 //---------------------------------------//
 
This project build was finished on 12/20/2021, newer builds are being worked on since 01/05/2022. 
