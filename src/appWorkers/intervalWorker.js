// keyboard
const muzWorker = (() => {
  // const keyboard = $.get("views/cdr-view/keyboard3.svg")
  const keyboardPositions = 34
  const scale = {
    keys: {
      0: ['C', 'His', 'Deses'],
      1: ['Cis', 'Des'],
      2: ['D', 'Cisis', 'Eses'],
      3: ['Dis', 'Es'],
      4: ['E', 'Fes', 'Disis'],
      5: ['F', 'Eis', 'Geses'],
      6: ['Fis', 'Ges'],
      7: ['G', 'Fisis', 'Ases'],
      8: ['Gis', 'As'],
      9: ['A', 'Heses', 'Gisis'],
      10: ['Ais', 'B', 'Hes'],
      11: ['H', 'Ces', 'Aisis']
    },
    octaves: ['LITTLE', '1', '2', '3'],
    tones: ['C', 'D', 'E', 'F', 'G', 'A', 'H']
  }
  
  let baseTonsArr = []
  for (const octave of scale.octaves) {
    let pianoKeys = [
      'C',
      ['Cis', 'Des'],
      'D',
      ['Dis', 'Es'],
      'E',
      'F',
      ['Fis', 'Ges'],
      'G',
      ['Gis', 'As'],
      'A',
      ['Ais', 'B'],
      'H'
    ]
    
    for (let i = 0; i < pianoKeys.length; i++) {
      let baseToneName = ''
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
        en: 'perfect-unison'
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
    }
  }
  
  function findByName (obj, propString) {
    let result = []
    for (let p in obj) {
      if (obj[p] === propString) {
        result = [p, obj[p]]
        return result
      } else {
        if (Array.isArray(obj[p]) && obj[p].includes(propString)) {
          result = [p, obj[p]]
          return result
        }
        if (typeof (obj[p]) === 'object') {
          result = findByName(obj[p], propString)
        }
      }
    }
    return result
  }
  
  function generateAnswer (intervalObj) {
    let toneStr = intervalObj.baseTone
    let [toneName, octave] = toneStr.split(' - ')
    let toneLetter = toneName.slice(0, 1)
    
    let scalePositions = Object.values(scale.keys)
    let basePosition = scalePositions.findIndex(el => el.includes(toneName))
    let semitones = Number(intervalObj.semitones)
    let ansKeyIdx = 0
    let answerLetterIdx = 0
    let octaveIdx = scale.octaves.findIndex(e => e === octave)
    let baseSum
    if (intervalObj.direction === 'down') {
      answerLetterIdx =
        scale.tones.findIndex(e => e === toneLetter) - Number(intervalObj.idx)
      if (answerLetterIdx < 0) {
        answerLetterIdx = answerLetterIdx + 7
      }
      
      baseSum = basePosition - semitones
      baseSum < 0 ? (ansKeyIdx = baseSum + 12) : (ansKeyIdx = baseSum)
    } else {
      answerLetterIdx =
        (scale.tones.findIndex(e => e === toneLetter) +
          Number(intervalObj.idx)) %
        7
      baseSum = basePosition + semitones
      ansKeyIdx = baseSum % 12
    }
    
    let answerLetter = scale.tones[answerLetterIdx]
    let resultTone = scalePositions[ansKeyIdx].find(el =>
      el.startsWith(answerLetter)
    )
    if (baseSum < 0 || baseSum > 11) {
      baseSum < 0 ? (octaveIdx -= 1) : (octaveIdx += 1)
    }
    octave = scale.octaves[octaveIdx]
    if (resultTone === 'Hes') {
      resultTone = 'B'
    }
    // let resultString =
    return resultTone + ' - ' + octave
    // return resultString
  }
  
  function _getRandomInt (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min // The maximum is exclusive and the minimum is inclusive
  }
  
  function generateBasePos (intervalObj) {
    let semitones = Number(intervalObj.semitones)
    let direction = intervalObj.direction
    let baseTonIndex = 0
    if (direction === 'up') {
      baseTonIndex = _getRandomInt(0, keyboardPositions - semitones + 1)
    } else {
      baseTonIndex = _getRandomInt(semitones, keyboardPositions + 1)
    }
    return baseTonIndex
  }
  
  function generateTestArr (inputIntervalsArr, testCount) {
    let targetIntervals = inputIntervalsArr
    console.log(targetIntervals)
    let testArr = []
    let tested = []
    let currentInterval = 'hack'
    let directions = ['down', 'up']
    let intervalsKeys = Object.values(muzWorker.intervals)
    targetIntervals = targetIntervals.map(element => intervalsKeys.
    find(e => e.name.bg === element))
    for (let i = 0; i < testCount; i++) {
      let idx = _getRandomInt(0, targetIntervals.length)
      console.log(targetIntervals)
      currentInterval = targetIntervals.splice(idx, 1)[0]
      console.log(currentInterval)
      currentInterval.direction = directions[ _getRandomInt(0, 2) ]
      tested.push(currentInterval)
      currentInterval.baseToneIdx = generateBasePos(currentInterval)
      testArr.push({...currentInterval})
      if (targetIntervals.length === 0) {
        targetIntervals = tested
        tested = []
      }
    }
    
    testArr = testArr.map(el => generateTones(el))
    // console.log(testArr)
    return testArr
  }
  
  function generateTones (intervalObj) {
    // console.log(baseTonsArr)
    let baseTonName = baseTonsArr[intervalObj.baseToneIdx]
    let bassName = baseTonName[0]
    if (Array.isArray(bassName)) {
      bassName = bassName[_getRandomInt(0, 2)]
    }
    baseTonName[0] = bassName
    intervalObj.baseTone = baseTonName.join(' - ')
    intervalObj.answer = generateAnswer(intervalObj)
    return intervalObj
  }
  
  return {
    generateTestArr,
    generateTones,
    baseTonsArr,
    findByName,
    generateAnswer,
    intervals,
    _getRandomInt
    // testAction
  }
})()


//inline tests

// let intervalForTest = {
//   baseTone: 'G - 1',
//   direction: 'down',
//   idx: 6,
//   baseToneIdx: 12,
//   semitones: 10
// }
// let answer = muzWorker.generateAnswer(intervalForTest)
// console.log(answer)
// let testArr = muzWorker
//   .generateTestArr(['малка секста'], 50)
//   .map(el => [el.name.bg, el.baseTone, el.direction])
// console.log(testArr)

// let mistakeArea = []
// for (const answerObj of testArr) {
//   if (answerObj.answer.includes('undef')) {
//     mistakeArea.push(answerObj)
//
//   }
// }
// console.warn(mistakeArea.length)
// let firstMistake = mistakeArea[0]
// let tessst = muzWorker.generateAnswer(firstMistake)
// console.log(tessst)
// console.log(testArr)

export default muzWorker
