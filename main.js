
let entryErrorText = null
let deckSubmissionField = null
let metaScoreText = null
let metaSummaryBox = null
let metaRatingText = null
let metaCardContainer = null
let metaBreakdown = null
let totalCardCountText = null
let matchingCardCountText = null
let matchingCardPercentageText = null

function loadPage() {
    //Load all html elements that we plan on pulling from/pushing to
    entryErrorText = document.getElementById('entryErrorText')
    deckSubmissionField = document.getElementById('deckSubmissionField')
    metaScoreText = document.getElementById('metaScoreText')
    metaSummaryBox = document.getElementById('metaSummaryBox')
    metaRatingText = document.getElementById('metaRatingText')
    metaCardContainer = document.getElementById('metaCardContainer')
    metaBreakdown = document.getElementById('metaBreakdown')
    totalCardCountText = document.getElementById('totalCardCountText')
    matchingCardCountText = document.getElementById('matchingCardCountText')
    matchingCardPercentageText = document.getElementById('matchingCardPercentageText')
}

function getInputtedDeckList() {
    //Show an error if we cannot grab the decklist
    if (!deckSubmissionField) {
        throw Error('Something is wrong, we cannot get your inputted deck') 
    }
    //Get the value of the deck input textarea.
    var inputtedList = deckSubmissionField.value;
    if(inputtedList === '') {
        //If the box is empty, throw an error to display
        throw Error('You did not enter anything, please enter a decklist in the above box') 
    }
    //Split the array by newlines to get the unique cards in an array and return it
    return inputtedList.trim().split("\n")
}

function getAllCardsInInputtedList(inputtedDeckList) {
    const cardTestRegex = /^\d+(?:x)?\s+.*$/
    const cardCaptureRegex = /^(\d+)(x)?\s+(.*)$/
    let cardsInDeck = []
    let badInputs = []
    //Run every input through a regex pattern to see if the user inputted the card in the correct format
    inputtedDeckList.forEach(card => {
        if (cardTestRegex.test(card)) {
            //If the card is in the correct format, use regex to seperate the number and the card name and then return a json with both
            let matches = card.match(cardCaptureRegex)
            if (matches.length > 3) {
                cardsInDeck.push({
                    'amount': Number(matches[1]),
                    'name': matches[3]
                })
            }
    //If something goes wrong with either of the regex processes, add the card to a list of bad inputs
            else {
                badInputs.push(card)
            }
        } else {
            const lowerCaseInput = card.toLowerCase()
            if (card != '') {
                //Ignore the regex if the line includes the word side and board to make the pasting process easier
                if (!(lowerCaseInput.includes('side') && lowerCaseInput.includes('board'))) {
                    badInputs.push(card)
                }
            }

        }
    });
    //If there are any bad inputs, don't process the deck and output an error telling the user what cards cannot be parsed
    if (badInputs.length > 0) {
        throw Error('The following entries cannot be parsed (They may be in the wrong format):-\n'+badInputs.join('\n'))
    }
    return cardsInDeck
}

function getMetaRating(metaScore) {
    //Get the passed metaScore and return the associated title
    if (metaScore == 0) {
        return 'Certified Spike'
    } else if (metaScore < 1) {
        return 'Hotswapper'
    } else if (metaScore < 2) {
        return 'The "Innovator"'
    } else if (metaScore < 3) {
        return 'Day 2 Demon'
    } else if (metaScore < 4) {
        return '"Quirky" Deckbuilder'
    } else if (metaScore < 5) {
        return 'Downplayer'
    } else if (metaScore < 6) {
        return 'Fence-sitter'
    } else if (metaScore < 7) {
        return 'Self-sabotager'
    } else if (metaScore < 8) {
        return 'Scryfall Scrounger'
    } else if (metaScore < 9) {
        return 'Capsaicin Connoisseur'
    } else if (metaScore < 10) {
        return 'Topdecker'
    } else if (metaScore == 10) {
        return 'Living Milkshake'
    }
}

