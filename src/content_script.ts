import axios from 'axios'

const base = `http://localhost:8000/`

window.addEventListener('keydown', ev => {
    if(ev.shiftKey && ev.key === 'D') {
        const imageURL = (document.querySelector('#container .big_pin_box .image_frame img') as HTMLImageElement).src
        const referer = window.location.href
        axios
            .post<string>(`${base}download`, {
                url: imageURL, 
                headers: {
                    'Accept': 'image/jpg',
                    'Host': 'cdn.sex.com',
                    'Referer': referer
                }
            })
            .then(response => {
                console.log('Succeeded')
                console.log(response.data)
            })
            .catch(err => {
                console.log(err)
            })
        
    }
})