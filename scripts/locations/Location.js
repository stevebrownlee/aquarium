/**
 *  LocationComponent which renders individual location objects as HTML
 */
const LocationComponent = (location) => {

    return `
        <div class="location">
            <header class="location__header">
                <img class="location__image" src="${location.image}" />
                <h2>${location.name}</h2>
                <h4>${location.country}</h4>
            </header>
            ${
                location.tips.map(tip => {
                    return `<div class="location__tip">${tip}</div><hr/>`
                }).join("")
            }
        </div>
    `
}

export default LocationComponent