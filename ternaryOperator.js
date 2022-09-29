// Better conditionals...

/* Traditional way */

const theme = {
    color: "Light",
}

let setColorTheme
if (theme.color) {
    setColorTheme = theme.color
} else {
    setColorTheme = "Dark"
}

console.log(setColorTheme)

/* Gansters way */

const themeGanster = {
    color: "Light",
}

let setColorThemeGanster = themeGanster.color ? themeGanster.color : "Dark"

console.log(setColorThemeGanster)

// In REACT!

function tasksList ({ tasks }) {
    return (
        <React.Fragment>
            {tasks.length ? (
                <ul>
                    {tasks.map("Do some operatioons...")}
                </ul>
            ) : (
                <div>Please do the tasks!</div>
            )}
        </React.Fragment>>
    )
}
