const showTimeDisplay = document.getElementById('showtime')
const availableTicketsDisplay = document.getElementById('available-tickets')
const buyTicketBtn = document.getElementById('buy-ticket')
const movieTitleDisplay = document.getElementById('name-of-movie')

window.addEventListener('DOMContentLoaded', ()=>{
    const fetchMovieList = fetch('/db.json')
    fetchMovieList.then(res => res.json()).then(data => {
        // making images


        // making the first image
        const firstImg = document.createElement('img')
        firstImg.src = data.films[0].poster

        firstImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[0].poster
            let remainingTicket = ((data.films[0].capacity) - (data.films[0].tickets_sold))
            // shows the runtime
            movieTitle.textContent = data.films[0].title
            document.getElementById('description').textContent = data.films[0].description
            document.getElementById('runtime').textContent = data.films[0].runtime
            // shows the showtime 
            document.getElementById('showtime').textContent = data.films[0].showtime

            // Shows the remaining tickets
            document.getElementById('available-tickets').textContent = remainingTicket

            // when the buyer purchases a ticket , it will deduct the Available Tickets and  show the remaining

            document.getElementById('buy-ticket').addEventListener('click', ()=>{
                document.getElementById('available-tickets').textContent = remainingTicket--
            })

        })
        const firsth5 = document.createElement('h5')
        firsth5.textContent = data.films[0].title
        
        document.getElementById('img1').appendChild(firstImg)
        document.getElementById('img1').appendChild(firsth5)
        


        // making the second image
        const secondImg = document.createElement('img')
        secondImg.src = data.films[1].poster

        secondImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[1].poster
            let remainingTicket = ((data.films[1].capacity) - (data.films[1].tickets_sold))
            // shows the  runtime
            movieTitle.textContent = data.films[1].title
            document.getElementById('description').textContent = data.films[1].description
            document.getElementById('runtime').textContent = data.films[1].runtime
            // shows the  showtime
            document.getElementById('showtime').textContent = data.films[1].showtime

            // shows the remaining tickets
            document.getElementById('available-tickets').textContent = remainingTicket

            // when the buyer purchases a ticket, it will deduct the Available Tickets and show the remaining

            document.getElementById('buy-ticket').addEventListener('click', ()=>{
                document.getElementById('available-tickets').textContent = remainingTicket--
            })

        })
        const secondh5 = document.createElement('h5')
        secondh5.textContent = data.films[1].title

        document.getElementById('img2').appendChild(secondImg)
        document.getElementById('img2').appendChild(secondh5)



        // making the third image
        const thirdImg = document.createElement('img')
        thirdImg.src = data.films[2].poster

        thirdImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[2].poster
            let remainingTicket = ((data.films[2].capacity) - (data.films[2].tickets_sold))
            // shows the runtime
            movieTitle.textContent = data.films[2].title
            document.getElementById('description').textContent = data.films[2].description
            document.getElementById('runtime').textContent = data.films[2].runtime
            // shows the showtime
            document.getElementById('showtime').textContent = data.films[2].showtime

            // shows the remaining tickets
            document.getElementById('available-tickets').textContent = remainingTicket

            // when buyer purchases, it will deduct the Available Tickets and show the remaining

            document.getElementById('buy-ticket').addEventListener('click', ()=>{
                document.getElementById('available-tickets').textContent = remainingTicket--
            })

        })
        const thirdh5 = document.createElement('h5')
        thirdh5.textContent = data.films[2].title

        document.getElementById('img2').appendChild(thirdImg)
        document.getElementById('img2').appendChild(thirdh5)



        // making the fourth image
        const fourthImg = document.createElement('img')
        fourthImg.src = data.films[3].poster

        fourthImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[3].poster
            let remainingTicket = ((data.films[3].capacity) - (data.films[3].tickets_sold))
            // shows the runtime
            movieTitle.textContent = data.films[3].title
            document.getElementById('description').textContent = data.films[3].description
            document.getElementById('runtime').textContent = data.films[3].runtime
            // shows the showtime
            document.getElementById('showtime').textContent = data.films[3].showtime

            // shows the remaining tickets
            document.getElementById('available-tickets').textContent = remainingTicket

            // when the buyer purchases a ticket, it will deduct the Available Tickets and then show the remaining

            document.getElementById('buy-ticket').addEventListener('click', ()=>{
                document.getElementById('available-tickets').textContent = remainingTicket--
            })

        })
        const fourthh5 = document.createElement('h5')
        fourthh5.textContent = data.films[3].title

        document.getElementById('img2').appendChild(fourthImg)
        document.getElementById('img2').appendChild(fourthh5)



        // making the fifth image
        const fifthImg = document.createElement('img')
        fifthImg.src = data.films[4].poster

        fifthImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[4].poster
            let remainingTicket = ((data.films[4].capacity) - (data.films[4].tickets_sold))
            // shows runtime
            movieTitle.textContent = data.films[4].title
            document.getElementById('description').textContent = data.films[4].description
            document.getElementById('runtime').textContent = data.films[4].runtime
            // shows showtime
            document.getElementById('showtime').textContent = data.films[4].showtime

            // shows the remaining tickets
            document.getElementById('available-tickets').textContent = remainingTicket

            // when the buyer purchases a ticket, it will deduct the Available Tickets and show the remaining

            document.getElementById('buy-ticket').addEventListener('click', ()=>{
                document.getElementById('available-tickets').textContent = remainingTicket--
            })

        })
        
        const fifthh5 = document.createElement('h5')
        fifthh5.textContent = data.films[4].title

        document.getElementById('img2').appendChild(fifthImg)
        document.getElementById('img2').appendChild(fifthh5)

        // making sixth image
        const sixthImg = document.createElement('img')
        sixthImg.src = data.films[5].poster

        sixthImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[5].poster
            let remainingTicket = ((data.films[5].capacity) - (data.films[5].tickets_sold))
            // shows runtime
            movieTitle.textContent = data.films[5].title
            document.getElementById('description').textContent = data.films[5].description
            document.getElementById('runtime').textContent = data.films[5].runtime
            // shows the showtime
            document.getElementById('showtime').textContent = data.films[5].showtime

            // shows the remaining tickets
            document.getElementById('available-tickets').textContent = remainingTicket

            // when the buyer purchases a ticket, it will deduct the Available Tickets and show the remaining

            document.getElementById('buy-ticket').addEventListener('click', ()=>{
                document.getElementById('available-tickets').textContent = remainingTicket--
            })

        })
        const sixthh5 = document.createElement('h5')
        sixthh5.textContent = data.films[5].title

        document.getElementById('img2').appendChild(sixthImg)
        document.getElementById('img2').appendChild(sixthh5)



        // making the seventh image
        const seventhImg = document.createElement('img')
        seventhImg.src = data.films[6].poster

        seventhImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[6].poster
            let remainingTicket = ((data.films[6].capacity) - (data.films[6].tickets_sold))
            // shows runtime
            movieTitle.textContent = data.films[6].title
            document.getElementById('description').textContent = data.films[6].description
            document.getElementById('runtime').textContent = data.films[6].runtime
            // shows the showtime
            document.getElementById('showtime').textContent = data.films[6].showtime

            //shows the remaining tickets
            document.getElementById('available-tickets').textContent = remainingTicket

            // when the buyer purchases a ticket, it will deduct the Available Tickets and show the remaining

            document.getElementById('buy-ticket').addEventListener('click', ()=>{
                document.getElementById('available-tickets').textContent = remainingTicket--
            })

        })
        const seventhh5 = document.createElement('h5')
        seventhh5.textContent = data.films[6].title

        document.getElementById('img2').appendChild(seventhImg)
        document.getElementById('img2').appendChild(seventhh5)



        // making eigth image
        const eigthImg = document.createElement('img')
        eigthImg.src = data.films[7].poster

        eigthImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[7].poster
            let remainingTicket = ((data.films[7].capacity) - (data.films[7].tickets_sold))
            // shows runtime
            movieTitle.textContent = data.films[7].title
            document.getElementById('description').textContent = data.films[7].description
            document.getElementById('runtime').textContent = data.films[7].runtime
            // shows showtime
            document.getElementById('showtime').textContent = data.films[7].showtime

            // shows the remaining tickets
            document.getElementById('available-tickets').textContent = remainingTicket

            // when the buyer purchases a ticket, it will deduct the Available Tickets and show the remaining

            document.getElementById('buy-ticket').addEventListener('click', ()=>{
                document.getElementById('available-tickets').textContent = remainingTicket--
            })

        })
        const eigthh5 = document.createElement('h5')
        eigthh5.textContent = data.films[7].title
        document.getElementById('img2').appendChild(eigthImg)
        document.getElementById('img2').appendChild(eigthh5)



        // making ninth image
        const ninthImg = document.createElement('img')
        ninthImg.src = data.films[8].poster

        ninthImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[8].poster
            let remainingTicket = ((data.films[8].capacity) - (data.films[8].tickets_sold))
            // shows the runtime
            movieTitle.textContent = data.films[8].title
            document.getElementById('description').textContent = data.films[8].description
            document.getElementById('runtime').textContent = data.films[8].runtime
            // shows showtime
            document.getElementById('showtime').textContent = data.films[8].showtime

            // shows the remaining tickets
            document.getElementById('available-tickets').textContent = remainingTicket

            // when the buyer purchases a ticket, it will deduct the Available Tickets and show the remaining

            document.getElementById('buy-ticket').addEventListener('click', ()=>{
                document.getElementById('available-tickets').textContent = remainingTicket--
            })

        })
        const ninthh5 = document.createElement('h5')
        ninthh5.textContent = data.films[8].title
        document.getElementById('img2').appendChild(ninthImg)
        document.getElementById('img2').appendChild(ninthh5)



        // creating tenth image
        const tenthImg = document.createElement('img')
        tenthImg.src = data.films[9].poster
