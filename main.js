setInterval(() => {
    

    let hours = moment().format('hh')

    document.querySelector('#hours').innerHTML = hours
    
    let minutes = moment().format('mm')
    
    document.querySelector('#minutes').innerHTML = minutes
    
    let seconds = moment().format('ss')
    
    document.querySelector('#seconds').innerHTML = seconds
    
    let ampm = moment().format('A')
    
    document.querySelector('#ampm').innerHTML = ampm


}, 1000);