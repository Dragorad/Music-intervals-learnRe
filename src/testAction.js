let testArr = [
    {
        answer: "Eis - 1",
        baseTone: "Dis - 2",
        baseToneIdx: 19,
        direction: "down",
        name: "малка септима",
        position: 20,
        semitones: 10,
        value: "6"
    },
    {
        answer: "C - 3",
        baseTone: "Des - 2",
        baseToneIdx: 22,
        direction: "up",
        name: "голяма септима",
        position: 18,
        semitones: 11,
        value: "6"
    }, {

        answer: "Dis - 1",
        baseTone: "Cis - 2",
        baseToneIdx: 19,
        direction: "down",
        name: "малка септима",
        position: 18,
        semitones: 10,
        value: "6"
    }
]
const testAction = (() => {
        function playBaseTone() {

        }

        function displayBasetone(intervalObj) {
            return this.baseTone
        }

        function countdown(secCount, seconds, ctx, intervalObj) {
            setTimeout(function timer() {
                console.log(secCount)
                ctx.rightAnswer = intervalObj.answer
                seconds.text(secCount)
                secCount = Number(seconds.text())
                secCount--
                if (secCount >= 0) {
                    setTimeout(timer, 500)
                } else {
                    clearTimeout(timer)
                    seconds.css('color', 'red')
                    $('.right-answer').show()
                    // $('svg ').css('background-color','red')
                    return
                }
            }, 500)

        }

        //https://stackoverflow.com/questions/17246275/settimeout-and-array-each
        function showAnswer(array, delegate, delay) {
            let i = 0

            // seed first call and store interval (to clear later)
            let interval = setInterval(function () {
                // each loop, call passed in function
                delegate(array[i])

                // increment, and if we're past array, clear interval
                if (i++ >= array.length - 1)
                    clearInterval(interval)
            }, delay)

            return interval
        }

        let arrIdx = 0

        function answeringTestArr(testArr) {
            return testArr[arrIdx++]
        }

        function displayAnswer(interval, testArr) {
            let idx = 0
            setInterval(testAction.answering.bind(testArr)), interval
        }

        return {
            displayAnswer,
            answeringTestArr,
            playBaseTone,
            displayBasetone,
            countdown,
            showAnswer
        }
    }

)()