function displayMetaDetails(metaScore, matchingCards) {
    //Now that we have all the data, display the result to the user
    if (metaScoreText || metaBreakdown || metaSummaryBox || metaCardContainer) {
        metaSummaryBox.classList.remove("invisible")
        if (metaScoreText) {
            //Display the meta score
            metaScoreText.innerText = metaScore
        }
        if (metaRatingText) {
            //Display their player title
            metaRatingText.innerText = getMetaRating(metaScore)
        }
        if (metaCardContainer) {
            //Clear existing metaCard text
            metaCardContainer.innerText = ''
                if (metaBreakdown) {
                if (matchingCards.length > 0) {
                    metaBreakdown.classList.remove("invisible")
                    //Iterate through each card
                    matchingCards.forEach(card => {
                        //Create a list item:
                        const node = document.createElement("li");
                        //Append the text onto it:
                        const textnode = document.createTextNode(`(${card.amount}x) ${card.name}: ${(card.score*card.amount).toFixed(2)} (${card.score} per copy)`);
                        node.appendChild(textnode);
                        //Add the item to the list
                        metaCardContainer.appendChild(node);
                    });
                } else {
                    //Hide the card because we can't see the data
                    metaBreakdown.classList.add("invisible")
                }
            }

        }

    } else {
        throw Error('Something is wrong, we cannot display your result')
    }
}

function displayStats(metaScore, matchingCards, cardsInDeck) {
    //Now that we have all the data, display the result to the user
    if (totalCardCountText || matchingCardCountText || matchingCardPercentageText) {
        const cardsInDeckCount = cardsInDeck.reduce(((sum, item) => sum + item.amount), 0)
        const metaCardsInDeckCount = matchingCards.reduce(((sum, item) => sum + item.amount), 0)
        if (totalCardCountText) {
            //Display the total amount of cards in the deck
            totalCardCountText.innerText = `Total cards: ${cardsInDeckCount}`
        }
        if (matchingCardCountText) {
            //Display the total amount of meta cards in the deck
            matchingCardCountText.innerText = `Meta cards: ${metaCardsInDeckCount}`
        }
        if (matchingCardPercentageText) {
            //Display the percentage of meta cards in the deck
            matchingCardPercentageText.innerText = `Percentage of Meta cards in deck: ${Math.round((metaCardsInDeckCount/cardsInDeckCount)*100)}%`
        }
    } else {
        throw Error('Something is wrong, we cannot display your result')
    }
}

function calculateMetaScore(cardsInDeck) {
    let metaScore = 10
    let matchingCards = []
    cardsInDeck.forEach(card => {
        //Try and find the inputted card in the pauper dataset
        let matchingEntry = pauperDataset.find(pauperDatasetCard => pauperDatasetCard.name.toLowerCase() === card.name.toLowerCase())
        //If there is a matching entry, remove its score from the total meta score for the deck
        if (matchingEntry) {
            metaScore = metaScore - (matchingEntry.score * card.amount)
            matchingCards.push({...matchingEntry, ...{'amount': Number(card.amount)}})
        }
    })
    //Round the metascore to the second decimal place
    metaScore = metaScore.toFixed(2)
    try {
        displayMetaDetails(metaScore, matchingCards)
        displayStats(metaScore, matchingCards, cardsInDeck)
    } catch (e) {
        throw e
    }
}

function analyseDecklist() {
    try {
    calculateMetaScore(getAllCardsInInputtedList(getInputtedDeckList()))
    //Hide the error text if the process was a success
    if (entryErrorText) {
        entryErrorText.classList.add("invisible")
    }

    } catch (e) {
        handleError(e)
    }
}

function handleError(error) {
    //Display error text if there is an error
    metaSummaryBox.classList.add("invisible")
    if (entryErrorText) {
        entryErrorText.classList.remove("invisible")
        entryErrorText.innerText = error.message
    }
}