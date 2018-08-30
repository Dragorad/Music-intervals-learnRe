// keyboard
const muzWorker = (() => {
        // const keyboard = $.get("views/cdr-view/keyboard3.svg")


        const keyboardPositions = 34
        const scale = {
            keys: {
                0: ['C', 'His'],
                1: ['Cis', 'Des'],
                2: ['D', 'Cisis'],
                3: ['Dis', 'Es'],
                4: ['E', 'Fes'],
                5: ['F', 'Eis'],
                6: ['Fis', 'Ges'],
                7: ['G', 'Fisis'],
                8: ['Gis', 'As'],
                9: ['A', 'Heses'],
                10: ['Ais', 'B', 'Hes'],
                11: ['H', 'Ces']
            },
            octaves: ['LITTLE', '1', '2', '3'],
            tones: ['C', 'D', 'E', 'F', 'G', 'A', 'H'],

        }
        let baseTonsArr = []
        for (const octave of scale.octaves) {
            let pianoKeys = ['C', ['Cis', 'Des'], 'D', ['Dis', 'Es'], 'E', 'F', ['Fis', 'Ges'],
                'G', ['Gis', 'As'], 'A', ['Ais', 'B'], 'H'
            ]

            for (let i = 0; i < pianoKeys.length; i++) {

                let baseToneName = ""
                if (Array.isArray(pianoKeys[i])) {
                    let tempIdx = _getRandomInt(0, 2)
                    baseToneName = pianoKeys[i][tempIdx]
                } else {
                    baseToneName = pianoKeys[i]
                }

                let baseToneString = [pianoKeys[i], octave]
                baseTonsArr.push(baseToneString)
            }
        }
        baseTonsArr = baseTonsArr.slice(7, -7)

        const intervals = {
            unison: {
                idx: 0,
                name: {
                    bg: 'прима',
                    en: "perfect-unison"
                },
                semitones: 0
            },
            secondMinor: {
                idx: 1,
                name: {
                    bg: 'малка секунда',
                    en: 'minor second'
                },
                semitones: 1
            },
            secondMajor: {
                idx: 1,
                name: {
                    bg: 'голяма секунда',
                    en: 'major second'
                },
                semitones: 2
            },
            thirdMinor: {
                idx: 2,
                name: {
                    bg: 'малка терца',
                    en: 'minor third'
                },
                semitones: 3
            },
            thirdMajor: {
                idx: 2,
                name: {
                    bg: 'голяма терца',
                    en: 'major third'
                },
                semitones: 4
            },
            fourthPerfect: {
                idx: 3,
                name: {
                    bg: 'чиста кварта',
                    en: 'perfect fourth'
                },
                semitones: 5
            },
            fourthAug: {
                idx: 3,
                name: {
                    bg: 'увеличена кварта',
                    en: 'augmented fourth'
                },
                semitones: 6
            },
            fifthDiminished: {
                idx: 4,
                name: {
                    bg: 'умалена квинта',
                    en: 'diminished-fifth'
                },
                semitones: 6
            },
            fifthPerfect: {
                idx: 4,
                name: {
                    bg: 'чиста квинта',
                    en: 'perfect fifth'
                },
                semitones: 7
            },
            sixthMinor: {
                idx: 5,
                name: {
                    bg: 'малка секста',
                    en: 'minor sixth'
                },
                semitones: 8
            },
            sixthMajor: {
                idx: 5,
                name: {
                    bg: 'голяма секста',
                    en: 'major sixth'
                },
                semitones: 9
            },
            seventhMinor: {
                idx: 6,
                name: {
                    bg: 'малка септима',
                    en: 'minor seventh'
                },
                semitones: 10
            },
            seventhMajor: {
                idx: 6,
                name: {
                    bg: 'голяма септима',
                    en: 'major seventh'
                },
                semitones: 11
            },
            octave: {
                idx: 7,
                name: {
                    bg: 'чиста октава',
                    en: 'pure octave'
                },
                semitones: 12
            },
        }

        function findByName(obj, propString) {
            let result = []
            for (let p in obj) {
                if (obj[p] == propString) {
                    result = [p, obj[p]]
                    return result
                } else {

                    if (Array.isArray(obj[p]) && obj[p].includes(propString)) {
                        result = [p, obj[p]]
                        return result
                    }
                    if (typeof(obj[p]) === 'object') {
                        result = findByName(obj[p], propString)
                    }
                }

            }
            return result
        }

        function generateAnswer(intervalObj) {
            let toneStr = intervalObj.baseTone
            let [toneName, octave] = toneStr.split(' - ')
            let tone = toneStr.split(' - ')[0].slice(0, 1)
            let answerLetter = ''
            let answerArr = []
            let answerKey = ''
            if (toneName === "B") {
                answerKey = [10, scale.keys[10]]
            } else {
                answerKey = findByName(scale.keys, toneName)
            }
            let ansKeyIdx = Number(answerKey[0])
            let octaveIdx = scale.octaves.indexOf(octave)
            let answerLetterIdx = ''

            if (intervalObj.direction == 'down') {
                answerLetterIdx = (scale.tones.findIndex((e) => e == tone) - Number(intervalObj.value)) % 7
                ansKeyIdx = Number(ansKeyIdx) - Number(intervalObj.semitones)
                if (ansKeyIdx < 0) {
                    octaveIdx = scale.octaves.indexOf(octave) - 1
                    ansKeyIdx += 12
                }


            } else {
                answerLetterIdx = (scale.tones.findIndex((e) => e == tone) + Number(intervalObj.value)) % 7
                ansKeyIdx = Number(ansKeyIdx) + Number(intervalObj.semitones)
                if (ansKeyIdx > 11) {
                    octaveIdx = scale.octaves.indexOf(octave) + 1
                    ansKeyIdx -= 12
                }
            }
            answerArr = scale.keys[ansKeyIdx]
            answerLetter = (scale.tones).slice(answerLetterIdx)[0]
            let resultTone = answerArr.find(key => key.substring(0, 1) === answerLetter)
            if (resultTone == 'Hes') {
                resultTone = "B"
            }
            let resultString = resultTone + ' - ' + scale.octaves[octaveIdx]
            return resultString
        }

        function _getRandomInt(min, max) {
            min = Math.ceil(min)
            max = Math.floor(max)
            return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
        }

        function generateBasePos(intervalObj) {
            let semitones = intervalObj.semitones
            let direction = intervalObj.direction
            let baseTonIndex = 0
            if (direction === 'up') {
                baseTonIndex = _getRandomInt(0, (keyboardPositions - semitones + 1))
            } else {
                baseTonIndex = _getRandomInt(semitones, keyboardPositions + 1)
            }

            return baseTonIndex

        }

        function generateTestArr(inputIntervalsArr, testCount) {
            let targetIntervals = inputIntervalsArr

            let testArr = []
            let tested = []
            let currentInterval = {}
            let directions = ['down', 'up']
            for (let i = 0; i < testCount; i++) {
                let idx = _getRandomInt(0, targetIntervals.length)
                currentInterval = (targetIntervals.splice(idx, 1))[0]
                let intervalsKeys = Object.values(muzWorker.intervals)
                let semitones = intervalsKeys.find(e => e.name.bg == currentInterval.name).semitones
                tested.push(currentInterval)
                currentInterval.semitones = Number(semitones)
                currentInterval.baseToneIdx = generateBasePos(currentInterval)
                testArr.push(currentInterval)
                if (targetIntervals.length == 0) {
                    targetIntervals = tested
                    tested = []
                }
            }
            let newTestArr = testArr.map(function (e) {
                let e1 = JSON.parse(JSON.stringify(e))
                let modifier = directions[(_getRandomInt(0, 2))]
                e1.direction = modifier
                e1.position = generateBasePos(e1)
                return e1
            })
            return newTestArr
        }

        function getBaseTonId(intervalObj) {
            // let elements = $(`[position = ${intervalObj.position}]`).toArray()
            // if (intervalObj.direction == 'up') {
            //     intervalObj.id = $(elements[0]).attr('id')
            // } else {
            //     intervalObj.id = $(elements.pop()).attr('id')
            // }
            // let path = $(`#${intervalObj.id}`)
            let baseTonName = baseTonsArr[intervalObj.position]
            let bassName = baseTonName[0]
            if (Array.isArray(baseTonName[0])) {
                bassName = baseTonName[0]
                bassName = bassName[_getRandomInt(0, 2)]
            }

            // let baseTonName = path.children().text()
            let octave = baseTonsArr[intervalObj.position][1]
            intervalObj.baseTone = `${bassName} - ${octave}`
            intervalObj.answer = generateAnswer(intervalObj)
            return intervalObj
        }

        function testAction(ctx, intervalObj) {
            ctx.baseton = intervalObj.baseTone
            ctx.answer = intervalObj.answer
        }

        return {
            generateTestArr,
            // generateBaseIdx,
            generateBasePos,
            // reduseTime,
            getBaseTonId,
            _getRandomInt,
            intervals,
            generateAnswer,
            testAction
        }
    }

)()

export default muzWorker