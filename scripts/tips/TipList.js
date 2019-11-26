/**
 *   TipListComponent which renders many tip components
 */
import { useTips } from "./TipDataProvider.js"
import TipComponent from "./Tip.js"

const contentElement = document.querySelector(".content")

const TipListComponent = () => {
    const tips = useTips()

    contentElement.innerHTML += `
        <aside class="tipList">
            <h2 class="tipList__header">Martin's Tips</h2>
            ${tips.map(tip => TipComponent(tip)).join("")}
        </aside>
    `
}

export default TipListComponent
