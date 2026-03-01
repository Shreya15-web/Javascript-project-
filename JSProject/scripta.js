function createCard(serial, titleName, channelName, views, monthsOld, timeStamp, thumbnailLink) {
    let card = document.createElement("div") //was using query selector and insertadjacentelement to directly add element to container but it resulted in chaos
    card.className = "card"

    let serialNo = document.createElement("div")
    serialNo.className = "serialno"
    serialNo.innerText = serial

    let thumbnail = document.createElement("div")
    thumbnail.className = "thumbnail"

    let duration = document.createElement("div")
    duration.className = "duration"
    duration.style.backgroundImage = `url('${thumbnailLink}')`

    let time = document.createElement("div")
    time.className = "timestamp"
    time.innerText = timeStamp

    thumbnail.append(duration)
    thumbnail.append(time)

    let desc = document.createElement("div")
    desc.className = "desc"

    let titleEl = document.createElement("div")
    titleEl.className = "titleinfo"
    titleEl.innerText = `${titleName} | Ashish Chanchlani | ACV Studios`

    const formatter = new Intl.NumberFormat('en', {  // used a built-in function after searching and studying its properties
        notation: 'compact',
        compactDisplay: 'short'
    })
    let formattedViews = formatter.format(views)

    let channelEl = document.createElement("div")
    channelEl.className = "channelinfo"
    channelEl.innerText = `${channelName} · ${formattedViews} views · ${monthsOld}`

    desc.append(titleEl)
    desc.append(channelEl)

    card.append(serialNo)  // used append instead of insertadjacentelement or appendchild 
    card.append(thumbnail)
    card.append(desc)

    document.querySelector(".card-container").append(card)
}

createCard(1, "Ekaki Chapter 1: Presence", "Ashish Chanchlani Vines", 41000000, "2 months ago", "36:37", "chapter1.jpg");
createCard(2, "Ekaki Chapter 2: Arrival", "Ashish Chanchlani Vines", 29000000, "2 months ago", "44:37", "chapter2.jpg");
createCard(3, "Ekaki Chapter 3: Invasion", "Ashish Chanchlani Vines", 21000000, "2 months ago", "30:42", "chapter3.jpg");
createCard(4, "Ekaki Chapter 4: Skyfall", "Ashish Chanchlani Vines", 22000000, "1 month ago", "37:19", "chapter4.jpg");
createCard(5, "Ekaki Chapter 5: The Conqueror", "Ashish Chanchlani Vines", 34000000, "1 month ago", "45:53", "final.jpg");
