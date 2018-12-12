// import React from 'react'

const languagesText = {
  bg: {
    welcomePage: {
      welcomeH3: 'Опитвайте и ще успеете! Никой не се е родил научен!!!',
      welcomeH2: 'Добре дошли',
      welcomeP: [],
      exampleTexts: [
        'Задайте време за отговор между 2 и 20 секунди, брой на задачите не по-малък от 2 и изберете поне един интервал върху който да се задават въпроси.',
        'Всеки вид интервал включен в теста дава по 20 точки за верен отговор',
        'Всяка секунда отпусната за отговаряне намалява резултата за верен отговор с 1 точка',
        
        'Пример',
        'Ако тестът включва само малки секунди за всеки отговор ще получите 20 точки минус броя на секундите за отговор. Ако си дадете 15секунди за мислене ви остават по 5 точки за всеки верен отговор.', ' Ако тестът включва малки секунди, малки и големи терци за всеки отговор ще получите по 60 точки минус броя на секундите.',
        'Ако секундите са по 5 за отговор ще получите по 55т. Всеки грешен отговор отнема по толкова точки, колкото се дават за верен отговор.'
      ],
      startButton: ' Да започваме !!! '
    },
    controlForm: {
      inputs: [['timeForAnswer', 'време за отговор'], ['numberOfTasks', 'брой задачи']],
      regimes: {
        title: 'режими',
        options: ['само генериране', 'локално самообучение', 'изпит онлайн игра']
      }
    },
    alerts: {
      alertTime: 'Времето за отговор трябва да е между 2 и 20 секунди!',
      alertTasks: 'Задачите трябва да са поне 2!',
      alertIntervals: 'Трябва да изберете поне един интервал!'
    },
    workPane: {
      workHeader: {
        fromBeginning: 'НОВ ТЕСТ ОТНАЧАЛО',
        sameIntervals: 'НОВ ТЕСТ СЪС СЪЩИТЕ ИНТЕРВАЛИ',
        pointsPerAnswer: 'точки за верен отговор'
      },
      formSummary: {
        userAnswer: 'Не знам'
      },
      conditionArea: {
        taskRemaining: 'Задачи до края',
        pointsAccum: 'Натрупани точки',
        timeRemaining: 'Оставащо време',
        testBegin:'начало на теста'
      },
      testArea: {
        interval:'интервал',
        direction:'посока',
        baseTon:'начален тон',
        nextQuest:'следващ въпрос'
      },
      answerArea:{
        answer:'отговор',
        sendAnswer:'изпращам отговор',
        rightAnswer:'правилен отговор',
        dontKnow:'не знам'
      },
      resultStats: {
        interval: 'интервал',
        rightAnsw: 'Правилни отговори',
        falseAnsw: 'Грешни отговори'
      }
      
    }
  },
  en: {
    welcomePage: {
      welcomeH3: 'Try and you will succeed! No one was born with all knowledge existing !!!',
      welcomeH2: 'Welcome',
      welcomeP: [],
      exampleTexts: [
        'Set a response time between 2 and 20 seconds, a number of tasks of at least 2, and select at least one music interval on which to ask questions.',
        'Each type of interval included in the test gives 20 points for a correct answer',
        'Every second allowed to respond reduces the result for true answer with1 point',
        'Example',
        'If the test involves only a few seconds for each answer, you will get 20 points minus the number of seconds to answer.',
        ' If you give yourself 15 seconds for thinking, you will have 5 points for each correct answer.',
        'If the test includes small seconds, small and large thirds for each answer you will get 60 points minus the number of seconds.',
        'If the seconds are 5 for the answer you will get 55 t. Every wrong answer takes as many points as you can for a faithful answer. '
      ],
      startButton: 'Let\'s Go!!!'
    },
    controlForm: {
      inputs: [['timeForAnswer', 'time for answer'], ['numberOfTasks', 'number of tasks']],
      regimes: {
        regimes: {
          title: 'regimes',
          options: ['only generate', 'local self train', 'exam/online game']
        }
      }
    },
    alerts: {
      alertTime: 'Time for answer must be between 2 and 20 seconds!',
      alertTasks: 'Number of tasks must be at last 2!',
      alertIntervals: 'You have to select at last one interval for test!'
    },
    workPane: {
      workHeader: {
        fromBeginning: 'New Test From Beginning',
        sameIntervals: 'new test with same intervals',
        pointsPerAnswer: 'points per true answer'
      },
      formSummary: {
        userAnswer: 'Don\'t know'
      },
      conditionArea: {
        taskRemaining: 'Tasks Remaining',
        pointsAccum: 'Accumulated Points',
        timeRemaining: 'Time Remaining',
        testBegin:'Begin The Test'
      },
      testArea: {
        interval:'Interval',
        direction:'Direction',
        baseTon:'Base Ton',
        nextQuest:'Next Question'
      },
      answerArea:{
        answer:'answer',
        sendAnswer:'send answer',
        rightAnswer:'Right Answer',
        dontKnow:'Don\'t know'
      },
      resultStats: {
        interval: 'interval',
        rightAnsw: 'Right Answers',
        falseAnsw: 'False Answers'
      }
      
    }
  }
}
export default languagesText
