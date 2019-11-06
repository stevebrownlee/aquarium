/**
 *   LocationListComponent which renders many location components
 */
import { useLocations } from "./LocationDataProvider.js"
import LocationComponent from "./Location.js"

const LocationListComponent = () => {

    const contentElement = document.querySelector(".content")
    const locations = useLocations()

    let locationHTMLRepresentations = ""
    for (const location of locations) {
        locationHTMLRepresentations += LocationComponent(location)
    }

    contentElement.innerHTML = `
        <section class="locations">
            <h1 class="locations__header">Martin's Travels</h1>
            <div class="locations__list">
                ${locationHTMLRepresentations}
            </div>
        </section>
    `
}

export default LocationListComponent