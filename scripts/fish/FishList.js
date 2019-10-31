/**
 *   FishListComponent which renders individual fish objects as HTML
 */
import { useFish } from "./FishDataProvider.js"
import FishComponent from "./Fish.js"

const FishListComponent = () => {

    const contentElement = document.querySelector(".content")
    const fishes = useFish()

    let fishHTMLRepresentations = ""
    for (const fish of fishes) {
        fishHTMLRepresentations += FishComponent(fish)
    }

    contentElement.innerHTML += `
        <section class="fishList">
            ${fishHTMLRepresentations}
        </section>
    `
}

export default FishListComponent