const allDialogs = document.querySelectorAll(".dialog--fish")
const allCloseButtons = document.querySelectorAll(".button--close")

for (const btn of allCloseButtons) {
    btn.addEventListener(
        "click",
        theEvent => {
            for (const dialog of allDialogs) {
                dialog.close()
            }
        }
    )
}

const initializeDetailButtonEvents = () => {
    document.querySelector("#button--sam").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--sam")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--mike").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--mike")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--noodle").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--noodle")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--erroll").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--erroll")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--bart").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bart")
            theDialog.showModal()
        }
    )
}

export default initializeDetailButtonEvents