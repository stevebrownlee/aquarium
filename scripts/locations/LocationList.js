/**
 *   LocationListComponent which renders many location components
 */
import { useLocations } from "./LocationDataProvider.js"
import LocationComponent from "./Location.js"

const contentElement = document.querySelector(".content")

const LocationListComponent = () => {
    const locations = useLocations()

    contentElement.innerHTML = `
        <section class="locations">
            <h1 class="locations__header">Martin's Travels</h1>
            <div class="locations__list">
                ${locations.map(loc => LocationComponent(loc)).join("")}
            </div>
        </section>
    `
}

export default LocationListComponent
