const resultsHandler = (() => {
    let sessionResults = {
        totalQuestions: 0,
        rightAnswers: 0,
        falseAnswers: 0,
        intervalAnswers: {
            intervalName: {
                hits: 0,
                misses: 0
            }
        }
    }

    function storeResult(testedInterval, answer) {
        totalQuestions += 1

        if (testedInterval.answer === answer) {
            sessionResults[`${testedInterval.name}`].hits++
                sessionResults.rightAnswers++
        }
        sessionResults[`${testedInterval.name}`].misses++
            sessionResults.falseAnswers++
    }
    return {
        sessionResults,
        storeResult
    }
})()