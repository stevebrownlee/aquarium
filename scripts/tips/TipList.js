/**
 *   TipListComponent which renders many tip components
 */
import { useTips } from "./TipDataProvider.js"
import TipComponent from "./Tip.js"

const TipListComponent = () => {

    const contentElement = document.querySelector(".content")
    const tips = useTips()

    let tipHTMLRepresentations = ""
    for (const tip of tips) {
        tipHTMLRepresentations += TipComponent(tip)
    }

    contentElement.innerHTML += `
        <aside class="tipList">
            <h2 class="tipList__header">Martin's Tips</h2>
            ${tipHTMLRepresentations}
        </aside>
    `
}

export default TipListComponent