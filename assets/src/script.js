setInterval(setClock, 9000)

function setClock(){
    const currentDate = new Date()
    const currHour = currentDate.getHours() 
    const currMinute = currentDate.getMinutes() 
    const stringOfcurrMinute = currMinute.toString()
    const stringOfcurrHour = currHour.toString()


    //conditionals for when hour or minute length is one(a single number)
  if (stringOfcurrMinute.length === 1 && stringOfcurrHour.length === 1){
      var  stringOfcurrMinuteNow = '0'+ stringOfcurrMinute;
      var  stringOfcurrHourNow = '0'+ stringOfcurrHour;
      var   currTime = `${stringOfcurrHourNow}:${stringOfcurrMinuteNow}`
      const h1 = document.getElementById('h1')
      h1.innerText = currTime
    }
    else if (stringOfcurrHour.length === 1){
          var  stringOfcurrHourNow = '0'+ stringOfcurrHour;
          var   currTime = `${stringOfcurrHourNow}:${stringOfcurrMinute}`
          const h1 = document.getElementById('h1')
           h1.innerText = currTime
    }
    else if (stringOfcurrMinute.length === 1){
      var  stringOfcurrMinuteNow = '0'+ stringOfcurrMinute;
      var   currTime = `${stringOfcurrHour}:${stringOfcurrMinuteNow}`
      const h1 = document.getElementById('h1')
       h1.innerText = currTime
    }
    else{
        var   currTime = `${stringOfcurrHour}:${stringOfcurrMinute}`
        const h1 = document.getElementById('h1')
        h1.innerText = currTime
    }
   
    
// conditionals for greetings 
    if (currHour > 17){
      const  night = document.body;
      var white = document.getElementById('white');
      const greeting = document.getElementById('greeting');
      night.style.backgroundImage = 'url("assets/style/images/night.jpg")'
      white.style.backgroundColor = 'rgba(5, 34, 58, 0.788)' 
      greeting.innerHTML = '<i class="fa fa fa-moon"></i>' + '<span class = "greeting"> GOOD EVENING, IT\'S CURRENTLY</span>'
      var i = document.querySelectorAll('.smallText-1');
      var k = document.querySelectorAll('.smallText-2');

      i.forEach((elem) =>{

        elem.style.color = 'white'
      }
      )

      k.forEach((elem) =>{

        elem.style.color = 'white'
      }
      )
     
    }

    else if (currHour < 18 && currHour > 11){
        const greeting = document.getElementById('greeting');
        greeting.innerHTML = '<i class="fa fa fa-sun"></i>' + '<span class = "greeting"> GOOD AFTERNOON, IT\'S CURRENTLY</span>'
    }

    else{
        const greeting = document.getElementById('greeting');
        greeting.innerHTML = '<i class="fa fa fa-sun"></i>' + '<span class = "greeting"> GOOD MORNING, IT\'S CURRENTLY</span>'
    }

   

    //to get current time zone
   const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
   const zone = document.getElementById('zone')
   const zone2 = document.getElementById('zone2')
    
   zone.innerText = ` In ${timezone}`
   zone2.innerText = timezone

    //to get gmt
   const date = new Date();
   var gmt = `${ date}`.split(" ")[5]
   var GMT2 =  gmt.substring(0,3)
   var gmtElement = document.querySelector('#GMT')
   gmtElement.textContent = `${GMT2}`


    //day of the year
    const dayOfTheYear = document.getElementById('dayOfTheYear');
    
    var start = new Date(currentDate.getFullYear(), 0, 0);
    var diff = (currentDate - start) + ((start.getTimezoneOffset() - currentDate.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    dayOfTheYear.innerText = day
   
    
    //day of d week
    const dayOfTheWeek = document.getElementById('dayOfTheWeek');
    var currWeekDay = currentDate.getDay()
    dayOfTheWeek.innerHTML = currWeekDay

    //week of d year
    const weekNumber = document.getElementById('weekNumber');
    Date.prototype.getWeek = function () {
            var target  = new Date(this.valueOf());
            var Today   = (this.getDay() + 6) % 7;
            target.setDate(target.getDate() - Today + 3);
            var firstThursday = target.valueOf();
            target.setMonth(0, 1);
            if (target.getDay() != 4) {
                target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
            }
            return 1 + Math.ceil((firstThursday - target) / 604800000);
        }

        weekNumber.innerHTML = currentDate.getWeek()
    
}

setClock()



var btn = document.getElementById('btn');
var white = document.getElementById('white');
var firstDiv = document.getElementById('first');

btn.onclick = function () {
    if (white.className == 'open'){
        //shrink
        white.className = ''
        btn.innerHTML= 'More  <i class="fa fa fa-chevron-circle-down"></i>';
        firstDiv.style.display = 'flex'

    }
    
    else{
        //expand
        white.className = 'open';
        btn.innerHTML= 'Less  <i class="fa fa fa-chevron-circle-up"></i>';
        firstDiv.style.display = 'none'
    }
}





//tech Quotes
const Quotes = [
                    { quote:'"Technology is best when it brings people together."',
                      person :'Matt Mullenweg, Social Media Entrepreneur'},

                    {quote:'"It has become appallingly obvious that our technology has exceeded our humanity."',
                     person :'Albert Einstein, Scientist'
                    },

                    {quote:'"It is only when they go wrong that machines remind you how powerful they are."',
                    person :'Clive James, Broadcaster and Journalist. '},

                    {quote:'"The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past."',
                     person :'Tim Berners-Lee, Inventor of the World Wide Web.'},

                    {quote:'"If it keeps up, man will atrophy all his limbs but the push-button finger."',
                    person :'Frank Lloyd Wright, Architect'},

                    {quote:'"Once a new technology rolls over you, if you\'re not part of the steamroller, you\'re part of the road."',
                    person :'Stewart Brand, Writer'},

                    {quote:'"It\'s not a faith in technology. It\'s faith in people."',
                    person :'Steve Jobs, Co-founder of Apple.'},

                    {quote:'"Technology is a useful servant but a dangerous master."',
                    person :'Christian Lous Lange, Historian'},

                    {quote:'"The advance of technology is based on making it fit in so that you don\'t really even notice it, so it\'s part of everyday life."',
                    person :'Bill Gates, Co-founder of Microsoft.'},

]

    const quote = document.getElementById('quote');
    const person = document.getElementById('person');
    const refreshBtn = document.getElementById('refresh');

      refreshBtn.addEventListener('click', () => {
        let  currItem = Math.floor(Math.random() * Quotes.length)
          const item = Quotes[currItem]
          quote.textContent = item.quote
          person.textContent = item.person

      });  