c
        tenthImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[9].poster
            let remainingTicket = ((data.films[9].capacity) - (data.films[9].tickets_sold))
            // displays runtime
            movieTitle.textContent = data.films[9].title
            document.getElementById('description').textContent = data.films[9].description
            document.getElementById('runtime').textContent = data.films[9].runtime
            // displays showtime
            document.getElementById('showtime').textContent = data.films[9].showtime

            // Displays remaining tickets
            document.getElementById('available-tickets').textContent = remainingTicket

            // when the user buys a ticket, it will deduct the Available Tickets && show the remaining

            document.getElementById('buy-ticket').addEventListener('click', ()=>{
                document.getElementById('available-tickets').textContent = remainingTicket--
            })

        })
        const tenthh5 = document.createElement('h5')
        tenthh5.textContent = data.films[9].title
        document.getElementById('img2').appendChild(tenthImg)
        document.getElementById('img2').appendChild(tenthh5)



        // creating eleventh image
        const eleventhImg = document.createElement('img')
        eleventhImg.src = data.films[10].poster

        eleventhImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[10].poster
            let remainingTicket = ((data.films[10].capacity) - (data.films[10].tickets_sold))
            // displays runtime
            movieTitle.textContent = data.films[10].title
            document.getElementById('description').textContent = data.films[10].description
            document.getElementById('runtime').textContent = data.films[10].runtime
            // displays showtime
            document.getElementById('showtime').textContent = data.films[10].showtime

            // Displays remaining tickets
            document.getElementById('available-tickets').textContent = remainingTicket

            // when the user buys a ticket, it will deduct the Available Tickets && show the remaining

            document.getElementById('buy-ticket').addEventListener('click', ()=>{
                document.getElementById('available-tickets').textContent = remainingTicket--
            })

        })
        const eleventhh5 = document.createElement('h5')
        eleventhh5.textContent = data.films[10].title
        document.getElementById('img2').appendChild(eleventhImg)
        document.getElementById('img2').appendChild(eleventhh5)



        // creating twelve image
        const twelveImg = document.createElement('img')
        twelveImg.src = data.films[11].poster

        twelveImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[11].poster
            let remainingTicket = ((data.films[11].capacity) - (data.films[11].tickets_sold))
            // displays runtime
            movieTitle.textContent = data.films[11].title
            document.getElementById('description').textContent = data.films[11].description
            document.getElementById('runtime').textContent = data.films[11].runtime
            // displays showtime
            document.getElementById('showtime').textContent = data.films[11].showtime

            // Displays remaining tickets
            document.getElementById('available-tickets').textContent = remainingTicket

            // when the user buys a ticket, it will deduct the Available Tickets && show the remaining

            document.getElementById('buy-ticket').addEventListener('click', ()=>{
                document.getElementById('available-tickets').textContent = remainingTicket--
            })

        })
        const twelveh5 = document.createElement('h5')
        twelveh5.textContent = data.films[11].title
        document.getElementById('img2').appendChild(twelveImg)
        document.getElementById('img2').appendChild(twelveh5)

        // creating thirteen image
        const thirteenImg = document.createElement('img')
        thirteenImg.src = data.films[12].poster

        thirteenImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[12].poster
            let remainingTicket = ((data.films[12].capacity) - (data.films[12].tickets_sold))
            // displays runtime
            movieTitle.textContent = data.films[12].title
            document.getElementById('description').textContent = data.films[12].description
            document.getElementById('runtime').textContent = data.films[12].runtime
            // displays showtime
            document.getElementById('showtime').textContent = data.films[12].showtime

            // Displays remaining tickets
            document.getElementById('available-tickets').textContent = remainingTicket

            // when the user buys a ticket, it will deduct the Available Tickets && show the remaining

            document.getElementById('buy-ticket').addEventListener('click', ()=>{
                document.getElementById('available-tickets').textContent = remainingTicket--
            })

        })
        const thirteenh5 = document.createElement('h5')
        thirteenh5.textContent = data.films[12].title
        document.getElementById('img2').appendChild(thirteenImg)
        document.getElementById('img2').appendChild(thirteenh5)



        // creating fourteen image
        const fourteenImg = document.createElement('img')
        fourteenImg.src = data.films[13].poster

        fourteenImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[13].poster
            let remainingTicket = ((data.films[13].capacity) - (data.films[13].tickets_sold))
            // displays runtime
            movieTitle.textContent = data.films[13].title
            document.getElementById('description').textContent = data.films[13].description
            document.getElementById('runtime').textContent = data.films[13].runtime
            // displays showtime
            document.getElementById('showtime').textContent = data.films[13].showtime

            // Displays remaining tickets
            document.getElementById('available-tickets').textContent = remainingTicket

            // when the user buys a ticket, it will deduct the Available Tickets && show the remaining

            document.getElementById('buy-ticket').addEventListener('click', ()=>{
                document.getElementById('available-tickets').textContent = remainingTicket--
            })

        })
        const fourteenh5 = document.createElement('h5')
        fourteenh5.textContent = data.films[13].title
        document.getElementById('img2').appendChild(fourteenImg)
        document.getElementById('img2').appendChild(fourteenh5)



        // creating fifteen image
        const fifteenImg = document.createElement('img')
        fifteenImg.src = data.films[14].poster

        fifteenImg.addEventListener('click', ()=> {
            document.getElementById('image').src = data.films[14].poster
            let remainingTicket = ((data.films[14].capacity) - (data.films[14].tickets_sold))
            // displays runtime
            movieTitle.textContent = data.films[14].title
            document.getElementById('description').textContent = data.films[14].description
            document.getElementById('runtime').textContent = data.films[14].runtime
            // displays showtime
            document.getElementById('showtime').textContent = data.films[14].showtime

            // Displays remaining tickets
            document.getElementById('available-tickets').textContent = remainingTicket

            // when the user buys a ticket, it will deduct the Available Tickets && show the remaining

            document.getElementById('buy-ticket').addEventListener('click', ()=>{
                document.getElementById('available-tickets').textContent = remainingTicket--
            })

        })
        const fifteenh5 = document.createElement('h5')
        fifteenh5.textContent = data.films[14].title
        document.getElementById('img2').appendChild(fifteenImg)
        document.getElementById('img2').appendChild(fifteenh5)
    })
})