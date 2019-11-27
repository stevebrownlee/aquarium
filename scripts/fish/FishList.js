/**
 *   FishListComponent which renders individual fish objects as HTML
 */
import { useFish } from "./FishDataProvider.js"
import FishComponent from "./Fish.js"

const contentElement = document.querySelector(".content")

const FishListComponent = () => {
    const fishes = useFish()

    contentElement.innerHTML += `
        <section class="fishList">
            ${
                fishes.map(fish => {
                    const fishHTML = FishComponent(fish)
                    return fishHTML
                }).join("")
            }
        </section>
    `
}

export default FishListComponent