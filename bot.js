const { Telegraf } = require('telegram')
const bot_token = '1120555446:AAEhBpUYy8sIXuu0QlFz5-YpMYNJBWx0hU0'
const bot = new Telegraf(bot_token)

//import routes
const greetings = require('./conversation data/greetings')


bot.hears('start',(ctx)=>{
    const getMessage = ctx.chat
    const name = ctx.chat.username
    const negativeReplys = [
        'no','No','no thanks','na','nah','Nah'
    ]

    ctx.reply("Hi! I'm gr3y😊. May i know What your name is please?")
    if (getMessage) {
        ctx.reply(`It's a pleasure to meet you ${name}😊. And by the way, you seem like a very nice person. would you be my friend?`)
    } else if(getMessage === negativeReplys) {
        ctx.reply("😞What's the exact reason though?")
    }
})

bot.hears(greetings, async (ctx)=>{
  try {
         const message = ['How are you feeling today?','Do you want to talk about it?']
    const badFeeling = ['not so good',"i'm not so good",'im not so good',"I'm not so good",]
    const goodFeeling = []
    const getMessage = ctx.chat
    
    if(getMessage.includes(badFeeling)){
        ctx.reply(message[1])
    }else if(getMessage.includes(goodFeeling)){
        ctx.reply("That's great!😁 i'm glad that you're.")
   }else{
        ctx.reply(message[0])
   }
  } catch (error) {
      ctx.reply('Sorry i dont understand😪! Could you please rephrase what you texted👏?')
  }
})

bot.hears('start',(ctx)=>{
    
})

bot.hears('start',(ctx)=>{
    
})

bot.hears('start',(ctx)=>{
    
})

bot.hears('start',(ctx)=>{
    
})


bot.launch()