/**
 *  TipComponent which renders individual tip objects as HTML
 */
const TipComponent = (tip) => {
    return `
        <section class="tip">
            <header class="tip__title">
                <h4>${tip.title}</h4>
            </header>
            <div class="tip_details">${tip.details}</div>
            <div class="tip__category">Category: ${tip.category}</div>
        </section>
    `
}

export default TipComponent